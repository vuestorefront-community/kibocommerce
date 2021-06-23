import registerUser from '../../src/api/registerUser';
import { createAccountMutation, createAccountLoginMutation} from '../../src/api/registerUser/defaultMutation';

describe('[kibo-api-client] registerUser', () => {
  it('creates user account', async () => {
    const givenVariables = {
        firstName: 'Kevin',
        lastName: 'Watts',
        email: 'kevin.watts@kibocommerce.com',
        password: 'xxxxx',
        isImport: false
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
          expect(mutation).toEqual(createAccountMutation);

          return { data: 'user response' };
        }
      }
    };

    const { data } = await registerUser(context, givenVariables);
    expect(data).toBe('user response');
  });
});
