import {
  Context,
  useForgotPasswordFactory,
  UseForgotPasswordFactoryParams
} from '@vue-storefront/core';

const factoryParams: UseForgotPasswordFactoryParams<any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetPassword: async (context: Context, { email, customQuery }) => {

    const params = {resetPasswordInfoInput: {
      emailAddress: email,
      userName: email,
      customerSetCode: ''
    }};
    const response = await context.$kibo.api.resetPassword(params);

    return response;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNewPassword: async (context: Context, { tokenValue, newPassword, customQuery }) => {
    if (!tokenValue || !newPassword || !customQuery) return;

    // Get user name
    const userNameParams = {filter: `userId eq ${customQuery}`};
    const userNameResponse = await context.$kibo.api.getUserName(userNameParams);
    const userName = userNameResponse.data.customerAccounts.items[0].userName;

    if (!userName) return;

    // Set new password
    const updatePasswordParams = { confirmationInfoInput: {
      userName: userName,
      confirmationCode: tokenValue,
      newPassword: newPassword
    }};
    const updatePasswordResponse = await context.$kibo.api.updatePassword(updatePasswordParams);
    const isPasswordUpdatedSuccessfully = updatePasswordResponse.data.updatePassword;

    return isPasswordUpdatedSuccessfully;
  }
};

export const useForgotPassword = useForgotPasswordFactory<any>(factoryParams);
