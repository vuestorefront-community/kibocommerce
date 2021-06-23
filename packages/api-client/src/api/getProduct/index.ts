import { CustomQuery, ProductsSearchParams, Context } from '@vue-storefront/core';
import { KiboApolloClient } from 'kibo.apollo.typescript.client/';
import getProductsQuery from './getProductsQuery';
import getProductQuery from './getProductQuery';
import configureProductQuery from './configureProductQuery';
import gql from 'graphql-tag';
import { ConfiguredProduct, Product } from '../../types/GraphQL';

const copyProps = (source: any, target: any): void => {
  for (const p in source) {
    if (Object.prototype.hasOwnProperty.call(source, p) && !Object.prototype.hasOwnProperty.call(target, p)) {
      target[p] = source[p];
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context: Context, params: ProductsSearchParams, customQuery?: CustomQuery): Promise<any> {
  try {
    const client = context.client as KiboApolloClient;
    let extendable = {};
    let key = '';
    if (typeof params.catId !== 'undefined') {
      key = 'products';
      extendable = {
        products: {
          variables: {
            filter: `${(params.catId[0]) !== null ? 'categoryId req ' + params.catId[0] + ' and ' : ''}productCode ne '${params.id}'`,
            pageSize: params.limit
          },
          query: getProductsQuery
        }
      };
    } else if (typeof params.id !== 'undefined') {
      key = 'product';
      extendable = {
        product: {
          variables: {
            productCode: params.id
          },
          query: getProductQuery
        }
      };
    } else {
      console.log(params);
    }
    const newQueryObj = context.extendQuery(
      customQuery, extendable
    )[key];

    try {
      const request = await client.query({
        query: gql`${newQueryObj.query}`,
        variables: newQueryObj.variables,
        fetchPolicy: 'no-cache'
      });

      const productsList = key === 'products' ? request.data.products.items : [request.data.product];

      if (key === 'product' && Object.keys(params.attributes).length > 0) {
        const attributes = Object.keys(params.attributes).map(a => ({
          attributeFQN: `tenant~${a}`,
          value: params.attributes[a]
        }));
        const configuredProduct = await configureProduct(client, params.id, attributes);
        productsList[0] = mergeProducts(productsList[0], configuredProduct);
      }

      return productsList;
    } catch (error) {
      throw error.graphQLErrors?.[0] || error.networkError?.result || error;
    }
  } catch (ex) {
    return ex;
  }
}

function mergeProducts(product: Product, configuredProduct: ConfiguredProduct): Product {
  // Merge properties from existing options into returned options before merging objects
  // have to do it this way because it's an array of objects, not string keyed
  // for each of the options returned from the configure call
  configuredProduct.options.forEach(opt => {
    // find an associated record in the record returned from getProduct
    const existingOpt = product.options.find(o => o.attributeFQN === opt.attributeFQN);
    // if we found it
    if (!existingOpt) return;
    // copy over any properties from the full product option that don't exist on the configured
    copyProps(existingOpt, opt);
    // loop through the values in the configured option
    opt.values.forEach(configuredOptionValue => {
      // find the associated value from the full product
      const existingOptionValue = existingOpt.values.find(v => configuredOptionValue.value === v.value);
      if (!existingOptionValue) return;
      // copy over any properties from the full product option value that don't exist on the configured
      copyProps(existingOptionValue, configuredOptionValue);
    });
  });
  // replace our return product with a copy using replacements that were returned from the configureProduct call
  // productImages comes in as a top-level node from configure, but is returned under content from all other calls,
  // so we need to transpose it to the proper location, then delete it from the final returned object
  const returnedProduct = {
    ...product,
    ...configuredProduct,
    content: {
      ...product.content,
      productImages: configuredProduct.productImages
    }
  };
  delete (returnedProduct as any).productImages;
  return returnedProduct as Product;
}

async function configureProduct(client: KiboApolloClient, productCode: string, attributes: { attributeFQN: string; value: string; }[]): Promise<any> {
  try {
    const gqlMutation = {
      variables: {
        productCode: productCode,
        selectedOptions: {
          options: attributes
        },
        includeOptionDetails: true
      },
      mutation: configureProductQuery
    };

    try {
      const request = await client.mutate({
        mutation: gql`${gqlMutation.mutation}`,
        variables: gqlMutation.variables,
        fetchPolicy: 'no-cache'
      });
      return request.data.configureProduct;
    } catch (error) {
      throw error.graphQLErrors?.[0] || error.networkError?.result || error;
    }
  } catch (ex) {
    return ex;
  }
}
