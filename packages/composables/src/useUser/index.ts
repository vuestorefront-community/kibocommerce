import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import type { User } from '@vue-storefront/kibo-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types';

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    console.log('Mocked: loadUserBB');
    return {};
  },
  logOut: async (context: Context) => {
    await context.$kibo.api.logOutUser();
    context.setCart(null);
    return;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: updateUser');
    return {};
  },

  register: async (context: Context, { email, password, firstName, lastName }) => {
    const account = { emailAddress: email, firstName, lastName }
    const registerResponse = await context.$kibo.api.registerUser({ account, password });
    const customerAccount = registerResponse.data?.account?.customerAccount;
    //const cart = await context.$kibo.api.getCart()
    //context.setCart(cart);
    return customerAccount
  },
  logIn: async (context: Context, { username, password }) => {
    const loginResponse = await context.$kibo.api.logInUser({ username, password });
    const customerAccount = loginResponse.data?.account?.customerAccount;
    //const cart = await context.$kibo.api.getCart()
    //context.setCart(cart);
    return customerAccount;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    console.log('Mocked: useUser.changePassword');
    return {};
  }
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
