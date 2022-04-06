import { User } from '../../src/types';
import { useUser } from '../../src/useUser';

jest.mock('@vue-storefront/core', () => ({
  useUserFactory: (params) => () => params
}));

jest.mock('../../src/useCart', () => ({
  useCart: jest.fn()
}));

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

const context = {
  $kibo: {
    api: {
      getCurrentUser: jest.fn(() => {
        return {
          data: {
            customerAccount: currentUser
          }
        };
      }),
      logOutUser: jest.fn(),
      updateCustomerPersonalData: jest.fn(() => {
        return {
          data: {
            user: updatedUserDataResponse
          }
        };
      }),
      registerUser: jest.fn(() => {
        return {
          data: {
            account: {
              customerAccount: currentUser
            }
          }
        };
      }),
      logInUser: jest.fn(() => {
        return {
          data: {
            account: {
              customerAccount: currentUser
            }
          }
        };
      }),
      changePassword: jest.fn(() => {
        return {
          data: {
            user: true
          }
        };
      }),
      getCart: jest.fn(() => {
        return {
          data: {
            currentCart: {}
          }
        };
      })
    },
    config: {
      auth: {
        onTokenRead: () => true,
        onTokenRemove: jest.fn()
      }
    }
  },
  cart: {
    setCart: jest.fn()
  }
} as any;

describe('[kibo-composables] factoryParams', () => {
  it('load return customer data', async () => {
    const { load } = useUser() as any;
    const response = await load(context as any);
    response.isAnonymous
      ? expect(response).toStrictEqual(undefined)
      : expect(response).toStrictEqual(currentUser);
    expect(context.$kibo.api.getCurrentUser).toBeCalled();
  });

  it('logOut method calls API log out method', async () => {
    const { logOut } = useUser() as any;
    await logOut(context as any);
    expect(context.$kibo.api.logOutUser).toBeCalled();
  });

  it('updateUser return updated user', async () => {
    const { updateUser } = useUser() as any;
    const response = await updateUser(context as any, {
      currentUser,
      updatedUserData: receivedUpdatedUserDataParams
    });
    expect(response).toEqual(updatedUser);
    expect(context.$kibo.api.updateCustomerPersonalData).toBeCalled();
  });

  it('register method return a new customer', async () => {
    const registerParams = {
      emailAddress: 'test@email.com',
      firstName: 'Don',
      lastName: 'Jon',
      password: 'Password@1234'
    };
    const { register } = useUser() as any;
    const response = await register(context as any, registerParams);
    expect(response).toEqual(currentUser);
    expect(context.$kibo.api.registerUser).toBeCalled();
  });

  it('logIn method return a logged in customer', async () => {
    const { logIn } = useUser() as any;
    const response = await logIn(context as any, {
      username: 'test@email.com',
      password: 'test@1234'
    });
    expect(response).toEqual(currentUser);
    expect(context.$kibo.api.logInUser).toBeCalled();
    expect(context.$kibo.api.getCart).toBeCalled();
    expect(context.cart.setCart).toBeCalled();
  });

  describe('changePassword', () => {
    it('changes the password', async () => {
      const { changePassword } = useUser() as any;
      await changePassword(context as any, {
        currentUser,
        currentPassword: 'current@1234',
        newPassword: 'new@1234'
      });
      expect(context.$kibo.api.changePassword).toBeCalled();
      expect(context.$kibo.api.logInUser).toBeCalled();
    });
  });
});
