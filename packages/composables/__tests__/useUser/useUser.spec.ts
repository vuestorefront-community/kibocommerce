import { User } from '../../src/types';
import { params } from '../../src/useUser';

const currentUser: User = {
  emailAddress: 'test@email.com',
  firstName: 'Don',
  lastName: 'Jon',
  id: 1074,
  userId: '4d36c4d44fde4595974ba862ce2faa7b',
  isAnonymous: false
};

const updatedUser = {
  accountId: 1074,
  customerAccountInput: {
    emailAddress: 'test@email.com',
    userName: 'test@email.com',
    firstName: 'Don',
    lastName: 'Jon',
    isAnonymous: false,
    isLocked: false,
    isActive: true,
    acceptsMarketing: false,
    hasExternalPassword: false,
    id: 1074,
    taxExempt: false
  }
} as any;

const context = {
  $kibo: {
    api: {
      getCurrentUser: jest.fn(() => ({ user: currentUser })),
      logOutUser: jest.fn(),
      updateCustomerPersonalData: jest.fn(() => ({ user: currentUser })),
      registerUser: jest.fn(() => ({ user: currentUser })),
      logInUser: jest.fn(() => ({ user: currentUser })),
      changePassword: jest.fn(() => ({ user: currentUser })),
      getCart: jest.fn(() => {})
    },
    config: {
      auth: {
        onTokenRead: () => true,
        onTokenRemove: jest.fn()
      }
    }
  },
  setCart: jest.fn()
} as any;

describe('[kibo-composables] factoryParams', () => {
  it('load return customer data', async () => {
    (context.$kibo.api.getCurrentUser as jest.Mock).mockReturnValueOnce({
      data: {
        customerAccount: currentUser
      }
    });
    const response = await params.load(context as any);
    response.isAnonymous
      ? expect(response).toStrictEqual(undefined)
      : expect(response).toStrictEqual(currentUser);
  });

  it('logOut method calls API log out method', async () => {
    await params.logOut(context as any);
    expect(context.$kibo.api.logOutUser).toHaveBeenCalled();
  });

  it('updateUser return updated user', async () => {
    const receivedUpdatedUserDataParams = {
      email: 'test@email.com',
      firstName: 'Don',
      lastName: 'Jon'
    } as any;

    const updatedUserDataResponse = {
      accountId: 1074,
      customerAccountInput: {
        emailAddress: receivedUpdatedUserDataParams.email,
        userName: receivedUpdatedUserDataParams.email,
        firstName: receivedUpdatedUserDataParams.firstName,
        lastName: receivedUpdatedUserDataParams.lastName,
        isAnonymous: false,
        isLocked: false,
        isActive: true,
        acceptsMarketing: false,
        hasExternalPassword: false,
        id: 1074,
        taxExempt: false
      }
    } as any;

    (context.$kibo.api
      .updateCustomerPersonalData as jest.Mock).mockReturnValueOnce({
      data: {
        user: updatedUserDataResponse
      }
    });
    expect(
      await params.updateUser(context as any, {
        currentUser,
        updatedUserData: receivedUpdatedUserDataParams
      })
    ).toEqual(updatedUser);
  });

  it('register method return a new customer', async () => {
    const registerParams = {
      emailAddress: 'test@email.com',
      firstName: 'Don',
      lastName: 'Jon',
      password: 'Password@1234'
    };

    (context.$kibo.api.registerUser as jest.Mock).mockReturnValueOnce({
      data: {
        account: {
          customerAccount: currentUser
        }
      }
    });
    expect(await params.register(context as any, registerParams)).toEqual(
      currentUser
    );
  });

  it('logIn method return a logged in customer', async () => {
    (context.$kibo.api.logInUser as jest.Mock).mockReturnValueOnce({
      customerAccount: currentUser
    });
    expect(
      await params.logIn(context as any, {
        username: 'test@email.com',
        password: 'test@1234'
      })
    ).toEqual(currentUser);
  });

  describe('changePassword', () => {
    it('changes the password', async () => {
      (context.$kibo.api.changePassword as jest.Mock).mockReturnValueOnce({
        data: {
          user: true
        }
      });

      await params.changePassword(context as any, {
        currentUser,
        currentPassword: 'current@1234',
        newPassword: 'new@1234'
      });
      expect(context.$kibo.api.logInUser).toBeCalled();
    });
  });
});
