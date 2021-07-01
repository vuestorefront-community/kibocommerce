import { integrationPlugin } from '@vue-storefront/core';

const moduleOptions = <%= serialize(options) %>;
const AUTH_COOKIE_NAME = "vsf-kibo-ticket";

export default integrationPlugin(({ app, integration }) => {
  integration.configure('kibo', {
    ...moduleOptions,
    clientAuthHooks: {
      onTicketChange: (authTicket) => {
        const ticket = app.$cookies.get(AUTH_COOKIE_NAME);
        if (!ticket || ticket.accessToken !== authTicket.accessToken) {
          app.$cookies.set(AUTH_COOKIE_NAME, authTicket);
        }
      },
      onTicketRead: () => {
        return app.$cookies.get(AUTH_COOKIE_NAME);;
      },
      onTicketRemove: () => {
        app.$cookies.remove(AUTH_COOKIE_NAME);
      }
    },
    countries: [
      {
        name: 'US',
        label: 'United States',
        states: [
          'California',
          'Nevada'
        ]
      },
      {
        name: 'AT',
        label: 'Austria'
      },
      {
        name: 'DE',
        label: 'Germany'
      },
      {
        name: 'NL',
        label: 'Netherlands'
      }
    ]
  });
});
