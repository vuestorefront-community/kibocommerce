/* eslint-disable */
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ApiClientMethods } from '@vue-storefront/core';
import * as GraphQLTypes from './GraphQL';
import { ProductsSearchParams } from '@vue-storefront/core';

// QueryResponse and MutationResponse
export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;

// --------------- Define Params and ReturnTypes --------------- 

// cart
export type addToCartParams = GraphQLTypes.MutationAddItemToCurrentCartArgs; 
export type addToCartParamsResponse = QueryResponse<'cartItem', GraphQLTypes.CartItem>; 

export type applyCouponParams =  GraphQLTypes.MutationUpdateCartCouponArgs;
export type applyCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type clearCartParams = GraphQLTypes.MutationDeleteCurrentCartItemArgs 
export type clearCartResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type getCartResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type removeCouponParams = GraphQLTypes.MutationDeleteCartCouponArgs 
export type removeCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type removeFromCartParams = GraphQLTypes.MutationDeleteCartItemArgs 
export type removeFromCartResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type updateItemQuantityParams = GraphQLTypes.MutationUpdateCustomerAccountArgs 
export type updateItemQuantityResponse = QueryResponse<'cuAttribute', GraphQLTypes.CuAttribute>;

// changePassword
export type changePasswordParams = GraphQLTypes.MutationChangeCustomerAccountPasswordArgs 
export type changePasswordResponse = boolean

// getBillingInfo
export type getBillingInfoParams = GraphQLTypes.QueryOrderBillingInfoArgs 
export type getBillingInfoResponse = QueryResponse<'billingInfo', GraphQLTypes.BillingInfo>;

// getCategory
export type getCategoryParams = GraphQLTypes.QueryCategoriesArgs 
export type getCategoryResponse = QueryResponse<'categories', GraphQLTypes.CategoryPagedCollection>;

// getCheckout
export type getCheckoutParams = GraphQLTypes.QueryOrderArgs 
export type getCheckoutResponse = QueryResponse<'order', GraphQLTypes.Order>;

// getCurrentUser
export type getCurrentUserResponse = QueryResponse<'customerAccount', GraphQLTypes.CustomerAccount>;

// getOrCreateCheckoutFromCart
export type getOrCreateCheckoutFromCartParams = GraphQLTypes.MutationCreateOrderArgs 
export type getOrCreateCheckoutFromCartResponse = QueryResponse<'order', GraphQLTypes.Order>;

// getProduct
export type productSearchResponse = QueryResponse<'productSearchResult', GraphQLTypes.ProductSearchResult>;
export type getProductResponse = QueryResponse<'product', GraphQLTypes.Product>;
export type getProductsResponse = QueryResponse<'products', GraphQLTypes.ProductCollection>;

// logInUser
export type logInUserParams = GraphQLTypes.MutationCreateCustomerAuthTicketArgs 
export type logInUserResponse = QueryResponse<'customerAuthTicket', GraphQLTypes.CustomerAuthTicket>;

// logOutUser

// makeOrder
export type makeOrderParams = GraphQLTypes.MutationCreateOrderActionArgs 
export type makeOrderResponse = QueryResponse<'createOrderAction', GraphQLTypes.Order>;

// registerUser
export type registerUserParams = GraphQLTypes.MutationCreateCustomerAccountAndLoginArgs 
export type registerUserResponse = QueryResponse<'customerAuthTicket', GraphQLTypes.CustomerAuthTicket>;

// searchOrders
export type searchOrdersParams = GraphQLTypes.QueryOrdersArgs
export type searchOrdersResponse = QueryResponse<'orders', GraphQLTypes.OrderCollection>;

// setBillingInfo
export type setBillingInfoParams = GraphQLTypes.MutationUpdateOrderBillingInfoArgs 
export type setBillingInfoResponse = QueryResponse<'billingInfo', GraphQLTypes.BillingInfo>;

// shipmentMethod
export type getShipmentMethodParams = GraphQLTypes.QueryOrderShipmentMethodsArgs
export type getShipmentMethodResponse = QueryResponse<'orderShipmentMethods', GraphQLTypes.ShippingRate>;

export type setShipmentMethodParams = GraphQLTypes.MutationUpdateOrderFulfillmentInfoArgs
export type setShipmentMethodResponse = QueryResponse<'updateOrderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

// shippingAddress
export type getShippingAddressParams = GraphQLTypes.QueryOrderFulfillmentInfoArgs
export type getShippingAddressResponse = QueryResponse<'orderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

export type setShippingAddressParams = GraphQLTypes.MutationUpdateOrderFulfillmentInfoArgs
export type setShippingAddressResponse = QueryResponse<'updateOrderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

// updateCustomerPersonalData
export type updateCustomerPersonalDataParams = GraphQLTypes.MutationUpdateCustomerAccountArgs 
export type updateCustomerPersonalDataResponse = QueryResponse<'customerAccount', GraphQLTypes.CustomerAccount>;

// --------------- Create ApiMethods --------------- 
interface ApiMethods {
  // cart
  addToCart(params:addToCartParams ): Promise<addToCartParamsResponse>;
  applyCoupon(params: applyCouponParams): Promise<applyCouponResponse>;
  clearCart(params:clearCartParams ): Promise<clearCartResponse>;
  getCart(): Promise<getCartResponse>;
  removeCoupon(params: removeCouponParams): Promise<removeCouponResponse>;
  removeFromCart(params: removeFromCartParams): Promise<removeFromCartResponse>;
  updateItemQuantity(params:updateItemQuantityParams ): Promise<updateItemQuantityResponse>;

  changePassword(params: changePasswordParams): Promise<changePasswordResponse>;
  getBillingInfo(params: getBillingInfoParams): Promise<getBillingInfoResponse>;
  getCategory(params: getCategoryParams): Promise<getCategoryResponse>;
  getCheckout(params: getCheckoutParams): Promise<getCheckoutResponse>;
  getCurrentUser(): Promise<getCurrentUserResponse>;
  getOrCreateCheckoutFromCart(params: getOrCreateCheckoutFromCartParams): Promise<getOrCreateCheckoutFromCartResponse>;
  
  // getProduct
  getProduct(params: ProductsSearchParams): Promise<productSearchResponse | getProductResponse | getProductsResponse>;
  mergeProducts(params: ProductsSearchParams): Promise<productSearchResponse | getProductResponse | getProductsResponse>;
  configureProduct(params: ProductsSearchParams): Promise<productSearchResponse | getProductResponse | getProductsResponse>;
 
  logInUser(params: logInUserParams): Promise<logInUserResponse>;
  logOutUser(): void;
  makeOrder(params: makeOrderParams): Promise<makeOrderResponse>;
  registerUser(params: registerUserParams): Promise<registerUserResponse>;
  searchOrders(params: searchOrdersParams): Promise<searchOrdersResponse>;
  setBillingInfo(params: setBillingInfoParams): Promise<setBillingInfoResponse>;

  // shipmentMethod
  getShipmentMethod(params: getShipmentMethodParams): Promise<getShipmentMethodResponse>;
  setShipmentMethod(params: setShipmentMethodParams): Promise<setShipmentMethodResponse>;

  // shippingAddress
  getShippingAddress(params: getShippingAddressParams): Promise<getShippingAddressResponse>;
  setShippingAddress(params: setShippingAddressParams): Promise<setShippingAddressResponse>;

  updateCustomerPersonalData(params: updateCustomerPersonalDataParams): Promise<updateCustomerPersonalDataResponse>;
}

// ---------------  Export KiboMethods --------------- 
export type KiboCommerceMethods = ApiClientMethods<ApiMethods>
