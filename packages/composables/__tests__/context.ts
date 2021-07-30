export const context = {
  $kibo: {
    api: {
      addPaymentToCheckout: jest.fn(),
      addUserAddress: jest.fn(),
      addToCart: jest.fn(),
      applyCoupon: jest.fn(),
      clearCart: jest.fn(),
      getCart: jest.fn(),
      removeCoupon: jest.fn(),
      removeFromCart: jest.fn(),
      updateItemQuantity: jest.fn(),
      updateItemQty: jest.fn(),
      changePassword: jest.fn(),
      deleteUserAddress: jest.fn(),
      getBillingInfo: jest.fn(),
      getCategory: jest.fn(),
      getCheckout: jest.fn(),
      getCurrentUser: jest.fn(),
      getOrCreateCheckoutFromCart: jest.fn(),
      getProduct: jest.fn(),
      getUserAddresses: jest.fn(),
      logInUser: jest.fn(),
      logOutUser: jest.fn(),
      makeOrder: jest.fn(),
      registerUser: jest.fn(),
      searchOrders: jest.fn(),
      setBillingInfo: jest.fn(),
      getShipmentMethod: jest.fn(),
      setShipmentMethod: jest.fn(),
      getShippingAddress: jest.fn(),
      setShippingAddress: jest.fn(),
      updateCustomerPersonalData: jest.fn(),
      updateUserAddress: jest.fn()
    },
    client: {},
    config: {}
  }
};
