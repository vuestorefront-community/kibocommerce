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
export type AddPaymentToCheckoutParams = {
  orderId: any;
  paymentAction: {
      currencyCode: string;
      amount: number;
      newBillingInfo: {
          billingContact: any;
          check: {
              checkNumber: string;
          };
          paymentWorkflow: string;
          paymentType: string;
          isSameBillingShippingAddress: boolean;
      };
  };
};
export type AddPaymentToCheckoutResponse  = QueryResponse<'order', GraphQLTypes.Order>;;

export type AddUserAddressParams  =  GraphQLTypes.MutationCreateCustomerAccountContactArgs;
export type AddUserAddressResponse  = QueryResponse<'customerContact', GraphQLTypes.CustomerContact>;

// cart
export type AddToCartParams = { product: any, quantity: number } // { product: GraphQLTypes.CrProduct, quantity: number } 
export type AddToCartParamsResponse = QueryResponse<'cartItem', GraphQLTypes.CartItem>; 

export type ApplyCouponParams =  GraphQLTypes.MutationUpdateCartCouponArgs;
export type ApplyCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type ClearCartResponse =  QueryResponse<'deleteCurrentCartItems', any>; // QueryResponse<'cart', GraphQLTypes.Cart>;

export type GetCartResponse = QueryResponse<'currentCart', GraphQLTypes.Cart>;

export type RemoveCouponParams = { cartId: string, couponCode: GraphQLTypes.CrAppliedDiscount } 
export type RemoveCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type RemoveFromCartParams = { product: any} // { product: GraphQLTypes.CartItem}
export type RemoveFromCartResponse = boolean;

export type UpdateItemQuantityParams = { product: GraphQLTypes.CartItem, quantity } 
export type UpdateItemQuantityResponse = QueryResponse<'cuAttribute', GraphQLTypes.CuAttribute>;

// changePassword
export type ChangePasswordParams = GraphQLTypes.MutationChangeCustomerAccountPasswordArgs 
export type ChangePasswordResponse = { data: {user: boolean}}

// getBillingInfo
export type GetBillingInfoParams =  GraphQLTypes.QueryOrderBillingInfoArgs 
export type GetBillingInfoResponse = QueryResponse<'orderBillingInfo', GraphQLTypes.BillingInfo>;

// getCategory
export type GetCategoryParams =  {slug?: string, id?: string, categoryCode: string, } 
type Category = Record<string, any>;
export type GetCategoryResponse =  QueryResponse<'categories', Category[]> // QueryResponse<'categories', GraphQLTypes.CategoryPagedCollection> | QueryResponse<'categories', GraphQLTypes.CategoryCollection>; // categoriesTree

// getCheckout
export type GetCheckoutParams = GraphQLTypes.QueryOrderArgs 
export type GetCheckoutResponse = QueryResponse<'order', GraphQLTypes.Order>;

// getCurrentUser
export type GetCurrentUserResponse = QueryResponse<'customerAccount', GraphQLTypes.CustomerAccount>;


// getOrCreateCheckoutFromCart
export type GetOrCreateCheckoutFromCartParams = GraphQLTypes.MutationCreateOrderArgs 
export type GetOrCreateCheckoutFromCartResponse = QueryResponse<'order', GraphQLTypes.Order>; // GraphQLTypes.Order>

// getProduct
type ProductSearchResponse = QueryResponse<'productSearchResult', GraphQLTypes.ProductSearchResult>; 
type GetProduct= QueryResponse<'product', GraphQLTypes.Product>; 
type GetProductsResponse = QueryResponse<'products', GraphQLTypes.ProductCollection>;

export type GetProductParams = ProductsSearchParams
export type GetProductResponse = QueryResponse<'products', any>; // ProductSearchResponse | GetProduct | GetProductsResponse;

// logInUser
export type LogInUserParams =  GraphQLTypes.CustomerUserAuthInfoInput  
export type LogInUserResponse = any;

// logOutUser
export type LogOutUserResponse = void;

// makeOrder
export type MakeOrderParams = GraphQLTypes.MutationCreateOrderActionArgs 
export type MakeOrderResponse = QueryResponse<'createOrderAction', GraphQLTypes.Order>;

// registerUser
export type RegisterUserParams =  { account?: { emailAddress: string, firstName: string, lastName: string }; password?: any} //GraphQLTypes.CustomerAccountAndAuthInfoInput 
export type RegisterUserResponse = QueryResponse<'account', GraphQLTypes.CustomerAuthTicket>;

// searchOrders
export type SearchOrdersParams = { id?: string, page?: number, pageSize?: number}
export type SearchOrdersResponse = QueryResponse<'orders', GraphQLTypes.OrderCollection>;

// setBillingInfo
export type SetBillingInfoParams = {orderId: string, billingDetails: any} // GraphQLTypes.MutationUpdateOrderBillingInfoArgs 
export type SetBillingInfoResponse = QueryResponse<'updateOrderBillingInfo', GraphQLTypes.BillingInfo>;

// shipmentMethod
export type GetShipmentMethodParams = GraphQLTypes.QueryOrderShipmentMethodsArgs
export type GetShipmentMethodResponse = QueryResponse<'orderShipmentMethods', GraphQLTypes.ShippingRate>;

export type setShipmentMethodParams = GraphQLTypes.MutationUpdateOrderFulfillmentInfoArgs
export type setShipmentMethodResponse = QueryResponse<'updateOrderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

// shippingAddress
export type GetShippingAddressParams = GraphQLTypes.QueryOrderFulfillmentInfoArgs
export type GetShippingAddressResponse = QueryResponse<'orderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

export type SetShippingAddressParams = GraphQLTypes.MutationUpdateOrderFulfillmentInfoArgs
export type SetShippingAddressResponse = QueryResponse<'updateOrderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

// updateCustomerPersonalData
export type UpdateCustomerPersonalDataParams = GraphQLTypes.MutationUpdateCustomerAccountArgs 
export type UpdateCustomerPersonalDataResponse = QueryResponse<'user', GraphQLTypes.CustomerAccount>;

// --------------- Create ApiMethods --------------- 
interface ApiMethods {
  addPaymentToCheckout(params:AddPaymentToCheckoutParams ): Promise<AddPaymentToCheckoutResponse>;
  addUserAddress(params: AddUserAddressParams): Promise<AddUserAddressResponse>;

  // cart
  addToCart(params:AddToCartParams ): Promise<AddToCartResponse>;
  applyCoupon(params: ApplyCouponParams): Promise<ApplyCouponResponse>;
  clearCart(): Promise<ClearCartResponse>;
  getCart(): Promise<GetCartResponse>;
  removeCoupon(params: RemoveCouponParams): Promise<RemoveCouponResponse>;
  removeFromCart(params: RemoveFromCartParams): Promise<RemoveFromCartResponse>;
  updateItemQuantity(params:UpdateItemQuantityParams ): Promise<UpdateItemQuantityResponse>;
  updateItemQty(params:UpdateItemQuantityParams ): Promise<UpdateItemQuantityResponse>;

  changePassword(params: ChangePasswordParams): Promise<ChangePasswordResponse>;
  deleteUserAddress(params: DeleteUserAddressParams): Promise<DeleteUserAddressResponse>;
  getBillingInfo(params: GetBillingInfoParams): Promise<GetBillingInfoResponse>;
  getCategory(params: GetCategoryParams): Promise<GetCategoryResponse>;
  getCheckout(params: GetCheckoutParams): Promise<GetCheckoutResponse>;
  getCurrentUser(): Promise<GetCurrentUserResponse>;
  getOrCreateCheckoutFromCart(params: GetOrCreateCheckoutFromCartParams): Promise<GetOrCreateCheckoutFromCartResponse>;
  
  // getProduct
  getProduct(params: GetProductParams): Promise<GetProductResponse>;
  getUserAddresses(params: GetUserAddressesParams): Promise<GetUserAddressesResponse>;
  logInUser(params: LogInUserParams): Promise<LogInUserResponse>;
  logOutUser(): Promise<LogOutUserResponse>;
  makeOrder(params: MakeOrderParams): Promise<MakeOrderResponse>;
  registerUser(params: RegisterUserParams): Promise<RegisterUserResponse>;
  searchOrders(params: SearchOrdersParams): Promise<SearchOrdersResponse>;
  setBillingInfo(params: SetBillingInfoParams): Promise<SetBillingInfoResponse>;

  // shipmentMethod
  getShipmentMethod(params: GetShipmentMethodParams): Promise<GetShipmentMethodResponse>;
  setShipmentMethod(params: setShipmentMethodParams): Promise<setShipmentMethodResponse>;

  // shippingAddress
  getShippingAddress(params: GetShippingAddressParams): Promise<GetShippingAddressResponse>;
  setShippingAddress(params: SetShippingAddressParams): Promise<SetShippingAddressResponse>;

  updateCustomerPersonalData(params: UpdateCustomerPersonalDataParams): Promise<UpdateCustomerPersonalDataResponse>;
  updateUserAddress(params: UpdateUserAddressParams): Promise<UpdateUserAddressResponse>;  
}

// ---------------  Export KiboMethods --------------- 
export type KiboCommerceMethods = ApiClientMethods<ApiMethods>
