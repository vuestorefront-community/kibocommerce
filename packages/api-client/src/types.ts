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
export type ProductVariant = {
  categories?: [ProductCategory];
  productCode?: string;
  price?: {
    price?: number;
    salePrice?: number;
  };
  content?: {
    productName?: string;
    productFullDescription?: string;
    productImages: [{
      imageUrl?: string,
      sequence?: number
    }];
    seoFriendlyUrl?: string;
  };
  properties?: [{
    attributeDetail: {
      name: string;
    };
    isHidden: boolean;
    values: [{
      stringValue?: string;
      value: any;
    }]
  }]
};
export type Category = {
  id: number;
  name: string;
  slug: string;
  items: Category[];
};
export type CategoryFilter = Record<string, unknown>;
export type ShippingMethod = Record<string, unknown>;
export type LineItem = Record<string, unknown>;
