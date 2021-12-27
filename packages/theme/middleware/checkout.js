const canEnterPayment = (orderFulfillment) =>
  orderFulfillment && orderFulfillment.fulfillmentContact;

const canEnterReview = (orderBillingInfo) =>
  orderBillingInfo && Boolean(orderBillingInfo.billingContact);

export default async ({ app, $vsf }) => {
  const currentPath = app.context.route.fullPath.split('/checkout/')[1];

  if (!currentPath) return;

  const { data } = await $vsf.$kibo.api.getCart();
  const currentCart = data?.currentCart;
  const isActiveCart = currentCart?.items?.length > 0;

  const cartId = currentCart.id;

  const checkoutResponse = await $vsf.$kibo.api.getOrCreateCheckoutFromCart({
    cartId
  });
  const cartOrderId = checkoutResponse.data.order.id;

  switch (currentPath) {
    case 'shipping':
      if (!isActiveCart) {
        app.context.redirect('/');
      }
      break;
    case 'billing':
      const orderFulfillmentResponse = await $vsf.$kibo.api.getShippingAddress(
        {
          orderId: cartOrderId
        },
        null
      );
      const { orderFulfillmentInfo } = orderFulfillmentResponse.data;
      if (!canEnterPayment(orderFulfillmentInfo)) {
        app.context.redirect('/checkout/shipping');
      }
      break;
    case 'payment':
      const billingInfoResponse = await $vsf.$kibo.api.getBillingInfo(
        {
          orderId: cartOrderId
        },
        null
      );
      const { orderBillingInfo } = billingInfoResponse.data;
      if (!canEnterReview(orderBillingInfo)) {
        app.context.redirect('/checkout/billing');
      }
      break;
  }
};
