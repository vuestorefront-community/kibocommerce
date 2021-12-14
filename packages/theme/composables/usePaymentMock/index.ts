import { computed } from '@nuxtjs/composition-api';
import { sharedRef, useVSFContext, Logger } from '@vue-storefront/core';

export const usePaymentMock = (): any => {
  const context = useVSFContext();
  const status = sharedRef(null, 'usePaymentMock-status');
  const loading = sharedRef(false, 'usePaymentMock-loading');
  const error = sharedRef({ mockPay: null }, 'usePaymentMock-error');

  const getOrderId = async (context) => {
    const cartResponse = await context.$kibo.api.getCart();
    const cartId = cartResponse.data?.currentCart?.id;
    if (!cartId) {
      return '';
    }
    const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart(
      { cartId }
    );
    return checkoutResponse.data?.order?.id;
  };

  const buildMockPaymentParams = ({
    billingDetails,
    orderId,
    amount = 1000,
  }) => {
    const billingContact = { ...billingDetails.value };
    if (billingContact) {
      delete billingContact.__typename;
      delete billingContact.phoneNumbers.__typename;
      delete billingContact.address.__typename;
    }
    const paymentAction = {
      currencyCode: 'USD',
      amount: amount,
      newBillingInfo: {
        billingContact: { ...billingContact },
        check: { checkNumber: 'VSF123123' },
        paymentWorkflow: 'Mozu',
        paymentType: 'Check',
        isSameBillingShippingAddress: false,
      },
    };
    return { orderId, paymentAction };
  };

  const mockPay = async (params) => {
    Logger.debug('usePaymentMock/mockPay', params);
    try {
      loading.value = true;
      console.log(params);
      const orderId = await getOrderId(context);
      const addPaymentMethodAction = buildMockPaymentParams({
        ...params,
        orderId,
      });
      status.value = await context.$kibo.api.addPaymentMethodToCheckout(
        addPaymentMethodAction
      );
      error.value.mockPay = null;
    } catch (err) {
      error.value.search = err;
      Logger.error('usePaymentMock/add', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    mockPay,
    status: computed(() => status.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
  };
};
