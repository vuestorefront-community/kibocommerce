import { Context, CustomQuery } from '@vue-storefront/core';
import { SearchSuggestionResponse } from '../../types/Api';
import defaultQuery from './defaultQuery';

export default async function getSearchSuggestions (context:Context, params: {term: string}, customQuery?: CustomQuery) : Promise<SearchSuggestionResponse> {

  const { searchSuggestions } = context.extendQuery(customQuery,
    { searchSuggestions: { query: defaultQuery, variables: params } }
  );
  return await context.client.query({
    query: searchSuggestions.query,
    variables: searchSuggestions.variables
  });

}
