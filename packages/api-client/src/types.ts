/* eslint-disable */
import { Pr_Product } from './types/GraphQL';

export type Cart = Record<string, unknown>;
export type Wishlist = Record<string, unknown>;
export type ProductCategory = {
  categoryId: number;
  parentCategory?: ProductCategory;
  categoryCode?: string;
  content: {
    name: string;
    description?: string;
    pageTitle?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
    metaTagKeywords?: string;
    slug: string;
    categoryImages: [{
      altText?: string;
      imageUrl: string;
      cmsId: string;
      sequence: number;
    }];
  };
  sequence: number;
  isDisplayed: boolean;
  count: number;
  updateDate: string;
  shouldSlice: boolean;
}
export type ProductVariant = Pr_Product;
export type Category = {
  id: number;
  name: string;
  slug: string;
  items: Category[];
};
export type CategoryFilter = Record<string, unknown>;
export type ShippingMethod = Record<string, unknown>;
export type LineItem = Record<string, unknown>;
export interface ConfigureProductParams {
  productCode: string;
  attributes: [{
    attributeFQN: string;
    value: string;
  }]
}
