import logInUser from '../../src/api/logInUser';
import defaultMutation from '../../src/api/logInUser/defaultMutation';

const loginResponse = {
  accessToken: 'access token',
  accessTokenExpiration: 'access token expiration',
  refreshToken: 'refresh token',
  userId: 'userId',
  refreshTokenExpiration: 'refresh token expiration'
};

describe('[kibo-api-client] logInUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates user session', async () => {
    const givenVariables = {
      loginInput: {
        username: 'kevin.watts@kibocommerce.com',
        password: '12345'
      }
    };
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toStrictEqual(givenVariables);
          expect(mutation).toEqual(defaultMutation);

          return {
            data: {
              account: loginResponse
            }
          };
        },
        shopperAuthManager: {
          setTicket: (data) => {
            expect(data).toStrictEqual(loginResponse);
          }
        }
      }
    };

    const { data } = (await logInUser(
      context,
      givenVariables.loginInput
    )) as any;
    expect(data).toStrictEqual({ account: loginResponse });
  });
});
