import { Context } from '@vue-storefront/core';
import { useSearchSuggestionsFactory, UseSearchSuggestionsFactoryParams } from '../factories/useSearchSuggestionsFactory';
import { SearchSuggestions } from '../types';

const params: UseSearchSuggestionsFactoryParams<SearchSuggestions> = {
  search: async (context:Context, params: { term: string }) => {
    const suggestionResponse = await context.$kibo.api.getSearchSuggestions(params);
    const suggestionGroups = suggestionResponse.data?.suggestionSearch?.suggestionGroups || [];
    const response = { products: [], categories: []} as SearchSuggestions;

    for (const suggestionGroup of suggestionGroups) {
      const suggestionType = suggestionGroup.name === 'Categories' ? 'categories' : 'products';
      const suggestion = suggestionGroup.suggestions?.map(({suggestion}) => suggestion);
      if (suggestion) {
        response[suggestionType] = [...suggestion];
      }
    }
    return response;
  }
};
export const useSearchSuggestions = useSearchSuggestionsFactory<SearchSuggestions>(params);
