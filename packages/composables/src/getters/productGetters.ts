import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import { ProductVariant, ProductCategory } from '@vue-storefront/kibo-api/src/types';

type ProductVariantFilters = any

// TODO: Add interfaces for some of the methods in core
// Product

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductName = (product: ProductVariant): string => product?.content?.productName || 'Product\'s name';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductSlug = (product: ProductVariant): string => product?.content?.seoFriendlyUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: Product): AgnosticPrice {
  return {
    regular: product?.price?.price || 0,
    special: product?.price?.salePrice || 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductGallery = (product: ProductVariant): AgnosticMediaGalleryItem[] => {
  return product?.content?.productImages.map(pi => ({
    small: pi.imageUrl,
    normal: pi.imageUrl,
    big: pi.imageUrl
  })) || [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductCoverImage = (product: ProductVariant): string => product?.content?.productImages?.[0].imageUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductFiltered = (products: ProductVariant[], filters: ProductVariantFilters | any = {}): ProductVariant[] => {
  if (!products) return [];
  else return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: ProductVariant[] | ProductVariant, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> | any[] => {
  try {
    const isSingleProduct = !Array.isArray(products);
    const productList = (isSingleProduct ? [products] : products) as ProductVariant[];

    if (!products || productList.length === 0) {
      return {} as any;
    }

    const formatAttributes = (product: ProductVariant): AgnosticAttribute[] => {
      const attributes = [];
      product.properties.filter(p => p.isHidden !== true && (filterByAttributeName ? filterByAttributeName.includes(p.attributeDetail?.name.toLowerCase()) : p)).forEach(p => {
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
      [curr.name]: isSingleProduct ? curr.value : [
        ...(prev[curr.name] || []),
        {
          value: curr.value,
          label: curr.label
        }
      ]
    });

    const list = productList.map(formatAttributes)
      .reduce((prev, curr) => {
        prev.push(...curr);
        return prev;
      }, [])
      .reduce(reduceToUniques, []);
    console.log(list);

    return list.reduce(reduceByAttributeName, {});
  } catch (ex) {
    console.log(ex);
    return {} as any;
  }
};

export const getProductDescription = (product: ProductVariant): any => product?.content?.productFullDescription || '';

export const getProductCategoryIds = (product: ProductVariant): string[] => product?.categories?.map(c => c.categoryId.toString()) || [];

export const getProductId = (product: ProductVariant): string => product?.productCode || '';

export const getFormattedPrice = (price: number): string => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

export const getProductBreadcrumbs = (product: ProductVariant): AgnosticBreadcrumb[] => {
  const breadcrumbs: AgnosticBreadcrumb[] = [];
  const categories: ProductCategory[] = [];
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

const productGetters: ProductGetters<ProductVariant, ProductVariantFilters> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getId: getProductId,
  getFormattedPrice: getFormattedPrice,
  getTotalReviews: getProductTotalReviews,
  getAverageRating: getProductAverageRating,
  getBreadcrumbs: getProductBreadcrumbs
};
