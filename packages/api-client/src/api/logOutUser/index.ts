import { Context } from '@vue-storefront/core';
import { LogOutUserResponse } from '../../types/Api';

const logOutUser = async (context:Context): Promise<LogOutUserResponse> => {
  if (context.client.ticketManager) {
    context.client.ticketManager.invalidateTicket();
  }
};

export default logOutUser;
