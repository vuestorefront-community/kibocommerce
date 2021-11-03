import { useBilling } from '../../src/useBilling';

jest.mock('@vue-storefront/kibocommerce-api', () => ({
  setBillingInfo: () => {}
}));

jest.mock('../../src/useCart', () => ({
  useCart: jest.fn()
}));

jest.mock('@vue-storefront/core', () => ({
  useBillingFactory: (params) => () => params
}));

describe('[kibo-composables] useBilling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads billing address via request if checkout is present in context', async () => {
    const { load } = useBilling() as any;
    const loadedBillingAddress = 'loadedBillingAddress';
    const context = {
      checkout: {
        checkout: {
          value: {
            id: 'checkout-id'
          }
        },
        load: jest.fn(() => {})
      },
      $kibo: {
        api: {
          getBillingInfo: jest.fn(() =>{
            return {
              data: {
                orderBillingInfo: {
                  billingContact: 'loadedBillingAddress'
                }
              }
            };
          })
        }
      }
    };

    const response = await load(context, {});
    expect(context.checkout.load).toHaveBeenCalledTimes(0);
    expect(response).toBe(loadedBillingAddress);
    expect(context.$kibo.api.getBillingInfo).toHaveBeenCalled();
  });

  it('saves billing details, updates cart and returns billing details', async () => {
    const { save } = useBilling() as any;
    const newBillingAddress = 'newBillingAddress';
    const context = {
      checkout: {
        checkout: {
          value: {
            id: 'checkout-id'
          }
        }
      },
      $kibo: {
        api: {
          setBillingInfo: jest.fn(() =>{
            return {
              data: {
                updateOrderBillingInfo: {
                  billingContact: 'newBillingAddress'
                }
              }
            };
          })
        }
      }
    };

    const response = await save(context, { billingDetails: newBillingAddress });

    expect(response).toBe(newBillingAddress);
  });
});
