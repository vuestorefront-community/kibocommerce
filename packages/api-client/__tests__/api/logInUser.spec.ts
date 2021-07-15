import logInUser from '../../src/api/logInUser';

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
        loginCustomerAndSetAuthTicket: (params) =>{
          expect(params).toEqual(givenVariables);
          return { data: 'user response' };
        }
      }
    };

    const { data } = await logInUser(context, givenVariables) as any;
    expect(data).toBe('user response');
  });
});
