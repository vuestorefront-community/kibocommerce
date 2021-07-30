import { Address } from './../../../theme/tests/e2e/types/address';
import { CustomQuery } from '@vue-storefront/core';
import useShipping from '../../src/useShipping';

jest.mock('@vue-storefront/core', () => ({
  useShippingFactory: (params) => () => params
}));

jest.mock('../../src/useCart', () => ({
  useCart: jest.fn()
}));

const fulfillmentContactResponseMock = {
  id: '1234',
  firstName: 'John',
  address: {
    address1: 'Test Address'
  },
  phoneNumbers: {
    home: '+1 432 6789'
  }
};

const shippingDetailsMock: any = {
  streetName: 'Test street',
  apartment: 'Test Apartment',
  city: 'Dallas',
  state: 'Texas',
  country: 'US',
  zipcode: '75001',
  phone: '+1 987 654321'
};

const shippingDetailsMockResponse: Address = {
  streetName: 'Test street response',
  apartment: 'Test Apartment response',
  city: 'Dallas',
  state: 'Texas',
  country: 'US',
  zipcode: '75001',
  phone: '+1 987 654321'
};

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
      getOrCreateCheckoutFromCart: jest.fn(() => {}),
      getShippingAddress: jest.fn(() => {
        return {
          data: {
            orderFulfillmentInfo: {
              fulfillmentContact: fulfillmentContactResponseMock
            }
          }
        };
      }),
      setShippingAddress: jest.fn(() => {
        return {
          data: {
            updateOrderFulfillmentInfo: {
              fulfillmentContact: shippingDetailsMockResponse
            }
          }
        };
      })
    }
  }
} as any;

describe('[Kibo-composables] useShipping', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads shipping address if checkout is present in context', async () => {
    const { load } = useShipping() as any;
    const loadCartOrderId = 'checkout-id';
    const customQuery: CustomQuery = {};

    expect(context.checkout.checkout.value.id).toBe(loadCartOrderId);
    const response = await load(context, { customQuery });
    expect(response).toBe(fulfillmentContactResponseMock);
    expect(context.$kibo.api.getShippingAddress).toBeCalled();
  });

  it('saves shipping address', async () => {
    const { save } = useShipping() as any;
    const saveCartOrderId = 'checkout-id';
    const updateMode = 'ApplyAndCommit';
    const customQuery: CustomQuery = {};

    const fulfillmentInfoInput = { fulfillmentContact: shippingDetailsMock };
    expect(context.checkout.checkout.value.id).toBe(saveCartOrderId);

    const shippingDetailsMockParams = {
      ...shippingDetailsMock,
      isDefault: true
    };
    const response = await save(context, {
      shippingDetails: shippingDetailsMockParams,
      customQuery
    });
    expect(response).toStrictEqual({ addresses: [shippingDetailsMockResponse] });
    expect(context.$kibo.api.setShippingAddress).toBeCalled();
    expect(context.$kibo.api.setShippingAddress).toBeCalledWith(
      {
        orderId: saveCartOrderId,
        updateMode: updateMode,
        fulfillmentInfoInput: fulfillmentInfoInput
      },
      customQuery
    );
  });
});
