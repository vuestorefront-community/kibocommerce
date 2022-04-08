import { Context } from '@vue-storefront/core';
import { LogOutUserResponse } from '../../types/Api';

const logOutUser = async (context: Context): Promise<LogOutUserResponse> => {
  if (context.client.shopperAuthManager) {
    context.client.shopperAuthManager.setTicket(null);
  }
};

export default logOutUser;
