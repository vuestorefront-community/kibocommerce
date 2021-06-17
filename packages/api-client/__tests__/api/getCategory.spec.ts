import getCategory from '../../src/api/getCategory';
import defaultQuery, {categoryTreeQuery } from '../../src/api/getCategory/defaultQuery';

describe('[kibo-api-client] getCategory', () => {
  it('fetches categories without search parameters (category tree query)', async () => {
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        query: ({ variables, query }) => {
          expect(query).toEqual(categoryTreeQuery);

          return { data: 'category response' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getCategory(context, null);

    expect(data).toBe('category response');
  });

  it('fetches categories with default query', async () => {
    const givenVariables = {
      filter: 'content.slug eq footwear'
    };

    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);
          return { data: 'category response' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getCategory(context, { slug: 'footwear' });

    expect(data).toBe('category response');
  });
});
