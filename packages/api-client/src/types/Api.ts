/* eslint-disable */
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ApiClientMethods, CustomQuery } from '@vue-storefront/core';
import * as GraphQLTypes from './GraphQL';

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
export type AddToCartResponse = QueryResponse<'cartItem', GraphQLTypes.CartItem>; 

export type ApplyCouponParams =  GraphQLTypes.MutationUpdateCartCouponArgs;
export type ApplyCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type ClearCartResponse =  QueryResponse<'deleteCurrentCartItems', GraphQLTypes.Cart>; 

export type GetCartResponse = QueryResponse<'currentCart', GraphQLTypes.Cart>;

export type RemoveCouponParams =  GraphQLTypes.MutationDeleteCartCouponArgs 
export type RemoveCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type RemoveFromCartParams = { product: any} // { product: GraphQLTypes.CartItem}
export type RemoveFromCartResponse = QueryResponse<'deleteCurrentCartItem', boolean>;

export type UpdateItemQuantityParams = { product: GraphQLTypes.CartItem, quantity } 
export type UpdateItemQuantityResponse = QueryResponse<'updateCurrentCartItemQuantity', GraphQLTypes.CartItem>;

// changePassword
export type ChangePasswordParams = GraphQLTypes.MutationChangeCustomerAccountPasswordArgs 
export type ChangePasswordResponse = QueryResponse<'user', boolean>

// deleteUserAddress
export type DeleteUserAddressParams = GraphQLTypes.MutationDeleteCustomerAccountContactArgs;
export type DeleteUserAddressResponse  = QueryResponse<'user', boolean>

// getBillingInfo
export type GetBillingInfoParams =  GraphQLTypes.QueryOrderBillingInfoArgs 
export type GetBillingInfoResponse = QueryResponse<'orderBillingInfo', GraphQLTypes.BillingInfo>;

// getCategory
export type GetCategoryParams =  {slug?: string, id?: string, categoryCode?: string } 
type Category = Record<string, any>;
// export type GetCategoryResponse =  QueryResponse<'categories', Category[]> 
export type GetCategoryResponse =  QueryResponse<'categories', GraphQLTypes.CategoryPagedCollection>; // categoriesTree

// getCheckout
export type GetCheckoutParams = GraphQLTypes.QueryOrderArgs 
export type GetCheckoutResponse = QueryResponse<'order', GraphQLTypes.Order>;

// getCMSContent
export type GetCMSContentParams = GraphQLTypes.QueryDocumentListDocumentsArgs;
export type GetCMSContentResponse = QueryResponse<'documentListDocuments', GraphQLTypes.DocumentCollection>;

// getCurrentUser
export type GetCurrentUserResponse = QueryResponse<'customerAccount', GraphQLTypes.CustomerAccount>;


// getOrCreateCheckoutFromCart
export type GetOrCreateCheckoutFromCartParams = GraphQLTypes.MutationCreateOrderArgs 
export type GetOrCreateCheckoutFromCartResponse = QueryResponse<'order', GraphQLTypes.Order>; 

// getProduct
export type GetProductParams = { id: string; customQuery?: CustomQuery; };
export type GetProductResponse = QueryResponse<'product', GraphQLTypes.Product>;

export type GetRelatedProductsParams = { id: string; limit: number; catId: string[]; customQuery?: CustomQuery; };
export type GetRelatedProductsResponse = QueryResponse<'products', GraphQLTypes.ProductCollection>;

export type ProductSearchParams = { 
  perPage?: number;
  page?: number;
  sort?: any;
  term?: any;
  filters?: any;
  customQuery?: CustomQuery;
  [x: string]: any;
};
export type ProductSearchResponse = QueryResponse<'products', GraphQLTypes.ProductSearchResult>;

export type InternalConfigureProductParams = { product: GraphQLTypes.Product, attributes: { [x: string]: string } };
export type ConfigureProductResponse = QueryResponse<'configureProduct', GraphQLTypes.ConfiguredProduct>;

// getUserAddresses
export type GetUserAddressesParams = GraphQLTypes.QueryCustomerAccountContactsArgs;
export type GetUserAddressesResponse = QueryResponse<'customerContactCollection', GraphQLTypes.CustomerContactCollection>;

// logInUser
export type LogInUserParams =  GraphQLTypes.CustomerUserAuthInfoInput  
export type LogInUserResponse = any;

// logOutUser
export type LogOutUserResponse = void;

// makeOrder
export type MakeOrderParams = GraphQLTypes.MutationCreateOrderActionArgs 
export type MakeOrderResponse = QueryResponse<'createOrderAction', GraphQLTypes.Order>;

// password-getUserName
export type GetUserNameParams =  GraphQLTypes.QueryCustomerAccountsArgs 
export type GetUserNameResponse = QueryResponse<'customerAccounts', GraphQLTypes.CustomerAccountCollection>;

// password-reset
export type ResetPasswordParams =  GraphQLTypes.MutationResetCustomerAccountPasswordArgs 
export type ResetPasswordResponse = QueryResponse<'resetPassword', boolean>;

// password-update
export type UpdatePasswordParams = {confirmationInfoInput?: {userName: string, confirmationCode: string, newPassword: string}} //GraphQLTypes.MutationUpdateForgottenCustomerAccountPasswordArgs;
export type UpdatePasswordResponse = QueryResponse<'updatePassword', boolean>;

// registerUser
export type RegisterUserParams =  { account?: { emailAddress: string, firstName: string, lastName: string }; password?: any} //GraphQLTypes.CustomerAccountAndAuthInfoInput 
export type RegisterUserResponse = QueryResponse<'account', GraphQLTypes.CustomerAuthTicket>;

// searchOrders
export type SearchOrdersParams = { id?: string, page?: number, pageSize?: number}
export type SearchOrdersResponse = QueryResponse<'orders', GraphQLTypes.OrderCollection>;
export type SearchOrderInput = {filter?: string, startIndex?:number, pageSize?: number};

// setBillingInfo
export type SetBillingInfoParams = {
  orderId: any,
  billingInfoInput: {
      billingContact: {
          [x: string]: any
      },
      isSameBillingShippingAddress: boolean
  }
}
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

// updateUserAddress
export type UpdateUserAddressParams = GraphQLTypes.MutationUpdateCustomerAccountContactArgs;
export type UpdateUserAddressResponse = any;

// getSearchSuggestions
export type SearchSuggestionResponse = QueryResponse<'suggestionSearch', GraphQLTypes.SearchSuggestionResult>
export type SearchSuggestionParams = { term: String }

// wishList
export type CreateWishListParams= GraphQLTypes.MutationCreateWishlistArgs;
export type CreateWishListResponse= QueryResponse<'createWishlist', GraphQLTypes.Wishlist>;
export type GetWishListResponse = QueryResponse<'wishlists', GraphQLTypes.WishlistCollection>;

// wishListItem
export type CreateWishListItemParams= GraphQLTypes.MutationCreateWishlistItemArgs;
export type CreateWishListItemResponse= QueryResponse<'createWishlistItem',GraphQLTypes.WishlistItem>;

export type DeleteWishListItemParams= GraphQLTypes.MutationDeleteWishlistItemArgs;
export type DeleteWishListItemResponse= QueryResponse<'deleteWishlistItem', boolean>;

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
  getCMSContent(params: GetCMSContentParams): Promise<GetCMSContentResponse>;
  getCurrentUser(): Promise<GetCurrentUserResponse>;
  getOrCreateCheckoutFromCart(params: GetOrCreateCheckoutFromCartParams): Promise<GetOrCreateCheckoutFromCartResponse>;
  
  // getProduct
  getProduct(params: GetProductParams): Promise<GetProductResponse>;
  getRelatedProducts(params: GetRelatedProductsParams): Promise<GetRelatedProductsResponse>;
  searchProducts(params: ProductSearchParams): Promise<ProductSearchResponse>;
  configureProduct(params: InternalConfigureProductParams): Promise<ConfigureProductResponse>;
 
  getUserAddresses(
    params: GetUserAddressesParams
  ): Promise<GetUserAddressesResponse>;
  logInUser(params: LogInUserParams): Promise<LogInUserResponse>;
  logOutUser(): Promise<LogOutUserResponse>;
  makeOrder(params: MakeOrderParams): Promise<MakeOrderResponse>;
  getUserName(params: GetUserNameParams): Promise<GetUserNameResponse>;
  resetPassword(params: ResetPasswordParams): Promise<ResetPasswordResponse>;
  updatePassword(params: UpdatePasswordParams): Promise<UpdatePasswordResponse>;
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

  // getSearchSuggestions
  getSearchSuggestions(params: SearchSuggestionParams): Promise<SearchSuggestionResponse>;

  // wishList
  createWishList(params: CreateWishListParams): Promise<CreateWishListResponse>;

  getWishList(): Promise<GetWishListResponse>;

  // wishListItem
  createWishListItem(params: CreateWishListItemParams ): Promise<CreateWishListItemResponse>;

  deleteWishListItem(params: DeleteWishListItemParams ): Promise<DeleteWishListItemResponse>;

}

// ---------------  Export KiboMethods --------------- 
export type KiboCommerceMethods = ApiClientMethods<ApiMethods>
