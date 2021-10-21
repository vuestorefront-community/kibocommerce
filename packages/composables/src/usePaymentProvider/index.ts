import { useVSFContext, Context } from '@vue-storefront/core';
import { useCart } from '../useCart';
import { usePaymentProviderFactory, UsePaymentProviderParams } from '../factories/usePaymentProviderFactory';
import { useCheckout } from '../useCheckout';

export const getAvailablePaymentMethods = () => {
    const paymentMethodResponse = [
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
    return paymentMethodResponse;
};

export const getData = async (creditCardFormData, paymentConfig) => {
    try {
        const url = `${paymentConfig.tokenizationUrl}/payments/commerce/payments/cards/`;
        const tenantId = paymentConfig.hostUrl
            .split('//')[1]
            .split('-')[0]
            .toString().substring(1);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'x-vol-tenant': tenantId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creditCardFormData)
        });
        const tokenizedCCData = await res.json();
        if (tokenizedCCData.isSuccessful) {
            return tokenizedCCData;
        }
    } catch (e) {
        console.error(e);
    }
};

const factoryParams: UsePaymentProviderParams<any, any, any> = {
    provide() {
        const {
            $kibo: { config }
        } = useVSFContext();
        return {
            order: useCheckout(),
            cart: useCart(),
            config: config
        };
    },

    load: async (context: Context) => {
        return getAvailablePaymentMethods();
    },

    save: async (context: Context, { paymentMethod }) => {
        const orderId = context.order.checkout.value.id;
        const paymentConfig = context.config.paymentConfig;

        const { cardNumber, cardType, cardholderName, cvv } = paymentMethod.creditCardFormData;
        const ccData = { cardNumber, cardType, cardholderName, cvv };

        let paymentActionObjectParams;

        if (paymentMethod.code === 'creditCard') {
            const tokenizedData = await getData(
                ccData,
                paymentConfig
            );
            const ccPaymentServiceCardId = tokenizedData.id;
            const ccNumberPart = tokenizedData.numberPart;

            paymentActionObjectParams = {
                paymentType: 'CreditCard',
                card: {
                    paymentServiceCardId: ccPaymentServiceCardId,
                    isUsedRecurring: false,
                    nameOnCard: paymentMethod.creditCardFormData.cardholderName,
                    isCardInfoSaved: false,
                    isTokenized: true,
                    paymentOrCardType: paymentMethod.creditCardFormData.cardType,
                    cardNumberPartOrMask: ccNumberPart,
                    expireMonth: parseInt(paymentMethod.creditCardFormData.expireMonth),
                    expireYear: parseInt(paymentMethod.creditCardFormData.expireYear)
                }
            };
        }
        else if (paymentMethod.code === 'checkByMail') {
            paymentActionObjectParams = {
                paymentType: 'Check',
                check: { checkNumber: 'VSF123123' }
            };
        }

        const paymentAction = {
            currencyCode: 'USD',
            amount: paymentMethod.cartTotal,
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
    }
};

export const usePaymentProvider = usePaymentProviderFactory<any, any, any>(factoryParams);
