import { CreateApolloClient } from 'kibo.apollo.typescript.client'
import { apiClientFactory } from '@vue-storefront/core';

import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import registerUser from './api/registerUser';
import logInUser from './api/logInUser';

const config = {
  "accessTokenUrl": process.env.AUTH_URL || "https://home.mozu.com/api/platform/applications/authtickets/oauth",
  "clientId":  process.env.CLIENT_ID || "d4e9bb5.sleepy_hollow.1.0.0.Release",
  "sharedSecret": process.env.SHARED_SECRET || "a84414e1fcdd425bbd4c4ac68428b61c",
  "apiHost":  process.env.API_HOST || "https://t30294-s50525.sandbox.mozu.com",
}

const onCreate = (settings) => {
  
  let authorization//getAuthTicketFromRequest(req)

  const clientAuthHooks = {
    onTicketChange: (authTicket: any) => {
      if(authorization) {
        console.log(`has authorization`)
      }
      if(authTicket) {
        console.log(`has authTicket`)
      }
      if(authorization && authTicket && authorization.accessToken !== authTicket.accessToken){
        console.log(`Access tokens diff`)
      }
      if (!authorization || authorization.accessToken !== authTicket.accessToken) {
        authorization = authTicket;
        console.log(`on ticket change`)
      }
    },
    onTicketRead: () => {
      console.log(`read ticket`)
      return authorization as any;
    },
    onTicketRemove: () => {
      console.log(`on ticket remove`)
      authorization = undefined;
    }
  }
  const apolloClient = CreateApolloClient({
    api: config,
    clientAuthHooks
  });

  console.log('on create BOOP')
  return {
    config,
    client: apolloClient
  }
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: {
    getProduct,
    getCategory,
    registerUser,
    logInUser
  }
});

export {
  createApiClient
};
