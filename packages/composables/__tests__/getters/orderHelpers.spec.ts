import { Order, CrOrderItem } from './../../../api-client/src/types/GraphQL';
import {
  getDate,
  getId,
  getStatus,
  getPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getFormattedPrice
} from './../../src/getters/orderGetters';

const item: CrOrderItem = {
  product: {
    productCode: 'product-code',
    isPackagedStandAlone: false,
    name: 'product-name'
  },
  quantity: 1,
  total: 1000,
  isAssemblyRequired: false
};

const order: Order = {
  id: '645ygdf',
  orderNumber: 1234,
  auditInfo: {
    createDate: new Date('8/1/2021').toLocaleDateString()
  },
  status: 'confirmed',
  total: 12345,
  items: [item]
} as any;

describe('[KIBO-getters] order getters', () => {
  it('returns default values', () => {
    expect(getDate(null)).toBe('');
    expect(getId(null)).toBe(undefined);
    expect(getStatus(null)).toBe(undefined);
    expect(getPrice(null)).toBe(undefined);
    expect(getItems(null)).toHaveLength(0);
    expect(getItemSku(null)).toBe(undefined);
    expect(getItemName(null)).toBe(undefined);
    expect(getItemQty(null)).toBe(undefined);
    expect(getItemPrice(null)).toBe(0);
    expect(getFormattedPrice(null)).toBe('0');
  });

  it('returns the order date', () => {
    expect(getDate(order)).toEqual('8/1/2021');
  });

  it('returns the orderNumber or Id', () => {
    if (order.orderNumber) expect(getId(order)).toBe('1234');
    else expect(getId(order)).toBe('645ygdf');
  });

  it('returns the order status', () => {
    expect(getStatus(order)).toEqual('confirmed');
  });

  it('returns the order price', () => {
    expect(getPrice(order)).toEqual(12345);
  });

  it('returns the order items', () => {
    expect(getItems(order)).toEqual([item]);
    expect(getItems(order)).toHaveLength(1);
  });

  it('returns the ItemSku', () => {
    expect(getItemSku(item)).toEqual('product-code');
  });

  it('returns the Item name', () => {
    expect(getItemName(item)).toEqual('product-name');
  });

  it('returns the Item quantity', () => {
    expect(getItemQty(item)).toEqual(1);
  });

  it('returns the Item price', () => {
    expect(getItemPrice(item)).toEqual(1000);
  });

  it('returns the Formatted price', () => {
    const price = 499;
    expect(getFormattedPrice(price)).toEqual('499');
  });
});
