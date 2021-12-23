import { computed } from '@nuxtjs/composition-api';
import {
  configureFactoryParams,
  Context,
  FactoryParams,
  Logger,
  sharedRef,
} from '@vue-storefront/core';

export interface UseCheckoutErrors {
  load: Error;
}
export interface UseCheckoutFactoryParams<CHECKOUT> extends FactoryParams {
  load: (context: Context, params: { cartId: string }) => Promise<CHECKOUT>;
}

export function useCheckoutFactory<CHECKOUT>(
  factoryParams: UseCheckoutFactoryParams<CHECKOUT>
) {
  return function useCheckout(): any {
    const loading = sharedRef(false, 'useCheckout-loading');
    const checkout = sharedRef(null, 'useCheckout-checkout');
    const error = sharedRef(
      {
        load: null,
      },
      'useCheckout-error'
    );
    const _factoryParams = configureFactoryParams(factoryParams);

    const load = async (params: { cartId: string }) => {
      Logger.debug('useCheckout/load', params);

      try {
        loading.value = true;
        checkout.value = await _factoryParams.load(params);
        error.value.load = null;
      } catch (err) {
        error.value.load = err;
        Logger.error('useCheckout/load', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      load,
      checkout: computed(() => checkout.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value),
    };
  };
}
