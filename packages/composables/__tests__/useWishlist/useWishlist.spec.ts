import useWishlist, { getWishLists } from '../../src/useWishlist';
import { Wishlist, WishlistProductParams } from './../../src/types/index';

jest.mock('@vue-storefront/core', () => ({
  useWishlistFactory: (params) => () => params
}));

jest.mock('../../src/useUser', () => ({
  useUser: jest.fn()
}));

const getWishlistMockResponse = {
  items: [
    {
      customerAccountId: 1130,
      name: '1130-abc',
      id: '121d19cc1fca8400018517210000432a',
      items: [
        {
          id: '7701351aa234427b8475ad88008164fa',
          quantity: 1,
          product: {
            productCode: 'MS-CAM-002',
            sku: null,
            variationProductCode: null,
            imageUrl:
              '//d1slj7rdbjyb5l.cloudfront.net/17194-21127/cms/21127/files/430aba55-b1ce-4bd0-bc09-8abcd2c6e8c0',
            name: 'GoPro Hero3 Helmet Cam',
            price: { price: 475, salePrice: null },
            options: [
              {
                attributeFQN: 'Tenant~optional-mount',
                name: 'Optional Mount',
                value: 'MS-CAM-004'
              }
            ]
          },
          isTaxable: false,
          isRecurring: false
        }
      ]
    }
  ]
};

const createWishlistMockResponse = {
  id: '121d19cc1fca8400018517210000432a',
  name: '1130-abc'
};

const createWishlistItemMockResponse = {
  id: '7701351aa234427b8475ad88008164fa',
  quantity: 1,
  product: {
    productCode: 'MS-CAM-002',
    isTaxable: true,
    isRecurring: null,
    isPackagedStandAlone: false
  }
};

const context = {
  $kibo: {
    api: {
      getWishList: jest.fn(() => {
        return {
          data: {
            wishlists: getWishlistMockResponse
          }
        };
      }),
      createWishList: jest.fn(() => {
        return {
          data: {
            createWishlist: createWishlistMockResponse
          }
        };
      }),
      createWishListItem: jest.fn(() => {
        return {
          data: {
            createWishlistItem: createWishlistItemMockResponse
          }
        };
      }),
      deleteWishListItem: jest.fn(() => {
        return {
          data: {
            deleteWishlistItem: true
          }
        };
      })
    },
    client: {},
    config: {}
  }
} as any;

describe('[Kibo-composables] useWishlist', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets the current wishlists', async () => {
    const response = await getWishLists(context);
    expect(context.$kibo.api.getWishList).toHaveBeenCalled();
    expect(response).toStrictEqual(getWishlistMockResponse);
  });

  it('loads wishlist', async () => {
    const { load } = useWishlist() as any;
    const response = await load(context);
    expect(context.$kibo.api.getWishList).toBeCalled();
    expect(response).toStrictEqual(getWishlistMockResponse.items[0]);
  });

  it('add item to wishlist', async () => {
    const product = {} as WishlistProductParams;
    const { addItem } = useWishlist() as any;
    const response = await addItem(context, {
      currentWishlist: {} as Wishlist,
      product
    });
    expect(context.$kibo.api.createWishListItem).toBeCalled();
    expect(context.$kibo.api.createWishListItem).toBeCalled();
    expect(response).toStrictEqual(getWishlistMockResponse.items[0]);
  });

  it('removes item from wishlist', async () => {
    const product = {
      isAssemblyRequired: false,
      quantity: 100
    };
    const { removeItem } = useWishlist() as any;
    const response = await removeItem(context, {
      currentWishlist: {} as Wishlist,
      product: product
    });
    expect(context.$kibo.api.deleteWishListItem).toBeCalled();
    expect(response).toStrictEqual(getWishlistMockResponse.items[0]);
  });

  it('should find if item is in wishlist', async () => {
    const mockProduct = {
      productCode: 'ABC',
      isPackagedStandAlone: false
    } as WishlistProductParams;
    const mockCurrentWishList = {
      items: [
        {
          id: 'abc',
          quantity: 1,
          product: {
            productCode: 'ABC',
            imageUrl: 'image-url',
            name: 'some-name',
            price: { price: 475, salePrice: null }
          },
          isTaxable: false,
          isRecurring: false
        }
      ]
    };
    const { isInWishlist } = useWishlist() as any;
    const response = isInWishlist(context, {
      currentWishlist: mockCurrentWishList,
      product: mockProduct
    });
    expect(response).toBe(true);
  });
});
