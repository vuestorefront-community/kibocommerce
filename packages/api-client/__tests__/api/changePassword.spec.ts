import changePassword from '../../src/api/changePassword';
import changeCustomerAccountPassword from '../../src/api/changePassword/defaultMutation';

describe('[kibo-api-client] changePassword', () => {
  it('changes customer account password', async () => {
    const givenVariables = {
      accountId: 1074,
      unlockAccount: true,
      userId: '4d36c4d44fde4595974ba862ce2faa7b',
      passwordInfoInput: {
        oldPassword: 'OldPassword@1234',
        newPassword: 'NewPassword@1234'
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
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(changeCustomerAccountPassword);
          return true;
        }
      }
    };

    const response = await changePassword(context, givenVariables);
    expect(response).toBe(true);
  });
});
