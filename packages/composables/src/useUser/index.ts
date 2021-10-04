import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import { MutationUpdateCustomerAccountArgs } from '@vue-storefront/kibocommerce-api';

import { User } from '../types';
import { useCart } from '../useCart';

export const params: UseUserFactoryParams<User, any, any> = {
  provide() {
    return {
      cart: useCart()
    };
  },
  load: async (context: Context) => {
    const customerAccountResponse = await context.$kibo.api.getCurrentUser();
    const customerAccount = customerAccountResponse.data?.customerAccount;
    if (customerAccount?.isAnonymous === false) {
      return customerAccount;
    }
  },
  logOut: async (context: Context) => {
    await context.$kibo.api.logOutUser();
    context.cart.setCart(null);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    const userDetails: MutationUpdateCustomerAccountArgs = {
      accountId: currentUser.id,
      customerAccountInput: {
        emailAddress: updatedUserData.email as string,
        userName: updatedUserData.email as string,
        firstName: updatedUserData.firstName as string,
        lastName: updatedUserData.lastName as string,
        isAnonymous: false,
        isLocked: false,
        isActive: true,
        acceptsMarketing: false,
        hasExternalPassword: false,
        id: currentUser.id
      }
    };
    const response = await context.$kibo.api.updateCustomerPersonalData(
      userDetails
    );
    return response.data.user;
  },

  register: async (
    context: Context,
    { email, password, firstName, lastName }
  ) => {
    const account = { emailAddress: email, firstName, lastName };
    const registerResponse = await context.$kibo.api.registerUser({
      account,
      password
    });

    const cartResponse = await context.$kibo.api.getCart();
    context.cart.setCart(cartResponse.data?.currentCart);

    // LogIn user
    const { customerAccount } = await context.$kibo.api.logInUser({
      username: email,
      password
    });

    return customerAccount;

  },
  logIn: async (context: Context, { username, password }) => {
    const { customerAccount } = await context.$kibo.api.logInUser({
      username,
      password
    });
    const cartResponse = await context.$kibo.api.getCart();
    context.cart.setCart(cartResponse.data?.currentCart);
    return customerAccount;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (
    context: Context,
    { currentUser, currentPassword, newPassword }
  ) => {
    const response = await context.$kibo.api.changePassword({
      accountId: currentUser.id,
      unlockAccount: true,
      userId: currentUser.userId,
      passwordInfoInput: {
        oldPassword: currentPassword,
        newPassword: newPassword
      }
    });
    if (response.data.user) {
      return await params.logIn(context, {
        username: currentUser.emailAddress,
        password: newPassword
      });
    }
  }
};

export const useUser = useUserFactory<User, any, any>(params);
