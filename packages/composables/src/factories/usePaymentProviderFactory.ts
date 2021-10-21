import { Ref, computed } from '@vue/composition-api';
import {
    configureFactoryParams,
    Context,
    CustomQuery,
    FactoryParams,
    Logger,
    sharedRef,
} from '@vue-storefront/core';
import { UsePaymentProvider, UsePaymentProviderErrors } from '../types';

export interface UsePaymentProviderParams
    <STATE, PAYMENT_METHOD, API> {
    provide: (any);
    load: (context: Context, params: { state: Ref<STATE>, customQuery?: CustomQuery }) => Promise<STATE>;
    save: (context: Context, params: { state: Ref<STATE>, paymentMethod: PAYMENT_METHOD, customQuery?: CustomQuery }) => Promise<STATE>;
}

export const usePaymentProviderFactory = <STATE, PAYMENT_METHOD, API = any>(
    factoryParams: UsePaymentProviderParams<STATE, PAYMENT_METHOD, API>,
) => function usePaymentProvider(): UsePaymentProvider<STATE, PAYMENT_METHOD, API> {
    const loading: Ref<boolean> = sharedRef(false, 'usePaymentProvider-loading');
    const state: Ref<STATE> = sharedRef(null, 'usePaymentProvider-response');
    const _factoryParams = configureFactoryParams(factoryParams);
    const error: Ref<UsePaymentProviderErrors> = sharedRef({
        load: null,
        save: null,
    }, 'usePaymentProvider-error');

    const setState = (newState: STATE) => {
        state.value = newState;
    };

    const save = async ({ paymentMethod, customQuery = null }) => {
        try {
            loading.value = true;
            state.value = await _factoryParams.save({ paymentMethod, customQuery, state });
            error.value.save = null;
        } catch (err) {
            error.value.save = err;
        } finally {
            loading.value = false;
        }
    };

    const load = async ({ customQuery = null } = {}) => {
        try {
            loading.value = true;
            state.value = await _factoryParams.load({ customQuery, state });
            error.value.load = null;
        } catch (err) {
            error.value.load = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        state,
        loading: computed(() => loading.value),
        error: computed(() => error.value),
        load,
        save,
        setState,
    };
};