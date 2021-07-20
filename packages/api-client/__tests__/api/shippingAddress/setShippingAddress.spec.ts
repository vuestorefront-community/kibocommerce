import setShippingAddress from '../../../src/api/shippingAddress/setShippingAddress';
import defaultMutation from '../../../src/api/shippingAddress/setShippingAddress/defaultMutation';

describe('[kibo-api-client] setShippingAddress', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sets shipping address', async () => {
    const givenVariables = {
      orderId: '11f0a95c65e313000140379d0000432a',
      updateMode: 'ApplyAndCommit',
      fulfillmentInfoInput: {
        fulfillmentContact: {
          email: 'sushant@gmail.com',
          firstName: 'Sushant',
          middleNameOrInitial: '',
          lastNameOrSurname: 'Jadhav',
          phoneNumbers: {
            home: '9921215096'
          },
          address: {
            address1: 'address 1',
            address2: 'address 2',
            addressType: 'Residential',
            cityOrTown: 'Posewadi',
            countryCode: 'US',
            isValidated: true,
            postalOrZipCode: '411033',
            stateOrProvince: 'Maharashtra'
          }
        }
      }
    };

    const expectedData = {
      updateOrderFulfillmentInfo: {
        fulfillmentContact: {
          id: null,
          email: 'sushant@gmail.com',
          firstName: 'Mr Goapl',
          middleNameOrInitial: 'Vasantrao',
          lastNameOrSurname: 'Jadhav',
          companyOrOrganization: null,
          phoneNumbers: {
            home: '9921215096'
          },
          address: {
            address1: 'At Posewadi',
            address2: 'Tal Khanapur',
            addressType: 'Residential',
            cityOrTown: 'Posewadi',
            countryCode: 'US',
            isValidated: true,
            postalOrZipCode: '411033',
            stateOrProvince: 'Maharashtra'
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
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(defaultMutation);

          return {
            data: {
              updateOrderFulfillmentInfo: {
                fulfillmentContact: {
                  id: null,
                  email: 'sushant@gmail.com',
                  firstName: 'Mr Goapl',
                  middleNameOrInitial: 'Vasantrao',
                  lastNameOrSurname: 'Jadhav',
                  companyOrOrganization: null,
                  phoneNumbers: {
                    home: '9921215096'
                  },
                  address: {
                    address1: 'At Posewadi',
                    address2: 'Tal Khanapur',
                    addressType: 'Residential',
                    cityOrTown: 'Posewadi',
                    countryCode: 'US',
                    isValidated: true,
                    postalOrZipCode: '411033',
                    stateOrProvince: 'Maharashtra'
                  }
                }
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await setShippingAddress(context, givenVariables);

    expect(data).toStrictEqual(expectedData);
  });
});
