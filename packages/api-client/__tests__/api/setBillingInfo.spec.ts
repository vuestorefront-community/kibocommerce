import setBillingInfo from '../../src/api/setBillingInfo';
import defaultMutation from '../../src/api/setBillingInfo/defaultMutation';

describe('[kibo-api-client] setBillingAddressInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sets billing address on checkout', async () => {
    const params = {
      orderId: '11ff949065e3130001cf6c2d0000432a',
      billingInfoInput: {
        billingContact: {
          firstName: 'kevin',
          lastNameOrSurname: 'watts',
          email: 'kevin.watts@kibocommerce.com',
          address: {
            address1: '123 south lamar',
            address2: '#123',
            stateOrProvince: 'TX',
            postalOrZipCode: '78704',
            cityOrTown: 'austin',
            countryCode: 'US'
          },
          phoneNumbers: {
            home: '1231231234'
          }
        },
        isSameBillingShippingAddress: false
      }
    };

    const context = {
      client: {
        mutate: ({ mutation, variables }) => {
          expect(mutation).toEqual(defaultMutation);
          expect(variables).toEqual(params);
          return { data: 'billing contact response'};
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await setBillingInfo(context, params);

    expect(data).toBe('billing contact response');
  });
});
