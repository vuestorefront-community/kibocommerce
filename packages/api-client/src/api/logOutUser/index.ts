import { Context } from '@vue-storefront/core';
import { logOutUserResponse } from '../../types/Api';

const logOutUser = async (context:Context): Promise<logOutUserResponse> => {
  if (context.client.ticketManager) {
    context.client.ticketManager.invalidateTicket();
  }
};

export default logOutUser;
