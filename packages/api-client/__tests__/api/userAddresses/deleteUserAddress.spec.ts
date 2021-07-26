import deleteUserAddress from '../../../src/api/deleteUserAddress';
import defaultMutation from '../../../src/api/deleteUserAddress/defaultMutation';

describe('[kibo-api-client] deleteUserAddress', () => {
  it('deletes a user address', async () => {
    const params = {
      accountId: 123,
      contactId: 123
    };

    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ variables, mutation }) => {
          expect(mutation).toEqual(defaultMutation);
          expect(variables).toEqual(params);

          return { data: 'delete user address response' };
        }
      }
    };

    const { data } = await deleteUserAddress(context, params);

    expect(data).toBe('delete user address response');
  });
});
