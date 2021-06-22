import { CustomQuery, ProductsSearchParams, Context } from '@vue-storefront/core';
import { KiboApolloClient } from 'kibo.apollo.typescript.client/';
import getProductsQuery from './getProducts';
import getProductQuery from './getProduct';
import gql from 'graphql-tag';

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

      const ret = key === 'products' ? request.data.products.items : [request.data.product];

      if (key === 'product' && Object.keys(params.attributes).length > 0) {
        const attributes = Object.keys(params.attributes).map(a => ({
          attributeFQN: `tenant~${a}`,
          value: params.attributes[a]
        }));
        const cv = await configureProduct(client, params.id, attributes);
        // Merge properties from existing options into returned options before merging objects
        // have to do it this way because it's an array of objects, not string keyed
        // for each of the options returned from the configure call
        cv.options.forEach(opt => {
          // find an associated record in the record returned from getProduct
          const existing = ret[0].options.find(o => o.attributeFQN === ret[0].options[i].attributeFQN);
          // if we found it
          if (!existing) return;
          // copy over any properties from the full product option that don't exist on the configured
          copyProps(existing, opt);
          // loop through the values in the configured option
          opt.values.forEach(cvv => {
            // find the associated value from the full product
            const ev = existing.values.find(v => cvv.value === v.value);
            if (!ev) return;
            // copy over any properties from the full product option value that don't exist on the configured
            copyProps(ev, cvv);
          });
        });
        // replace our return product with a copy using replacements that were returned from the configureProduct call
        // productImages comes in as a top-level node from configure, but is returned under content from all other calls,
        // so we need to transpose it to the proper location, then delete it from the final returned object
        ret[0] = {
          ...ret[0],
          ...cv,
          content: {
            ...ret[0].content,
            productImages: cv.productImages
          }
        };
        delete ret[0].productImages;
      }

      return ret;
    } catch (error) {
      throw error.graphQLErrors?.[0] || error.networkError?.result || error;
    }
  } catch (ex) {
    return ex;
  }
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
