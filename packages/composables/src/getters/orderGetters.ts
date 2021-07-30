import { UserOrderGetters } from '@vue-storefront/core';
import { Order, CrOrderItem } from '../../../api-client/src';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDate = (order: Order): string =>
  order?.auditInfo?.createDate
    ? new Date(order?.auditInfo?.createDate).toLocaleDateString()
    : '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getId = (order: Order): string =>
  order?.orderNumber?.toString() || order?.id;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatus = (order: Order): string => order?.status;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPrice = (order: Order): number | null => order?.total;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItems = (order: Order): any[] => order?.items || [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemSku = (item: CrOrderItem): string =>
  item?.product?.productCode;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemName = (item: CrOrderItem): string => item?.product?.name;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemQty = (item: CrOrderItem): number => item?.quantity;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemPrice = (item: CrOrderItem): number => item?.total || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getFormattedPrice = (price: number) =>
  price ? String(price) : '0';
  
// eslint-disable-next-line
function getOrdersTotal(orders: any): number {
  return 1;
}
export const orderGetters: UserOrderGetters<Order, CrOrderItem> = {
  getDate,
  getId,
  getStatus,
  getPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getFormattedPrice,
  getOrdersTotal
};
