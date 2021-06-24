import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import { Pr_Category, Pr_Product } from '@vue-storefront/kibo-api/src/types/GraphQL';

type Pr_ProductFilters = any

// TODO: Add interfaces for some of the methods in core
// Product

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductName = (product: Pr_Product): string => product?.content?.productName;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductSlug = (product: Pr_Product): string => product?.content?.seoFriendlyUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductPrice = (product: Pr_Product): AgnosticPrice => {
  return {
    regular: product?.price?.price || 0,
    special: product?.price?.salePrice || 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductGallery = (product: Pr_Product): AgnosticMediaGalleryItem[] => {
  return product?.content?.productImages.map(pi => ({
    small: pi.imageUrl,
    normal: pi.imageUrl,
    big: pi.imageUrl
  })) || [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductCoverImage = (product: Pr_Product): string => product?.content?.productImages?.[0].imageUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductFiltered = (products: Pr_Product[], filters: Pr_ProductFilters | any = {}): Pr_Product[] => {

  if (!products) return [];
  return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: Pr_Product[] | Pr_Product): Record<string, AgnosticAttribute | string> => {
  try {
    const isSingleProduct = !Array.isArray(products);
    const productList = (isSingleProduct ? [products] : products) as Pr_Product[];

    if (!products || productList.length === 0) {
      return {} as any;
    }

    const formatAttributes = (product: Pr_Product): AgnosticAttribute[] => {
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
export const getProductOptions = (products: Pr_Product[] | Pr_Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  try {
    const isSingleProduct = !Array.isArray(products);
    const productList = (isSingleProduct ? [products] : products) as Pr_Product[];

    if (!products || productList.length === 0) {
      return {} as any;
    }

    const formatAttributes = (product: Pr_Product): AgnosticAttribute[] => {
      const attributes = [];
      product.options?.filter(p => filterByAttributeName.includes(p.attributeDetail?.name.toLowerCase())).forEach(p => {
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

export const getProductDescription = (product: Pr_Product): any => product?.content?.productFullDescription || '';

export const getProductCategoryIds = (product: Pr_Product): string[] => product?.categories?.map(c => c.categoryId.toString()) || [];

export const getProductId = (product: Pr_Product): string => product?.variationProductCode || product?.productCode || '';

export const getFormattedPrice = (price: number): string => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductTotalReviews = (product: Pr_Product): number => 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAverageRating = (product: Pr_Product): number => 0;

export const getProductBreadcrumbs = (product: Pr_Product): AgnosticBreadcrumb[] => {
  const breadcrumbs: AgnosticBreadcrumb[] = [];
  const categories: Pr_Category[] = [];
  let tlc = product?.categories?.filter(c => c.isDisplayed).sort((a, b) => a.sequence - b.sequence)[0];
  if (tlc !== undefined) {
    let count = 0;
    while (tlc !== undefined && tlc !== null) {
      categories[count] = tlc;
      count++;
      tlc = tlc.parentCategory;
    }
    count--;
    const total = count;
    while (count >= 0) {
      const c = categories[count];
      breadcrumbs[total - count] = {
        text: c.content.name,
        link: `/c/${c.content.slug}`
      };
      count--;
    }
    return breadcrumbs;
  }
  return [];
};

export const getIsPurchasable = (product: Pr_Product): boolean => {
  return product?.purchasableState?.isPurchasable || false;
};

export const getProductConfiguration = (product: Pr_Product): any => {
  const ret = {};
  product.options.filter(o => ['tenant~size', 'tenant~color'].indexOf(o.attributeFQN) > -1).forEach(o => {
    ret[o.attributeFQN.replace(/^tenant~/, '')] = o.values?.filter(v => v.isSelected)?.[0]?.value;
  });
  return ret;
};

export const getProductInventory = (product: Pr_Product): number => {
  if (product.inventoryInfo?.manageStock) return product.inventoryInfo.onlineStockAvailable;
  return 100;
};

const productGetters: ProductGetters<Pr_Product, Pr_ProductFilters> = {
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
