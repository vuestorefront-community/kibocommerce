import getShipmentMethod from '../../../src/api/shipmentMethod/getShipmentMethod';
import defaultQuery from '../../../src/api/shipmentMethod/getShipmentMethod/defaultQuery';

describe('[kibo-api-client] getShipmentMethod', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets shipment method by OrderId', async () => {
    const params = {
      orderId: '11f6cca965e3130001da7d6c0000432a'
    };

    const expectedData = {
      orderShipmentMethods: [
        {
          shippingMethodCode: 'd77e1a876e3a47718a1ca58a008c7b49',
          shippingMethodName: 'Custom Flat Rate',
          shippingZoneCode: 'United States',
          isValid: true,
          messages: [],
          data: null,
          currencyCode: 'USD',
          price: 15
        }
      ]
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
          return {
            data: {
              orderShipmentMethods: [
                {
                  shippingMethodCode: 'd77e1a876e3a47718a1ca58a008c7b49',
                  shippingMethodName: 'Custom Flat Rate',
                  shippingZoneCode: 'United States',
                  isValid: true,
                  messages: [],
                  data: null,
                  currencyCode: 'USD',
                  price: 15
                }
              ]
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await getShipmentMethod(context, params);

    expect(data).toStrictEqual(expectedData);
  });
});
