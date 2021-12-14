import { computed } from '@nuxtjs/composition-api';
import {
  configureFactoryParams,
  Context,
  FactoryParams,
  Logger,
  sharedRef,
} from '@vue-storefront/core';

export interface UseSearchSuggestionsErrors {
  search: Error;
}
export interface UseSearchSuggestionsFactoryParams<SEARCH_SUGGESTIONS>
  extends FactoryParams {
  search: (
    context: Context,
    params: { term: string }
  ) => Promise<SEARCH_SUGGESTIONS>;
}

export function useSearchSuggestionsFactory<SEARCH_SUGGESTIONS>(
  factoryParams: UseSearchSuggestionsFactoryParams<SEARCH_SUGGESTIONS>
) {
  return function useSearchSuggestions(): any {
    const loading = sharedRef(false, 'useSearchSuggestions-loading');
    const searchSuggestions = sharedRef(
      null,
      'useSearchSuggestions-searchSuggestions'
    );
    const error = sharedRef(
      {
        load: null,
      },
      'useSearchSuggestions-error'
    );
    const _factoryParams = configureFactoryParams(factoryParams);

    const search = async (params: { term: string }) => {
      Logger.debug('useSearchSuggestions/search', params);

      try {
        loading.value = true;
        searchSuggestions.value = await _factoryParams.search(params);
        error.value.load = null;
        return searchSuggestions;
      } catch (err) {
        error.value.load = err;
        Logger.error('useSearchSuggestions/search', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      search,
      searchSuggestions: computed(() => searchSuggestions.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value),
    };
  };
}
