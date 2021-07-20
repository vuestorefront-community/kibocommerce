import getShippingAddress from '../../../src/api/shippingAddress/getShippingAddress';
import defaultQuery from '../../../src/api/shippingAddress/getShippingAddress/defaultQuery';

describe('[kibo-api-client] getShippingAddress', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets shipping address by OrderId', async () => {
    const params = {
      orderId: '11f6cca965e3130001da7d6c0000432a'
    };

    const expectedData = {
      orderFulfillmentInfo: {
        shippingMethodCode: 'd77e1a876e3a47718a1ca58a008c7b49',
        shippingMethodName: 'Custom Flat Rate',
        fulfillmentContact: {
          address: {
            address1: 'address 1',
            address2: 'address 2',
            addressType: 'Residential',
            cityOrTown: 'Austin',
            countryCode: 'US',
            isValidated: true,
            postalOrZipCode: '78704',
            stateOrProvince: 'NV'
          },
          companyOrOrganization: null,
          email: null,
          firstName: 'Sushant',
          id: 1,
          lastNameOrSurname: 'Jadhav',
          middleNameOrInitial: null,
          phoneNumbers: {
            home: '123456789'
          }
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
        query: ({ query }) => {
          expect(query).toEqual(defaultQuery);
          return { data: {
            orderFulfillmentInfo: {
              shippingMethodCode: 'd77e1a876e3a47718a1ca58a008c7b49',
              shippingMethodName: 'Custom Flat Rate',
              fulfillmentContact: {
                address: {
                  address1: 'address 1',
                  address2: 'address 2',
                  addressType: 'Residential',
                  cityOrTown: 'Austin',
                  countryCode: 'US',
                  isValidated: true,
                  postalOrZipCode: '78704',
                  stateOrProvince: 'NV'
                },
                companyOrOrganization: null,
                email: null,
                firstName: 'Sushant',
                id: 1,
                lastNameOrSurname: 'Jadhav',
                middleNameOrInitial: null,
                phoneNumbers: {
                  home: '123456789'
                }
              }
            }
          } };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await getShippingAddress(context, params);

    expect(data).toStrictEqual(expectedData);
  });
});
