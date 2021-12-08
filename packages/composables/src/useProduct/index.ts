import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import {
  ConfiguredProduct,
  ConfigureProductParams,
  GetProductParams,
  GetRelatedProductsParams,
  Product,
  ProductSearchParams,
  ProductSearchResult
} from '@vue-storefront/kibocommerce-api';

import { CopyPropsSourceParams, CopyPropsTargetParams } from '../types';

const copyProps = (
  source: CopyPropsSourceParams,
  target: CopyPropsTargetParams
): void => {
  for (const p in source) {
    if (
      Object.prototype.hasOwnProperty.call(source, p) &&
      !Object.prototype.hasOwnProperty.call(target, p)
    ) {
      target[p] = source[p];
    }
  }
};

function mergeProducts(
  product: Product,
  configuredProduct: ConfiguredProduct
): Product {
  // Merge properties from existing options into returned options before merging objects
  // have to do it this way because it's an array of objects, not string keyed
  // for each of the options returned from the configure call
  configuredProduct.options?.forEach((opt) => {
    // find an associated record in the record returned from getProduct
    const existingOpt = product.options.find(
      (o) => o.attributeFQN === opt.attributeFQN
    );
    // if we found it
    if (!existingOpt) return;

    // copy over any properties from the full product option that don't exist on the configured
    copyProps(existingOpt, opt);
    // loop through the values in the configured option
    opt.values?.forEach((configuredOptionValue) => {
      // find the associated value from the full product
      const existingOptionValue = existingOpt.values.find(
        (v) => configuredOptionValue.value === v.value
      );
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
  delete (returnedProduct as ConfiguredProduct).productImages;
  return returnedProduct as Product;
}

const isGetRelatedProductsParams = (
  params: any
): params is GetRelatedProductsParams =>
  (params as GetRelatedProductsParams).catId !== undefined;
const isGetProductParams = (params: any): params is GetProductParams =>
  (params as GetProductParams).id !== undefined;
const isConfigureProductParams = (
  params: any
): params is ConfigureProductParams =>
  (params as ConfigureProductParams).attributes !== undefined;

const params: UseProductFactoryParams<
  Product | Product[] | ProductSearchResult,
  any
> = {
  productsSearch: async (
    context: Context,
    params:
      | GetProductParams
      | GetRelatedProductsParams
      | ProductSearchParams
      | ConfigureProductParams
  ): Promise<Product | Product[] | ProductSearchResult> => {
    const { customQuery, ...searchParams } = params;

    if (isGetRelatedProductsParams(params))
      return (
        (
          await context.$kibo.api.getRelatedProducts(
            searchParams as GetRelatedProductsParams
          )
        ).data?.products?.items || []
      );

    if (isConfigureProductParams(params)) {
      const product =
        (
          await context.$kibo.api.getProduct(
            searchParams as GetProductParams,
            customQuery
          )
        ).data?.product || ({} as any);
      const configuredProduct =
        (
          await context.$kibo.api.configureProduct({
            product,
            attributes: (params as any).attributes
          })
        ).data?.configureProduct || ({} as any);
      return mergeProducts(product, configuredProduct);
    }

    if (isGetProductParams(params))
      return (
        (
          await context.$kibo.api.getProduct(
            searchParams as GetProductParams,
            customQuery
          )
        ).data?.product || ({} as any)
      );

    return (
      (
        await context.$kibo.api.searchProducts(
          searchParams as ProductSearchParams
        )
      ).data?.products || ({} as any)
    );
  }
};

export const useProduct = useProductFactory<
  Product | Product[] | ProductSearchResult,
  any
>(params);
