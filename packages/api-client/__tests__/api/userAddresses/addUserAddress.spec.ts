import addUserAddress from '../../../src/api/addUserAddress';
import defaultMutation from '../../../src/api/addUserAddress/defaultMutation';

describe('[kibo-api-client] addUserAddress', () => {
  it('adds a user address', async () => {
    const params = {
      accountId: 123,
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        query: ({ variables, mutation }) => {
          expect(mutation).toEqual(defaultMutation);
          expect(variables).toEqual(params);

          return { data: 'add user address response' };
        }
      }
    };

    const { data } = await addUserAddress(context, params);

    expect(data).toBe('add user address response');
  });
});
