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
    const rawCurrentTicket = req.cookies[AUTH_COOKIE_NAME];
    const currentTicket: UserAuthTicket = tryParse(rawCurrentTicket);

    const setCookie: (res, authTicket: UserAuthTicket) => void = (res, authTicket) => {
      res.cookie(
        AUTH_COOKIE_NAME,
        JSON.stringify(authTicket),
        authTicket?.accessTokenExpiration ? { expires: new Date(authTicket.accessTokenExpiration) } : {}
      );
    };

    return {
      beforeCreate: ({ configuration }) => ({
        ...configuration,
        clientAuthHooks: {
          onTicketChange: (authTicket: UserAuthTicket) => {
            if (!currentTicket || currentTicket.accessToken !== authTicket.accessToken) {
              setCookie(res, authTicket);
            }
          },

          onTicketRead: () => {
            setCookie(res, currentTicket);
            return currentTicket;
          },

          onTicketRemove: () => {
            delete req.cookies[AUTH_COOKIE_NAME];
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
    logOutUser
  },
  extensions: [
    ticketExtension
  ]
});

export {
  createApiClient
};
