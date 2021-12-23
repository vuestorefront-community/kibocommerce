import { Wishlist, MockWishlistProductParams } from '../../src/types';
import {
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getItemSku,
  getTotals,
  getShippingPrice,
  getTotalItems,
  getFormattedPrice
} from '../../src/getters/wishlistGetters';

const wishlist: Wishlist = {
  customerAccountId: 1105,
  id: '1216bdee1fca84000185171b0000432a',
  items: [
    {
      id: '1b159c10adb0484e9bddad8800572096',
      total: 125,
      subtotal: 125,
      product: {
        imageUrl:
          '//d1slj7rdbjyb5l.cloudfront.net/17194-21127/cms/21127/files/025d0466-6542-4c69-b625-55b421d9f4e0',
        name: 'Motion Shell Pants',
        options: [
          {
            attributeFQN: 'Tenant~color',
            name: 'Color',
            value: 'Blue'
          },
          {
            attributeFQN: 'Tenant~size',
            name: 'Size',
            value: 'L'
          }
        ],
        price: {
          price: 125,
          salePrice: null
        },
        productCode: 'MS-PANT-004',
        sku: null,
        variationProductCode: 'MS-PANT-004-1'
      },
      quantity: 1
    }
  ],
  name: '1105-abc'
};

const product: MockWishlistProductParams = {
  items: {
    imageUrl:
      '//d1slj7rdbjyb5l.cloudfront.net/17194-21127/cms/21127/files/025d0466-6542-4c69-b625-55b421d9f4e0',
    name: 'Motion Shell Pants',
    options: [
      {
        attributeFQN: 'Tenant~color',
        name: 'color',
        value: 'Blue'
      },
      {
        attributeFQN: 'Tenant~size',
        name: 'size',
        value: 'L'
      }
    ],
    price: {
      price: 125,
      salePrice: 200
    },
    productCode: 'MS-PANT-004',
    sku: 'sku',
    variationProductCode: 'MS-PANT-004-1',
    quantity: 1
  }
};

describe('[KIBO-getters] wishlist helpers', () => {
  it('returns default values', () => {
    expect(getItems(wishlist)).toEqual([
      {
        imageUrl:
          '//d1slj7rdbjyb5l.cloudfront.net/17194-21127/cms/21127/files/025d0466-6542-4c69-b625-55b421d9f4e0',
        name: 'Motion Shell Pants',
        options: [
          {
            attributeFQN: 'Tenant~color',
            name: 'Color',
            value: 'Blue'
          },
          {
            attributeFQN: 'Tenant~size',
            name: 'Size',
            value: 'L'
          }
        ],
        price: {
          price: 125,
          salePrice: null
        },
        productCode: 'MS-PANT-004',
        sku: null,
        variationProductCode: 'MS-PANT-004-1'
      }
    ]);
  });

  it('returns Wishlist Item name', () => {
    expect(getItemName(product.items)).toBe('Motion Shell Pants');
  });

  it('returns Wishlist Item image', () => {
    expect(getItemImage(product.items)).toBe(
      '//d1slj7rdbjyb5l.cloudfront.net/17194-21127/cms/21127/files/025d0466-6542-4c69-b625-55b421d9f4e0'
    );
  });

  it('returns Wishlist Item price', () => {
    expect(getItemPrice(product.items)).toStrictEqual({
      regular: 125,
      special: 200
    });
  });

  it('returns Wishlist Item quantity', () => {
    expect(getItemQty(product.items)).toBe(1);
  });

  it('returns Wishlist Item Attributes', () => {
    const filterByAttributeName = ['size', 'color'];
    const attributes = {
      size: 'L',
      color: 'Blue'
    };
    expect(
      getItemAttributes(product.items, filterByAttributeName)
    ).toStrictEqual(attributes);
  });

  it('returns Wishlist Item Sku', () => {
    expect(getItemSku(product.items)).toBe('sku');
  });

  it('returns Wishlist totals', () => {
    expect(getTotals(wishlist)).toEqual({
      total: 125,
      subtotal: 125
    });
  });

  it('returns Wishlist shipping price', () => {
    expect(getShippingPrice(wishlist)).toEqual(0);
  });

  it('returns Wishlist total items', () => {
    expect(getTotalItems(wishlist)).toEqual(1);
  });

  it('returns formatted price', () => {
    expect(getFormattedPrice(100)).toEqual('');
  });
});
