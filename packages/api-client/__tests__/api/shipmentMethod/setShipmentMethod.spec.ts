import setShipmentMethod from '../../../src/api/shipmentMethod/setShipmentMethod';
import defaultMutation from '../../../src/api/shipmentMethod/setShipmentMethod/defaultMutation';

describe('[kibo-api-client] setShipmentMethod', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sets shipment method', async () => {
    const givenVariables = {
      orderId: '11f6cca965e3130001da7d6c0000432a',
      updateMode: 'ApplyAndCommit',
      fulfillmentInfoInput: {
        shippingMethodCode: 'code 1',
        shippingMethodName: 'method 1'
      }
    };

    const expectedData = {
      updateOrderFulfillmentInfo: {
        shippingMethodCode: 'code 1',
        shippingMethodName: 'method 1',
        fulfillmentContact: null
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
                shippingMethodCode: 'code 1',
                shippingMethodName: 'method 1',
                fulfillmentContact: null
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await setShipmentMethod(context, givenVariables);

    expect(data).toStrictEqual(expectedData);
  });
});
