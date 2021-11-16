import { getAvailablePaymentMethods } from '../../src/usePaymentProvider';

jest.mock('@vue-storefront/core', () => ({
  usePaymentProviderFactory: (params) => () => params
}));

jest.mock('../../src/useCart', () => ({
  useCart: jest.fn()
}));

const availablePaymentMock = [
  {
    id: 'checkByMail',
    name: 'Check by Mail',
    description: 'Check by mail description'
  },
  {
    id: 'creditCard',
    name: 'Credit Card',
    description: 'Credit Card Description'
  }
];

const dataMock = {
  createOrderPaymentAction: {
    id: '1260863c58de0500014293520000432a'
  }
};

const creditCardMock = {
  cardholderName: 'Test User',
  cardNumber: '4111111111111111',
  cardType: 'VISA',
  currentYear: 2021,
  cvv: '677',
  expireMonth: '1',
  expireYear: 2025,
  success: true,
  errors: []
};

const paymentMethodMock = {
  code: 'mocked-id-2',
  creditCardFormData: creditCardMock,
};

const tokenizedMock = {
  balance: 0,
  id: '00604038bc194d2db5de0d399cd15bbb',
  isSuccessful: true,
  numberPart: '************1111'
};

const context = {
  getData: jest.fn(() => {
    return {
      balance: 0,
      id: '00604038bc194d2db5de0d399cd15bbb',
      isSuccessful: true,
      numberPart: '************1111'
    };
  }),
  order: {
    checkout: {
      value: {
        id: '1260863c58de0500014293520000432a'
      }
    }
  },
  config: {
    paymentConfig: {
      hostUrl: 'https://t17194-s21127.dev10.kubedev.kibo-dev.com',
      tokenizationUrl: 'https://payment.dev10.dev.kibocommerce.com',
    }
  },
  $kibo: {
    api: {
      addPaymentMethodToCheckout: jest.fn(() => {
        return {
          data: {
            createOrderPaymentAction: {
              id: '1260863c58de0500014293520000432a'
            }
          }
        };
      })
    }
  }
} as any;

describe('[Kibo-composables] usePaymentProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should load the payment methods', () => {
    const paymentMethods = getAvailablePaymentMethods();
    expect(paymentMethods).toStrictEqual(availablePaymentMock);
  });

  it('should save the order-id, to place the order', async () => {
    const orderId = context.order.checkout.value.id;
    const paymentConfig = context.config.paymentConfig;
    let paymentActionObjectParams;

    if (paymentMethodMock.code === 'mocked-id-2') {
      const tokenizedData = await context.getData(
        creditCardMock,
        paymentConfig
      );
      expect(tokenizedData).toStrictEqual(tokenizedMock);

      paymentActionObjectParams = {
        paymentType: 'CreditCard',
        card: {
          paymentServiceCardId: tokenizedMock.id,
          isUsedRecurring: false,
          nameOnCard: paymentMethodMock.creditCardFormData.cardholderName,
          isCardInfoSaved: false,
          isTokenized: true,
          paymentOrCardType: paymentMethodMock.creditCardFormData.cardType,
          cardNumberPartOrMask: tokenizedMock.numberPart,
          expireMonth: paymentMethodMock.creditCardFormData.expireMonth,
          expireYear: paymentMethodMock.creditCardFormData.expireYear
        }
      };
    } else {
      paymentActionObjectParams = {
        paymentType: 'Check',
        check: { checkNumber: 'VSF123123' }
      };
    }

    const paymentAction = {
      currencyCode: 'USD',
      amount: 1000,
      newBillingInfo: {
        ...paymentActionObjectParams,
        paymentWorkflow: 'Mozu',
        isSameBillingShippingAddress: false
      }
    };

    const paymentMethodParams = {
      orderId,
      paymentAction
    };

    const { data } = await context.$kibo.api.addPaymentMethodToCheckout(
      paymentMethodParams
    );

    expect(context.$kibo.api.addPaymentMethodToCheckout).toBeCalledWith(paymentMethodParams);
    expect(data).toEqual(dataMock);
  });
});
