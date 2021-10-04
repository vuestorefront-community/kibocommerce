import { CreateApolloClient } from '@kibocommerce/graphql-client';
import { UserAuthTicket } from '@kibocommerce/graphql-client/dist/lib/AuthClient';
import { apiClientFactory, ApiClientExtension } from '@vue-storefront/core';

import getProduct from './api/getProduct';
import getRelatedProducts from './api/getRelatedProducts';
import searchProducts from './api/searchProducts';
import configureProduct from './api/configureProduct';
import getCategory from './api/getCategory';
import registerUser from './api/registerUser';
import logInUser from './api/logInUser';
import logOutUser from './api/logOutUser';
import getCurrentUser from './api/getCurrentUser';
import getCart from './api/cart/getCart';
import clearCart from './api/cart/clearCart';
import addToCart from './api/cart/addToCart';
import removeFromCart from './api/cart/removeFromCart';
import updateItemQty from './api/cart/updateItemQuantity';
import applyCoupon from './api/cart/applyCoupon';
import removeCoupon from './api/cart/removeCoupon';
import getCheckout from './api/getCheckout';
import getOrCreateCheckoutFromCart from './api/getOrCreateCheckoutFromCart';
import getBillingInfo from './api/getBillingInfo';
import setBillingInfo from './api/setBillingInfo';

import changePassword from './api/changePassword';
import searchOrders from './api/searchOrders';
import getShippingAddress from './api/shippingAddress/getShippingAddress';
import setShippingAddress from './api/shippingAddress/setShippingAddress';
import getShipmentMethod from './api/shipmentMethod/getShipmentMethod';
import setShipmentMethod from './api/shipmentMethod/setShipmentMethod';
import makeOrder from './api/makeOrder';
import updateCustomerPersonalData from './api/updateCustomerPersonalData';
import addPaymentMethodToCheckout from './api/addPaymentToCheckout';
import addUserAddress from './api/addUserAddress';
import updateUserAddress from './api/updateUserAddress';
import deleteUserAddress from './api/deleteUserAddress';
import getUserAddresses from './api/getUserAddresses';
import getSearchSuggestions from './api/getSearchSuggestions';
import getCMSContent from './api/getCMSContent';
import getWishList from './api/wishList/getWishList';
import createWishList from './api/wishList/createWishList';
import createWishListItem from './api/wishList/createWishListItem';
import deleteWishListItem from './api/wishList/deleteWishListItem';
import getUserName from './api/password/getUserName';
import resetPassword from './api/password/resetPassword';
import updatePassword from './api/password/updatePassword';

const AUTH_COOKIE_NAME = 'vsf-kibo-ticket';

const onCreate = (settings) => ({
  config: {
    ...settings
  },
  client: CreateApolloClient({
    api: settings.api,
    clientAuthHooks: settings.clientAuthHooks
  })
});

const tryParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (ex) {
    return null;
  }
};

const ticketExtension: ApiClientExtension = {
  name: 'ticketExtension',
  hooks: (req, res) => {
    const rawTicket = req.cookies[AUTH_COOKIE_NAME];
    let currentTicket = rawTicket !== undefined ? tryParse(Buffer.from(rawTicket, 'base64').toString('ascii')) : undefined;

    return {
      beforeCreate: ({ configuration }) => ({
        ...configuration,
        clientAuthHooks: {
          onTicketChange: (authTicket: UserAuthTicket) => {
            if (!currentTicket || currentTicket.accessToken !== authTicket.accessToken) {
              currentTicket = authTicket;
              res.cookie(
                AUTH_COOKIE_NAME,
                Buffer.from(JSON.stringify(currentTicket)).toString('base64'),
                currentTicket?.accessTokenExpiration ? { expires: new Date(currentTicket.accessTokenExpiration) } : {}
              );
            }
          },

          onTicketRead: () => {
            return currentTicket;
          },

          onTicketRemove: () => {
            res.cookie(
              AUTH_COOKIE_NAME,
              'expire',
              { expires: new Date(0) }
            );
            currentTicket = undefined;
          }
        }
      })
    };
  }
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: {
    getProduct,
    getRelatedProducts,
    configureProduct,
    searchProducts,
    getCategory,
    logInUser,
    registerUser,
    logOutUser,
    getCurrentUser,
    getCart,
    addToCart,
    removeFromCart,
    updateItemQty,
    clearCart,
    applyCoupon,
    removeCoupon,
    getCheckout,
    getOrCreateCheckoutFromCart,

    searchOrders,
    changePassword,
    getShippingAddress,
    setShippingAddress,
    getShipmentMethod,
    setShipmentMethod,
    getBillingInfo,
    setBillingInfo,
    makeOrder,
    updateCustomerPersonalData,
    addPaymentMethodToCheckout,
    addUserAddress,
    updateUserAddress,
    deleteUserAddress,
    getUserAddresses,
    getSearchSuggestions,
    getCMSContent,
    getWishList,
    createWishList,
    createWishListItem,
    deleteWishListItem,
    getUserName,
    resetPassword,
    updatePassword
  },
  extensions: [
    ticketExtension
  ]
});

export {
  createApiClient
};
