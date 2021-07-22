import createOrder from '../../src/api/createOrder';
import defaultMutation from '../../src/api/createOrder/defaultMutation';

describe('[kibo-api-client] createOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('create order', async () => {
    const givenVariables = {
      orderId: '11f8966065e3130001da7ee90000432a',
      orderActionInput: {
        actionName: 'Submit'
      }
    };

    const expectedData = {
      orderActionInput: {
        orderNumber: 'ON1',
        parentOrderId: 'POI1',
        parentOrderNumber: 'PON1',
        paymentStatus: 'Payed',
        submittedDate: '01/01/2021',
        total: 1000
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
              orderActionInput: {
                orderNumber: 'ON1',
                parentOrderId: 'POI1',
                parentOrderNumber: 'PON1',
                paymentStatus: 'Payed',
                submittedDate: '01/01/2021',
                total: 1000
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await createOrder(context, givenVariables);

    expect(data).toStrictEqual(expectedData);
  });
});
