import { ShippingMethod } from '@vue-storefront/kibocommerce-api';

export default (shippingMethod: {price: number}): number => {
  return shippingMethod?.price;
};
