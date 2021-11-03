import registerUser from '../../src/api/registerUser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createAccountMutation, createAccountLoginMutation} from '../../src/api/registerUser/defaultMutation';

describe('[kibo-api-client] registerUser', () => {
  it('creates user account', async () => {
    const params = {
      account: {
        firstName: 'Kevin',
        lastName: 'Watts',
        emailAddress: 'kevin.watts@kibocommerce.com',
        isActive: true,
        acceptsMarketing: true,
        id: 0,
      },
      password: 'xxxxx',
      isImport: false
    };
    const expectedVariables = {
      createAccountInput: params.account
    };
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ variables, mutation }) => {
          if (mutation === createAccountMutation) {
            expect(variables).toEqual(expectedVariables);
          }
          return { data: 'user response' };
        }
      }
    };

    const { data } = await registerUser(context, params);
    expect(data).toBe('user response');
  });
});
