/* eslint-disable */
import { CustomQuery } from '@vue-storefront/core';
import { Product } from './types/GraphQL';

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
export type ProductVariant = Product;
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
  customQuery?: CustomQuery;
  id: string;
  attributes: {
    [x: string]: string;
  }
}
