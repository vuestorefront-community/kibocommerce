export default (shippingMethod: { price: number }): number => {
  return shippingMethod?.price;
};
