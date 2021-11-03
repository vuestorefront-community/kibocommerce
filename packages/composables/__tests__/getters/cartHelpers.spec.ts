import {
  CartItem,
  Cart,
  CrDiscount
} from './../../../api-client/src/types/GraphQL';
import {
  getTotals,
  getCartShippingPrice,
  getCartItems,
  getCartItemName,
  getCartItemImage,
  getCartItemPrice,
  getCartItemAttributes,
  getCartItemSku,
  getCartTotalItems,
  getFormattedPrice,
  getCoupons,
  getDiscounts,
  getCartItemQty
} from './../../src/getters/cartGetters';

const item: CartItem = {
  product: {
    name: 'product-name',
    imageUrl: 'image-url',
    sku: 'sku',
    upc: 'upc',
    productCode: 'product-code',
    price: {
      price: 100,
      salePrice: 200
    },
    options: [
      {
        name: 'optionname1',
        value: 'optionValue1'
      },
      {
        name: 'optionname2',
        value: 'optionValue2'
      },
      {
        name: 'other',
        value: 'otherValue'
      }
    ]
  },
  quantity: 1000
} as any;

const cart: Cart = {
  total: 100,
  subtotal: 100,
  shippingTotal: 40,
  items: [item],
  orderDiscounts: [
    {
      couponCode: 'some-coupon-1',
      discount: {
        id: 1234,
        name: 'discount-name-1'
      } as CrDiscount,
      impact: 10
    },
    {
      couponCode: 'some-coupon-2',
      discount: {
        id: 5678,
        name: 'discount-name-2'
      } as CrDiscount,
      impact: 20
    },
    {
      discount: {
        id: 9101,
        name: 'discount-name-3'
      } as CrDiscount,
      impact: 20,
      couponCode: null
    }
  ]
};

describe('[KIBO-getters] cart helpers', () => {
  it('returns default values', () => {
    expect(getCartItems(null)).toEqual([]);
  });

  it('returns cart Item name', () => {
    expect(getCartItemName(item)).toBe('product-name');
  });

  it('returns cart Item image', () => {
    expect(getCartItemImage(item)).toBe('image-url');
  });

  it('returns cart Item price', () => {
    expect(getCartItemPrice(item)).toStrictEqual({
      regular: 100,
      special: 200
    });
  });

  it('returns cart Item quantity', () => {
    expect(getCartItemQty(item)).toBe(1000);
  });

  it('returns cart Item Attributes', () => {
    const filterByAttributeName = ['optionname1', 'optionname2'];
    const attributes = {
      optionname1: 'optionValue1',
      optionname2: 'optionValue2'
    };
    expect(getCartItemAttributes(item, filterByAttributeName)).toStrictEqual(
      attributes
    );
  });

  it('returns cart Item Sku or upc or productCode', () => {
    if (item.product.sku) expect(getCartItemSku(item)).toBe('sku');
    else if (item.product.upc) expect(getCartItemSku(item)).toBe('upc');
    else expect(getCartItemSku(item)).toBe('product-code');
  });

  it('returns cart totals', () => {
    expect(getTotals(cart)).toEqual({
      total: 100,
      subtotal: 100
    });
  });

  it('returns cart shipping price', () => {
    expect(getCartShippingPrice(cart)).toEqual(40);
  });

  it('returns cart total items', () => {
    expect(getCartTotalItems(cart)).toEqual(1);
  });

  it('returns formatted price', () => {
    expect(getFormattedPrice(100)).toEqual('100');
  });

  it('returns coupons', () => {
    expect(getCoupons(cart)).toEqual([
      {
        id: '1234',
        name: 'discount-name-1',
        code: 'some-coupon-1',
        value: 10
      },
      {
        id: '5678',
        name: 'discount-name-2',
        code: 'some-coupon-2',
        value: 20
      }
    ]);
  });

  it('returns discounts', () => {
    expect(getDiscounts(cart)).toEqual([
      {
        id: '1234',
        name: 'discount-name-1',
        description: 'discount-name-1',
        code: 'some-coupon-1',
        value: 10
      },
      {
        id: '5678',
        name: 'discount-name-2',
        description: 'discount-name-2',
        code: 'some-coupon-2',
        value: 20
      },
      {
        id: '9101',
        name: 'discount-name-3',
        description: 'discount-name-3',
        code: null,
        value: 20
      }
    ]);
  });
});
