import { CreateApolloClient } from 'kibo.apollo.typescript.client'
import { apiClientFactory } from '@vue-storefront/core';
import { UserAuthTicket } from 'kibo.apollo.typescript.client/src/lib/AuthClient';
import cfg from './mozuConfig';
import { ApiClientExtension } from '@vue-storefront/core';

import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import registerUser from './api/registerUser';
import logInUser from './api/logInUser';
import logOutUser from './api/logOutUser';
import getCart from './api/getCart';
import addToCart from './api/addToCart';
import removeFromCart from './api/cart/removeFromCart';
import updateItemQty from './api/cart/updateItemQuantity';

import clearCart from './api/cart/clearCart';
import applyCoupon from './api/cart/applyCoupon';
import removeCoupon from './api/cart/removeCoupon';
import getCheckout from './api/getCheckout';
import getOrCreateCheckoutFromCart from './api/getOrCreateCheckoutFromCart';

const AUTH_COOKIE_NAME = 'vsf-kibo-ticket';

const onCreate = (settings) => ({
  config: {
    ...settings
  },
  client: CreateApolloClient({
    api: cfg.api,
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
    let currentTicket = tryParse(rawTicket);

    return {
      beforeCreate: ({ configuration }) => ({
        ...configuration,
        clientAuthHooks: {
          onTicketChange: (authTicket: UserAuthTicket) => {
            if (!currentTicket || currentTicket.accessToken !== authTicket.accessToken) {
              currentTicket = authTicket;
              res.cookie(
                AUTH_COOKIE_NAME,
                JSON.stringify(currentTicket),
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
              null,
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
    getCategory,
    logInUser,
    registerUser,
    logOutUser,
    getCart,
    addToCart,
    removeFromCart,
    updateItemQty,
    clearCart,
    applyCoupon,
    removeCoupon,
    getCheckout,
    getOrCreateCheckoutFromCart
  },
  extensions: [
    ticketExtension
  ]
});

export {
  createApiClient
};
