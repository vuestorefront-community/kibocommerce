/* istanbul ignore file */
import {
  Context,
  useWishlistFactory,
  UseWishlistFactoryParams
} from '@vue-storefront/core';

import { ref, Ref } from '@nuxtjs/composition-api';
import { Wishlist, WishlistProductParams, Product } from '../types';
import { useUser } from '../useUser';
export const wishlist: Ref<Wishlist> = ref(null);

export const getWishLists = async (context: Context): Promise<Wishlist> => {
  const wishListResponse = await context.$kibo.api.getWishList();
  return wishListResponse.data.wishlists;
};

const params: UseWishlistFactoryParams<
  Wishlist,
  WishlistProductParams,
  Product
> = {
  provide() {
    return {
      user: useUser()
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    const currentWishlist = await getWishLists(context);
    return currentWishlist?.items[0];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentWishlist, product }) => {
    if (!currentWishlist) {
      const user = await context.user.user.value;
      const wishlistName = user.id + '-' + user.firstName;
      const params = {
        wishlistInput: {
          customerAccountId: user.id,
          name: wishlistName
        }
      };
      const createWishListResponse = await context.$kibo.api.createWishList(
        params
      );
      currentWishlist = createWishListResponse.data.createWishlist;
    }
    const params = {
      wishlistId: currentWishlist.id,
      wishlistItemInput: {
        quantity: 1,
        product: {
          productCode: product.productCode,
          isPackagedStandAlone: product.isPackagedStandAlone || true,
          variationProductCode: product.variationProductCode,
          options: product.options?.map((po) => ({
            attributeFQN: po.attributeFQN,
            name: po.attributeDetail.name,
            value: po.values.find((v) => v.isSelected).value
          }))
        }
      }
    };
    await context.$kibo.api.createWishListItem(params);
    const response = await getWishLists(context);
    return response?.items[0];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentWishlist, product }) => {
    const removedItem = currentWishlist?.items?.find((item) => {
      if (!item?.product?.variationProductCode) {
        return item.product.productCode === product.productCode;
      }
      return (
        item?.product?.variationProductCode === product.variationProductCode
      );
    });
    const params = {
      wishlistId: currentWishlist?.id,
      wishlistItemId: removedItem?.id
    };
    await context.$kibo.api.deleteWishListItem(params);
    const response = await getWishLists(context);
    return response?.items[0];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentWishlist }) => {
    console.log('Mocked: useWishlist.clear');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context: Context, { currentWishlist, product }) => {
    if (currentWishlist) {
      const items = currentWishlist?.items?.some((wishListItems) => {
        if (!wishListItems?.product?.variationProductCode) {
          return wishListItems?.product?.productCode === product?.productCode;
        }
        return (
          wishListItems?.product?.variationProductCode ===
          product?.variationProductCode
        );
      });
      return items;
    }
    return false;
  }
};

export const useWishlist = useWishlistFactory<
  Wishlist,
  WishlistProductParams,
  Product
>(params);
