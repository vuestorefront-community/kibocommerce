import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import { User } from '../types';

const params: UseUserFactoryParams<User, any, any> = {
  load: async (context: Context) => {
    const customerAccountResponse = await context.$kibo.api.getCurrentUser();
    const customerAccount = customerAccountResponse.data?.customerAccount;
    if (customerAccount?.isAnonymous === false) {
      return customerAccount;
    }

  },
  logOut: async (context: Context) => {
    await context.$kibo.api.logOutUser();
    context.setCart(null);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    const response = await context.$kibo.api.updateCustomerPersonalData({
      accountId: currentUser.id,
      customerAccountInput: {
        emailAddress: updatedUserData.email,
        userName: updatedUserData.email,
        firstName: updatedUserData.firstName,
        lastName: updatedUserData.lastName,
        isAnonymous: false,
        isLocked: false,
        isActive: true,
        acceptsMarketing: false,
        hasExternalPassword: false,
        id: currentUser.id,
        taxExempt: false
      }
    });
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
    const customerAccount = registerResponse.data?.account?.customerAccount;
    // const cart = await context.$kibo.api.getCart()
    // context.setCart(cart);
    return customerAccount;
  },
  logIn: async (context: Context, { username, password }) => {
    const { customerAccount } = await context.$kibo.api.logInUser({
      username,
      password
    });
    // const cart = await context.$kibo.api.getCart()
    // context.setCart(cart);
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
    return response.data.user;
  }
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
