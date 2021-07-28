import { Address } from './../../../theme/tests/e2e/types/address';
import { CustomQuery } from '@vue-storefront/core';
import { getOrderId } from './../../src/useShipping/index';
import { params } from '../../src/useShipping';

const context = {
  $kibo: {
    api: {
      getOrCreateCheckoutFromCart: jest.fn(() => {}),
      getShippingAddress: jest.fn(() => {}),
      setShippingAddress: jest.fn(() => {}),
      getCart: jest.fn(() => {})
    },
    config: {
      auth: {
        onTokenRead: () => true,
        onTokenRemove: jest.fn()
      }
    }
  }
} as any;

describe('[Kibo-composables] useShipping', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets orderId if not already present', async () => {
    const currentCartId = '12345678';
    const orderIdResponse = '87654321';

    (context.$kibo.api.getCart as jest.Mock).mockReturnValueOnce({
      data: {
        currentCart: {
          id: currentCartId
        }
      }
    });

    (context.$kibo.api
      .getOrCreateCheckoutFromCart as jest.Mock).mockReturnValueOnce({
      data: {
        order: {
          id: orderIdResponse
        }
      }
    });

    const orderId = await getOrderId(context);
    expect(orderId).toBe(orderIdResponse);
  });

  it('loads shipping address', async () => {
    jest.mock('../../src/useShipping', () => ({
      getOrderId: () => '87654321'
    }));

    let customQuery: CustomQuery;
    const fulfillmentContactResponseMockWithTypename = {
      __typename: 'typename',
      id: '1234',
      firstName: 'John',
      address: {
        __typename: 'typename',
        address1: 'Test Address'
      },
      phoneNumbers: {
        __typename: 'typename',
        home: '+1 432 6789'
      }
    };

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
    const cartOrderId = await getOrderId(context);

    expect(cartOrderId).toBe('87654321');

    (context.$kibo.api.getShippingAddress as jest.Mock).mockReturnValue({
      data: {
        orderFulfillmentInfo: {
          fulfillmentContact: fulfillmentContactResponseMockWithTypename
        }
      }
    });

    const shippingResponse = await context.$kibo.api.getShippingAddress(
      { orderId: cartOrderId },
      customQuery
    );

    expect(context.$kibo.api.getShippingAddress).toBeCalledWith(
      {
        orderId: '87654321'
      },
      customQuery
    );

    expect(context.$kibo.api.getShippingAddress).toHaveBeenCalledTimes(1);

    expect(shippingResponse).toStrictEqual({
      data: {
        orderFulfillmentInfo: {
          fulfillmentContact: fulfillmentContactResponseMockWithTypename
        }
      }
    });

    expect(
      shippingResponse.data.orderFulfillmentInfo.fulfillmentContact
    ).toStrictEqual(fulfillmentContactResponseMockWithTypename);

    const fulfillmentContactResponse = await params.load(context, {
      customQuery
    });

    expect(fulfillmentContactResponse).toStrictEqual(
      fulfillmentContactResponseMock
    );
  });

  it('saves shipping address', async () => {
    jest.mock('../../src/useShipping', () => ({
      getOrderId: () => '87654321'
    }));

    let customQuery: CustomQuery;

    const shippingDetailsMock: Address = {
      streetName: 'Test street',
      apartment: 'Test Apartment',
      city: 'Dallas',
      state: 'Texas',
      country: 'US',
      zipcode: '75001',
      phone: '+1 987 654321'
    };
    const cartOrderId = await getOrderId(context);

    expect(cartOrderId).toBe('87654321');

    const updateMode = 'ApplyAndCommit';
    const fulfillmentInfoInput = { fulfillmentContact: shippingDetailsMock };

    (context.$kibo.api.setShippingAddress as jest.Mock).mockReturnValue({
      data: {
        updateOrderFulfillmentInfo: {
          fulfillmentContact: shippingDetailsMock
        }
      }
    });

    const shippingResponse = await context.$kibo.api.setShippingAddress(
      {
        orderId: cartOrderId,
        updateMode,
        fulfillmentInfoInput
      },
      customQuery
    );

    const updatedAddress =
      shippingResponse?.data.updateOrderFulfillmentInfo.fulfillmentContact;

    expect(updatedAddress).toStrictEqual(shippingDetailsMock);

    const response = await params.save(context, {
      params: undefined,
      shippingDetails: shippingDetailsMock,
      customQuery
    });

    expect(response).toStrictEqual({
      addresses: [updatedAddress]
    });
  });
});
