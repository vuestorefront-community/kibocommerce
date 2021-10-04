import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';

import type { Product } from '@vue-storefront/kibocommerce-api';

import { buildBreadcrumbs } from '../helpers/buildBreadcrumbs';

type ProductFilters = any

// TODO: Add interfaces for some of the methods in core
// Product

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductName = (product: Product): string => product?.content?.productName || '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductSlug = (product: Product): string => product?.content?.seoFriendlyUrl || '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductPrice = (product: Product): AgnosticPrice => {
  return {
    regular: product?.price?.price || 0,
    special: product?.price?.salePrice || 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductGallery = (product: Product): AgnosticMediaGalleryItem[] => {
  return product?.content?.productImages.map(pi => ({
    small: pi.imageUrl,
    normal: pi.imageUrl,
    big: pi.imageUrl
  })) || [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductCoverImage = (product: Product): string => product?.content?.productImages?.[0]?.imageUrl || '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductFiltered = (products: Product[], filters: ProductFilters | any = {}): Product[] => {

  if (!products) return [];
  return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: Product[] | Product): Record<string, AgnosticAttribute | string> => {
  try {
    const isSingleProduct = !Array.isArray(products);
    const productList = (isSingleProduct ? [products] : products) as Product[];

    if (!products || productList.length === 0) {
      return {} as any;
    }

    const formatAttributes = (product: Product): AgnosticAttribute[] => {
      const attributes = [];
      product.properties.filter(p => p.isHidden !== true).forEach(p => {
        attributes.push(...p.values.map(val => {
          if (val.value !== null)
            return {
              name: p.attributeDetail?.name,
              value: (val.value.toString() as string),
              label: val.stringValue ?? (val.value.toString() as string)
            };
        }));
      });
      return attributes;
    };

    const reduceToUniques = (prev, curr) => {
      try {
        const isAttributeExist = prev.some(el => el.name === curr.name && el.value === curr.value);
        if (!isAttributeExist) {
          prev.push(curr);
        }
      } catch (ex) {
        console.log(ex, prev, curr);
      }

      return prev;
    };

    const reduceByAttributeName = (prev, curr) => ({
      ...prev,
      [curr.name]: [
        ...(prev[curr.name] || []),
        curr.value
      ]
    });

    const list = productList.map(formatAttributes)
      .reduce((prev, curr) => {
        prev.push(...curr);
        return prev;
      }, [])
      .reduce(reduceToUniques, []);

    return list.reduce(reduceByAttributeName, {});
  } catch (ex) {
    console.log(ex);
    return {} as any;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductOptions = (products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  try {
    const isSingleProduct = !Array.isArray(products);
    const productList = (isSingleProduct ? [products] : products) as Product[];

    if (!products || productList.length === 0) {
      return {} as any;
    }

    const formatAttributes = (product: Product): AgnosticAttribute[] => {
      const attributes = [];
      const options = filterByAttributeName
        ? product.options?.filter(p => filterByAttributeName.includes(p.attributeDetail?.name.toLowerCase()))
        : product.options;

      options.forEach(p => {
        attributes.push(...p.values.map(val => {
          if (val.value !== null)
            return {
              name: p.attributeDetail?.name,
              value: (val.value.toString() as string),
              label: val.value ?? (val.value.toString() as string)
            };
        }));
      });
      return attributes;
    };

    const reduceToUniques = (prev, curr) => {
      try {
        const isAttributeExist = prev.some(el => el.name === curr.name && el.value === curr.value);
        if (!isAttributeExist) {
          prev.push(curr);
        }
      } catch (ex) {
        console.log(ex, prev, curr);
      }

      return prev;
    };

    const reduceByAttributeName = (prev, curr) => ({
      ...prev,
      [curr.name.toLowerCase()]: [
        ...(prev[curr.name.toLowerCase()] || []),
        curr.value
      ]
    });

    const list = productList.map(formatAttributes)
      .reduce((prev, curr) => {
        prev.push(...curr);
        return prev;
      }, [])
      .reduce(reduceToUniques, [])
      .reduce(reduceByAttributeName, {});
    return list;
  } catch (ex) {
    console.log(ex);
    return {} as any;
  }
};

export const getProductDescription = (product: Product): any => product?.content?.productFullDescription || '';

export const getProductCategoryIds = (product: Product): string[] => product?.categories?.map(c => c.categoryId.toString()) || [];

export const getProductId = (product: Product): string => product?.variationProductCode || product?.productCode || '';

export const getFormattedPrice = (price: number): string => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductTotalReviews = (product: Product): number => 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAverageRating = (product: Product): number => 0;

export const getProductBreadcrumbs = (product: Product): AgnosticBreadcrumb[] => {
  if (!product) {
    return [];
  }
  const bcs = [
    { text: 'Home', link: '/'},
    ...buildBreadcrumbs(product.categories[0]).map(b => ({...b, link: `/c/${b.link}` }))
  ];
  return bcs;
};

export const getIsPurchasable = (product: Product): boolean => {
  return product?.purchasableState?.isPurchasable || false;
};

export const getProductConfiguration = (product: Product): any => {
  const ret = {};
  product?.options.forEach(o => {
    ret[o.attributeDetail?.name.toLowerCase()] = o.values?.filter(v => v.isSelected)?.[0]?.value;
  });
  return ret;
};

export const getProductInventory = (product: Product): number => {
  if (product?.inventoryInfo?.manageStock) return product.inventoryInfo.onlineStockAvailable;
  return 100;
};

export const productGetters: ProductGetters<Product, ProductFilters> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getOptions: getProductOptions,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getId: getProductId,
  getFormattedPrice: getFormattedPrice,
  getTotalReviews: getProductTotalReviews,
  getAverageRating: getProductAverageRating,
  getBreadcrumbs: getProductBreadcrumbs,
  getPurchasable: getIsPurchasable,
  getConfiguration: getProductConfiguration,
  getInventory: getProductInventory
};
