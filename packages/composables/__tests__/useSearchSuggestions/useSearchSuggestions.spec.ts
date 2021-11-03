import { useSearchSuggestions } from '../../src/useSearchSuggestions';

const product = {
  productCode: 'MS-CAM-001',
  productName: 'Garmin VIRB Elite Action Camera',
  content: {
    productName: 'Garmin VIRB Elite Action Camera'
  }
};
const category = {
  categoryCode: '37',
  content: {
    name: 'Cameras'
  }
};
const searchSuggestionReponse = {
  data: {
    suggestionSearch: {
      suggestionGroups: [
        {
          name: 'Pages',
          suggestions: [
            {
              suggestion: product
            }
          ]
        },
        {
          name: 'Categories',
          suggestions: [
            {
              suggestion: category
            }
          ]
        }
      ]
    }
  }
};
const searchSuggestionMockResponse = {
  products: [product],
  categories: [category]
};
const context = {
  $kibo: {
    api: {
      getSearchSuggestions: jest.fn(() => Promise.resolve(searchSuggestionReponse))
    }
  }
};
jest.mock('../../src/factories/useSearchSuggestionsFactory', () => ({
  useSearchSuggestionsFactory: (params) => () => params
}));
describe('[Kibo-composables] useSearchSuggestions', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads search suggestions', async () => {
    const { search } = useSearchSuggestions() as any;
    const response = await search(context, {term: 'camera'});
    expect(response).toEqual(searchSuggestionMockResponse);
  });

});
