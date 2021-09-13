import updateUserAddress from '../../../src/api/updateUserAddress';
import defaultMutation from '../../../src/api/updateUserAddress/defaultMutation';

describe('[kibo-api-client] updateUserAddress', () => {
  it('updates a user address', async () => {
    const params = {
      accountId: 123,
      contactId: 123,
      customerContactInput: {
        accountId: 123,
        types: [
          {
            name: 'Shipping',
            isPrimary: true
          },
          {
            name: 'Billing',
            isPrimary: true
          }
        ],
        email: 'cole.mcmannus@kibocommerce.com',
        firstName: 'Cole',
        lastNameOrSurname: 'McMannus',
        address: {
          address1: '123 Any Street',
          cityOrTown: 'Anytown',
          stateOrProvince: 'TX',
          postalOrZipCode: '12345',
          countryCode: 'US',
          addressType: 'Residential'
        }
      }
    };

    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ variables, mutation }) => {
          expect(mutation).toEqual(defaultMutation);
          expect(variables).toEqual(params);

          return { data: 'update user address response' };
        }
      }
    };

    const { data } = await updateUserAddress(context, params);

    expect(data).toBe('update user address response');
  });
});
