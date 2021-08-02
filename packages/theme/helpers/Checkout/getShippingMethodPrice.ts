import { ShippingMethod } from '@vue-storefront/kibo-api';

export default (shippingMethod: {price: number}): number => {
  return shippingMethod?.price;
};
