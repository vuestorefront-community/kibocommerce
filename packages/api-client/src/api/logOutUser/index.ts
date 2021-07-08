import { Context } from '@vue-storefront/core';

const logOutUser = async (context:Context) => {
  if (context.client.ticketManager) {
    context.client.ticketManager.invalidateTicket();
  }
};

export default logOutUser;
