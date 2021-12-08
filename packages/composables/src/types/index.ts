import {
  FacetSearchResult,
  ComputedProperty,
  ProductsSearchParams
} from '@vue-storefront/core';

import { ProductCategory } from '@vue-storefront/kibocommerce-api';
import { wishlistGetters } from '..';
import { UseCheckoutErrors } from '../factories/useCheckoutFactory';

export { UseCategory, UseProduct } from '@vue-storefront/core';
export interface UseCheckout<CHECKOUT> {
  load: (params: { cartId: string }) => Promise<CHECKOUT>;
  checkout: ComputedProperty<CHECKOUT>;
  error: ComputedProperty<UseCheckoutErrors>;
  loading: ComputedProperty<boolean>;
}

export type Address = Record<string, unknown>;

export type Category = Record<string, any>;

export type User = {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  id?: number;
  userId?: string;
  isAnonymous?: boolean;
};
export type UserAddress = Record<string, unknown>;

export type Cart = Record<string, unknown>;

export type CartItem = Record<string, unknown>;

export type Coupon = Record<string, unknown>;

export type Order = Record<string, unknown>;
wishlistGetters;

export type Product = Record<string, any>;

export type Review = Record<string, unknown>;

export type Shipping = Record<string, unknown>;

export type ShippingMethod = Record<string, unknown>;

export type Wishlist = Record<string, any>;

export type Facet = Record<string, any>;

export type ProductsResponse = {
  data: Product[];
  total: number;
};

export type OrderSearchParams = Record<string, any>;

export type OrdersResponse = {
  data: any[];
  total: number;
};
export interface FacetResultsData {
  products: Product[];
  categories: ProductCategory[];
  facets: Facet[];
  total: number;
  perPageOptions: number[];
  itemsPerPage: number;
}
export type SearchData = FacetSearchResult<FacetResultsData>;

export type SearchSuggestions = {
  products: Product[];
  categories: Category[];
};
export interface UserShippingGetters<USER_SHIPPING, USER_SHIPPING_ITEM> {
  getAddresses: (
    shipping: USER_SHIPPING,
    criteria?: Record<string, any>
  ) => USER_SHIPPING_ITEM[];
  getDefault: (shipping: USER_SHIPPING) => USER_SHIPPING_ITEM;
  getTotal: (shipping: USER_SHIPPING) => number;
  getPostCode: (address: USER_SHIPPING_ITEM) => string;
  getStreetName: (address: USER_SHIPPING_ITEM) => string;
  getStreetNumber: (address: USER_SHIPPING_ITEM) => string | number;
  getCity: (address: USER_SHIPPING_ITEM) => string;
  getFirstName: (address: USER_SHIPPING_ITEM) => string;
  getLastName: (address: USER_SHIPPING_ITEM) => string;
  getCountry: (address: USER_SHIPPING_ITEM) => string;
  getPhone: (address: USER_SHIPPING_ITEM) => string;
  getEmail: (address: USER_SHIPPING_ITEM) => string;
  getProvince: (address: USER_SHIPPING_ITEM) => string;
  getCompanyName: (address: USER_SHIPPING_ITEM) => string;
  getTaxNumber: (address: USER_SHIPPING_ITEM) => string;
  getId: (address: USER_SHIPPING_ITEM) => string | number;
  getApartmentNumber: (address: USER_SHIPPING_ITEM) => string | number;
  isDefault: (address: USER_SHIPPING_ITEM) => boolean;
}
export interface UseContent<CONTENT> {
  load: (identifier: string) => Promise<void>;
  content: ComputedProperty<CONTENT>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<any>;
}

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = TODO;

export type UseFacetSearchParams = TODO;

export type UseProductSearchParams = ProductsSearchParams;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseUserUpdateParams = TODO;

export type UseUserRegisterParams = TODO;

export type useUserOrderSearchParams = TODO;

export type RootCategoryParams = {
  categoryId: number;
  categoryCode?: string;
  isDisplayed: boolean;
  content: {
    name: string;
    slug?: string;
    description?: string;
  };
  childrenCategories?: [
    {
      categoryId: number;
      categoryCode?: string;
      isDisplayed: boolean;
      content: {
        name: string;
        slug?: string;
        description?: string;
      };
    }
  ];
  parentCategory?: {
    categoryId: number;
    categoryCode?: string;
    isDisplayed: boolean;
    content: {
      name: string;
      slug?: string;
      description?: string;
    };
    childrenCategories?: [
      {
        categoryId: number;
        categoryCode?: string;
        isDisplayed: boolean;
        content: {
          name: string;
          slug?: string;
          description?: string;
        };
      }
    ];
  };
};

export type BannerContentParams = {
  properties: {
    tags: string[];
    title: string;
    subtitle: string;
    buttonText: string;
    background: string;
    image: {
      mobile: string;
      desktop: string;
    };
    link: string;
    slot: string;
    description: string;
    class: string;
  };
};

export type HeroesContentParams = {
  properties: {
    tags: string[];
    title: string;
    subtitle: string;
    buttonText: string;
    background: string;
    image: {
      mobile: string;
      desktop: string;
    };
    link: string;
  };
};

export type BannersHeroesContentParams =
  | BannerContentParams[]
  | HeroesContentParams[];
export type BannersHeroesContentResponse = BannersHeroesContentParams;

export type WishlistProductParams = {
  productCode: string;
  sku: null;
  variationProductCode: string;
  imageUrl: string;
  name: string;
  price: {
    price: number;
    salePrice: null;
  };
  options: [
    {
      attributeFQN: string;
      name: string;
      value: string;
    }
  ];
};

export type WishlistItemProductResponse = {
  id: string;
  quantity: number;
  total: number;
  subtotal: number;
  product: {
    productCode: string;
    sku: null;
    variationProductCode: string;
    imageUrl: string;
    name: string;
    price: {
      price: number;
      salePrice: null;
    };
    options: [
      {
        attributeFQN: string;
        name: string;
        value: string;
      }
    ];
  };
};

export type WishlistItemAttributesResponse = { Size?: string; Color?: string };

export type OrderItemParams = {
  product: {
    productCode: string;
    name: string;
  };
  quantity: number;
  total: number;
};

export type OrderTotalParams = {
  offset: number;
  count: number;
  total: number;
  results: Order[];
};

export type ProductFiltersParams = {
  master?: boolean;
};

export type ProductAttributesParams = {
  color?: string;
  size?: string;
};

export type AddressCriteriaParams = {
  id?: string;
  isDefault?: boolean;
};

export type UpdateAddressParams = {
  address: {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    streetName: string;
    apartment: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
  };
};

export type AddAddressParams = {
  accountId: number;
  address: {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    streetName: string;
    apartment: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
  };
};

export type DeleteAddressParams = {
  address: {
    id: number;
  };
};

export type DefaultAddressParams = {
  address: {
    id: number;
  };
};

export type RelatedProductSearchParams = {
  id?: string;
  attributes?: {
    size?: string;
    color?: string;
  };
  catId?: string[];
  limit?: number;
};

export type RelatedProductCopyConfigurationOptionValue = {
  value?: string;
  attributeValueId: number;
  isEnabled?: boolean;
  isSelected?: boolean;
};

export type RelatedProductCopyOption = {
  attributeFQN?: string;
  values?: RelatedProductCopyConfigurationOptionValue[];
  isProductImageGroupSelector?: boolean;
};

export type CopyPropsTargetParams =
  | RelatedProductCopyOption
  | RelatedProductCopyConfigurationOptionValue;

export type RelatedProductCopyExistingOptionValue = {
  value?: string;
  isSelected?: boolean;
  deltaPrice?: number | null;
  stringValue?: string;
};

export type RelatedProductCopyConfiguration = {
  attributeFQN?: string;
  attributeDetail?: { name?: string };
  isProductImageGroupSelector?: boolean;
  isRequired?: boolean;
  isMultiValue?: boolean;
  values?: RelatedProductCopyExistingOptionValue[];
};

export type CopyPropsSourceParams =
  | RelatedProductCopyConfiguration
  | RelatedProductCopyExistingOptionValue;
