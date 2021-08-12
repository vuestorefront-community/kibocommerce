import getCMSContent from '../../src/api/getCMSContent';
import defaultQuery from '../../src/api/getCMSContent/defaultQuery';

describe('[kibo-api-client] getCMSContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets list of heroes', async () => {
    const givenVariables = {
      documentListName: 'hero_images@mozu',
      filter: 'properties.tags eq home'
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
          return {
            data: 'content response'
          };
        }
      },
      extendQuery: (_, args) => args
    };
    const { data } = await getCMSContent(context, givenVariables);
    expect(data).toStrictEqual('content response');
  });

  it('gets list of banners', async () => {
    const givenVariables = {
      documentListName: 'banners@mozu',
      filter: 'properties.tags eq home'
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
          return {
            data: 'content response'
          };
        }
      },
      extendQuery: (_, args) => args
    };
    const { data } = await getCMSContent(context, givenVariables);
    expect(data).toStrictEqual('content response');
  });
});
