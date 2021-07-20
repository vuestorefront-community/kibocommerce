import updateCustomerPersonalData from '../../src/api/updateCustomerPersonalData';
import updateCustomerData from '../../src/api/updateCustomerPersonalData/defaultMutation';

describe('[kibo-api-client] updateCustomerPersonalData', () => {
  it('updates user account details', async () => {
    const givenVariables = {
      accountId: 1074,
      customerAccountInput: {
        emailAddress: 'chandradeepta.laha@gmail.com',
        userName: 'chandradeepta.laha@gmail.com',
        firstName: 'chandradeepta',
        lastName: 'Laha',
        isAnonymous: false,
        isLocked: false,
        isActive: true,
        acceptsMarketing: false,
        hasExternalPassword: false,
        id: 1074,
        taxExempt: false
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
          expect(mutation).toEqual(updateCustomerData);

          return {
            data: {
              user: {
                emailAddress: 'chandradeepta.laha@gmail.com',
                firstName: 'chandradeepta',
                lastName: 'Laha'
              }
            }
          };
        }
      }
    };

    const { data } = await updateCustomerPersonalData(context, givenVariables);
    expect(data).toStrictEqual({
      user: {
        emailAddress: 'chandradeepta.laha@gmail.com',
        firstName: 'chandradeepta',
        lastName: 'Laha'
      }
    });
  });
});
