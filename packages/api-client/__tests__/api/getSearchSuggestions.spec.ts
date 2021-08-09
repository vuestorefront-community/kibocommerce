import getSearchSuggestions from '../../src/api/getSearchSuggestions';
import defaultQuery from '../../src/api/getSearchSuggestions/defaultQuery';

describe('[kibo-api-client] getSearchSuggestions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets search suggestions', async () => {

    const params = {
      term: 'camera'
    };
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({variables, query}) =>{
          expect(variables).toEqual(params);
          expect(query).toEqual(defaultQuery);
          return { data: 'search response' };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await getSearchSuggestions(context, params) as any;
    expect(data).toBe('search response');
  });
});
