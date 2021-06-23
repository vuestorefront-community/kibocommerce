import logInUser from '../../src/api/logInUser';
import defaultMutation from '../../src/api/logInUser/defaultMutation';

describe('[kibo-api-client] logInUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates user session', async () => {
    const givenVariables = {
        username: 'kevin.watts@kibocommerce.com',
        password: '12345'
    };

    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(defaultMutation);
          return { data: 'user response' };
        }
      }
    };

    const { data } = await logInUser(context, givenVariables);
    expect(data).toBe('user response');
  });
});
