/* eslint-disable */
/* istanbul ignore file */

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  AnyScalar: any
  DateTime: any
  Object: any
}

export type AccountPasswordInfo_Input = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
  unlockAccount?: Maybe<Scalars["Boolean"]>
  passwordInfo?: Maybe<PasswordInfo_Input>
}

export type AccountPasswordInfoCollection_Input = {
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<AccountPasswordInfo_Input>>>
}

export type ActiveDateRange = {
  __typename?: "ActiveDateRange"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ActiveDateRange>
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
}

export type ActiveDateRange_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ActiveDateRange_Input = {
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
}

export type Address = {
  __typename?: "Address"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Address>
  address1?: Maybe<Scalars["String"]>
  address2?: Maybe<Scalars["String"]>
  address3?: Maybe<Scalars["String"]>
  address4?: Maybe<Scalars["String"]>
  cityOrTown?: Maybe<Scalars["String"]>
  stateOrProvince?: Maybe<Scalars["String"]>
  postalOrZipCode?: Maybe<Scalars["String"]>
  countryCode?: Maybe<Scalars["String"]>
  addressType?: Maybe<Scalars["String"]>
  isValidated?: Maybe<Scalars["Boolean"]>
}

export type Address_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Address_Input = {
  address1?: Maybe<Scalars["String"]>
  address2?: Maybe<Scalars["String"]>
  address3?: Maybe<Scalars["String"]>
  address4?: Maybe<Scalars["String"]>
  cityOrTown?: Maybe<Scalars["String"]>
  stateOrProvince?: Maybe<Scalars["String"]>
  postalOrZipCode?: Maybe<Scalars["String"]>
  countryCode?: Maybe<Scalars["String"]>
  addressType?: Maybe<Scalars["String"]>
  isValidated?: Maybe<Scalars["Boolean"]>
}

export type AddressValidationRequest_Input = {
  address?: Maybe<Address_Input>
}

export type AddressValidationResponse = {
  __typename?: "AddressValidationResponse"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AddressValidationResponse>
  addressCandidates?: Maybe<Array<Maybe<Address>>>
}

export type AddressValidationResponse_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Adjustment = {
  __typename?: "Adjustment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Adjustment>
  amount?: Maybe<Scalars["Float"]>
  description?: Maybe<Scalars["String"]>
  internalComment?: Maybe<Scalars["String"]>
}

export type Adjustment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Adjustment_Input = {
  amount?: Maybe<Scalars["Float"]>
  description?: Maybe<Scalars["String"]>
  internalComment?: Maybe<Scalars["String"]>
}

export type AppliedDiscount = {
  __typename?: "AppliedDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AppliedDiscount>
  couponCode?: Maybe<Scalars["String"]>
  discount?: Maybe<Discount>
  discounts?: Maybe<Array<Maybe<Discount>>>
  impact: Scalars["Float"]
}

export type AppliedDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AppliedDiscount_Input = {
  couponCode?: Maybe<Scalars["String"]>
  discount?: Maybe<Discount_Input>
  discounts?: Maybe<Array<Maybe<Discount_Input>>>
  impact: Scalars["Float"]
}

export type AppliedLineItemProductDiscount = {
  __typename?: "AppliedLineItemProductDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AppliedLineItemProductDiscount>
  appliesToSalePrice?: Maybe<Scalars["Boolean"]>
  discountQuantity: Scalars["Int"]
  productQuantity?: Maybe<Scalars["Int"]>
  impactPerUnit?: Maybe<Scalars["Float"]>
  impact?: Maybe<Scalars["Float"]>
  discount?: Maybe<Discount>
  couponCode?: Maybe<Scalars["String"]>
  excluded?: Maybe<Scalars["Boolean"]>
}

export type AppliedLineItemProductDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AppliedLineItemProductDiscount_Input = {
  appliesToSalePrice?: Maybe<Scalars["Boolean"]>
  discountQuantity: Scalars["Int"]
  productQuantity?: Maybe<Scalars["Int"]>
  impactPerUnit?: Maybe<Scalars["Float"]>
  impact?: Maybe<Scalars["Float"]>
  discount?: Maybe<Discount_Input>
  couponCode?: Maybe<Scalars["String"]>
  excluded?: Maybe<Scalars["Boolean"]>
}

export type AppliedLineItemShippingDiscount = {
  __typename?: "AppliedLineItemShippingDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AppliedLineItemShippingDiscount>
  methodCode?: Maybe<Scalars["String"]>
  discount?: Maybe<AppliedDiscount>
  discountQuantity: Scalars["Int"]
  impactPerUnit: Scalars["Float"]
}

export type AppliedLineItemShippingDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AppliedLineItemShippingDiscount_Input = {
  methodCode?: Maybe<Scalars["String"]>
  discount?: Maybe<AppliedDiscount_Input>
  discountQuantity: Scalars["Int"]
  impactPerUnit: Scalars["Float"]
}

export type Attribute = {
  __typename?: "Attribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Attribute>
  id?: Maybe<Scalars["Int"]>
  adminName?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  attributeCode: Scalars["String"]
  inputType?: Maybe<Scalars["String"]>
  valueType: Scalars["String"]
  dataType?: Maybe<Scalars["String"]>
  attributeMetadata?: Maybe<Array<Maybe<AttributeMetadataItem>>>
  attributeFQN?: Maybe<Scalars["String"]>
  content?: Maybe<AttributeLocalizedContent>
  validation?: Maybe<AttributeValidation>
  vocabularyValues?: Maybe<Array<Maybe<AttributeVocabularyValue>>>
  auditInfo?: Maybe<AuditInfo>
  isActive?: Maybe<Scalars["Boolean"]>
  isRequired?: Maybe<Scalars["Boolean"]>
  isReadOnly: Scalars["Boolean"]
  isMultiValued?: Maybe<Scalars["Boolean"]>
  isVisible?: Maybe<Scalars["Boolean"]>
  order?: Maybe<Scalars["Int"]>
  displayGroup: Scalars["String"]
}

export type Attribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Attribute_Input = {
  id?: Maybe<Scalars["Int"]>
  adminName?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  attributeCode: Scalars["String"]
  inputType?: Maybe<Scalars["String"]>
  valueType: Scalars["String"]
  dataType?: Maybe<Scalars["String"]>
  attributeMetadata?: Maybe<Array<Maybe<AttributeMetadataItem_Input>>>
  attributeFQN?: Maybe<Scalars["String"]>
  content?: Maybe<AttributeLocalizedContent_Input>
  validation?: Maybe<AttributeValidation_Input>
  vocabularyValues?: Maybe<Array<Maybe<AttributeVocabularyValue_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
  isActive?: Maybe<Scalars["Boolean"]>
  isRequired?: Maybe<Scalars["Boolean"]>
  isReadOnly: Scalars["Boolean"]
  isMultiValued?: Maybe<Scalars["Boolean"]>
  isVisible?: Maybe<Scalars["Boolean"]>
  order?: Maybe<Scalars["Int"]>
  displayGroup: Scalars["String"]
}

export type AttributeCollection = {
  __typename?: "AttributeCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Attribute>>>
}

export type AttributeCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeDetail = {
  __typename?: "AttributeDetail"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeDetail>
  valueType?: Maybe<Scalars["String"]>
  inputType?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
  usageType?: Maybe<Scalars["String"]>
  dataTypeSequence: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  validation?: Maybe<AttributeValidation>
  searchableInStorefront: Scalars["Boolean"]
  searchDisplayValue: Scalars["Boolean"]
  allowFilteringAndSortingInStorefront: Scalars["Boolean"]
  indexValueWithCase?: Maybe<Scalars["Boolean"]>
  customWeightInStorefrontSearch?: Maybe<Scalars["Boolean"]>
  displayIntention?: Maybe<Scalars["String"]>
}

export type AttributeDetail_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeDetail_Input = {
  valueType?: Maybe<Scalars["String"]>
  inputType?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
  usageType?: Maybe<Scalars["String"]>
  dataTypeSequence: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  validation?: Maybe<AttributeValidation_Input>
  searchableInStorefront: Scalars["Boolean"]
  searchDisplayValue: Scalars["Boolean"]
  allowFilteringAndSortingInStorefront: Scalars["Boolean"]
  indexValueWithCase?: Maybe<Scalars["Boolean"]>
  customWeightInStorefrontSearch?: Maybe<Scalars["Boolean"]>
  displayIntention?: Maybe<Scalars["String"]>
}

export type AttributeLocalizedContent = {
  __typename?: "AttributeLocalizedContent"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeLocalizedContent>
  localeCode?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type AttributeLocalizedContent_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeLocalizedContent_Input = {
  localeCode?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type AttributeMetadataItem = {
  __typename?: "AttributeMetadataItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeMetadataItem>
  key: Scalars["String"]
  value: Scalars["String"]
}

export type AttributeMetadataItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeMetadataItem_Input = {
  key: Scalars["String"]
  value: Scalars["String"]
}

export type AttributeValidation = {
  __typename?: "AttributeValidation"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeValidation>
  regularExpression?: Maybe<Scalars["String"]>
  minStringLength?: Maybe<Scalars["Int"]>
  maxStringLength?: Maybe<Scalars["Int"]>
  minNumericValue?: Maybe<Scalars["Float"]>
  maxNumericValue?: Maybe<Scalars["Float"]>
  minDateTime?: Maybe<Scalars["DateTime"]>
  maxDateTime?: Maybe<Scalars["DateTime"]>
}

export type AttributeValidation_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeValidation_Input = {
  regularExpression?: Maybe<Scalars["String"]>
  minStringLength?: Maybe<Scalars["Int"]>
  maxStringLength?: Maybe<Scalars["Int"]>
  minNumericValue?: Maybe<Scalars["Float"]>
  maxNumericValue?: Maybe<Scalars["Float"]>
  minDateTime?: Maybe<Scalars["DateTime"]>
  maxDateTime?: Maybe<Scalars["DateTime"]>
}

export type AttributeValueLocalizedContent = {
  __typename?: "AttributeValueLocalizedContent"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeValueLocalizedContent>
  localeCode: Scalars["String"]
  value: Scalars["String"]
}

export type AttributeValueLocalizedContent_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeValueLocalizedContent_Input = {
  localeCode: Scalars["String"]
  value: Scalars["String"]
}

export type AttributeVocabularyValue = {
  __typename?: "AttributeVocabularyValue"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeVocabularyValue>
  value: Scalars["String"]
  sequence?: Maybe<Scalars["Int"]>
  isHidden?: Maybe<Scalars["Boolean"]>
  content?: Maybe<AttributeValueLocalizedContent>
}

export type AttributeVocabularyValue_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeVocabularyValue_Input = {
  value: Scalars["String"]
  sequence?: Maybe<Scalars["Int"]>
  isHidden?: Maybe<Scalars["Boolean"]>
  content?: Maybe<AttributeValueLocalizedContent_Input>
}

export type AttributeVocabularyValueDisplayInfo = {
  __typename?: "AttributeVocabularyValueDisplayInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AttributeVocabularyValueDisplayInfo>
  cmsId?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  colorValue?: Maybe<Scalars["String"]>
}

export type AttributeVocabularyValueDisplayInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AttributeVocabularyValueDisplayInfo_Input = {
  cmsId?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  colorValue?: Maybe<Scalars["String"]>
}

export type AuditInfo = {
  __typename?: "AuditInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<AuditInfo>
  updateDate?: Maybe<Scalars["DateTime"]>
  createDate?: Maybe<Scalars["DateTime"]>
  updateBy?: Maybe<Scalars["String"]>
  createBy?: Maybe<Scalars["String"]>
}

export type AuditInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type AuditInfo_Input = {
  updateDate?: Maybe<Scalars["DateTime"]>
  createDate?: Maybe<Scalars["DateTime"]>
  updateBy?: Maybe<Scalars["String"]>
  createBy?: Maybe<Scalars["String"]>
}

export type B2BAccount = {
  __typename?: "B2BAccount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<B2BAccount>
  users?: Maybe<Array<Maybe<B2BUser>>>
  isActive?: Maybe<Scalars["Boolean"]>
  priceList?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  customerSet?: Maybe<Scalars["String"]>
  commerceSummary?: Maybe<CommerceSummary>
  contacts?: Maybe<Array<Maybe<CustomerContact>>>
  companyOrOrganization?: Maybe<Scalars["String"]>
  notes?: Maybe<Array<Maybe<CustomerNote>>>
  attributes?: Maybe<Array<Maybe<CustomerAttribute>>>
  segments?: Maybe<Array<Maybe<CustomerSegment>>>
  taxExempt: Scalars["Boolean"]
  taxId?: Maybe<Scalars["String"]>
  externalId?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  customerSinceDate?: Maybe<Scalars["DateTime"]>
  accountType?: Maybe<Scalars["String"]>
}

export type B2BAccount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type B2BAccount_Input = {
  users?: Maybe<Array<Maybe<B2BUser_Input>>>
  isActive?: Maybe<Scalars["Boolean"]>
  priceList?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  customerSet?: Maybe<Scalars["String"]>
  commerceSummary?: Maybe<CommerceSummary_Input>
  contacts?: Maybe<Array<Maybe<CustomerContact_Input>>>
  companyOrOrganization?: Maybe<Scalars["String"]>
  notes?: Maybe<Array<Maybe<CustomerNote_Input>>>
  attributes?: Maybe<Array<Maybe<CustomerAttribute_Input>>>
  segments?: Maybe<Array<Maybe<CustomerSegment_Input>>>
  taxExempt: Scalars["Boolean"]
  taxId?: Maybe<Scalars["String"]>
  externalId?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  customerSinceDate?: Maybe<Scalars["DateTime"]>
  accountType?: Maybe<Scalars["String"]>
}

export type B2BAccountCollection = {
  __typename?: "B2BAccountCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<B2BAccountCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<B2BAccount>>>
}

export type B2BAccountCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type B2BUser = {
  __typename?: "B2BUser"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<B2BUser>
  emailAddress?: Maybe<Scalars["String"]>
  userName?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  roles?: Maybe<Array<Maybe<UserRole>>>
  isLocked: Scalars["Boolean"]
  isActive: Scalars["Boolean"]
  isRemoved: Scalars["Boolean"]
  acceptsMarketing: Scalars["Boolean"]
  hasExternalPassword: Scalars["Boolean"]
}

export type B2BUser_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type B2BUser_Input = {
  emailAddress?: Maybe<Scalars["String"]>
  userName?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  roles?: Maybe<Array<Maybe<UserRole_Input>>>
  isLocked: Scalars["Boolean"]
  isActive: Scalars["Boolean"]
  isRemoved: Scalars["Boolean"]
  acceptsMarketing: Scalars["Boolean"]
  hasExternalPassword: Scalars["Boolean"]
}

export type B2BUserAndAuthInfo_Input = {
  b2BUser?: Maybe<B2BUser_Input>
  externalPassword?: Maybe<Scalars["String"]>
  isImport: Scalars["Boolean"]
}

export type B2BUserCollection = {
  __typename?: "B2BUserCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<B2BUserCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<B2BUser>>>
}

export type B2BUserCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type BillingInfo = {
  __typename?: "BillingInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<BillingInfo>
  paymentType?: Maybe<Scalars["String"]>
  paymentWorkflow?: Maybe<Scalars["String"]>
  billingContact?: Maybe<Contact>
  isSameBillingShippingAddress: Scalars["Boolean"]
  card?: Maybe<PaymentCard>
  token?: Maybe<PaymentToken>
  purchaseOrder?: Maybe<PurchaseOrderPayment>
  check?: Maybe<CheckPayment>
  auditInfo?: Maybe<AuditInfo>
  storeCreditCode?: Maybe<Scalars["String"]>
  storeCreditType?: Maybe<Scalars["String"]>
  customCreditType?: Maybe<Scalars["String"]>
  externalTransactionId?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
}

export type BillingInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type BillingInfo_Input = {
  paymentType?: Maybe<Scalars["String"]>
  paymentWorkflow?: Maybe<Scalars["String"]>
  billingContact?: Maybe<Contact_Input>
  isSameBillingShippingAddress: Scalars["Boolean"]
  card?: Maybe<PaymentCard_Input>
  token?: Maybe<PaymentToken_Input>
  purchaseOrder?: Maybe<PurchaseOrderPayment_Input>
  check?: Maybe<CheckPayment_Input>
  auditInfo?: Maybe<AuditInfo_Input>
  storeCreditCode?: Maybe<Scalars["String"]>
  storeCreditType?: Maybe<Scalars["String"]>
  customCreditType?: Maybe<Scalars["String"]>
  externalTransactionId?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
}

export type BoxType = {
  __typename?: "BoxType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<BoxType>
  name?: Maybe<Scalars["String"]>
  height?: Maybe<Scalars["Float"]>
  width?: Maybe<Scalars["Float"]>
  length?: Maybe<Scalars["Float"]>
}

export type BoxType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type BpmConfiguration = {
  __typename?: "BpmConfiguration"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<BpmConfiguration>
  shipmentType?: Maybe<Scalars["String"]>
  workflowContainerId?: Maybe<Scalars["String"]>
  workflowProcessId?: Maybe<Scalars["String"]>
}

export type BpmConfiguration_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type BundledProduct = {
  __typename?: "BundledProduct"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<BundledProduct>
  content?: Maybe<ProductContent>
  productCode?: Maybe<Scalars["String"]>
  goodsType?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  measurements?: Maybe<PackageMeasurements>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  inventoryInfo?: Maybe<ProductInventoryInfo>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  optionValue?: Maybe<Scalars["Object"]>
  creditValue?: Maybe<Scalars["Float"]>
  productType?: Maybe<Scalars["String"]>
}

export type BundledProduct_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type BundledProduct_Input = {
  content?: Maybe<ProductContent_Input>
  productCode?: Maybe<Scalars["String"]>
  goodsType?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  measurements?: Maybe<PackageMeasurements_Input>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  inventoryInfo?: Maybe<ProductInventoryInfo_Input>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  optionValue?: Maybe<Scalars["Object"]>
  creditValue?: Maybe<Scalars["Float"]>
  productType?: Maybe<Scalars["String"]>
}

export type BundledProductSummary = {
  __typename?: "BundledProductSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<BundledProductSummary>
  productShortDescription?: Maybe<Scalars["String"]>
  productName?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  goodsType?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  measurements?: Maybe<PackageMeasurements>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  inventoryInfo?: Maybe<ProductInventoryInfo>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  optionValue?: Maybe<Scalars["Object"]>
  creditValue?: Maybe<Scalars["Float"]>
  productType?: Maybe<Scalars["String"]>
}

export type BundledProductSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export enum BundlingStrategy {
  ItemDependency = "ITEM_DEPENDENCY"
}

export type CanceledItem = {
  __typename?: "CanceledItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CanceledItem>
  canceledReason?: Maybe<CanceledReason>
  auditInfo?: Maybe<AuditInfo>
  lineId: Scalars["Int"]
  originalOrderItemId?: Maybe<Scalars["String"]>
  parentId?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  variationProductCode?: Maybe<Scalars["String"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  isTaxable: Scalars["Boolean"]
  quantity: Scalars["Int"]
  unitPrice: Scalars["Float"]
  actualPrice: Scalars["Float"]
  overridePrice?: Maybe<Scalars["Float"]>
  itemDiscount: Scalars["Float"]
  lineItemCost: Scalars["Float"]
  itemTax: Scalars["Float"]
  shipping: Scalars["Float"]
  shippingDiscount: Scalars["Float"]
  shippingTax: Scalars["Float"]
  handling: Scalars["Float"]
  handlingDiscount: Scalars["Float"]
  handlingTax: Scalars["Float"]
  duty: Scalars["Float"]
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  readyForPickupQuantity?: Maybe<Scalars["Int"]>
  backorderReleaseDate?: Maybe<Scalars["DateTime"]>
  measurements?: Maybe<PackageMeasurements>
  options?: Maybe<Array<Maybe<ProductOption>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  weightedShipmentAdjustment: Scalars["Float"]
  weightedLineItemTaxAdjustment: Scalars["Float"]
  weightedShippingAdjustment: Scalars["Float"]
  weightedShippingTaxAdjustment: Scalars["Float"]
  weightedHandlingAdjustment: Scalars["Float"]
  weightedHandlingTaxAdjustment: Scalars["Float"]
  weightedDutyAdjustment: Scalars["Float"]
  taxableShipping: Scalars["Float"]
  taxableLineItemCost: Scalars["Float"]
  taxableHandling: Scalars["Float"]
}

export type CanceledItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CanceledItem_Input = {
  canceledReason?: Maybe<CanceledReason_Input>
  auditInfo?: Maybe<AuditInfo_Input>
  lineId: Scalars["Int"]
  originalOrderItemId?: Maybe<Scalars["String"]>
  parentId?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  variationProductCode?: Maybe<Scalars["String"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  isTaxable: Scalars["Boolean"]
  quantity: Scalars["Int"]
  unitPrice: Scalars["Float"]
  actualPrice: Scalars["Float"]
  overridePrice?: Maybe<Scalars["Float"]>
  itemDiscount: Scalars["Float"]
  lineItemCost: Scalars["Float"]
  itemTax: Scalars["Float"]
  shipping: Scalars["Float"]
  shippingDiscount: Scalars["Float"]
  shippingTax: Scalars["Float"]
  handling: Scalars["Float"]
  handlingDiscount: Scalars["Float"]
  handlingTax: Scalars["Float"]
  duty: Scalars["Float"]
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  readyForPickupQuantity?: Maybe<Scalars["Int"]>
  backorderReleaseDate?: Maybe<Scalars["DateTime"]>
  measurements?: Maybe<PackageMeasurements_Input>
  options?: Maybe<Array<Maybe<ProductOption_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  weightedShipmentAdjustment: Scalars["Float"]
  weightedLineItemTaxAdjustment: Scalars["Float"]
  weightedShippingAdjustment: Scalars["Float"]
  weightedShippingTaxAdjustment: Scalars["Float"]
  weightedHandlingAdjustment: Scalars["Float"]
  weightedHandlingTaxAdjustment: Scalars["Float"]
  weightedDutyAdjustment: Scalars["Float"]
  taxableShipping: Scalars["Float"]
  taxableLineItemCost: Scalars["Float"]
  taxableHandling: Scalars["Float"]
}

export type CanceledReason = {
  __typename?: "CanceledReason"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CanceledReason>
  reasonCode?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  moreInfo?: Maybe<Scalars["String"]>
}

export type CanceledReason_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CanceledReason_Input = {
  reasonCode?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  moreInfo?: Maybe<Scalars["String"]>
}

export type CancelReasonCollection = {
  __typename?: "CancelReasonCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CancelReasonCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CancelReasonItem>>>
}

export type CancelReasonCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CancelReasonItem = {
  __typename?: "CancelReasonItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CancelReasonItem>
  reasonCode?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  needsMoreInfo: Scalars["Boolean"]
}

export type CancelReasonItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Card = {
  __typename?: "Card"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Card>
  id?: Maybe<Scalars["String"]>
  nameOnCard?: Maybe<Scalars["String"]>
  cardType?: Maybe<Scalars["String"]>
  expireMonth?: Maybe<Scalars["Int"]>
  expireYear?: Maybe<Scalars["Int"]>
  cardNumberPart?: Maybe<Scalars["String"]>
  contactId: Scalars["Int"]
  isDefaultPayMethod: Scalars["Boolean"]
}

export type Card_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Card_Input = {
  id?: Maybe<Scalars["String"]>
  nameOnCard?: Maybe<Scalars["String"]>
  cardType?: Maybe<Scalars["String"]>
  expireMonth?: Maybe<Scalars["Int"]>
  expireYear?: Maybe<Scalars["Int"]>
  cardNumberPart?: Maybe<Scalars["String"]>
  contactId: Scalars["Int"]
  isDefaultPayMethod: Scalars["Boolean"]
}

export type CardCollection = {
  __typename?: "CardCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CardCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Card>>>
}

export type CardCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Carrier = {
  __typename?: "Carrier"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Carrier>
  carrierType?: Maybe<Scalars["String"]>
  isEnabled: Scalars["Boolean"]
  shippingMethodMappings?: Maybe<ShippingMethodMappings>
}

export type Carrier_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Cart = {
  __typename?: "Cart"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Cart>
  items?: Maybe<Array<Maybe<CartItem>>>
  couponCodes?: Maybe<Array<Scalars["String"]>>
  invalidCoupons?: Maybe<Array<Maybe<InvalidCoupon>>>
  priceListCode?: Maybe<Scalars["String"]>
  cartMessage?: Maybe<CartMessage>
  cartMessages?: Maybe<Array<Maybe<CartMessage>>>
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal?: Maybe<Scalars["Float"]>
  handlingTotal?: Maybe<Scalars["Float"]>
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  channelCode?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  fulfillmentInfo?: Maybe<FulfillmentInfo>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  rejectedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountedSubtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  shippingSubTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  handlingTaxTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  taxTotal?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  lineItemSubtotalWithOrderAdjustments?: Maybe<Scalars["Float"]>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
  extendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage>>>
  auditInfo?: Maybe<AuditInfo>
}

export type Cart_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Cart_Input = {
  items?: Maybe<Array<Maybe<CartItem_Input>>>
  couponCodes?: Maybe<Array<Scalars["String"]>>
  invalidCoupons?: Maybe<Array<Maybe<InvalidCoupon_Input>>>
  priceListCode?: Maybe<Scalars["String"]>
  cartMessage?: Maybe<CartMessage_Input>
  cartMessages?: Maybe<Array<Maybe<CartMessage_Input>>>
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal?: Maybe<Scalars["Float"]>
  handlingTotal?: Maybe<Scalars["Float"]>
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  channelCode?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  fulfillmentInfo?: Maybe<FulfillmentInfo_Input>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  rejectedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountedSubtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  shippingSubTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  handlingTaxTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  taxTotal?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  lineItemSubtotalWithOrderAdjustments?: Maybe<Scalars["Float"]>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
  extendedProperties?: Maybe<Array<Maybe<ExtendedProperty_Input>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type CartChangeMessageCollection = {
  __typename?: "CartChangeMessageCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CartChangeMessageCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ChangeMessage>>>
}

export type CartChangeMessageCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CartItem = {
  __typename?: "CartItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CartItem>
  id?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  product?: Maybe<Product>
  quantity: Scalars["Int"]
  isRecurring?: Maybe<Scalars["Boolean"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  subtotal?: Maybe<Scalars["Float"]>
  extendedTotal?: Maybe<Scalars["Float"]>
  taxableTotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  unitPrice?: Maybe<CommerceUnitPrice>
  productDiscount?: Maybe<AppliedLineItemProductDiscount>
  productDiscounts?: Maybe<Array<Maybe<AppliedLineItemProductDiscount>>>
  shippingDiscounts?: Maybe<Array<Maybe<AppliedLineItemShippingDiscount>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  weightedOrderAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderDiscount?: Maybe<Scalars["Float"]>
  adjustedLineItemSubtotal?: Maybe<Scalars["Float"]>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderTax?: Maybe<Scalars["Float"]>
  weightedOrderShipping?: Maybe<Scalars["Float"]>
  weightedOrderShippingDiscount?: Maybe<Scalars["Float"]>
  weightedOrderShippingManualAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderShippingTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFee?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeDiscount?: Maybe<Scalars["Float"]>
  weightedOrderDuty?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderHandlingAdjustment?: Maybe<Scalars["Float"]>
  autoAddDiscountId?: Maybe<Scalars["Int"]>
}

export type CartItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CartItem_Input = {
  id?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  product?: Maybe<Product_Input>
  quantity: Scalars["Int"]
  isRecurring?: Maybe<Scalars["Boolean"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  subtotal?: Maybe<Scalars["Float"]>
  extendedTotal?: Maybe<Scalars["Float"]>
  taxableTotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  unitPrice?: Maybe<CommerceUnitPrice_Input>
  productDiscount?: Maybe<AppliedLineItemProductDiscount_Input>
  productDiscounts?: Maybe<Array<Maybe<AppliedLineItemProductDiscount_Input>>>
  shippingDiscounts?: Maybe<Array<Maybe<AppliedLineItemShippingDiscount_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo_Input>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  weightedOrderAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderDiscount?: Maybe<Scalars["Float"]>
  adjustedLineItemSubtotal?: Maybe<Scalars["Float"]>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderTax?: Maybe<Scalars["Float"]>
  weightedOrderShipping?: Maybe<Scalars["Float"]>
  weightedOrderShippingDiscount?: Maybe<Scalars["Float"]>
  weightedOrderShippingManualAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderShippingTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFee?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeDiscount?: Maybe<Scalars["Float"]>
  weightedOrderDuty?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderHandlingAdjustment?: Maybe<Scalars["Float"]>
  autoAddDiscountId?: Maybe<Scalars["Int"]>
}

export type CartItemCollection = {
  __typename?: "CartItemCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CartItemCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CartItem>>>
}

export type CartItemCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CartMessage = {
  __typename?: "CartMessage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CartMessage>
  message?: Maybe<Scalars["String"]>
  messageType?: Maybe<Scalars["String"]>
  productsRemoved?: Maybe<Array<Maybe<Product>>>
}

export type CartMessage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CartMessage_Input = {
  message?: Maybe<Scalars["String"]>
  messageType?: Maybe<Scalars["String"]>
  productsRemoved?: Maybe<Array<Maybe<Product_Input>>>
}

export type CartSummary = {
  __typename?: "CartSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CartSummary>
  itemCount?: Maybe<Scalars["Int"]>
  totalQuantity?: Maybe<Scalars["Int"]>
  total?: Maybe<Scalars["Float"]>
  isExpired?: Maybe<Scalars["Boolean"]>
  hasActiveCart?: Maybe<Scalars["Boolean"]>
}

export type CartSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Category = {
  __typename?: "Category"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Category>
  categoryId: Scalars["Int"]
  parentCategory?: Maybe<Category>
  categoryCode?: Maybe<Scalars["String"]>
  content?: Maybe<CategoryContent>
  childrenCategories?: Maybe<Array<Maybe<Category>>>
  sequence?: Maybe<Scalars["Int"]>
  isDisplayed: Scalars["Boolean"]
  count?: Maybe<Scalars["Int"]>
  updateDate: Scalars["DateTime"]
  shouldSlice: Scalars["Boolean"]
}

export type Category_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Category_Input = {
  categoryId: Scalars["Int"]
  parentCategory?: Maybe<Category_Input>
  categoryCode?: Maybe<Scalars["String"]>
  content?: Maybe<CategoryContent_Input>
  childrenCategories?: Maybe<Array<Maybe<Category_Input>>>
  sequence?: Maybe<Scalars["Int"]>
  isDisplayed: Scalars["Boolean"]
  count?: Maybe<Scalars["Int"]>
  updateDate: Scalars["DateTime"]
  shouldSlice: Scalars["Boolean"]
}

export type CategoryCollection = {
  __typename?: "CategoryCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CategoryCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Category>>>
}

export type CategoryCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CategoryContent = {
  __typename?: "CategoryContent"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CategoryContent>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  pageTitle?: Maybe<Scalars["String"]>
  metaTagTitle?: Maybe<Scalars["String"]>
  metaTagDescription?: Maybe<Scalars["String"]>
  metaTagKeywords?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  categoryImages?: Maybe<Array<Maybe<CategoryImage>>>
}

export type CategoryContent_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CategoryContent_Input = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  pageTitle?: Maybe<Scalars["String"]>
  metaTagTitle?: Maybe<Scalars["String"]>
  metaTagDescription?: Maybe<Scalars["String"]>
  metaTagKeywords?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  categoryImages?: Maybe<Array<Maybe<CategoryImage_Input>>>
}

export type CategoryImage = {
  __typename?: "CategoryImage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CategoryImage>
  imageLabel?: Maybe<Scalars["String"]>
  altText?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  cmsId?: Maybe<Scalars["String"]>
  videoUrl?: Maybe<Scalars["String"]>
  mediaType?: Maybe<Scalars["String"]>
  sequence?: Maybe<Scalars["Int"]>
}

export type CategoryImage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CategoryImage_Input = {
  imageLabel?: Maybe<Scalars["String"]>
  altText?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  cmsId?: Maybe<Scalars["String"]>
  videoUrl?: Maybe<Scalars["String"]>
  mediaType?: Maybe<Scalars["String"]>
  sequence?: Maybe<Scalars["Int"]>
}

export type CategoryPagedCollection = {
  __typename?: "CategoryPagedCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CategoryPagedCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Category>>>
}

export type CategoryPagedCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ChangeMessage = {
  __typename?: "ChangeMessage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChangeMessage>
  id?: Maybe<Scalars["String"]>
  correlationId?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  userFirstName?: Maybe<Scalars["String"]>
  userLastName?: Maybe<Scalars["String"]>
  userScopeType?: Maybe<Scalars["String"]>
  appId?: Maybe<Scalars["String"]>
  appKey?: Maybe<Scalars["String"]>
  appName?: Maybe<Scalars["String"]>
  subjectType?: Maybe<Scalars["String"]>
  success?: Maybe<Scalars["Boolean"]>
  identifier?: Maybe<Scalars["String"]>
  subject?: Maybe<Scalars["String"]>
  verb?: Maybe<Scalars["String"]>
  message?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["Object"]>
  oldValue?: Maybe<Scalars["String"]>
  newValue?: Maybe<Scalars["String"]>
  amount?: Maybe<Scalars["Float"]>
  createDate?: Maybe<Scalars["DateTime"]>
}

export type ChangeMessage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ChangeMessage_Input = {
  id?: Maybe<Scalars["String"]>
  correlationId?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  userFirstName?: Maybe<Scalars["String"]>
  userLastName?: Maybe<Scalars["String"]>
  userScopeType?: Maybe<Scalars["String"]>
  appId?: Maybe<Scalars["String"]>
  appKey?: Maybe<Scalars["String"]>
  appName?: Maybe<Scalars["String"]>
  subjectType?: Maybe<Scalars["String"]>
  success?: Maybe<Scalars["Boolean"]>
  identifier?: Maybe<Scalars["String"]>
  subject?: Maybe<Scalars["String"]>
  verb?: Maybe<Scalars["String"]>
  message?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["Object"]>
  oldValue?: Maybe<Scalars["String"]>
  newValue?: Maybe<Scalars["String"]>
  amount?: Maybe<Scalars["Float"]>
  createDate?: Maybe<Scalars["DateTime"]>
}

export type ChangeMessageCollection = {
  __typename?: "ChangeMessageCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChangeMessageCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ChangeMessage>>>
}

export type ChangeMessageCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ChangePasswordResult = {
  __typename?: "ChangePasswordResult"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChangePasswordResult>
  accountId: Scalars["Int"]
  succeeded: Scalars["Boolean"]
  errorMessage?: Maybe<Scalars["String"]>
}

export type ChangePasswordResult_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ChangePasswordResultCollection = {
  __typename?: "ChangePasswordResultCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChangePasswordResultCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ChangePasswordResult>>>
}

export type ChangePasswordResultCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Channel = {
  __typename?: "Channel"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Channel>
  tenantId: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  region?: Maybe<Scalars["String"]>
  countryCode?: Maybe<Scalars["String"]>
  groupCode?: Maybe<Scalars["String"]>
  siteIds?: Maybe<Array<Scalars["Int"]>>
  auditInfo?: Maybe<AuditInfo>
}

export type Channel_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Channel_Input = {
  tenantId: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  region?: Maybe<Scalars["String"]>
  countryCode?: Maybe<Scalars["String"]>
  groupCode?: Maybe<Scalars["String"]>
  siteIds?: Maybe<Array<Scalars["Int"]>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type ChannelCollection = {
  __typename?: "ChannelCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChannelCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Channel>>>
}

export type ChannelCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ChannelGroup = {
  __typename?: "ChannelGroup"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChannelGroup>
  tenantId: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type ChannelGroup_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ChannelGroup_Input = {
  tenantId: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type ChannelGroupCollection = {
  __typename?: "ChannelGroupCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ChannelGroupCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ChannelGroup>>>
}

export type ChannelGroupCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Checkout = {
  __typename?: "Checkout"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Checkout>
  id?: Maybe<Scalars["String"]>
  siteId: Scalars["Int"]
  tenantId: Scalars["Int"]
  number?: Maybe<Scalars["Int"]>
  originalCartId?: Maybe<Scalars["String"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  type?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<OrderItem>>>
  groupings?: Maybe<Array<Maybe<CheckoutGrouping>>>
  auditInfo?: Maybe<AuditInfo>
  destinations?: Maybe<Array<Maybe<Destination>>>
  payments?: Maybe<Array<Maybe<Payment>>>
  amountRemainingForPayment: Scalars["Float"]
  acceptsMarketing?: Maybe<Scalars["Boolean"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  customerTaxId?: Maybe<Scalars["String"]>
  isTaxExempt?: Maybe<Scalars["Boolean"]>
  currencyCode?: Maybe<Scalars["String"]>
  priceListCode?: Maybe<Scalars["String"]>
  attributes?: Maybe<Array<Maybe<OrderAttribute>>>
  shopperNotes?: Maybe<ShopperNotes>
  availableActions?: Maybe<Array<Scalars["String"]>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  channelCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  ipAddress?: Maybe<Scalars["String"]>
  sourceDevice?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  couponCodes?: Maybe<Array<Scalars["String"]>>
  invalidCoupons?: Maybe<Array<Maybe<InvalidCoupon>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage>>>
  dutyTotal?: Maybe<Scalars["Float"]>
  feeTotal: Scalars["Float"]
  subTotal: Scalars["Float"]
  itemLevelProductDiscountTotal: Scalars["Float"]
  orderLevelProductDiscountTotal: Scalars["Float"]
  itemTaxTotal: Scalars["Float"]
  itemTotal: Scalars["Float"]
  shippingSubTotal: Scalars["Float"]
  itemLevelShippingDiscountTotal: Scalars["Float"]
  orderLevelShippingDiscountTotal: Scalars["Float"]
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingSubTotal: Scalars["Float"]
  itemLevelHandlingDiscountTotal: Scalars["Float"]
  orderLevelHandlingDiscountTotal: Scalars["Float"]
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  total: Scalars["Float"]
}

export type Checkout_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Checkout_Input = {
  id?: Maybe<Scalars["String"]>
  siteId: Scalars["Int"]
  tenantId: Scalars["Int"]
  number?: Maybe<Scalars["Int"]>
  originalCartId?: Maybe<Scalars["String"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  type?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<OrderItem_Input>>>
  groupings?: Maybe<Array<Maybe<CheckoutGrouping_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
  destinations?: Maybe<Array<Maybe<Destination_Input>>>
  payments?: Maybe<Array<Maybe<Payment_Input>>>
  amountRemainingForPayment: Scalars["Float"]
  acceptsMarketing?: Maybe<Scalars["Boolean"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  customerTaxId?: Maybe<Scalars["String"]>
  isTaxExempt?: Maybe<Scalars["Boolean"]>
  currencyCode?: Maybe<Scalars["String"]>
  priceListCode?: Maybe<Scalars["String"]>
  attributes?: Maybe<Array<Maybe<OrderAttribute_Input>>>
  shopperNotes?: Maybe<ShopperNotes_Input>
  availableActions?: Maybe<Array<Scalars["String"]>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  channelCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  ipAddress?: Maybe<Scalars["String"]>
  sourceDevice?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  couponCodes?: Maybe<Array<Scalars["String"]>>
  invalidCoupons?: Maybe<Array<Maybe<InvalidCoupon_Input>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage_Input>>>
  dutyTotal?: Maybe<Scalars["Float"]>
  feeTotal: Scalars["Float"]
  subTotal: Scalars["Float"]
  itemLevelProductDiscountTotal: Scalars["Float"]
  orderLevelProductDiscountTotal: Scalars["Float"]
  itemTaxTotal: Scalars["Float"]
  itemTotal: Scalars["Float"]
  shippingSubTotal: Scalars["Float"]
  itemLevelShippingDiscountTotal: Scalars["Float"]
  orderLevelShippingDiscountTotal: Scalars["Float"]
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingSubTotal: Scalars["Float"]
  itemLevelHandlingDiscountTotal: Scalars["Float"]
  orderLevelHandlingDiscountTotal: Scalars["Float"]
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  total: Scalars["Float"]
}

export type CheckoutAction_Input = {
  actionName?: Maybe<Scalars["String"]>
}

export type CheckoutCollection = {
  __typename?: "CheckoutCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CheckoutCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Checkout>>>
}

export type CheckoutCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CheckoutGrouping = {
  __typename?: "CheckoutGrouping"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CheckoutGrouping>
  id?: Maybe<Scalars["String"]>
  destinationId?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  orderItemIds?: Maybe<Array<Scalars["String"]>>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  standaloneGroup: Scalars["Boolean"]
  shippingDiscounts?: Maybe<Array<Maybe<ShippingDiscount>>>
  handlingDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  dutyAmount?: Maybe<Scalars["Float"]>
  dutyTotal: Scalars["Float"]
  shippingAmount?: Maybe<Scalars["Float"]>
  shippingSubTotal: Scalars["Float"]
  itemLevelShippingDiscountTotal: Scalars["Float"]
  orderLevelShippingDiscountTotal: Scalars["Float"]
  shippingTax?: Maybe<Scalars["Float"]>
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal: Scalars["Float"]
  itemLevelHandlingDiscountTotal: Scalars["Float"]
  orderLevelHandlingDiscountTotal: Scalars["Float"]
  handlingTax?: Maybe<Scalars["Float"]>
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  taxData?: Maybe<Scalars["Object"]>
}

export type CheckoutGrouping_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CheckoutGrouping_Input = {
  id?: Maybe<Scalars["String"]>
  destinationId?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  orderItemIds?: Maybe<Array<Scalars["String"]>>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  standaloneGroup: Scalars["Boolean"]
  shippingDiscounts?: Maybe<Array<Maybe<ShippingDiscount_Input>>>
  handlingDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  dutyAmount?: Maybe<Scalars["Float"]>
  dutyTotal: Scalars["Float"]
  shippingAmount?: Maybe<Scalars["Float"]>
  shippingSubTotal: Scalars["Float"]
  itemLevelShippingDiscountTotal: Scalars["Float"]
  orderLevelShippingDiscountTotal: Scalars["Float"]
  shippingTax?: Maybe<Scalars["Float"]>
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal: Scalars["Float"]
  itemLevelHandlingDiscountTotal: Scalars["Float"]
  orderLevelHandlingDiscountTotal: Scalars["Float"]
  handlingTax?: Maybe<Scalars["Float"]>
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  taxData?: Maybe<Scalars["Object"]>
}

export type CheckoutGroupRates = {
  __typename?: "CheckoutGroupRates"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CheckoutGroupRates>
  groupingId?: Maybe<Scalars["String"]>
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>
}

export type CheckoutGroupRates_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CheckoutGroupShippingMethod_Input = {
  groupingId?: Maybe<Scalars["String"]>
  shippingRate?: Maybe<ShippingRate_Input>
}

export type CheckPayment = {
  __typename?: "CheckPayment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CheckPayment>
  checkNumber?: Maybe<Scalars["String"]>
}

export type CheckPayment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CheckPayment_Input = {
  checkNumber?: Maybe<Scalars["String"]>
}

export type CommerceSummary = {
  __typename?: "CommerceSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CommerceSummary>
  totalOrderAmount?: Maybe<CurrencyAmount>
  orderCount: Scalars["Int"]
  lastOrderDate?: Maybe<Scalars["DateTime"]>
  wishlistCount: Scalars["Int"]
  visitsCount: Scalars["Int"]
}

export type CommerceSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CommerceSummary_Input = {
  totalOrderAmount?: Maybe<CurrencyAmount_Input>
  orderCount: Scalars["Int"]
  lastOrderDate?: Maybe<Scalars["DateTime"]>
  wishlistCount: Scalars["Int"]
  visitsCount: Scalars["Int"]
}

export type CommerceUnitPrice = {
  __typename?: "CommerceUnitPrice"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CommerceUnitPrice>
  extendedAmount?: Maybe<Scalars["Float"]>
  listAmount?: Maybe<Scalars["Float"]>
  saleAmount?: Maybe<Scalars["Float"]>
  overrideAmount?: Maybe<Scalars["Float"]>
}

export type CommerceUnitPrice_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CommerceUnitPrice_Input = {
  extendedAmount?: Maybe<Scalars["Float"]>
  listAmount?: Maybe<Scalars["Float"]>
  saleAmount?: Maybe<Scalars["Float"]>
  overrideAmount?: Maybe<Scalars["Float"]>
}

export type ConfiguredProduct = {
  __typename?: "ConfiguredProduct"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ConfiguredProduct>
  productCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  fulfillmentTypesSupported?: Maybe<Array<Scalars["String"]>>
  variationProductCode?: Maybe<Scalars["String"]>
  upc?: Maybe<Scalars["String"]>
  mfgPartNumber?: Maybe<Scalars["String"]>
  purchasableState?: Maybe<ProductPurchasableState>
  priceRange?: Maybe<ProductPriceRange>
  volumePriceBands?: Maybe<Array<Maybe<ProductVolumePrice>>>
  volumePriceRange?: Maybe<ProductPriceRange>
  price?: Maybe<ProductPrice>
  availableShippingDiscounts?: Maybe<Array<Maybe<Discount>>>
  measurements?: Maybe<PackageMeasurements>
  inventoryInfo?: Maybe<ProductInventoryInfo>
  options?: Maybe<Array<Maybe<ProductOption>>>
  priceListEntryTypeProperty?: Maybe<ProductProperty>
  productImages?: Maybe<Array<Maybe<ProductImage>>>
}

export type ConfiguredProduct_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ConfirmationInfo_Input = {
  userName?: Maybe<Scalars["String"]>
  confirmationCode?: Maybe<Scalars["String"]>
  newPassword?: Maybe<Scalars["String"]>
}

export type Contact = {
  __typename?: "Contact"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Contact>
  id: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  middleNameOrInitial?: Maybe<Scalars["String"]>
  lastNameOrSurname?: Maybe<Scalars["String"]>
  companyOrOrganization?: Maybe<Scalars["String"]>
  phoneNumbers?: Maybe<Phone>
  address?: Maybe<Address>
}

export type Contact_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Contact_Input = {
  id: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  middleNameOrInitial?: Maybe<Scalars["String"]>
  lastNameOrSurname?: Maybe<Scalars["String"]>
  companyOrOrganization?: Maybe<Scalars["String"]>
  phoneNumbers?: Maybe<Phone_Input>
  address?: Maybe<Address_Input>
}

export type ContactType = {
  __typename?: "ContactType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ContactType>
  name?: Maybe<Scalars["String"]>
  isPrimary: Scalars["Boolean"]
}

export type ContactType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ContactType_Input = {
  name?: Maybe<Scalars["String"]>
  isPrimary: Scalars["Boolean"]
}

export type Coordinates = {
  __typename?: "Coordinates"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Coordinates>
  lat: Scalars["Float"]
  lng: Scalars["Float"]
}

export type Coordinates_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Coordinates_Input = {
  lat: Scalars["Float"]
  lng: Scalars["Float"]
}

export type Credit = {
  __typename?: "Credit"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Credit>
  code?: Maybe<Scalars["String"]>
  activationDate?: Maybe<Scalars["DateTime"]>
  creditType?: Maybe<Scalars["String"]>
  customCreditType?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  initialBalance?: Maybe<Scalars["Float"]>
  currentBalance?: Maybe<Scalars["Float"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  customerId?: Maybe<Scalars["Int"]>
  auditInfo?: Maybe<AuditInfo>
  creditTypeId: Scalars["Int"]
}

export type Credit_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Credit_Input = {
  code?: Maybe<Scalars["String"]>
  activationDate?: Maybe<Scalars["DateTime"]>
  creditType?: Maybe<Scalars["String"]>
  customCreditType?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  initialBalance?: Maybe<Scalars["Float"]>
  currentBalance?: Maybe<Scalars["Float"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  customerId?: Maybe<Scalars["Int"]>
  auditInfo?: Maybe<AuditInfo_Input>
  creditTypeId: Scalars["Int"]
}

export type CreditAuditEntry = {
  __typename?: "CreditAuditEntry"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CreditAuditEntry>
  activityType?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  activityTypeId: Scalars["Int"]
}

export type CreditAuditEntry_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CreditAuditEntryCollection = {
  __typename?: "CreditAuditEntryCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CreditAuditEntryCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CreditAuditEntry>>>
}

export type CreditAuditEntryCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CreditCollection = {
  __typename?: "CreditCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CreditCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Credit>>>
}

export type CreditCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CreditTransaction = {
  __typename?: "CreditTransaction"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CreditTransaction>
  id?: Maybe<Scalars["Int"]>
  transactionType?: Maybe<Scalars["String"]>
  comments?: Maybe<Scalars["String"]>
  impactAmount?: Maybe<Scalars["Float"]>
  auditInfo?: Maybe<AuditInfo>
  orderId?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
}

export type CreditTransaction_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CreditTransaction_Input = {
  id?: Maybe<Scalars["Int"]>
  transactionType?: Maybe<Scalars["String"]>
  comments?: Maybe<Scalars["String"]>
  impactAmount?: Maybe<Scalars["Float"]>
  auditInfo?: Maybe<AuditInfo_Input>
  orderId?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
}

export type CreditTransactionCollection = {
  __typename?: "CreditTransactionCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CreditTransactionCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CreditTransaction>>>
}

export type CreditTransactionCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CurrencyAmount = {
  __typename?: "CurrencyAmount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CurrencyAmount>
  currencyCode?: Maybe<Scalars["String"]>
  amount: Scalars["Float"]
}

export type CurrencyAmount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CurrencyAmount_Input = {
  currencyCode?: Maybe<Scalars["String"]>
  amount: Scalars["Float"]
}

export type CurrencyExchangeRate = {
  __typename?: "CurrencyExchangeRate"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CurrencyExchangeRate>
  fromCurrencyCode?: Maybe<Scalars["String"]>
  toCurrencyCode?: Maybe<Scalars["String"]>
  rate?: Maybe<Scalars["Float"]>
  multiplier?: Maybe<Scalars["Float"]>
  decimalPlaces?: Maybe<Scalars["Int"]>
  roundingStrategy?: Maybe<Scalars["Int"]>
  referenceData?: Maybe<Scalars["String"]>
}

export type CurrencyExchangeRate_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAccount = {
  __typename?: "CustomerAccount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAccount>
  emailAddress?: Maybe<Scalars["String"]>
  userName?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  isAnonymous: Scalars["Boolean"]
  isLocked: Scalars["Boolean"]
  isActive: Scalars["Boolean"]
  acceptsMarketing: Scalars["Boolean"]
  hasExternalPassword: Scalars["Boolean"]
  id: Scalars["Int"]
  customerSet?: Maybe<Scalars["String"]>
  commerceSummary?: Maybe<CommerceSummary>
  contacts?: Maybe<Array<Maybe<CustomerContact>>>
  companyOrOrganization?: Maybe<Scalars["String"]>
  notes?: Maybe<Array<Maybe<CustomerNote>>>
  attributes?: Maybe<Array<Maybe<CustomerAttribute>>>
  segments?: Maybe<Array<Maybe<CustomerSegment>>>
  taxExempt: Scalars["Boolean"]
  taxId?: Maybe<Scalars["String"]>
  externalId?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  customerSinceDate?: Maybe<Scalars["DateTime"]>
  accountType?: Maybe<Scalars["String"]>
}

export type CustomerAccount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAccount_Input = {
  emailAddress?: Maybe<Scalars["String"]>
  userName?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  isAnonymous: Scalars["Boolean"]
  isLocked: Scalars["Boolean"]
  isActive: Scalars["Boolean"]
  acceptsMarketing: Scalars["Boolean"]
  hasExternalPassword: Scalars["Boolean"]
  id: Scalars["Int"]
  customerSet?: Maybe<Scalars["String"]>
  commerceSummary?: Maybe<CommerceSummary_Input>
  contacts?: Maybe<Array<Maybe<CustomerContact_Input>>>
  companyOrOrganization?: Maybe<Scalars["String"]>
  notes?: Maybe<Array<Maybe<CustomerNote_Input>>>
  attributes?: Maybe<Array<Maybe<CustomerAttribute_Input>>>
  segments?: Maybe<Array<Maybe<CustomerSegment_Input>>>
  taxExempt: Scalars["Boolean"]
  taxId?: Maybe<Scalars["String"]>
  externalId?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  customerSinceDate?: Maybe<Scalars["DateTime"]>
  accountType?: Maybe<Scalars["String"]>
}

export type CustomerAccountAction_Input = {
  actionName?: Maybe<Scalars["String"]>
}

export type CustomerAccountAndAuthInfo_Input = {
  account?: Maybe<CustomerAccount_Input>
  password?: Maybe<Scalars["String"]>
  externalPassword?: Maybe<Scalars["String"]>
  isImport: Scalars["Boolean"]
}

export type CustomerAccountCollection = {
  __typename?: "CustomerAccountCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAccountCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerAccount>>>
}

export type CustomerAccountCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAttribute = {
  __typename?: "CustomerAttribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAttribute>
  auditInfo?: Maybe<AuditInfo>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type CustomerAttribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAttribute_Input = {
  auditInfo?: Maybe<AuditInfo_Input>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type CustomerAttributeCollection = {
  __typename?: "CustomerAttributeCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAttributeCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerAttribute>>>
}

export type CustomerAttributeCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAuditEntry = {
  __typename?: "CustomerAuditEntry"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAuditEntry>
  customerAccountId: Scalars["Int"]
  customerAuditEntryId: Scalars["Int"]
  entryDate: Scalars["DateTime"]
  entryUser?: Maybe<Scalars["String"]>
  application?: Maybe<Scalars["String"]>
  site?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  fieldPath?: Maybe<Scalars["String"]>
  oldValue?: Maybe<Scalars["String"]>
  newValue?: Maybe<Scalars["String"]>
}

export type CustomerAuditEntry_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAuditEntryCollection = {
  __typename?: "CustomerAuditEntryCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAuditEntryCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerAuditEntry>>>
}

export type CustomerAuditEntryCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerAuthTicket = {
  __typename?: "CustomerAuthTicket"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerAuthTicket>
  customerAccount?: Maybe<CustomerAccount>
  accessToken?: Maybe<Scalars["String"]>
  accessTokenExpiration: Scalars["DateTime"]
  refreshToken?: Maybe<Scalars["String"]>
  refreshTokenExpiration: Scalars["DateTime"]
  userId?: Maybe<Scalars["String"]>
}

export type CustomerAuthTicket_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerContact = {
  __typename?: "CustomerContact"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerContact>
  accountId: Scalars["Int"]
  types?: Maybe<Array<Maybe<ContactType>>>
  auditInfo?: Maybe<AuditInfo>
  faxNumber?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  middleNameOrInitial?: Maybe<Scalars["String"]>
  lastNameOrSurname?: Maybe<Scalars["String"]>
  companyOrOrganization?: Maybe<Scalars["String"]>
  phoneNumbers?: Maybe<Phone>
  address?: Maybe<Address>
}

export type CustomerContact_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerContact_Input = {
  accountId: Scalars["Int"]
  types?: Maybe<Array<Maybe<ContactType_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
  faxNumber?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  middleNameOrInitial?: Maybe<Scalars["String"]>
  lastNameOrSurname?: Maybe<Scalars["String"]>
  companyOrOrganization?: Maybe<Scalars["String"]>
  phoneNumbers?: Maybe<Phone_Input>
  address?: Maybe<Address_Input>
}

export type CustomerContactCollection = {
  __typename?: "CustomerContactCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerContactCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerContact>>>
}

export type CustomerContactCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerLoginInfo_Input = {
  emailAddress?: Maybe<Scalars["String"]>
  username?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
  externalPassword?: Maybe<Scalars["String"]>
  isImport?: Maybe<Scalars["Boolean"]>
}

export type CustomerNote = {
  __typename?: "CustomerNote"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerNote>
  id: Scalars["Int"]
  content?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type CustomerNote_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerNote_Input = {
  id: Scalars["Int"]
  content?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type CustomerNoteCollection = {
  __typename?: "CustomerNoteCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerNoteCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerNote>>>
}

export type CustomerNoteCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerPurchaseOrderAccount = {
  __typename?: "CustomerPurchaseOrderAccount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerPurchaseOrderAccount>
  id: Scalars["Int"]
  accountId: Scalars["Int"]
  isEnabled: Scalars["Boolean"]
  creditLimit: Scalars["Float"]
  availableBalance: Scalars["Float"]
  totalAvailableBalance: Scalars["Float"]
  overdraftAllowance?: Maybe<Scalars["Float"]>
  overdraftAllowanceType?: Maybe<Scalars["String"]>
  customerPurchaseOrderPaymentTerms?: Maybe<
    Array<Maybe<CustomerPurchaseOrderPaymentTerm>>
  >
  auditInfo?: Maybe<AuditInfo>
}

export type CustomerPurchaseOrderAccount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerPurchaseOrderAccount_Input = {
  id: Scalars["Int"]
  accountId: Scalars["Int"]
  isEnabled: Scalars["Boolean"]
  creditLimit: Scalars["Float"]
  availableBalance: Scalars["Float"]
  totalAvailableBalance: Scalars["Float"]
  overdraftAllowance?: Maybe<Scalars["Float"]>
  overdraftAllowanceType?: Maybe<Scalars["String"]>
  customerPurchaseOrderPaymentTerms?: Maybe<
    Array<Maybe<CustomerPurchaseOrderPaymentTerm_Input>>
  >
  auditInfo?: Maybe<AuditInfo_Input>
}

export type CustomerPurchaseOrderAccountCollection = {
  __typename?: "CustomerPurchaseOrderAccountCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerPurchaseOrderAccountCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerPurchaseOrderAccount>>>
}

export type CustomerPurchaseOrderAccountCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerPurchaseOrderPaymentTerm = {
  __typename?: "CustomerPurchaseOrderPaymentTerm"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerPurchaseOrderPaymentTerm>
  siteId: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type CustomerPurchaseOrderPaymentTerm_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerPurchaseOrderPaymentTerm_Input = {
  siteId: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type CustomerSegment = {
  __typename?: "CustomerSegment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerSegment>
  id: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type CustomerSegment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerSegment_Input = {
  id: Scalars["Int"]
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type CustomerSegmentCollection = {
  __typename?: "CustomerSegmentCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerSegmentCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerSegment>>>
}

export type CustomerSegmentCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerSet = {
  __typename?: "CustomerSet"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerSet>
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  sites?: Maybe<Array<Maybe<CustomerSetSite>>>
  isDefault: Scalars["Boolean"]
  aggregateInfo?: Maybe<CustomerSetAggregateInfo>
}

export type CustomerSet_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerSet_Input = {
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  sites?: Maybe<Array<Maybe<CustomerSetSite_Input>>>
  isDefault: Scalars["Boolean"]
  aggregateInfo?: Maybe<CustomerSetAggregateInfo_Input>
}

export type CustomerSetAggregateInfo = {
  __typename?: "CustomerSetAggregateInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerSetAggregateInfo>
  customerCount: Scalars["Int"]
}

export type CustomerSetAggregateInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerSetAggregateInfo_Input = {
  customerCount: Scalars["Int"]
}

export type CustomerSetCollection = {
  __typename?: "CustomerSetCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerSetCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<CustomerSet>>>
}

export type CustomerSetCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerSetSite = {
  __typename?: "CustomerSetSite"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<CustomerSetSite>
  siteId: Scalars["Int"]
  customerSetCode?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type CustomerSetSite_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type CustomerSetSite_Input = {
  siteId: Scalars["Int"]
  customerSetCode?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type CustomerUserAuthInfo_Input = {
  username?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
}

export type DbEntry = {
  __typename?: "DBEntry"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DbEntry>
  siteId?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
  modifyBy?: Maybe<Scalars["String"]>
  modifyDate: Scalars["DateTime"]
  createBy?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  lastAccessDate: Scalars["DateTime"]
}

export type DbEntry_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DbEntry_Input = {
  siteId?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
  modifyBy?: Maybe<Scalars["String"]>
  modifyDate: Scalars["DateTime"]
  createBy?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  lastAccessDate: Scalars["DateTime"]
}

export type DbEntry2 = {
  __typename?: "DBEntry2"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DbEntry2>
  siteId?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
  modifyBy?: Maybe<Scalars["String"]>
  modifyDate: Scalars["DateTime"]
  createBy?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  lastAccessDate: Scalars["DateTime"]
}

export type DbEntry2_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DbEntry2_Input = {
  siteId?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
  modifyBy?: Maybe<Scalars["String"]>
  modifyDate: Scalars["DateTime"]
  createBy?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  lastAccessDate: Scalars["DateTime"]
}

export type DbEntry2Collection = {
  __typename?: "DBEntry2Collection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DbEntry2Collection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<DbEntry2>>>
}

export type DbEntry2Collection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DbEntryCollection = {
  __typename?: "DBEntryCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DbEntryCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<DbEntry>>>
}

export type DbEntryCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Destination = {
  __typename?: "Destination"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Destination>
  id?: Maybe<Scalars["String"]>
  destinationContact?: Maybe<Contact>
  isDestinationCommercial?: Maybe<Scalars["Boolean"]>
  data?: Maybe<Scalars["Object"]>
}

export type Destination_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Destination_Input = {
  id?: Maybe<Scalars["String"]>
  destinationContact?: Maybe<Contact_Input>
  isDestinationCommercial?: Maybe<Scalars["Boolean"]>
  data?: Maybe<Scalars["Object"]>
}

export type DigitalPackage = {
  __typename?: "DigitalPackage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DigitalPackage>
  id?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<DigitalPackageItem>>>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  availableActions?: Maybe<Array<Scalars["String"]>>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
}

export type DigitalPackage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DigitalPackage_Input = {
  id?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<DigitalPackageItem_Input>>>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  availableActions?: Maybe<Array<Scalars["String"]>>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
}

export type DigitalPackageItem = {
  __typename?: "DigitalPackageItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DigitalPackageItem>
  giftCardCode?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  fulfillmentItemType?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
}

export type DigitalPackageItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DigitalPackageItem_Input = {
  giftCardCode?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  fulfillmentItemType?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
}

export type DigitalWallet_Input = {
  digitalWalletData?: Maybe<Scalars["String"]>
  cartId?: Maybe<Scalars["String"]>
}

export type Discount = {
  __typename?: "Discount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Discount>
  discountId: Scalars["Int"]
  expirationDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  friendlyDescription?: Maybe<Scalars["String"]>
  impact: Scalars["Float"]
}

export type Discount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Discount_Input = {
  discountId: Scalars["Int"]
  expirationDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  friendlyDescription?: Maybe<Scalars["String"]>
  impact: Scalars["Float"]
}

export type DiscountSelections_Input = {
  discountIds?: Maybe<Array<Scalars["Int"]>>
}

export type DiscountValidationSummary = {
  __typename?: "DiscountValidationSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DiscountValidationSummary>
  applicableDiscounts?: Maybe<Array<Maybe<Discount>>>
}

export type DiscountValidationSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Document = {
  __typename?: "Document"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Document>
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  publishSetCode?: Maybe<Scalars["String"]>
  extension?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  listFQN?: Maybe<Scalars["String"]>
  contentLength?: Maybe<Scalars["Int"]>
  contentMimeType?: Maybe<Scalars["String"]>
  contentUpdateDate?: Maybe<Scalars["DateTime"]>
  publishState?: Maybe<Scalars["String"]>
  properties?: Maybe<Scalars["Object"]>
  insertDate?: Maybe<Scalars["DateTime"]>
  updateDate?: Maybe<Scalars["DateTime"]>
  activeDateRange?: Maybe<ActiveDateRange>
}

export type Document_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Document_Input = {
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  publishSetCode?: Maybe<Scalars["String"]>
  extension?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  listFQN?: Maybe<Scalars["String"]>
  contentLength?: Maybe<Scalars["Int"]>
  contentMimeType?: Maybe<Scalars["String"]>
  contentUpdateDate?: Maybe<Scalars["DateTime"]>
  publishState?: Maybe<Scalars["String"]>
  properties?: Maybe<Scalars["Object"]>
  insertDate?: Maybe<Scalars["DateTime"]>
  updateDate?: Maybe<Scalars["DateTime"]>
  activeDateRange?: Maybe<ActiveDateRange_Input>
}

export type DocumentCollection = {
  __typename?: "DocumentCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Document>>>
}

export type DocumentCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentDraftSummary = {
  __typename?: "DocumentDraftSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentDraftSummary>
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  listFQN?: Maybe<Scalars["String"]>
  activeUpdateDate?: Maybe<Scalars["DateTime"]>
  draftUpdateDate: Scalars["DateTime"]
  updatedBy?: Maybe<Scalars["String"]>
  activeUpdatedBy?: Maybe<Scalars["String"]>
  publishType?: Maybe<Scalars["String"]>
  publishSetCode?: Maybe<Scalars["String"]>
  masterCatalogId?: Maybe<Scalars["Int"]>
  catalogId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
}

export type DocumentDraftSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentDraftSummaryPagedCollection = {
  __typename?: "DocumentDraftSummaryPagedCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentDraftSummaryPagedCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<DocumentDraftSummary>>>
}

export type DocumentDraftSummaryPagedCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentInstallation = {
  __typename?: "DocumentInstallation"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentInstallation>
  name?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  properties?: Maybe<Scalars["Object"]>
  locale?: Maybe<Scalars["String"]>
}

export type DocumentInstallation_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentInstallation_Input = {
  name?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  properties?: Maybe<Scalars["Object"]>
  locale?: Maybe<Scalars["String"]>
}

export type DocumentList = {
  __typename?: "DocumentList"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentList>
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  listFQN?: Maybe<Scalars["String"]>
  documentTypes?: Maybe<Array<Scalars["String"]>>
  supportsPublishing?: Maybe<Scalars["Boolean"]>
  enablePublishing?: Maybe<Scalars["Boolean"]>
  supportsActiveDateRanges?: Maybe<Scalars["Boolean"]>
  enableActiveDateRanges?: Maybe<Scalars["Boolean"]>
  views?: Maybe<Array<Maybe<View>>>
  usages?: Maybe<Array<Scalars["String"]>>
  security?: Maybe<Scalars["String"]>
  scopeId?: Maybe<Scalars["Int"]>
  scopeType?: Maybe<Scalars["String"]>
  documentListType?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["Object"]>
}

export type DocumentList_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentList_Input = {
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  listFQN?: Maybe<Scalars["String"]>
  documentTypes?: Maybe<Array<Scalars["String"]>>
  supportsPublishing?: Maybe<Scalars["Boolean"]>
  enablePublishing?: Maybe<Scalars["Boolean"]>
  supportsActiveDateRanges?: Maybe<Scalars["Boolean"]>
  enableActiveDateRanges?: Maybe<Scalars["Boolean"]>
  views?: Maybe<Array<Maybe<View_Input>>>
  usages?: Maybe<Array<Scalars["String"]>>
  security?: Maybe<Scalars["String"]>
  scopeId?: Maybe<Scalars["Int"]>
  scopeType?: Maybe<Scalars["String"]>
  documentListType?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["Object"]>
}

export type DocumentListCollection = {
  __typename?: "DocumentListCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentListCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<DocumentList>>>
}

export type DocumentListCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentListType = {
  __typename?: "DocumentListType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentListType>
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  documentListTypeFQN?: Maybe<Scalars["String"]>
  scopeType?: Maybe<Scalars["String"]>
  installationPackage?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  defaultDocuments?: Maybe<Array<Maybe<DocumentInstallation>>>
  documentTypeFQNs?: Maybe<Array<Scalars["String"]>>
  supportsPublishing: Scalars["Boolean"]
  enablePublishing?: Maybe<Scalars["Boolean"]>
  supportsActiveDateRanges: Scalars["Boolean"]
  enableActiveDateRanges?: Maybe<Scalars["Boolean"]>
  views?: Maybe<Array<Maybe<View>>>
  usages?: Maybe<Array<Scalars["String"]>>
  metadata?: Maybe<Scalars["Object"]>
}

export type DocumentListType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentListType_Input = {
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  documentListTypeFQN?: Maybe<Scalars["String"]>
  scopeType?: Maybe<Scalars["String"]>
  installationPackage?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  defaultDocuments?: Maybe<Array<Maybe<DocumentInstallation_Input>>>
  documentTypeFQNs?: Maybe<Array<Scalars["String"]>>
  supportsPublishing: Scalars["Boolean"]
  enablePublishing?: Maybe<Scalars["Boolean"]>
  supportsActiveDateRanges: Scalars["Boolean"]
  enableActiveDateRanges?: Maybe<Scalars["Boolean"]>
  views?: Maybe<Array<Maybe<View_Input>>>
  usages?: Maybe<Array<Scalars["String"]>>
  metadata?: Maybe<Scalars["Object"]>
}

export type DocumentListTypeCollection = {
  __typename?: "DocumentListTypeCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentListTypeCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<DocumentListType>>>
}

export type DocumentListTypeCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentType = {
  __typename?: "DocumentType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentType>
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  adminName?: Maybe<Scalars["String"]>
  installationPackage?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["Object"]>
  properties?: Maybe<Array<Maybe<Property>>>
}

export type DocumentType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type DocumentType_Input = {
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  documentTypeFQN?: Maybe<Scalars["String"]>
  adminName?: Maybe<Scalars["String"]>
  installationPackage?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["Object"]>
  properties?: Maybe<Array<Maybe<Property_Input>>>
}

export type DocumentTypeCollection = {
  __typename?: "DocumentTypeCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<DocumentTypeCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<DocumentType>>>
}

export type DocumentTypeCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type EntityCollection = {
  __typename?: "EntityCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<EntityCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Scalars["String"]>>
}

export type EntityCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type EntityContainer = {
  __typename?: "EntityContainer"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<EntityContainer>
  tenantId: Scalars["Int"]
  siteId?: Maybe<Scalars["Int"]>
  masterCatalogId?: Maybe<Scalars["Int"]>
  catalogId?: Maybe<Scalars["Int"]>
  localeCode?: Maybe<Scalars["String"]>
  listFullName?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  item?: Maybe<Scalars["String"]>
  createBy?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  updateBy?: Maybe<Scalars["String"]>
  updateDate: Scalars["DateTime"]
}

export type EntityContainer_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type EntityContainerCollection = {
  __typename?: "EntityContainerCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<EntityContainerCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<EntityContainer>>>
}

export type EntityContainerCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type EntityList = {
  __typename?: "EntityList"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<EntityList>
  tenantId: Scalars["Int"]
  nameSpace?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  contextLevel?: Maybe<Scalars["String"]>
  useSystemAssignedId: Scalars["Boolean"]
  idProperty?: Maybe<IndexedProperty>
  indexA?: Maybe<IndexedProperty>
  indexB?: Maybe<IndexedProperty>
  indexC?: Maybe<IndexedProperty>
  indexD?: Maybe<IndexedProperty>
  isVisibleInStorefront: Scalars["Boolean"]
  isLocaleSpecific: Scalars["Boolean"]
  isShopperSpecific: Scalars["Boolean"]
  isSandboxDataCloningSupported: Scalars["Boolean"]
  views?: Maybe<Array<Maybe<ListView>>>
  usages?: Maybe<Array<Scalars["String"]>>
  metadata?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  updateDate: Scalars["DateTime"]
}

export type EntityList_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type EntityList_Input = {
  tenantId: Scalars["Int"]
  nameSpace?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  contextLevel?: Maybe<Scalars["String"]>
  useSystemAssignedId: Scalars["Boolean"]
  idProperty?: Maybe<IndexedProperty_Input>
  indexA?: Maybe<IndexedProperty_Input>
  indexB?: Maybe<IndexedProperty_Input>
  indexC?: Maybe<IndexedProperty_Input>
  indexD?: Maybe<IndexedProperty_Input>
  isVisibleInStorefront: Scalars["Boolean"]
  isLocaleSpecific: Scalars["Boolean"]
  isShopperSpecific: Scalars["Boolean"]
  isSandboxDataCloningSupported: Scalars["Boolean"]
  views?: Maybe<Array<Maybe<ListView_Input>>>
  usages?: Maybe<Array<Scalars["String"]>>
  metadata?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  updateDate: Scalars["DateTime"]
}

export type EntityListCollection = {
  __typename?: "EntityListCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<EntityListCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<EntityList>>>
}

export type EntityListCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ExclusionListEntryLocationCode_Input = {
  locationCode: Scalars["String"]
  orderItemID: Scalars["Int"]
}

export type ExtendedProperty = {
  __typename?: "ExtendedProperty"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ExtendedProperty>
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type ExtendedProperty_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ExtendedProperty_Input = {
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type Facet = {
  __typename?: "Facet"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Facet>
  label?: Maybe<Scalars["String"]>
  facetType?: Maybe<Scalars["String"]>
  field?: Maybe<Scalars["String"]>
  values?: Maybe<Array<Maybe<FacetValue>>>
}

export type Facet_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type FacetValue = {
  __typename?: "FacetValue"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<FacetValue>
  label?: Maybe<Scalars["String"]>
  isApplied?: Maybe<Scalars["Boolean"]>
  count: Scalars["Int"]
  value?: Maybe<Scalars["String"]>
  filterValue?: Maybe<Scalars["String"]>
  rangeQueryValueStart?: Maybe<Scalars["String"]>
  rangeQueryValueEnd?: Maybe<Scalars["String"]>
  parentFacetValue?: Maybe<Scalars["String"]>
  isDisplayed: Scalars["Boolean"]
  childrenFacetValues?: Maybe<Array<Maybe<FacetValue>>>
}

export type FacetValue_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Folder = {
  __typename?: "Folder"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Folder>
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  parentId?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  documentListName?: Maybe<Scalars["String"]>
}

export type Folder_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Folder_Input = {
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  parentId?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  documentListName?: Maybe<Scalars["String"]>
}

export type FolderCollection = {
  __typename?: "FolderCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<FolderCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Folder>>>
}

export type FolderCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type FolderTree = {
  __typename?: "FolderTree"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<FolderTree>
  folder?: Maybe<Folder>
  children?: Maybe<Array<Maybe<FolderTree>>>
}

export type FolderTree_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type FulfillmentAction_Input = {
  actionName?: Maybe<Scalars["String"]>
  packageIds?: Maybe<Array<Scalars["String"]>>
  pickupIds?: Maybe<Array<Scalars["String"]>>
  digitalPackageIds?: Maybe<Array<Scalars["String"]>>
}

export type FulfillmentInfo = {
  __typename?: "FulfillmentInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<FulfillmentInfo>
  fulfillmentContact?: Maybe<Contact>
  isDestinationCommercial?: Maybe<Scalars["Boolean"]>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo>
}

export type FulfillmentInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type FulfillmentInfo_Input = {
  fulfillmentContact?: Maybe<Contact_Input>
  isDestinationCommercial?: Maybe<Scalars["Boolean"]>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type FulfillmentTask = {
  __typename?: "FulfillmentTask"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<FulfillmentTask>
  links?: Maybe<Scalars["Object"]>
  active?: Maybe<Scalars["Boolean"]>
  attributes?: Maybe<Scalars["Object"]>
  completed?: Maybe<Scalars["Boolean"]>
  completedDate?: Maybe<Scalars["DateTime"]>
  description?: Maybe<Scalars["String"]>
  inputs?: Maybe<Array<Maybe<TaskInput>>>
  name?: Maybe<Scalars["String"]>
  skippable?: Maybe<Scalars["Boolean"]>
  subject?: Maybe<Scalars["String"]>
  taskId?: Maybe<Scalars["String"]>
}

export type FulfillmentTask_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type FulfillmentTask_Input = {
  links?: Maybe<Scalars["Object"]>
  active?: Maybe<Scalars["Boolean"]>
  attributes?: Maybe<Scalars["Object"]>
  completed?: Maybe<Scalars["Boolean"]>
  completedDate?: Maybe<Scalars["DateTime"]>
  description?: Maybe<Scalars["String"]>
  inputs?: Maybe<Array<Maybe<TaskInput_Input>>>
  name?: Maybe<Scalars["String"]>
  skippable?: Maybe<Scalars["Boolean"]>
  subject?: Maybe<Scalars["String"]>
  taskId?: Maybe<Scalars["String"]>
}

export type Hours = {
  __typename?: "Hours"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Hours>
  label?: Maybe<Scalars["String"]>
  openTime?: Maybe<Scalars["String"]>
  closeTime?: Maybe<Scalars["String"]>
  isClosed: Scalars["Boolean"]
}

export type Hours_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Hours_Input = {
  label?: Maybe<Scalars["String"]>
  openTime?: Maybe<Scalars["String"]>
  closeTime?: Maybe<Scalars["String"]>
  isClosed: Scalars["Boolean"]
}

export type HttpContent_Input = {
  headers?: Maybe<Array<Maybe<KeyValuePair2_Input>>>
}

export type HttpMethod_Input = {
  method?: Maybe<Scalars["String"]>
}

export type HttpRequestMessage_Input = {
  version?: Maybe<Version_Input>
  content?: Maybe<HttpContent_Input>
  method?: Maybe<HttpMethod_Input>
  requestUri?: Maybe<Scalars["DateTime"]>
  headers?: Maybe<Array<Maybe<KeyValuePair2_Input>>>
  properties?: Maybe<Scalars["Object"]>
}

export type IndexableOrder = {
  __typename?: "IndexableOrder"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<IndexableOrder>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  id?: Maybe<Scalars["String"]>
  orderNumber?: Maybe<Scalars["Int"]>
  version?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  ipAddress?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  closedDate?: Maybe<Scalars["DateTime"]>
  cancelledDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  status?: Maybe<Scalars["String"]>
  paymentStatus?: Maybe<Scalars["String"]>
  fulfillmentStatus?: Maybe<Scalars["String"]>
  returnStatus?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  externalId?: Maybe<Scalars["String"]>
  originalCartId?: Maybe<Scalars["String"]>
  billingContact?: Maybe<Array<Maybe<Contact>>>
  fulfillmentContact?: Maybe<Contact>
  auditInfo?: Maybe<AuditInfo>
  attributes?: Maybe<Array<Maybe<IndexOrderAttribute>>>
  email?: Maybe<Scalars["String"]>
  extendedPropertyKeys?: Maybe<Array<Scalars["String"]>>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  channelCode?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<IndexOrderItem>>>
  taxTotal?: Maybe<Scalars["Float"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  dutyTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
}

export type IndexableOrder_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type IndexableOrderCollection = {
  __typename?: "IndexableOrderCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<IndexableOrderCollection>
  nextToken?: Maybe<Scalars["String"]>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<IndexableOrder>>>
}

export type IndexableOrderCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type IndexedProperty = {
  __typename?: "IndexedProperty"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<IndexedProperty>
  propertyName?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
}

export type IndexedProperty_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type IndexedProperty_Input = {
  propertyName?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
}

export type IndexOrderAttribute = {
  __typename?: "IndexOrderAttribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<IndexOrderAttribute>
  id?: Maybe<Scalars["String"]>
  attributeType?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type IndexOrderAttribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type IndexOrderItem = {
  __typename?: "IndexOrderItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<IndexOrderItem>
  productCode?: Maybe<Scalars["String"]>
  variationProductCode?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  upc?: Maybe<Scalars["String"]>
  mfgPartNumber?: Maybe<Scalars["String"]>
}

export type IndexOrderItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type InStockNotificationSubscription = {
  __typename?: "InStockNotificationSubscription"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<InStockNotificationSubscription>
  id?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  customerId?: Maybe<Scalars["Int"]>
  productCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type InStockNotificationSubscription_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type InStockNotificationSubscription_Input = {
  id?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  customerId?: Maybe<Scalars["Int"]>
  productCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type InStockNotificationSubscriptionCollection = {
  __typename?: "InStockNotificationSubscriptionCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<InStockNotificationSubscriptionCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<InStockNotificationSubscription>>>
}

export type InStockNotificationSubscriptionCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type InvalidCoupon = {
  __typename?: "InvalidCoupon"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<InvalidCoupon>
  couponCode?: Maybe<Scalars["String"]>
  reasonCode: Scalars["Int"]
  reason?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  discountId: Scalars["Int"]
}

export type InvalidCoupon_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type InvalidCoupon_Input = {
  couponCode?: Maybe<Scalars["String"]>
  reasonCode: Scalars["Int"]
  reason?: Maybe<Scalars["String"]>
  createDate: Scalars["DateTime"]
  discountId: Scalars["Int"]
}

export enum InventoryRequestType {
  All = "ALL",
  Partial = "PARTIAL",
  Any = "ANY",
  AllStores = "ALL_STORES"
}

export type ItemsForDestination_Input = {
  destinationId?: Maybe<Scalars["String"]>
  itemIds?: Maybe<Array<Scalars["String"]>>
}

export type JsonNode = {
  __typename?: "JsonNode"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<JsonNode>
  array: Scalars["Boolean"]
  bigDecimal: Scalars["Boolean"]
  bigInteger: Scalars["Boolean"]
  binary: Scalars["Boolean"]
  boolean: Scalars["Boolean"]
  containerNode: Scalars["Boolean"]
  double: Scalars["Boolean"]
  float: Scalars["Boolean"]
  floatingPointNumber: Scalars["Boolean"]
  int: Scalars["Boolean"]
  integralNumber: Scalars["Boolean"]
  long: Scalars["Boolean"]
  missingNode: Scalars["Boolean"]
  nodeType?: Maybe<NodeType>
  null: Scalars["Boolean"]
  number: Scalars["Boolean"]
  object: Scalars["Boolean"]
  pojo: Scalars["Boolean"]
  short: Scalars["Boolean"]
  textual: Scalars["Boolean"]
  valueNode: Scalars["Boolean"]
}

export type JsonNode_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type KeyValuePair2_Input = {
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Array<Scalars["String"]>>
}

export type KiboCarsContractsModelGenerateLabelResponse = {
  __typename?: "KiboCarsContractsModelGenerateLabelResponse"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<KiboCarsContractsModelGenerateLabelResponse>
  imageURL?: Maybe<Scalars["String"]>
  price?: Maybe<Scalars["Float"]>
  trackingNumber?: Maybe<Scalars["String"]>
}

export type KiboCarsContractsModelGenerateLabelResponse_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ListView = {
  __typename?: "ListView"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ListView>
  name?: Maybe<Scalars["String"]>
  usages?: Maybe<Array<Scalars["String"]>>
  metaData?: Maybe<Scalars["String"]>
  security?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  defaultSort?: Maybe<Scalars["String"]>
  fields?: Maybe<Array<Maybe<ListViewField>>>
}

export type ListView_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ListView_Input = {
  name?: Maybe<Scalars["String"]>
  usages?: Maybe<Array<Scalars["String"]>>
  metaData?: Maybe<Scalars["String"]>
  security?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  defaultSort?: Maybe<Scalars["String"]>
  fields?: Maybe<Array<Maybe<ListViewField_Input>>>
}

export type ListViewCollection = {
  __typename?: "ListViewCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ListViewCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ListView>>>
}

export type ListViewCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ListViewField = {
  __typename?: "ListViewField"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ListViewField>
  name?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
}

export type ListViewField_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ListViewField_Input = {
  name?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
}

export type Location = {
  __typename?: "Location"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Location>
  code?: Maybe<Scalars["String"]>
  locationTypes?: Maybe<Array<Maybe<LocationType>>>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  address?: Maybe<Address>
  geo?: Maybe<Coordinates>
  phone?: Maybe<Scalars["String"]>
  fax?: Maybe<Scalars["String"]>
  supportsInventory: Scalars["Boolean"]
  fulfillmentTypes?: Maybe<Array<Maybe<Location_Location_FulfillmentType>>>
  regularHours?: Maybe<RegularHours>
  shippingOriginContact?: Maybe<ShippingOriginContact>
  note?: Maybe<Scalars["String"]>
  tags?: Maybe<Array<Scalars["String"]>>
  attributes?: Maybe<Array<Maybe<LocationAttribute>>>
  auditInfo?: Maybe<AuditInfo>
  allowFulfillmentWithNoStock: Scalars["Boolean"]
  isDisabled: Scalars["Boolean"]
  express: Scalars["Boolean"]
  transferEnabled: Scalars["Boolean"]
  includeInInventoryAggregrate: Scalars["Boolean"]
  includeInLocationExport: Scalars["Boolean"]
  warehouseEnabled: Scalars["Boolean"]
  requiresManifest: Scalars["Boolean"]
}

export type Location_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Location_Input = {
  code?: Maybe<Scalars["String"]>
  locationTypes?: Maybe<Array<Maybe<LocationType_Input>>>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  address?: Maybe<Address_Input>
  geo?: Maybe<Coordinates_Input>
  phone?: Maybe<Scalars["String"]>
  fax?: Maybe<Scalars["String"]>
  supportsInventory: Scalars["Boolean"]
  fulfillmentTypes?: Maybe<
    Array<Maybe<Location_Location_FulfillmentType_Input>>
  >
  regularHours?: Maybe<RegularHours_Input>
  shippingOriginContact?: Maybe<ShippingOriginContact_Input>
  note?: Maybe<Scalars["String"]>
  tags?: Maybe<Array<Scalars["String"]>>
  attributes?: Maybe<Array<Maybe<LocationAttribute_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
  allowFulfillmentWithNoStock: Scalars["Boolean"]
  isDisabled: Scalars["Boolean"]
  express: Scalars["Boolean"]
  transferEnabled: Scalars["Boolean"]
  includeInInventoryAggregrate: Scalars["Boolean"]
  includeInLocationExport: Scalars["Boolean"]
  warehouseEnabled: Scalars["Boolean"]
  requiresManifest: Scalars["Boolean"]
}

export type Location_Location_FulfillmentType = {
  __typename?: "location_location_FulfillmentType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Location_Location_FulfillmentType>
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type Location_Location_FulfillmentType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Location_Location_FulfillmentType_Input = {
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type LocationAttribute = {
  __typename?: "LocationAttribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationAttribute>
  attributeDefinition?: Maybe<Attribute>
  auditInfo?: Maybe<AuditInfo>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type LocationAttribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationAttribute_Input = {
  attributeDefinition?: Maybe<Attribute_Input>
  auditInfo?: Maybe<AuditInfo_Input>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type LocationCollection = {
  __typename?: "LocationCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Location>>>
}

export type LocationCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationGroup = {
  __typename?: "LocationGroup"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationGroup>
  locationGroupId: Scalars["Int"]
  locationGroupCode?: Maybe<Scalars["String"]>
  siteIds?: Maybe<Array<Scalars["Int"]>>
  name?: Maybe<Scalars["String"]>
  locationCodes?: Maybe<Array<Scalars["String"]>>
  auditInfo?: Maybe<AuditInfo>
}

export type LocationGroup_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationGroup_Input = {
  locationGroupId: Scalars["Int"]
  locationGroupCode?: Maybe<Scalars["String"]>
  siteIds?: Maybe<Array<Scalars["Int"]>>
  name?: Maybe<Scalars["String"]>
  locationCodes?: Maybe<Array<Scalars["String"]>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type LocationGroupCollection = {
  __typename?: "LocationGroupCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationGroupCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<LocationGroup>>>
}

export type LocationGroupCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationGroupConfiguration = {
  __typename?: "LocationGroupConfiguration"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationGroupConfiguration>
  tenantId: Scalars["Int"]
  siteId: Scalars["Int"]
  locationGroupId: Scalars["Int"]
  locationGroupCode?: Maybe<Scalars["String"]>
  customerFailedToPickupAfterAction?: Maybe<Scalars["String"]>
  customerFailedToPickupDeadline?: Maybe<Scalars["Int"]>
  sendCustomerPickupReminder?: Maybe<Scalars["Int"]>
  enableForSTH?: Maybe<Scalars["Boolean"]>
  enableForISPU?: Maybe<Scalars["Boolean"]>
  enableAdvancedOptionForPickWaveCreation?: Maybe<Scalars["Boolean"]>
  maximumNumberOfOrdersInPickWave?: Maybe<Scalars["Int"]>
  defaultNumberOfOrdersInPickWave?: Maybe<Scalars["Int"]>
  pickWavePrintFormat?: Maybe<Scalars["String"]>
  closePickWavePermissions?: Maybe<Array<Scalars["String"]>>
  wmsEnabled?: Maybe<Scalars["Boolean"]>
  enableScanningOfUpcForShipToHome?: Maybe<Scalars["Boolean"]>
  allowReturns?: Maybe<Scalars["Boolean"]>
  returnRefundReduction?: Maybe<Scalars["Boolean"]>
  defaultReturnRefundReductionAmount?: Maybe<Scalars["Int"]>
  maximumReturnRefundReductionAmount?: Maybe<Scalars["Int"]>
  defaultCarrier?: Maybe<Scalars["String"]>
  carriers?: Maybe<Array<Maybe<Carrier>>>
  printReturnLabel?: Maybe<Scalars["Boolean"]>
  defaultPrinterType?: Maybe<Scalars["String"]>
  boxTypes?: Maybe<Array<Maybe<BoxType>>>
  attributes?: Maybe<Array<Maybe<LocationAttribute>>>
  bpmConfigurations?: Maybe<Array<Maybe<BpmConfiguration>>>
  auditInfo?: Maybe<AuditInfo>
  autoPackingListPopup?: Maybe<Scalars["Boolean"]>
  blockPartialStock?: Maybe<Scalars["Boolean"]>
  defaultMaxNumberOfShipmentsInPickWave?: Maybe<Scalars["Int"]>
  displayProductImagesInPickWaveDetails?: Maybe<Scalars["Boolean"]>
  enablePnpForSTH?: Maybe<Scalars["Boolean"]>
  enablePnpForBOPIS?: Maybe<Scalars["Boolean"]>
  blockPartialCancel?: Maybe<Scalars["Boolean"]>
  packageSettings?: Maybe<PackageSettings>
}

export type LocationGroupConfiguration_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationInventory = {
  __typename?: "LocationInventory"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationInventory>
  productCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  stockAvailable?: Maybe<Scalars["Int"]>
  softStockAvailable?: Maybe<Scalars["Int"]>
  sku?: Maybe<Scalars["String"]>
  mfgPartNumber?: Maybe<Scalars["String"]>
}

export type LocationInventory_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationInventoryCollection = {
  __typename?: "LocationInventoryCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationInventoryCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<LocationInventory>>>
}

export type LocationInventoryCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationInventoryQuery_Input = {
  locationCodes?: Maybe<Array<Scalars["String"]>>
  productCodes?: Maybe<Array<Scalars["String"]>>
}

export type LocationType = {
  __typename?: "LocationType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationType>
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type LocationType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationType_Input = {
  code?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type LocationUsage = {
  __typename?: "LocationUsage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationUsage>
  locationUsageTypeCode?: Maybe<Scalars["String"]>
  locationTypeCodes?: Maybe<Array<Scalars["String"]>>
  locationCodes?: Maybe<Array<Scalars["String"]>>
  auditInfo?: Maybe<AuditInfo>
}

export type LocationUsage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LocationUsage_Input = {
  locationUsageTypeCode?: Maybe<Scalars["String"]>
  locationTypeCodes?: Maybe<Array<Scalars["String"]>>
  locationCodes?: Maybe<Array<Scalars["String"]>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type LocationUsageCollection = {
  __typename?: "LocationUsageCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LocationUsageCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<LocationUsage>>>
}

export type LocationUsageCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type LoginState = {
  __typename?: "LoginState"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<LoginState>
  isPasswordChangeRequired: Scalars["Boolean"]
  lastPasswordChangeOn?: Maybe<Scalars["DateTime"]>
  isLocked: Scalars["Boolean"]
  lastLockedOn?: Maybe<Scalars["DateTime"]>
  failedLoginAttemptCount: Scalars["Int"]
  remainingLoginAttempts: Scalars["Int"]
  firstFailedLoginAttemptOn?: Maybe<Scalars["DateTime"]>
  lastLoginOn?: Maybe<Scalars["DateTime"]>
  createdOn?: Maybe<Scalars["DateTime"]>
  updatedOn?: Maybe<Scalars["DateTime"]>
}

export type LoginState_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Measurement = {
  __typename?: "Measurement"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Measurement>
  unit?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Float"]>
}

export type Measurement_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Measurement_Input = {
  unit?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Float"]>
}

export type MozuContentContractsR4Document = {
  __typename?: "MozuContentContractsR4Document"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuContentContractsR4Document>
  contentLength: Scalars["Int"]
  contentMimeType?: Maybe<Scalars["String"]>
  contentUpdateDate?: Maybe<Scalars["DateTime"]>
  documentListName?: Maybe<Scalars["String"]>
  documentType?: Maybe<Scalars["String"]>
  extension?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  insertDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  properties?: Maybe<Array<Maybe<MozuContentContractsR4PropertyValue>>>
  publishState?: Maybe<Scalars["String"]>
  updateDate?: Maybe<Scalars["DateTime"]>
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
  publishSetCode?: Maybe<Scalars["String"]>
}

export type MozuContentContractsR4Document_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuContentContractsR4Document_Input = {
  contentLength: Scalars["Int"]
  contentMimeType?: Maybe<Scalars["String"]>
  contentUpdateDate?: Maybe<Scalars["DateTime"]>
  documentListName?: Maybe<Scalars["String"]>
  documentType?: Maybe<Scalars["String"]>
  extension?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  insertDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  properties?: Maybe<Array<Maybe<MozuContentContractsR4PropertyValue_Input>>>
  publishState?: Maybe<Scalars["String"]>
  updateDate?: Maybe<Scalars["DateTime"]>
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
  publishSetCode?: Maybe<Scalars["String"]>
}

export type MozuContentContractsR4DocumentCollection = {
  __typename?: "MozuContentContractsR4DocumentCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuContentContractsR4DocumentCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<MozuContentContractsR4Document>>>
}

export type MozuContentContractsR4DocumentCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuContentContractsR4PropertyValue = {
  __typename?: "MozuContentContractsR4PropertyValue"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuContentContractsR4PropertyValue>
  propertyType?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Object"]>
}

export type MozuContentContractsR4PropertyValue_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuContentContractsR4PropertyValue_Input = {
  propertyType?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Object"]>
}

export type MozuPricingRuntimeContractsAppliedDiscount = {
  __typename?: "MozuPricingRuntimeContractsAppliedDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsAppliedDiscount>
  impact: Scalars["Float"]
  discount?: Maybe<MozuPricingRuntimeContractsDiscount>
  couponCode?: Maybe<Scalars["String"]>
  couponSetId?: Maybe<Scalars["Int"]>
}

export type MozuPricingRuntimeContractsAppliedDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsAppliedLineItemProductDiscount = {
  __typename?: "MozuPricingRuntimeContractsAppliedLineItemProductDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsAppliedLineItemProductDiscount>
  appliesToSalePrice: Scalars["Boolean"]
  quantity: Scalars["Int"]
  impactPerUnit: Scalars["Float"]
  isForced: Scalars["Boolean"]
  normalizedImpact: Scalars["Float"]
  impact: Scalars["Float"]
  discount?: Maybe<MozuPricingRuntimeContractsDiscount>
  couponCode?: Maybe<Scalars["String"]>
  couponSetId?: Maybe<Scalars["Int"]>
}

export type MozuPricingRuntimeContractsAppliedLineItemProductDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsAppliedLineItemShippingDiscount = {
  __typename?: "MozuPricingRuntimeContractsAppliedLineItemShippingDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsAppliedLineItemShippingDiscount>
  shippingMethodCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  impactPerUnit: Scalars["Float"]
  isForced: Scalars["Boolean"]
  normalizedImpact: Scalars["Float"]
  impact: Scalars["Float"]
  discount?: Maybe<MozuPricingRuntimeContractsDiscount>
  couponCode?: Maybe<Scalars["String"]>
  couponSetId?: Maybe<Scalars["Int"]>
}

export type MozuPricingRuntimeContractsAppliedLineItemShippingDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsAppliedOrderShippingDiscount = {
  __typename?: "MozuPricingRuntimeContractsAppliedOrderShippingDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsAppliedOrderShippingDiscount>
  shippingMethodCode?: Maybe<Scalars["String"]>
  impact: Scalars["Float"]
  discount?: Maybe<MozuPricingRuntimeContractsDiscount>
  couponCode?: Maybe<Scalars["String"]>
  couponSetId?: Maybe<Scalars["Int"]>
}

export type MozuPricingRuntimeContractsAppliedOrderShippingDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsDiscount = {
  __typename?: "MozuPricingRuntimeContractsDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsDiscount>
  discountId: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
  friendlyDescription?: Maybe<Scalars["String"]>
  amount: Scalars["Float"]
  scope?: Maybe<Scalars["String"]>
  maxRedemptions?: Maybe<Scalars["Int"]>
  maximumUsesPerUser?: Maybe<Scalars["Int"]>
  requiresAuthenticatedUser: Scalars["Boolean"]
  doesNotApplyToProductsWithSalePrice: Scalars["Boolean"]
  maximumRedemptionsPerOrder?: Maybe<Scalars["Int"]>
  maximumDiscountValuePerOrder?: Maybe<Scalars["Float"]>
  maxDiscountValuePerRedemption?: Maybe<Scalars["Float"]>
  doesNotApplyToMultiShipToOrders?: Maybe<Scalars["Boolean"]>
  includedPriceLists?: Maybe<Array<Scalars["String"]>>
  redemptions: Scalars["Int"]
  type?: Maybe<Scalars["String"]>
  amountType?: Maybe<Scalars["String"]>
  target?: Maybe<MozuPricingRuntimeContractsDiscountTarget>
  condition?: Maybe<MozuPricingRuntimeContractsDiscountCondition>
  expirationDate?: Maybe<Scalars["DateTime"]>
  stackingLayer: Scalars["Int"]
}

export type MozuPricingRuntimeContractsDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsDiscountCondition = {
  __typename?: "MozuPricingRuntimeContractsDiscountCondition"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsDiscountCondition>
  requiresCoupon: Scalars["Boolean"]
  couponCode?: Maybe<Scalars["String"]>
  minimumQuantityProductsRequiredInCategories?: Maybe<Scalars["Int"]>
  includedCategoryIds?: Maybe<Array<Scalars["Int"]>>
  excludedCategoryIds?: Maybe<Array<Scalars["Int"]>>
  minimumQuantityRequiredProducts?: Maybe<Scalars["Int"]>
  includedProductCodes?: Maybe<Array<Scalars["String"]>>
  excludedProductCodes?: Maybe<Array<Scalars["String"]>>
  paymentWorkflows?: Maybe<Array<Scalars["String"]>>
  customerSegmentIds?: Maybe<Array<Scalars["Int"]>>
  minimumOrderAmount?: Maybe<Scalars["Float"]>
  maximumOrderAmount?: Maybe<Scalars["Float"]>
  minimumLifetimeValueAmount?: Maybe<Scalars["Float"]>
  startDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  minimumCategorySubtotalBeforeDiscounts?: Maybe<Scalars["Float"]>
}

export type MozuPricingRuntimeContractsDiscountCondition_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsDiscountTarget = {
  __typename?: "MozuPricingRuntimeContractsDiscountTarget"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsDiscountTarget>
  type?: Maybe<Scalars["String"]>
  includedCategoryIds?: Maybe<Array<Scalars["Int"]>>
  excludedCategoryIds?: Maybe<Array<Scalars["Int"]>>
  includedCategoriesOperator?: Maybe<Scalars["String"]>
  excludedCategoriesOperator?: Maybe<Scalars["String"]>
  includedProductCodes?: Maybe<Array<Scalars["String"]>>
  excludedProductCodes?: Maybe<Array<Scalars["String"]>>
  includeAllProducts: Scalars["Boolean"]
  shippingMethods?: Maybe<Array<Scalars["String"]>>
  shippingZones?: Maybe<Array<Scalars["String"]>>
}

export type MozuPricingRuntimeContractsDiscountTarget_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsProductAttribute = {
  __typename?: "MozuPricingRuntimeContractsProductAttribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsProductAttribute>
  inputType?: Maybe<Scalars["String"]>
  valueType?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
}

export type MozuPricingRuntimeContractsProductAttribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsProductProperty = {
  __typename?: "MozuPricingRuntimeContractsProductProperty"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsProductProperty>
  attributeFQN?: Maybe<Scalars["String"]>
  values?: Maybe<Array<Maybe<MozuPricingRuntimeContractsProductPropertyValue>>>
  attributeDetail?: Maybe<MozuPricingRuntimeContractsProductAttribute>
  isHidden?: Maybe<Scalars["Boolean"]>
  isMultiValue?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsProductProperty_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsProductPropertyValue = {
  __typename?: "MozuPricingRuntimeContractsProductPropertyValue"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsProductPropertyValue>
  value?: Maybe<Scalars["Object"]>
  stringValue?: Maybe<Scalars["String"]>
}

export type MozuPricingRuntimeContractsProductPropertyValue_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsTaxableLineItem = {
  __typename?: "MozuPricingRuntimeContractsTaxableLineItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsTaxableLineItem>
  id?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  variantProductCode?: Maybe<Scalars["String"]>
  productName?: Maybe<Scalars["String"]>
  productProperties?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsProductProperty>>
  >
  quantity: Scalars["Int"]
  lineItemPrice: Scalars["Float"]
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingAmount: Scalars["Float"]
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  reason?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
  productDiscount?: Maybe<
    MozuPricingRuntimeContractsAppliedLineItemProductDiscount
  >
  shippingDiscount?: Maybe<
    MozuPricingRuntimeContractsAppliedLineItemShippingDiscount
  >
  productDiscounts?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsAppliedLineItemProductDiscount>>
  >
  shippingDiscounts?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsAppliedLineItemShippingDiscount>>
  >
  originAddress?: Maybe<Address>
  destinationAddress?: Maybe<Address>
}

export type MozuPricingRuntimeContractsTaxableLineItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsTaxableOrder = {
  __typename?: "MozuPricingRuntimeContractsTaxableOrder"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsTaxableOrder>
  orderDate: Scalars["DateTime"]
  taxContext?: Maybe<MozuPricingRuntimeContractsTaxContext>
  lineItems?: Maybe<Array<Maybe<MozuPricingRuntimeContractsTaxableLineItem>>>
  shippingAmount: Scalars["Float"]
  currencyCode?: Maybe<Scalars["String"]>
  handlingFee: Scalars["Float"]
  originalDocumentCode?: Maybe<Scalars["String"]>
  orderId?: Maybe<Scalars["String"]>
  orderNumber?: Maybe<Scalars["Int"]>
  originalOrderDate: Scalars["DateTime"]
  data?: Maybe<Scalars["Object"]>
  attributes?: Maybe<Array<Maybe<MozuPricingRuntimeContractsTaxAttribute>>>
  shippingDiscounts?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsAppliedOrderShippingDiscount>>
  >
  shippingDiscount?: Maybe<
    MozuPricingRuntimeContractsAppliedOrderShippingDiscount
  >
  orderDiscounts?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsAppliedDiscount>>
  >
  orderDiscount?: Maybe<MozuPricingRuntimeContractsAppliedDiscount>
  handlingDiscounts?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsAppliedDiscount>>
  >
  handlingDiscount?: Maybe<MozuPricingRuntimeContractsAppliedDiscount>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  taxRequestType?: Maybe<Scalars["String"]>
}

export type MozuPricingRuntimeContractsTaxableOrder_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsTaxAttribute = {
  __typename?: "MozuPricingRuntimeContractsTaxAttribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsTaxAttribute>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type MozuPricingRuntimeContractsTaxAttribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type MozuPricingRuntimeContractsTaxContext = {
  __typename?: "MozuPricingRuntimeContractsTaxContext"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<MozuPricingRuntimeContractsTaxContext>
  taxContextId?: Maybe<Scalars["String"]>
  customerId?: Maybe<Scalars["String"]>
  taxExemptId?: Maybe<Scalars["String"]>
  originAddress?: Maybe<Address>
  destinationAddress?: Maybe<Address>
}

export type MozuPricingRuntimeContractsTaxContext_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Mutation = {
  __typename?: "Mutation"
  createCustomerAccountAttributeDefinition?: Maybe<Attribute>
  createCustomerAccountAttributeVocabularyValue?: Maybe<
    AttributeVocabularyValue
  >
  updateCustomerAccountAttributeVocabularyValue?: Maybe<
    AttributeVocabularyValue
  >
  deleteCustomerAccountAttributeDefinition?: Maybe<Scalars["Boolean"]>
  updateCustomerAccountAttributeDefinition?: Maybe<Attribute>
  deleteCustomerAccountAttributeVocabularyValue?: Maybe<Scalars["Boolean"]>
  createCustomerAccountAttributeNamespace?: Maybe<Namespace>
  deleteCustomerAccountAttributeNamespace?: Maybe<Scalars["Boolean"]>
  validateCustomerAddress?: Maybe<AddressValidationResponse>
  validateAddress?: Maybe<Array<Maybe<Address>>>
  createCustomerAuthTicket?: Maybe<CustomerAuthTicket>
  deleteCustomerAuthTickets?: Maybe<Scalars["Boolean"]>
  refreshCustomerAuthTickets?: Maybe<CustomerAuthTicket>
  createCustomerB2bAccountAttribute?: Maybe<CustomerAttribute>
  deleteB2bAccountAttribute?: Maybe<Scalars["Boolean"]>
  updateCustomerB2bAccountAttribute?: Maybe<CustomerAttribute>
  createCustomerB2bAccount?: Maybe<B2BAccount>
  updateCustomerB2bAccount?: Maybe<B2BAccount>
  createCustomerB2bAccountUser?: Maybe<B2BUser>
  updateCustomerB2bAccountUser?: Maybe<B2BUser>
  removeCustomerB2bAccountUser?: Maybe<Scalars["Boolean"]>
  addRoleToCustomerB2bAccount?: Maybe<Scalars["Boolean"]>
  deleteB2bAccountRole?: Maybe<Scalars["Boolean"]>
  createCustomerCredit?: Maybe<Credit>
  updateCustomerCredit?: Maybe<Credit>
  deleteCustomerCredit?: Maybe<Scalars["Boolean"]>
  updateCustomerCreditAssociateToShopper?: Maybe<Credit>
  resendCustomerCreditEmail?: Maybe<Scalars["Boolean"]>
  createCustomerCreditTransaction?: Maybe<CreditTransaction>
  createCustomerAccountAttribute?: Maybe<CustomerAttribute>
  deleteCustomerAccountAttribute?: Maybe<Scalars["Boolean"]>
  updateCustomerAccountAttribute?: Maybe<CustomerAttribute>
  createCustomerAccountCard?: Maybe<Card>
  updateCustomerAccountCard?: Maybe<Card>
  deleteCustomerAccountCard?: Maybe<Scalars["Boolean"]>
  createCustomerAccountContact?: Maybe<CustomerContact>
  updateCustomerAccountContacts?: Maybe<CustomerContactCollection>
  updateCustomerAccountContact?: Maybe<CustomerContact>
  deleteCustomerAccountContact?: Maybe<Scalars["Boolean"]>
  createCustomerAccount?: Maybe<CustomerAccount>
  updateCustomerAccount?: Maybe<CustomerAccount>
  deleteCustomerAccount?: Maybe<Scalars["Boolean"]>
  createCustomerAccountTransaction?: Maybe<Transaction>
  deleteCustomerAccountTransaction?: Maybe<Scalars["Boolean"]>
  recomputeCustomerAccountLifetimeValue?: Maybe<Scalars["Boolean"]>
  createCustomerAccountNote?: Maybe<CustomerNote>
  updateCustomerAccountNote?: Maybe<CustomerNote>
  deleteCustomerAccountNote?: Maybe<Scalars["Boolean"]>
  createCustomerAccountPurchaseOrderAccount?: Maybe<
    CustomerPurchaseOrderAccount
  >
  updateCustomerPurchaseOrderAccount?: Maybe<CustomerPurchaseOrderAccount>
  createCustomerAccountPurchaseOrderAccountTransaction?: Maybe<
    PurchaseOrderTransaction
  >
  createPurchaseOrderAccount?: Maybe<CustomerPurchaseOrderAccountCollection>
  updateCustomerAccountUserEmail?: Maybe<Scalars["Boolean"]>
  sendCustomerAccountPasswordResetEmail?: Maybe<Scalars["Boolean"]>
  changeCustomerAccountPassword?: Maybe<Scalars["Boolean"]>
  updateCustomerAccountPasswords?: Maybe<ChangePasswordResultCollection>
  resetCustomerAccountPassword?: Maybe<Scalars["Boolean"]>
  updateForgottenCustomerAccountPassword?: Maybe<Scalars["Boolean"]>
  createCustomerAccountLogin?: Maybe<CustomerAuthTicket>
  createCustomerAccountAndLogin?: Maybe<CustomerAuthTicket>
  setCustomerAccountLoginLocked?: Maybe<Scalars["Boolean"]>
  setCustomerAccountPasswordChangeRequired?: Maybe<Scalars["Boolean"]>
  createCustomerAccounts?: Maybe<CustomerAccountCollection>
  createCustomerAccountAction?: Maybe<CustomerAccount>
  createCustomerSegment?: Maybe<CustomerSegment>
  updateCustomerSegment?: Maybe<CustomerSegment>
  deleteCustomerSegment?: Maybe<Scalars["Boolean"]>
  createCustomerSegmentAccount?: Maybe<Scalars["Boolean"]>
  deleteCustomerSegmentAccounts?: Maybe<Scalars["Boolean"]>
  deleteCustomerSegmentAccount?: Maybe<Scalars["Boolean"]>
  createCustomerSetSite?: Maybe<CustomerSetSite>
  createCustomerSet?: Maybe<CustomerSet>
  updateCustomerSet?: Maybe<CustomerSet>
  deleteCustomerSet?: Maybe<Scalars["Boolean"]>
  createInStockNotification?: Maybe<InStockNotificationSubscription>
  deleteInStockNotification?: Maybe<Scalars["Boolean"]>
  createResolvedPriceList?: Maybe<ResolvedPriceList>
  manageLocationProductInventory?: Maybe<LocationInventoryCollection>
  createProductCost?: Maybe<ProductCostCollection>
  configureProduct?: Maybe<ConfiguredProduct>
  validateProduct?: Maybe<ProductValidationSummary>
  validateProductDiscounts?: Maybe<DiscountValidationSummary>
  createSearchPreviewSort?: Maybe<ProductSearchResult>
  validateSearchTuningRules?: Maybe<Scalars["String"]>
  createCartForUser?: Maybe<Cart>
  updateUserCart?: Maybe<Cart>
  updateCurrentCart?: Maybe<Cart>
  deleteCurrentCart?: Maybe<Scalars["Boolean"]>
  updateCart?: Maybe<Cart>
  deleteCart?: Maybe<Scalars["Boolean"]>
  deleteUserCart?: Maybe<Scalars["Boolean"]>
  rejectCartDiscount?: Maybe<Cart>
  updateCartCoupon?: Maybe<Cart>
  deleteCartCoupons?: Maybe<Cart>
  deleteCartCoupon?: Maybe<Cart>
  addExtendedPropertyToCurrentCart?: Maybe<Array<Maybe<ExtendedProperty>>>
  updateCurrentCartExtendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  deleteCurrentCartExtendedProperties?: Maybe<Scalars["Boolean"]>
  updateCurrentCartExtendedProperty?: Maybe<ExtendedProperty>
  deleteCurrentCartExtendedProperty?: Maybe<Scalars["Boolean"]>
  deleteCurrentCartItems?: Maybe<Cart>
  addItemToCurrentCart?: Maybe<CartItem>
  deleteCartItems?: Maybe<Cart>
  addItemToCart?: Maybe<CartItem>
  updateCurrentCartItem?: Maybe<CartItem>
  deleteCurrentCartItem?: Maybe<Scalars["Boolean"]>
  updateCartItem?: Maybe<CartItem>
  deleteCartItem?: Maybe<Scalars["Boolean"]>
  addItemsToCurrentCart?: Maybe<Scalars["Boolean"]>
  addItemsToCart?: Maybe<Scalars["Boolean"]>
  updateCurrentCartItemQuantity?: Maybe<CartItem>
  updateCartItemQuantity?: Maybe<CartItem>
  deleteCurrentCartMessages?: Maybe<Scalars["Boolean"]>
  deleteCurrentCartMessage?: Maybe<Scalars["Boolean"]>
  createCommerceChannel?: Maybe<Channel>
  updateChannel?: Maybe<Channel>
  deleteCommerceChannel?: Maybe<Scalars["Boolean"]>
  createCommerceChannelGroup?: Maybe<ChannelGroup>
  updateChannelGroup?: Maybe<ChannelGroup>
  deleteCommerceChannelGroup?: Maybe<Scalars["Boolean"]>
  createCheckoutAttribute?: Maybe<Array<Maybe<OrderAttribute>>>
  updateCheckoutAttributes?: Maybe<Array<Maybe<OrderAttribute>>>
  updateCheckout?: Maybe<Checkout>
  createCheckout?: Maybe<Checkout>
  createCheckoutShippingMethod?: Maybe<Checkout>
  createCheckoutAction?: Maybe<Checkout>
  updateCheckoutDigitalWalletType?: Maybe<Checkout>
  updateCheckoutPriceList?: Maybe<Checkout>
  createCheckoutEmail?: Maybe<Scalars["Boolean"]>
  resendCheckoutEmail?: Maybe<Scalars["Boolean"]>
  updateCheckoutCoupon?: Maybe<Checkout>
  deleteCheckoutCoupons?: Maybe<Checkout>
  deleteCheckoutCoupon?: Maybe<Checkout>
  updateCheckoutDestination?: Maybe<Destination>
  deleteCheckoutDestination?: Maybe<Scalars["Boolean"]>
  createCheckoutDestination?: Maybe<Destination>
  createCheckoutItem?: Maybe<Checkout>
  deleteCheckoutItem?: Maybe<Checkout>
  updateCheckoutItemDestination?: Maybe<Checkout>
  createCheckoutItemDestination?: Maybe<Checkout>
  createCheckoutPaymentAction?: Maybe<Checkout>
  updateCheckoutPaymentAction?: Maybe<Checkout>
  deleteOrderPickup?: Maybe<Scalars["Boolean"]>
  updateOrderPickup?: Maybe<Pickup>
  createOrderRefund?: Maybe<Refund>
  updateOrderRefund?: Maybe<Scalars["Boolean"]>
  createOrderShipment?: Maybe<Array<Maybe<PackageObj>>>
  deleteOrderShipment?: Maybe<Scalars["Boolean"]>
  repriceOrderShipment?: Maybe<Shipment>
  createOrderShipmentAdjustment?: Maybe<Shipment>
  createOrderShipmentItemAdjustment?: Maybe<Shipment>
  splitOrderShipment?: Maybe<Array<Maybe<Shipment>>>
  updateOrderShopperNotes?: Maybe<ShopperNotes>
  updateOrderValidationResults?: Maybe<OrderValidationResult>
  updateOrderAdjustment?: Maybe<Order>
  deleteOrderAdjustment?: Maybe<Order>
  updateOrderShippingAdjustment?: Maybe<Order>
  deleteOrderAdjustmentShipping?: Maybe<Order>
  updateOrderHandlingAdjustment?: Maybe<Order>
  deleteOrderAdjustmentHandling?: Maybe<Order>
  createOrderAttribute?: Maybe<Array<Maybe<OrderAttribute>>>
  updateOrderAttributes?: Maybe<Array<Maybe<OrderAttribute>>>
  updateOrderBillingInfo?: Maybe<BillingInfo>
  cancelOrder?: Maybe<Order>
  deleteOrderChangeMessage?: Maybe<Scalars["Boolean"]>
  createOrder?: Maybe<Order>
  updateUserOrder?: Maybe<Order>
  updateOrderPriceList?: Maybe<Order>
  updateOrderEmail?: Maybe<Scalars["Boolean"]>
  resendOrderEmail?: Maybe<Scalars["Boolean"]>
  updateOrder?: Maybe<Order>
  updateOrderDigitalWalletTpe?: Maybe<Order>
  updateOrderDraft?: Maybe<Scalars["Boolean"]>
  createOrderAction?: Maybe<Order>
  updateOrderDiscount?: Maybe<Order>
  updateOrderPrice?: Maybe<Order>
  updateOrderConvertToShipments?: Maybe<Array<Maybe<Shipment>>>
  updateOrderCoupon?: Maybe<Order>
  deleteOrderCoupons?: Maybe<Order>
  deleteOrderCoupon?: Maybe<Order>
  updateOrderData?: Maybe<Scalars["Object"]>
  updateOrderItemData?: Maybe<Scalars["Object"]>
  createOrderDigitalPackage?: Maybe<DigitalPackage>
  updateOrderDigitalPackage?: Maybe<DigitalPackage>
  deleteOrderDigitalPackage?: Maybe<Scalars["Boolean"]>
  createOrderExtendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  updateOrderExtendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  deleteOrderExtendedProperties?: Maybe<Scalars["Boolean"]>
  updateOrderExtendedProperty?: Maybe<ExtendedProperty>
  deleteOrderExtendedProperty?: Maybe<Scalars["Boolean"]>
  createOrderFulfillmentAction?: Maybe<Order>
  resendOrderFulfillmentEmail?: Maybe<Order>
  updateOrderFulfillmentInfo?: Maybe<FulfillmentInfo>
  createOrderItem?: Maybe<Order>
  deleteOrderItem?: Maybe<Order>
  updateOrderItemPrice?: Maybe<Order>
  updateOrderItemQuantity?: Maybe<Order>
  updateOrderItemDutyAmount?: Maybe<Order>
  updateOrderItemFulfillment?: Maybe<Order>
  updateOrderItemDiscount?: Maybe<Order>
  createOrderNote?: Maybe<OrderNote>
  updateOrderNotes?: Maybe<OrderNote>
  deleteOrderNote?: Maybe<Scalars["Boolean"]>
  createOrderPackage?: Maybe<PackageObj>
  updateOrderPackage?: Maybe<PackageObj>
  deleteOrderPackage?: Maybe<Scalars["Boolean"]>
  createOrderPaymentAction?: Maybe<Order>
  createOrderPaymentPaymentAction?: Maybe<Order>
  createOrderAutoCapture?: Maybe<Order>
  createOrderPickup?: Maybe<Pickup>
  validateOrder?: Maybe<OrderValidationResult>
  resyncPayments?: Maybe<Scalars["Boolean"]>
  updateQuote?: Maybe<Quote>
  deleteQuote?: Maybe<Scalars["Boolean"]>
  createQuote?: Maybe<Quote>
  createQuoteItem?: Maybe<Quote>
  updateQuoteItem?: Maybe<Quote>
  deleteQuoteItem?: Maybe<Scalars["Boolean"]>
  createReturn?: Maybe<ReturnObj>
  resendReturnEmail?: Maybe<Scalars["Boolean"]>
  updateReturn?: Maybe<ReturnObj>
  deleteReturn?: Maybe<Scalars["Boolean"]>
  createReturnAction?: Maybe<ReturnCollection>
  setReturnShip?: Maybe<Order>
  createReturnPaymentAction?: Maybe<ReturnObj>
  createReturnPaymentPaymentAction?: Maybe<ReturnObj>
  setReturnRestock?: Maybe<ReturnObj>
  createReturnItem?: Maybe<ReturnObj>
  deleteReturnItem?: Maybe<ReturnObj>
  createReturnNote?: Maybe<OrderNote>
  updateReturnNote?: Maybe<OrderNote>
  deleteReturnNote?: Maybe<Scalars["Boolean"]>
  createReturnPackage?: Maybe<PackageObj>
  updateReturnPackage?: Maybe<PackageObj>
  deleteReturnPackage?: Maybe<Scalars["Boolean"]>
  createReturnShipment?: Maybe<Array<Maybe<PackageObj>>>
  deleteReturnShipment?: Maybe<Scalars["Boolean"]>
  createWishlist?: Maybe<Wishlist>
  updateWishlist?: Maybe<Wishlist>
  deleteWishlist?: Maybe<Scalars["Boolean"]>
  deleteWishlistItems?: Maybe<Wishlist>
  createWishlistItem?: Maybe<WishlistItem>
  updateWishlistItem?: Maybe<WishlistItem>
  deleteWishlistItem?: Maybe<Scalars["Boolean"]>
  updateWishlistItemQuantity?: Maybe<WishlistItem>
  updateDocumentContent?: Maybe<Scalars["Boolean"]>
  deleteDocumentContent?: Maybe<Scalars["Boolean"]>
  updateDocumentListDocumentContent?: Maybe<Scalars["Boolean"]>
  deleteDocumentListDocumentContent?: Maybe<Scalars["Boolean"]>
  updateDocumentTreeContent?: Maybe<Scalars["Boolean"]>
  deleteDocumentTreeDocumentContent?: Maybe<Scalars["Boolean"]>
  updateDocumentListDocumentTreeContent?: Maybe<Scalars["Boolean"]>
  deleteDocumentListDocumentTreeContent?: Maybe<Scalars["Boolean"]>
  createDocument?: Maybe<MozuContentContractsR4Document>
  createDocumentListDocument?: Maybe<Document>
  updateDocument?: Maybe<MozuContentContractsR4Document>
  deleteDocument?: Maybe<Scalars["Boolean"]>
  updateDocumentListDocument?: Maybe<Document>
  patchDocumentListDocument?: Maybe<Document>
  deleteDocumentListDocument?: Maybe<Scalars["Boolean"]>
  createDocumentList?: Maybe<DocumentList>
  updateDocumentList?: Maybe<DocumentList>
  deleteDocumentList?: Maybe<Scalars["Boolean"]>
  createDocumentListFolder?: Maybe<Folder>
  updateDocumentListFolder?: Maybe<Folder>
  deleteDocumentListFolder?: Maybe<Scalars["Boolean"]>
  createDocumentListType?: Maybe<DocumentListType>
  updateDocumentListType?: Maybe<DocumentListType>
  createDocumentDraft?: Maybe<Scalars["Boolean"]>
  toggleDocumentPublishing?: Maybe<Scalars["Boolean"]>
  createDocumentType?: Maybe<DocumentType>
  updateDocumentType?: Maybe<DocumentType>
  deleteDocumentType?: Maybe<Scalars["Boolean"]>
  createPropertyType?: Maybe<PropertyType>
  updatePropertyType?: Maybe<PropertyType>
  deletePropertyType?: Maybe<Scalars["Boolean"]>
  adminCreateLocation?: Maybe<Location>
  adminUpdateLocation?: Maybe<Location>
  deleteAdminLocation?: Maybe<Scalars["Boolean"]>
  adminCreateLocationAttribute?: Maybe<Attribute>
  adminCreateLocationAttributeVocabularyValue?: Maybe<AttributeVocabularyValue>
  adminUpdateLocationAttributeVocabularyValue?: Maybe<AttributeVocabularyValue>
  deleteAdminLocationAttribute?: Maybe<Scalars["Boolean"]>
  adminUpdateLocationAttribute?: Maybe<Attribute>
  deleteAdminLocationAttributeVocabularyValue?: Maybe<Scalars["Boolean"]>
  adminCreateLocationAttributeNamespace?: Maybe<Namespace>
  deleteAdminLocationAttributeNamespace?: Maybe<Scalars["Boolean"]>
  adminCreateLocationGroup?: Maybe<LocationGroup>
  updateLocationUsage?: Maybe<LocationUsage>
  adminCreateLocationType?: Maybe<LocationType>
  adminUpdateLocationType?: Maybe<LocationType>
  deleteAdminLocationType?: Maybe<Scalars["Boolean"]>
  updateAppdata?: Maybe<Scalars["Boolean"]>
  createAppdataEntry?: Maybe<Scalars["Boolean"]>
  updateAppdataEntry?: Maybe<Scalars["Boolean"]>
  deleteAppdataEntry?: Maybe<Scalars["Boolean"]>
  updateEntityListEntities?: Maybe<Scalars["String"]>
  deleteEntityListEntity?: Maybe<Scalars["Boolean"]>
  createEntityListEntity?: Maybe<Scalars["String"]>
  updateEntityList?: Maybe<EntityList>
  deleteEntityList?: Maybe<Scalars["Boolean"]>
  createEntityList?: Maybe<EntityList>
  createEntityListView?: Maybe<ListView>
  updateEntityListView?: Maybe<ListView>
  deleteEntityListView?: Maybe<Scalars["Boolean"]>
  updateSecureAppdata?: Maybe<Scalars["Boolean"]>
  createSecureAppdataEntry?: Maybe<Scalars["Boolean"]>
  updateSecureAppdataEntry?: Maybe<Scalars["Boolean"]>
  deleteSecureAppdataEntry?: Maybe<Scalars["Boolean"]>
  updateSitedata?: Maybe<Scalars["Boolean"]>
  createSitedataEntry?: Maybe<Scalars["Boolean"]>
  updateSitedataEntry?: Maybe<Scalars["Boolean"]>
  deleteSitedataEntry?: Maybe<Scalars["Boolean"]>
  updateTenantdata?: Maybe<Scalars["Boolean"]>
  createTenantDataEntry?: Maybe<Scalars["Boolean"]>
  updateTenantdataEntry?: Maybe<Scalars["Boolean"]>
  deleteTenantdataEntry?: Maybe<Scalars["Boolean"]>
  updateUserdata?: Maybe<Scalars["Boolean"]>
  createUserdataEntry?: Maybe<Scalars["Boolean"]>
  updateUserdataEntry?: Maybe<Scalars["Boolean"]>
  deleteUserdataEntry?: Maybe<Scalars["Boolean"]>
  createTargetRule?: Maybe<TargetRule>
  updateTargetRule?: Maybe<TargetRule>
  deleteCommerceTargetRule?: Maybe<Scalars["Boolean"]>
  validateTargetRule?: Maybe<Scalars["Boolean"]>
  createOrderRoutingSuggestion?: Maybe<SuggestionResponse>
}

export type MutationCreateCustomerAccountAttributeDefinitionArgs = {
  attribute_Input: Attribute_Input
}

export type MutationCreateCustomerAccountAttributeVocabularyValueArgs = {
  attributeFQN: Scalars["String"]
  attributeVocabularyValue_Input: AttributeVocabularyValue_Input
}

export type MutationUpdateCustomerAccountAttributeVocabularyValueArgs = {
  attributeFQN: Scalars["String"]
  attributeVocabularyValue_Input: AttributeVocabularyValue_Input
}

export type MutationDeleteCustomerAccountAttributeDefinitionArgs = {
  attributeFQN: Scalars["String"]
}

export type MutationUpdateCustomerAccountAttributeDefinitionArgs = {
  attributeFQN: Scalars["String"]
  attribute_Input: Attribute_Input
}

export type MutationDeleteCustomerAccountAttributeVocabularyValueArgs = {
  attributeFQN: Scalars["String"]
  value: Scalars["String"]
}

export type MutationCreateCustomerAccountAttributeNamespaceArgs = {
  namespace_Input: Namespace_Input
}

export type MutationDeleteCustomerAccountAttributeNamespaceArgs = {
  namespace_Input: Namespace_Input
}

export type MutationValidateCustomerAddressArgs = {
  addressValidationRequest_Input: AddressValidationRequest_Input
}

export type MutationValidateAddressArgs = {
  address_Input: Address_Input
}

export type MutationCreateCustomerAuthTicketArgs = {
  customerUserAuthInfo_Input: CustomerUserAuthInfo_Input
}

export type MutationDeleteCustomerAuthTicketsArgs = {
  refreshToken?: Maybe<Scalars["String"]>
}

export type MutationRefreshCustomerAuthTicketsArgs = {
  refreshToken?: Maybe<Scalars["String"]>
}

export type MutationCreateCustomerB2bAccountAttributeArgs = {
  accountId: Scalars["Int"]
  customerAttribute_Input: CustomerAttribute_Input
}

export type MutationDeleteB2bAccountAttributeArgs = {
  accountId: Scalars["Int"]
  attributeFQN: Scalars["String"]
}

export type MutationUpdateCustomerB2bAccountAttributeArgs = {
  accountId: Scalars["Int"]
  attributeFQN: Scalars["String"]
  customerAttribute_Input: CustomerAttribute_Input
}

export type MutationCreateCustomerB2bAccountArgs = {
  b2BAccount_Input: B2BAccount_Input
}

export type MutationUpdateCustomerB2bAccountArgs = {
  accountId: Scalars["Int"]
  b2BAccount_Input: B2BAccount_Input
}

export type MutationCreateCustomerB2bAccountUserArgs = {
  accountId: Scalars["Int"]
  b2BUserAndAuthInfo_Input: B2BUserAndAuthInfo_Input
}

export type MutationUpdateCustomerB2bAccountUserArgs = {
  accountId: Scalars["Int"]
  userId: Scalars["String"]
  b2BUser_Input: B2BUser_Input
}

export type MutationRemoveCustomerB2bAccountUserArgs = {
  accountId: Scalars["Int"]
  userId: Scalars["String"]
}

export type MutationAddRoleToCustomerB2bAccountArgs = {
  accountId: Scalars["Int"]
  userId: Scalars["String"]
  roleId: Scalars["Int"]
}

export type MutationDeleteB2bAccountRoleArgs = {
  accountId: Scalars["Int"]
  userId: Scalars["String"]
  roleId: Scalars["Int"]
}

export type MutationCreateCustomerCreditArgs = {
  userId?: Maybe<Scalars["String"]>
  credit_Input: Credit_Input
}

export type MutationUpdateCustomerCreditArgs = {
  code: Scalars["String"]
  credit_Input: Credit_Input
}

export type MutationDeleteCustomerCreditArgs = {
  code: Scalars["String"]
}

export type MutationUpdateCustomerCreditAssociateToShopperArgs = {
  code: Scalars["String"]
}

export type MutationResendCustomerCreditEmailArgs = {
  code: Scalars["String"]
  userId?: Maybe<Scalars["String"]>
}

export type MutationCreateCustomerCreditTransactionArgs = {
  code: Scalars["String"]
  creditTransaction_Input: CreditTransaction_Input
}

export type MutationCreateCustomerAccountAttributeArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
  customerAttribute_Input: CustomerAttribute_Input
}

export type MutationDeleteCustomerAccountAttributeArgs = {
  accountId: Scalars["Int"]
  attributeFQN: Scalars["String"]
  userId?: Maybe<Scalars["String"]>
}

export type MutationUpdateCustomerAccountAttributeArgs = {
  accountId: Scalars["Int"]
  attributeFQN: Scalars["String"]
  userId?: Maybe<Scalars["String"]>
  customerAttribute_Input: CustomerAttribute_Input
}

export type MutationCreateCustomerAccountCardArgs = {
  accountId: Scalars["Int"]
  card_Input: Card_Input
}

export type MutationUpdateCustomerAccountCardArgs = {
  accountId: Scalars["Int"]
  cardId: Scalars["String"]
  card_Input: Card_Input
}

export type MutationDeleteCustomerAccountCardArgs = {
  accountId: Scalars["Int"]
  cardId: Scalars["String"]
}

export type MutationCreateCustomerAccountContactArgs = {
  accountId: Scalars["Int"]
  customerContact_Input: CustomerContact_Input
}

export type MutationUpdateCustomerAccountContactsArgs = {
  accountId: Scalars["Int"]
  customerContact_Input: CustomerContact_Input
}

export type MutationUpdateCustomerAccountContactArgs = {
  accountId: Scalars["Int"]
  contactId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
  customerContact_Input: CustomerContact_Input
}

export type MutationDeleteCustomerAccountContactArgs = {
  accountId: Scalars["Int"]
  contactId: Scalars["Int"]
}

export type MutationCreateCustomerAccountArgs = {
  customerAccount_Input: CustomerAccount_Input
}

export type MutationUpdateCustomerAccountArgs = {
  accountId: Scalars["Int"]
  customerAccount_Input: CustomerAccount_Input
}

export type MutationDeleteCustomerAccountArgs = {
  accountId: Scalars["Int"]
}

export type MutationCreateCustomerAccountTransactionArgs = {
  accountId: Scalars["Int"]
  transaction_Input: Transaction_Input
}

export type MutationDeleteCustomerAccountTransactionArgs = {
  accountId: Scalars["Int"]
  transactionId: Scalars["String"]
}

export type MutationRecomputeCustomerAccountLifetimeValueArgs = {
  accountId: Scalars["Int"]
}

export type MutationCreateCustomerAccountNoteArgs = {
  accountId: Scalars["Int"]
  customerNote_Input: CustomerNote_Input
}

export type MutationUpdateCustomerAccountNoteArgs = {
  accountId: Scalars["Int"]
  noteId: Scalars["Int"]
  customerNote_Input: CustomerNote_Input
}

export type MutationDeleteCustomerAccountNoteArgs = {
  accountId: Scalars["Int"]
  noteId: Scalars["Int"]
}

export type MutationCreateCustomerAccountPurchaseOrderAccountArgs = {
  accountId: Scalars["Int"]
  customerPurchaseOrderAccount_Input: CustomerPurchaseOrderAccount_Input
}

export type MutationUpdateCustomerPurchaseOrderAccountArgs = {
  accountId: Scalars["Int"]
  customerPurchaseOrderAccount_Input: CustomerPurchaseOrderAccount_Input
}

export type MutationCreateCustomerAccountPurchaseOrderAccountTransactionArgs = {
  accountId: Scalars["Int"]
  purchaseOrderTransaction_Input: PurchaseOrderTransaction_Input
}

export type MutationCreatePurchaseOrderAccountArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  accountType?: Maybe<Scalars["String"]>
}

export type MutationUpdateCustomerAccountUserEmailArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
}

export type MutationSendCustomerAccountPasswordResetEmailArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
}

export type MutationChangeCustomerAccountPasswordArgs = {
  accountId: Scalars["Int"]
  unlockAccount?: Maybe<Scalars["Boolean"]>
  userId?: Maybe<Scalars["String"]>
  passwordInfo_Input: PasswordInfo_Input
}

export type MutationUpdateCustomerAccountPasswordsArgs = {
  accountPasswordInfoCollection_Input: AccountPasswordInfoCollection_Input
}

export type MutationResetCustomerAccountPasswordArgs = {
  resetPasswordInfo_Input: ResetPasswordInfo_Input
}

export type MutationUpdateForgottenCustomerAccountPasswordArgs = {
  confirmationInfo_Input: ConfirmationInfo_Input
}

export type MutationCreateCustomerAccountLoginArgs = {
  accountId: Scalars["Int"]
  customerLoginInfo_Input: CustomerLoginInfo_Input
}

export type MutationCreateCustomerAccountAndLoginArgs = {
  customerAccountAndAuthInfo_Input: CustomerAccountAndAuthInfo_Input
}

export type MutationSetCustomerAccountLoginLockedArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
  graphQLBoolean: Scalars["Boolean"]
}

export type MutationSetCustomerAccountPasswordChangeRequiredArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
  graphQLBoolean: Scalars["Boolean"]
}

export type MutationCreateCustomerAccountsArgs = {
  customerAccountAndAuthInfo_Input: CustomerAccountAndAuthInfo_Input
}

export type MutationCreateCustomerAccountActionArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
  customerAccountAction_Input: CustomerAccountAction_Input
}

export type MutationCreateCustomerSegmentArgs = {
  customerSegment_Input: CustomerSegment_Input
}

export type MutationUpdateCustomerSegmentArgs = {
  id: Scalars["Int"]
  customerSegment_Input: CustomerSegment_Input
}

export type MutationDeleteCustomerSegmentArgs = {
  id: Scalars["Int"]
}

export type MutationCreateCustomerSegmentAccountArgs = {
  id: Scalars["Int"]
  graphQLInt: Scalars["Int"]
}

export type MutationDeleteCustomerSegmentAccountsArgs = {
  id: Scalars["Int"]
  graphQLInt: Scalars["Int"]
}

export type MutationDeleteCustomerSegmentAccountArgs = {
  id: Scalars["Int"]
  accountId: Scalars["Int"]
}

export type MutationCreateCustomerSetSiteArgs = {
  code: Scalars["String"]
  customerSetSite_Input: CustomerSetSite_Input
}

export type MutationCreateCustomerSetArgs = {
  customerSet_Input: CustomerSet_Input
}

export type MutationUpdateCustomerSetArgs = {
  code: Scalars["String"]
  customerSet_Input: CustomerSet_Input
}

export type MutationDeleteCustomerSetArgs = {
  code: Scalars["String"]
  reassignTo?: Maybe<Scalars["String"]>
}

export type MutationCreateInStockNotificationArgs = {
  inStockNotificationSubscription_Input: InStockNotificationSubscription_Input
}

export type MutationDeleteInStockNotificationArgs = {
  id: Scalars["Int"]
}

export type MutationCreateResolvedPriceListArgs = {
  object: Scalars["Object"]
}

export type MutationManageLocationProductInventoryArgs = {
  locationInventoryQuery_Input: LocationInventoryQuery_Input
}

export type MutationCreateProductCostArgs = {
  productCostQuery_Input: ProductCostQuery_Input
}

export type MutationConfigureProductArgs = {
  productCode: Scalars["String"]
  includeOptionDetails?: Maybe<Scalars["Boolean"]>
  skipInventoryCheck?: Maybe<Scalars["Boolean"]>
  quantity?: Maybe<Scalars["Int"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  variationProductCodeFilter?: Maybe<Scalars["String"]>
  productOptionSelections_Input: ProductOptionSelections_Input
}

export type MutationValidateProductArgs = {
  productCode: Scalars["String"]
  skipInventoryCheck?: Maybe<Scalars["Boolean"]>
  quantity?: Maybe<Scalars["Int"]>
  skipDefaults?: Maybe<Scalars["Boolean"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  productOptionSelections_Input: ProductOptionSelections_Input
}

export type MutationValidateProductDiscountsArgs = {
  productCode: Scalars["String"]
  variationProductCode?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  allowInactive?: Maybe<Scalars["Boolean"]>
  skipInventoryCheck?: Maybe<Scalars["Boolean"]>
  discountSelections_Input: DiscountSelections_Input
}

export type MutationCreateSearchPreviewSortArgs = {
  query?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  facetTemplate?: Maybe<Scalars["String"]>
  facetTemplateSubset?: Maybe<Scalars["String"]>
  facet?: Maybe<Scalars["String"]>
  facetFieldRangeQuery?: Maybe<Scalars["String"]>
  facetHierPrefix?: Maybe<Scalars["String"]>
  facetHierValue?: Maybe<Scalars["String"]>
  facetHierDepth?: Maybe<Scalars["String"]>
  facetStartIndex?: Maybe<Scalars["String"]>
  facetPageSize?: Maybe<Scalars["String"]>
  facetSettings?: Maybe<Scalars["String"]>
  facetValueFilter?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  searchSettings?: Maybe<Scalars["String"]>
  facetTemplateExclude?: Maybe<Scalars["String"]>
  facetPrefix?: Maybe<Scalars["String"]>
  responseOptions?: Maybe<Scalars["String"]>
  cursorMark?: Maybe<Scalars["String"]>
  facetValueSort?: Maybe<Scalars["String"]>
  shouldSlice?: Maybe<Scalars["Boolean"]>
  mid?: Maybe<Scalars["String"]>
  productSortDefinition_Input: ProductSortDefinition_Input
}

export type MutationValidateSearchTuningRulesArgs = {
  searchTuningRuleValidationRequest_Input: SearchTuningRuleValidationRequest_Input
}

export type MutationCreateCartForUserArgs = {
  userId: Scalars["String"]
}

export type MutationUpdateUserCartArgs = {
  userId: Scalars["String"]
  cart_Input: Cart_Input
}

export type MutationUpdateCurrentCartArgs = {
  cart_Input: Cart_Input
}

export type MutationUpdateCartArgs = {
  cartId: Scalars["String"]
  cart_Input: Cart_Input
}

export type MutationDeleteCartArgs = {
  cartId: Scalars["String"]
}

export type MutationDeleteUserCartArgs = {
  userId: Scalars["String"]
}

export type MutationRejectCartDiscountArgs = {
  cartId: Scalars["String"]
  discountId: Scalars["Int"]
}

export type MutationUpdateCartCouponArgs = {
  cartId: Scalars["String"]
  couponCode: Scalars["String"]
}

export type MutationDeleteCartCouponsArgs = {
  cartId: Scalars["String"]
}

export type MutationDeleteCartCouponArgs = {
  cartId: Scalars["String"]
  couponCode: Scalars["String"]
}

export type MutationAddExtendedPropertyToCurrentCartArgs = {
  extendedProperty_Input: ExtendedProperty_Input
}

export type MutationUpdateCurrentCartExtendedPropertiesArgs = {
  upsert?: Maybe<Scalars["Boolean"]>
  extendedProperty_Input: ExtendedProperty_Input
}

export type MutationDeleteCurrentCartExtendedPropertiesArgs = {
  graphQLString: Scalars["String"]
}

export type MutationUpdateCurrentCartExtendedPropertyArgs = {
  key: Scalars["String"]
  upsert?: Maybe<Scalars["Boolean"]>
  extendedProperty_Input: ExtendedProperty_Input
}

export type MutationDeleteCurrentCartExtendedPropertyArgs = {
  key: Scalars["String"]
}

export type MutationAddItemToCurrentCartArgs = {
  cartItem_Input: CartItem_Input
}

export type MutationDeleteCartItemsArgs = {
  cartId: Scalars["String"]
}

export type MutationAddItemToCartArgs = {
  cartId: Scalars["String"]
  cartItem_Input: CartItem_Input
}

export type MutationUpdateCurrentCartItemArgs = {
  cartItemId: Scalars["String"]
  cartItem_Input: CartItem_Input
}

export type MutationDeleteCurrentCartItemArgs = {
  cartItemId: Scalars["String"]
}

export type MutationUpdateCartItemArgs = {
  cartId: Scalars["String"]
  cartItemId: Scalars["String"]
  cartItem_Input: CartItem_Input
}

export type MutationDeleteCartItemArgs = {
  cartId: Scalars["String"]
  cartItemId: Scalars["String"]
}

export type MutationAddItemsToCurrentCartArgs = {
  throwErrorOnInvalidItems?: Maybe<Scalars["Boolean"]>
  cartItem_Input: CartItem_Input
}

export type MutationAddItemsToCartArgs = {
  cartId: Scalars["String"]
  throwErrorOnInvalidItems?: Maybe<Scalars["Boolean"]>
  cartItem_Input: CartItem_Input
}

export type MutationUpdateCurrentCartItemQuantityArgs = {
  cartItemId: Scalars["String"]
  quantity: Scalars["Int"]
}

export type MutationUpdateCartItemQuantityArgs = {
  cartId: Scalars["String"]
  cartItemId: Scalars["String"]
  quantity: Scalars["Int"]
}

export type MutationDeleteCurrentCartMessageArgs = {
  messageId: Scalars["String"]
}

export type MutationCreateCommerceChannelArgs = {
  channel_Input: Channel_Input
}

export type MutationUpdateChannelArgs = {
  code: Scalars["String"]
  channel_Input: Channel_Input
}

export type MutationDeleteCommerceChannelArgs = {
  code: Scalars["String"]
}

export type MutationCreateCommerceChannelGroupArgs = {
  channelGroup_Input: ChannelGroup_Input
}

export type MutationUpdateChannelGroupArgs = {
  code: Scalars["String"]
  channelGroup_Input: ChannelGroup_Input
}

export type MutationDeleteCommerceChannelGroupArgs = {
  code: Scalars["String"]
}

export type MutationCreateCheckoutAttributeArgs = {
  checkoutId: Scalars["String"]
  orderAttribute_Input: OrderAttribute_Input
}

export type MutationUpdateCheckoutAttributesArgs = {
  checkoutId: Scalars["String"]
  removeMissing?: Maybe<Scalars["Boolean"]>
  orderAttribute_Input: OrderAttribute_Input
}

export type MutationUpdateCheckoutArgs = {
  checkoutId: Scalars["String"]
  checkout_Input: Checkout_Input
}

export type MutationCreateCheckoutArgs = {
  cartId?: Maybe<Scalars["String"]>
}

export type MutationCreateCheckoutShippingMethodArgs = {
  checkoutId: Scalars["String"]
  checkoutGroupShippingMethod_Input: CheckoutGroupShippingMethod_Input
}

export type MutationCreateCheckoutActionArgs = {
  checkoutId: Scalars["String"]
  checkoutAction_Input: CheckoutAction_Input
}

export type MutationUpdateCheckoutDigitalWalletTypeArgs = {
  checkoutId: Scalars["String"]
  digitalWalletType: Scalars["String"]
  digitalWallet_Input: DigitalWallet_Input
}

export type MutationUpdateCheckoutPriceListArgs = {
  checkoutId: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationCreateCheckoutEmailArgs = {
  checkoutId: Scalars["String"]
}

export type MutationResendCheckoutEmailArgs = {
  checkoutId: Scalars["String"]
}

export type MutationUpdateCheckoutCouponArgs = {
  checkoutId: Scalars["String"]
  couponCode: Scalars["String"]
}

export type MutationDeleteCheckoutCouponsArgs = {
  checkoutId: Scalars["String"]
}

export type MutationDeleteCheckoutCouponArgs = {
  checkoutId: Scalars["String"]
  couponCode: Scalars["String"]
}

export type MutationUpdateCheckoutDestinationArgs = {
  checkoutId: Scalars["String"]
  destinationId: Scalars["String"]
  destination_Input: Destination_Input
}

export type MutationDeleteCheckoutDestinationArgs = {
  checkoutId: Scalars["String"]
  destinationId: Scalars["String"]
}

export type MutationCreateCheckoutDestinationArgs = {
  checkoutId: Scalars["String"]
  destination_Input: Destination_Input
}

export type MutationCreateCheckoutItemArgs = {
  checkoutId: Scalars["String"]
  orderItem_Input: OrderItem_Input
}

export type MutationDeleteCheckoutItemArgs = {
  checkoutId: Scalars["String"]
  itemId: Scalars["String"]
}

export type MutationUpdateCheckoutItemDestinationArgs = {
  checkoutId: Scalars["String"]
  itemId: Scalars["String"]
  destinationId: Scalars["String"]
}

export type MutationCreateCheckoutItemDestinationArgs = {
  checkoutId: Scalars["String"]
  itemsForDestination_Input: ItemsForDestination_Input
}

export type MutationCreateCheckoutPaymentActionArgs = {
  checkoutId: Scalars["String"]
  paymentAction_Input: PaymentAction_Input
}

export type MutationUpdateCheckoutPaymentActionArgs = {
  checkoutId: Scalars["String"]
  paymentId: Scalars["String"]
  paymentAction_Input: PaymentAction_Input
}

export type MutationDeleteOrderPickupArgs = {
  orderId: Scalars["String"]
  pickupId: Scalars["String"]
}

export type MutationUpdateOrderPickupArgs = {
  orderId: Scalars["String"]
  pickupId: Scalars["String"]
  pickup_Input: Pickup_Input
}

export type MutationCreateOrderRefundArgs = {
  orderId: Scalars["String"]
  refund_Input: Refund_Input
}

export type MutationUpdateOrderRefundArgs = {
  orderId: Scalars["String"]
  refundId: Scalars["String"]
}

export type MutationCreateOrderShipmentArgs = {
  orderId: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteOrderShipmentArgs = {
  orderId: Scalars["String"]
  shipmentId: Scalars["String"]
}

export type MutationRepriceOrderShipmentArgs = {
  shipmentNumber: Scalars["Int"]
  orderId: Scalars["String"]
  repriceShipmentObject_Input: RepriceShipmentObject_Input
}

export type MutationCreateOrderShipmentAdjustmentArgs = {
  orderId: Scalars["String"]
  shipmentNumber: Scalars["Int"]
  shipmentAdjustment_Input: ShipmentAdjustment_Input
}

export type MutationCreateOrderShipmentItemAdjustmentArgs = {
  shipmentNumber: Scalars["Int"]
  itemId: Scalars["Int"]
  orderId: Scalars["String"]
  shipmentItemAdjustment_Input: ShipmentItemAdjustment_Input
}

export type MutationSplitOrderShipmentArgs = {
  orderId: Scalars["String"]
  shipmentNumber: Scalars["String"]
  splitShipmentsObject_Input: SplitShipmentsObject_Input
}

export type MutationUpdateOrderShopperNotesArgs = {
  orderId: Scalars["String"]
  shopperNotes_Input: ShopperNotes_Input
}

export type MutationUpdateOrderValidationResultsArgs = {
  orderId: Scalars["String"]
  orderValidationResult_Input: OrderValidationResult_Input
}

export type MutationUpdateOrderAdjustmentArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  adjustment_Input: Adjustment_Input
}

export type MutationDeleteOrderAdjustmentArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderShippingAdjustmentArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  adjustment_Input: Adjustment_Input
}

export type MutationDeleteOrderAdjustmentShippingArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderHandlingAdjustmentArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  adjustment_Input: Adjustment_Input
}

export type MutationDeleteOrderAdjustmentHandlingArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationCreateOrderAttributeArgs = {
  orderId: Scalars["String"]
  orderAttribute_Input: OrderAttribute_Input
}

export type MutationUpdateOrderAttributesArgs = {
  orderId: Scalars["String"]
  removeMissing?: Maybe<Scalars["Boolean"]>
  orderAttribute_Input: OrderAttribute_Input
}

export type MutationUpdateOrderBillingInfoArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  billingInfo_Input: BillingInfo_Input
}

export type MutationCancelOrderArgs = {
  orderId: Scalars["String"]
  canceledReason_Input: CanceledReason_Input
}

export type MutationDeleteOrderChangeMessageArgs = {
  orderId: Scalars["String"]
  changeMessageId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type MutationCreateOrderArgs = {
  cartId?: Maybe<Scalars["String"]>
  order_Input: Order_Input
}

export type MutationUpdateUserOrderArgs = {
  orderId: Scalars["String"]
}

export type MutationUpdateOrderPriceListArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  graphQLString: Scalars["String"]
}

export type MutationUpdateOrderEmailArgs = {
  orderId: Scalars["String"]
}

export type MutationResendOrderEmailArgs = {
  orderId: Scalars["String"]
  orderAction_Input: OrderAction_Input
}

export type MutationUpdateOrderArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  order_Input: Order_Input
}

export type MutationUpdateOrderDigitalWalletTpeArgs = {
  orderId: Scalars["String"]
  digitalWalletType: Scalars["String"]
  digitalWallet_Input: DigitalWallet_Input
}

export type MutationUpdateOrderDraftArgs = {
  orderId: Scalars["String"]
  version?: Maybe<Scalars["String"]>
}

export type MutationCreateOrderActionArgs = {
  orderId: Scalars["String"]
  orderAction_Input: OrderAction_Input
}

export type MutationUpdateOrderDiscountArgs = {
  orderId: Scalars["String"]
  discountId: Scalars["Int"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  appliedDiscount_Input: AppliedDiscount_Input
}

export type MutationUpdateOrderPriceArgs = {
  refreshShipping?: Maybe<Scalars["Boolean"]>
  order_Input: Order_Input
}

export type MutationUpdateOrderConvertToShipmentsArgs = {
  orderId: Scalars["String"]
}

export type MutationUpdateOrderCouponArgs = {
  orderId: Scalars["String"]
  couponCode: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationDeleteOrderCouponsArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationDeleteOrderCouponArgs = {
  orderId: Scalars["String"]
  couponCode: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderDataArgs = {
  orderId: Scalars["String"]
  orderDataId: Scalars["String"]
  object: Scalars["Object"]
}

export type MutationUpdateOrderItemDataArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  orderItemDataId: Scalars["String"]
  object: Scalars["Object"]
}

export type MutationCreateOrderDigitalPackageArgs = {
  orderId: Scalars["String"]
  digitalPackage_Input: DigitalPackage_Input
}

export type MutationUpdateOrderDigitalPackageArgs = {
  orderId: Scalars["String"]
  digitalPackageId: Scalars["String"]
  digitalPackage_Input: DigitalPackage_Input
}

export type MutationDeleteOrderDigitalPackageArgs = {
  orderId: Scalars["String"]
  digitalPackageId: Scalars["String"]
}

export type MutationCreateOrderExtendedPropertiesArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  extendedProperty_Input: ExtendedProperty_Input
}

export type MutationUpdateOrderExtendedPropertiesArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  upsert?: Maybe<Scalars["Boolean"]>
  extendedProperty_Input: ExtendedProperty_Input
}

export type MutationDeleteOrderExtendedPropertiesArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  graphQLString: Scalars["String"]
}

export type MutationUpdateOrderExtendedPropertyArgs = {
  orderId: Scalars["String"]
  key: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  upsert?: Maybe<Scalars["Boolean"]>
  extendedProperty_Input: ExtendedProperty_Input
}

export type MutationDeleteOrderExtendedPropertyArgs = {
  orderId: Scalars["String"]
  key: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationCreateOrderFulfillmentActionArgs = {
  orderId: Scalars["String"]
  fulfillmentAction_Input: FulfillmentAction_Input
}

export type MutationResendOrderFulfillmentEmailArgs = {
  orderId: Scalars["String"]
  fulfillmentAction_Input: FulfillmentAction_Input
}

export type MutationUpdateOrderFulfillmentInfoArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  fulfillmentInfo_Input: FulfillmentInfo_Input
}

export type MutationCreateOrderItemArgs = {
  orderId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  skipInventoryCheck?: Maybe<Scalars["Boolean"]>
  orderItem_Input: OrderItem_Input
}

export type MutationDeleteOrderItemArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderItemPriceArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  price: Scalars["Float"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderItemQuantityArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  quantity: Scalars["Int"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderItemDutyAmountArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  dutyAmount: Scalars["Float"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type MutationUpdateOrderItemFulfillmentArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  orderItem_Input: OrderItem_Input
}

export type MutationUpdateOrderItemDiscountArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
  discountId: Scalars["Int"]
  updateMode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  appliedDiscount_Input: AppliedDiscount_Input
}

export type MutationCreateOrderNoteArgs = {
  orderId: Scalars["String"]
  orderNote_Input: OrderNote_Input
}

export type MutationUpdateOrderNotesArgs = {
  orderId: Scalars["String"]
  noteId: Scalars["String"]
  orderNote_Input: OrderNote_Input
}

export type MutationDeleteOrderNoteArgs = {
  orderId: Scalars["String"]
  noteId: Scalars["String"]
}

export type MutationCreateOrderPackageArgs = {
  orderId: Scalars["String"]
  packageObj_Input: PackageObj_Input
}

export type MutationUpdateOrderPackageArgs = {
  orderId: Scalars["String"]
  packageId: Scalars["String"]
  packageObj_Input: PackageObj_Input
}

export type MutationDeleteOrderPackageArgs = {
  orderId: Scalars["String"]
  packageId: Scalars["String"]
}

export type MutationCreateOrderPaymentActionArgs = {
  orderId: Scalars["String"]
  paymentAction_Input: PaymentAction_Input
}

export type MutationCreateOrderPaymentPaymentActionArgs = {
  orderId: Scalars["String"]
  paymentId: Scalars["String"]
  paymentAction_Input: PaymentAction_Input
}

export type MutationCreateOrderAutoCaptureArgs = {
  orderId: Scalars["String"]
  forceCapture?: Maybe<Scalars["Boolean"]>
}

export type MutationCreateOrderPickupArgs = {
  orderId: Scalars["String"]
  pickup_Input: Pickup_Input
}

export type MutationValidateOrderArgs = {
  order_Input: Order_Input
}

export type MutationResyncPaymentsArgs = {
  paymentResyncTarget_Input: PaymentResyncTarget_Input
}

export type MutationUpdateQuoteArgs = {
  quoteId: Scalars["String"]
  quote_Input: Quote_Input
}

export type MutationDeleteQuoteArgs = {
  quoteId: Scalars["String"]
}

export type MutationCreateQuoteArgs = {
  quote_Input: Quote_Input
}

export type MutationCreateQuoteItemArgs = {
  quoteId: Scalars["String"]
  orderItem_Input: OrderItem_Input
}

export type MutationUpdateQuoteItemArgs = {
  quoteId: Scalars["String"]
  quoteItemId: Scalars["String"]
  orderItem_Input: OrderItem_Input
}

export type MutationDeleteQuoteItemArgs = {
  quoteId: Scalars["String"]
  quoteItemId: Scalars["String"]
}

export type MutationCreateReturnArgs = {
  returnObj_Input: ReturnObj_Input
}

export type MutationResendReturnEmailArgs = {
  returnAction_Input: ReturnAction_Input
}

export type MutationUpdateReturnArgs = {
  returnId: Scalars["String"]
  returnObj_Input: ReturnObj_Input
}

export type MutationDeleteReturnArgs = {
  returnId: Scalars["String"]
}

export type MutationCreateReturnActionArgs = {
  returnAction_Input: ReturnAction_Input
}

export type MutationSetReturnShipArgs = {
  returnId: Scalars["String"]
  returnItemSpecifier_Input: ReturnItemSpecifier_Input
}

export type MutationCreateReturnPaymentActionArgs = {
  returnId: Scalars["String"]
  paymentAction_Input: PaymentAction_Input
}

export type MutationCreateReturnPaymentPaymentActionArgs = {
  returnId: Scalars["String"]
  paymentId: Scalars["String"]
  paymentAction_Input: PaymentAction_Input
}

export type MutationSetReturnRestockArgs = {
  returnId: Scalars["String"]
  restockableReturnItem_Input: RestockableReturnItem_Input
}

export type MutationCreateReturnItemArgs = {
  returnId: Scalars["String"]
  returnItem_Input: ReturnItem_Input
}

export type MutationDeleteReturnItemArgs = {
  returnId?: Maybe<Scalars["String"]>
  returnItemId?: Maybe<Scalars["String"]>
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
}

export type MutationCreateReturnNoteArgs = {
  returnId: Scalars["String"]
  orderNote_Input: OrderNote_Input
}

export type MutationUpdateReturnNoteArgs = {
  returnId: Scalars["String"]
  noteId: Scalars["String"]
  orderNote_Input: OrderNote_Input
}

export type MutationDeleteReturnNoteArgs = {
  returnId: Scalars["String"]
  noteId: Scalars["String"]
}

export type MutationCreateReturnPackageArgs = {
  returnId: Scalars["String"]
  packageObj_Input: PackageObj_Input
}

export type MutationUpdateReturnPackageArgs = {
  returnId: Scalars["String"]
  packageId: Scalars["String"]
  packageObj_Input: PackageObj_Input
}

export type MutationDeleteReturnPackageArgs = {
  returnId: Scalars["String"]
  packageId: Scalars["String"]
}

export type MutationCreateReturnShipmentArgs = {
  returnId: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteReturnShipmentArgs = {
  returnId: Scalars["String"]
  shipmentId: Scalars["String"]
}

export type MutationCreateWishlistArgs = {
  wishlist_Input: Wishlist_Input
}

export type MutationUpdateWishlistArgs = {
  wishlistId: Scalars["String"]
  wishlist_Input: Wishlist_Input
}

export type MutationDeleteWishlistArgs = {
  wishlistId: Scalars["String"]
}

export type MutationDeleteWishlistItemsArgs = {
  wishlistId: Scalars["String"]
}

export type MutationCreateWishlistItemArgs = {
  wishlistId: Scalars["String"]
  wishlistItem_Input: WishlistItem_Input
}

export type MutationUpdateWishlistItemArgs = {
  wishlistId: Scalars["String"]
  wishlistItemId: Scalars["String"]
  wishlistItem_Input: WishlistItem_Input
}

export type MutationDeleteWishlistItemArgs = {
  wishlistId: Scalars["String"]
  wishlistItemId: Scalars["String"]
}

export type MutationUpdateWishlistItemQuantityArgs = {
  wishlistId: Scalars["String"]
  wishlistItemId: Scalars["String"]
  quantity: Scalars["Int"]
}

export type MutationUpdateDocumentContentArgs = {
  documentId: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationDeleteDocumentContentArgs = {
  documentId: Scalars["String"]
}

export type MutationUpdateDocumentListDocumentContentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationDeleteDocumentListDocumentContentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
}

export type MutationUpdateDocumentTreeContentArgs = {
  documentName: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationDeleteDocumentTreeDocumentContentArgs = {
  documentName: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationUpdateDocumentListDocumentTreeContentArgs = {
  documentListName: Scalars["String"]
  documentName: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationDeleteDocumentListDocumentTreeContentArgs = {
  documentListName: Scalars["String"]
  documentName: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationCreateDocumentArgs = {
  mozuContentContractsR4Document_Input: MozuContentContractsR4Document_Input
}

export type MutationCreateDocumentListDocumentArgs = {
  documentListName: Scalars["String"]
  document_Input: Document_Input
}

export type MutationUpdateDocumentArgs = {
  documentId: Scalars["String"]
  mozuContentContractsR4Document_Input: MozuContentContractsR4Document_Input
}

export type MutationDeleteDocumentArgs = {
  documentId: Scalars["String"]
}

export type MutationUpdateDocumentListDocumentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
  document_Input: Document_Input
}

export type MutationPatchDocumentListDocumentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
  document_Input: Document_Input
}

export type MutationDeleteDocumentListDocumentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
}

export type MutationCreateDocumentListArgs = {
  documentList_Input: DocumentList_Input
}

export type MutationUpdateDocumentListArgs = {
  documentListName: Scalars["String"]
  documentList_Input: DocumentList_Input
}

export type MutationDeleteDocumentListArgs = {
  documentListName: Scalars["String"]
}

export type MutationCreateDocumentListFolderArgs = {
  documentListName: Scalars["String"]
  folder_Input: Folder_Input
}

export type MutationUpdateDocumentListFolderArgs = {
  documentListName: Scalars["String"]
  folderId: Scalars["String"]
  folder_Input: Folder_Input
}

export type MutationDeleteDocumentListFolderArgs = {
  documentListName: Scalars["String"]
  folderId: Scalars["String"]
}

export type MutationCreateDocumentListTypeArgs = {
  documentListType_Input: DocumentListType_Input
}

export type MutationUpdateDocumentListTypeArgs = {
  documentListTypeFQN: Scalars["String"]
  documentListType_Input: DocumentListType_Input
}

export type MutationCreateDocumentDraftArgs = {
  documentLists?: Maybe<Scalars["String"]>
  graphQLString: Scalars["String"]
}

export type MutationToggleDocumentPublishingArgs = {
  documentLists?: Maybe<Scalars["String"]>
  graphQLString: Scalars["String"]
}

export type MutationCreateDocumentTypeArgs = {
  documentType_Input: DocumentType_Input
}

export type MutationUpdateDocumentTypeArgs = {
  documentTypeName: Scalars["String"]
  documentType_Input: DocumentType_Input
}

export type MutationDeleteDocumentTypeArgs = {
  documentTypeName: Scalars["String"]
}

export type MutationCreatePropertyTypeArgs = {
  propertyType_Input: PropertyType_Input
}

export type MutationUpdatePropertyTypeArgs = {
  propertyTypeName: Scalars["String"]
  propertyType_Input: PropertyType_Input
}

export type MutationDeletePropertyTypeArgs = {
  propertyTypeName: Scalars["String"]
}

export type MutationAdminCreateLocationArgs = {
  location_Input: Location_Input
}

export type MutationAdminUpdateLocationArgs = {
  locationCode: Scalars["String"]
  location_Input: Location_Input
}

export type MutationDeleteAdminLocationArgs = {
  locationCode: Scalars["String"]
}

export type MutationAdminCreateLocationAttributeArgs = {
  attribute_Input: Attribute_Input
}

export type MutationAdminCreateLocationAttributeVocabularyValueArgs = {
  attributeFQN: Scalars["String"]
  attributeVocabularyValue_Input: AttributeVocabularyValue_Input
}

export type MutationAdminUpdateLocationAttributeVocabularyValueArgs = {
  attributeFQN: Scalars["String"]
  attributeVocabularyValue_Input: AttributeVocabularyValue_Input
}

export type MutationDeleteAdminLocationAttributeArgs = {
  attributeFQN: Scalars["String"]
}

export type MutationAdminUpdateLocationAttributeArgs = {
  attributeFQN: Scalars["String"]
  attribute_Input: Attribute_Input
}

export type MutationDeleteAdminLocationAttributeVocabularyValueArgs = {
  attributeFQN: Scalars["String"]
  value: Scalars["String"]
}

export type MutationAdminCreateLocationAttributeNamespaceArgs = {
  namespace_Input: Namespace_Input
}

export type MutationDeleteAdminLocationAttributeNamespaceArgs = {
  namespace_Input: Namespace_Input
}

export type MutationAdminCreateLocationGroupArgs = {
  locationGroup_Input: LocationGroup_Input
}

export type MutationUpdateLocationUsageArgs = {
  code: Scalars["String"]
  locationUsage_Input: LocationUsage_Input
}

export type MutationAdminCreateLocationTypeArgs = {
  locationType_Input: LocationType_Input
}

export type MutationAdminUpdateLocationTypeArgs = {
  locationTypeCode: Scalars["String"]
  locationType_Input: LocationType_Input
}

export type MutationDeleteAdminLocationTypeArgs = {
  locationTypeCode: Scalars["String"]
}

export type MutationUpdateAppdataArgs = {
  dBEntry_Input: DbEntry_Input
}

export type MutationCreateAppdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationUpdateAppdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteAppdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type MutationUpdateEntityListEntitiesArgs = {
  entityListFullName: Scalars["String"]
  id: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationDeleteEntityListEntityArgs = {
  entityListFullName: Scalars["String"]
  id: Scalars["String"]
}

export type MutationCreateEntityListEntityArgs = {
  entityListFullName: Scalars["String"]
  httpRequestMessage_Input: HttpRequestMessage_Input
}

export type MutationUpdateEntityListArgs = {
  entityListFullName: Scalars["String"]
  entityList_Input: EntityList_Input
}

export type MutationDeleteEntityListArgs = {
  entityListFullName: Scalars["String"]
}

export type MutationCreateEntityListArgs = {
  entityList_Input: EntityList_Input
}

export type MutationCreateEntityListViewArgs = {
  entityListFullName: Scalars["String"]
  listView_Input: ListView_Input
}

export type MutationUpdateEntityListViewArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
  listView_Input: ListView_Input
}

export type MutationDeleteEntityListViewArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
}

export type MutationUpdateSecureAppdataArgs = {
  appKeyId: Scalars["String"]
  dBEntry2_Input: DbEntry2_Input
}

export type MutationCreateSecureAppdataEntryArgs = {
  appKeyId: Scalars["String"]
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationUpdateSecureAppdataEntryArgs = {
  appKeyId: Scalars["String"]
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteSecureAppdataEntryArgs = {
  appKeyId: Scalars["String"]
  dbEntryQuery: Scalars["String"]
}

export type MutationUpdateSitedataArgs = {
  dBEntry_Input: DbEntry_Input
}

export type MutationCreateSitedataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationUpdateSitedataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteSitedataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type MutationUpdateTenantdataArgs = {
  dBEntry_Input: DbEntry_Input
}

export type MutationCreateTenantDataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationUpdateTenantdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteTenantdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type MutationUpdateUserdataArgs = {
  dBEntry_Input: DbEntry_Input
}

export type MutationCreateUserdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationUpdateUserdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
  graphQLString: Scalars["String"]
}

export type MutationDeleteUserdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type MutationCreateTargetRuleArgs = {
  targetRule_Input: TargetRule_Input
}

export type MutationUpdateTargetRuleArgs = {
  code: Scalars["String"]
  targetRule_Input: TargetRule_Input
}

export type MutationDeleteCommerceTargetRuleArgs = {
  code: Scalars["String"]
}

export type MutationValidateTargetRuleArgs = {
  targetRule_Input: TargetRule_Input
}

export type MutationCreateOrderRoutingSuggestionArgs = {
  returnSuggestionLog?: Maybe<Scalars["Boolean"]>
  suggestionRequest_Input: SuggestionRequest_Input
}

export type Namespace = {
  __typename?: "Namespace"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Namespace>
  nameSpaceId?: Maybe<Scalars["Int"]>
  name: Scalars["String"]
}

export type Namespace_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Namespace_Input = {
  nameSpaceId?: Maybe<Scalars["Int"]>
  name: Scalars["String"]
}

export enum NodeType {
  Array = "ARRAY",
  Binary = "BINARY",
  Boolean = "BOOLEAN",
  Missing = "MISSING",
  Null = "NULL",
  Number = "NUMBER",
  Object = "OBJECT",
  Pojo = "POJO",
  String = "STRING"
}

export type Order = {
  __typename?: "Order"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Order>
  orderNumber?: Maybe<Scalars["Int"]>
  locationCode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  parentOrderId?: Maybe<Scalars["String"]>
  parentOrderNumber?: Maybe<Scalars["Int"]>
  parentCheckoutId?: Maybe<Scalars["String"]>
  parentCheckoutNumber?: Maybe<Scalars["Int"]>
  partialOrderNumber?: Maybe<Scalars["Int"]>
  partialOrderCount?: Maybe<Scalars["Int"]>
  isPartialOrder: Scalars["Boolean"]
  parentReturnId?: Maybe<Scalars["String"]>
  parentReturnNumber?: Maybe<Scalars["Int"]>
  originalCartId?: Maybe<Scalars["String"]>
  priceListCode?: Maybe<Scalars["String"]>
  availableActions?: Maybe<Array<Scalars["String"]>>
  shopperNotes?: Maybe<ShopperNotes>
  customerAccountId?: Maybe<Scalars["Int"]>
  customerTaxId?: Maybe<Scalars["String"]>
  isTaxExempt?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  ipAddress?: Maybe<Scalars["String"]>
  sourceDevice?: Maybe<Scalars["String"]>
  acceptsMarketing?: Maybe<Scalars["Boolean"]>
  status?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  paymentStatus?: Maybe<Scalars["String"]>
  returnStatus?: Maybe<Scalars["String"]>
  isEligibleForReturns: Scalars["Boolean"]
  totalCollected: Scalars["Float"]
  attributes?: Maybe<Array<Maybe<OrderAttribute>>>
  adjustment?: Maybe<Adjustment>
  shippingAdjustment?: Maybe<Adjustment>
  handlingAdjustment?: Maybe<Adjustment>
  shippingDiscounts?: Maybe<Array<Maybe<ShippingDiscount>>>
  handlingDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal?: Maybe<Scalars["Float"]>
  handlingTotal?: Maybe<Scalars["Float"]>
  dutyAmount?: Maybe<Scalars["Float"]>
  dutyTotal?: Maybe<Scalars["Float"]>
  fulfillmentStatus?: Maybe<Scalars["String"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  cancelledDate?: Maybe<Scalars["DateTime"]>
  closedDate?: Maybe<Scalars["DateTime"]>
  acceptedDate?: Maybe<Scalars["DateTime"]>
  notes?: Maybe<Array<Maybe<OrderNote>>>
  items?: Maybe<Array<Maybe<OrderItem>>>
  validationResults?: Maybe<Array<Maybe<OrderValidationResult>>>
  billingInfo?: Maybe<BillingInfo>
  payments?: Maybe<Array<Maybe<Payment>>>
  refunds?: Maybe<Array<Maybe<Refund>>>
  packages?: Maybe<Array<Maybe<PackageObj>>>
  pickups?: Maybe<Array<Maybe<Pickup>>>
  digitalPackages?: Maybe<Array<Maybe<DigitalPackage>>>
  shipments?: Maybe<Array<Maybe<Shipment>>>
  isDraft?: Maybe<Scalars["Boolean"]>
  hasDraft?: Maybe<Scalars["Boolean"]>
  isImport?: Maybe<Scalars["Boolean"]>
  importDate?: Maybe<Scalars["DateTime"]>
  isUnified: Scalars["Boolean"]
  externalId?: Maybe<Scalars["String"]>
  couponCodes?: Maybe<Array<Scalars["String"]>>
  invalidCoupons?: Maybe<Array<Maybe<InvalidCoupon>>>
  amountAvailableForRefund: Scalars["Float"]
  amountRemainingForPayment: Scalars["Float"]
  amountRefunded: Scalars["Float"]
  readyToCapture: Scalars["Boolean"]
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  channelCode?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  fulfillmentInfo?: Maybe<FulfillmentInfo>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  rejectedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountedSubtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  shippingSubTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  handlingTaxTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  taxTotal?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  lineItemSubtotalWithOrderAdjustments?: Maybe<Scalars["Float"]>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
  extendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage>>>
  auditInfo?: Maybe<AuditInfo>
}

export type Order_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Order_Input = {
  orderNumber?: Maybe<Scalars["Int"]>
  locationCode?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  parentOrderId?: Maybe<Scalars["String"]>
  parentOrderNumber?: Maybe<Scalars["Int"]>
  parentCheckoutId?: Maybe<Scalars["String"]>
  parentCheckoutNumber?: Maybe<Scalars["Int"]>
  partialOrderNumber?: Maybe<Scalars["Int"]>
  partialOrderCount?: Maybe<Scalars["Int"]>
  isPartialOrder: Scalars["Boolean"]
  parentReturnId?: Maybe<Scalars["String"]>
  parentReturnNumber?: Maybe<Scalars["Int"]>
  originalCartId?: Maybe<Scalars["String"]>
  priceListCode?: Maybe<Scalars["String"]>
  availableActions?: Maybe<Array<Scalars["String"]>>
  shopperNotes?: Maybe<ShopperNotes_Input>
  customerAccountId?: Maybe<Scalars["Int"]>
  customerTaxId?: Maybe<Scalars["String"]>
  isTaxExempt?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  ipAddress?: Maybe<Scalars["String"]>
  sourceDevice?: Maybe<Scalars["String"]>
  acceptsMarketing?: Maybe<Scalars["Boolean"]>
  status?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  paymentStatus?: Maybe<Scalars["String"]>
  returnStatus?: Maybe<Scalars["String"]>
  isEligibleForReturns: Scalars["Boolean"]
  totalCollected: Scalars["Float"]
  attributes?: Maybe<Array<Maybe<OrderAttribute_Input>>>
  adjustment?: Maybe<Adjustment_Input>
  shippingAdjustment?: Maybe<Adjustment_Input>
  handlingAdjustment?: Maybe<Adjustment_Input>
  shippingDiscounts?: Maybe<Array<Maybe<ShippingDiscount_Input>>>
  handlingDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal?: Maybe<Scalars["Float"]>
  handlingTotal?: Maybe<Scalars["Float"]>
  dutyAmount?: Maybe<Scalars["Float"]>
  dutyTotal?: Maybe<Scalars["Float"]>
  fulfillmentStatus?: Maybe<Scalars["String"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  cancelledDate?: Maybe<Scalars["DateTime"]>
  closedDate?: Maybe<Scalars["DateTime"]>
  acceptedDate?: Maybe<Scalars["DateTime"]>
  notes?: Maybe<Array<Maybe<OrderNote_Input>>>
  items?: Maybe<Array<Maybe<OrderItem_Input>>>
  validationResults?: Maybe<Array<Maybe<OrderValidationResult_Input>>>
  billingInfo?: Maybe<BillingInfo_Input>
  payments?: Maybe<Array<Maybe<Payment_Input>>>
  refunds?: Maybe<Array<Maybe<Refund_Input>>>
  packages?: Maybe<Array<Maybe<PackageObj_Input>>>
  pickups?: Maybe<Array<Maybe<Pickup_Input>>>
  digitalPackages?: Maybe<Array<Maybe<DigitalPackage_Input>>>
  shipments?: Maybe<Array<Maybe<Shipment_Input>>>
  isDraft?: Maybe<Scalars["Boolean"]>
  hasDraft?: Maybe<Scalars["Boolean"]>
  isImport?: Maybe<Scalars["Boolean"]>
  importDate?: Maybe<Scalars["DateTime"]>
  isUnified: Scalars["Boolean"]
  externalId?: Maybe<Scalars["String"]>
  couponCodes?: Maybe<Array<Scalars["String"]>>
  invalidCoupons?: Maybe<Array<Maybe<InvalidCoupon_Input>>>
  amountAvailableForRefund: Scalars["Float"]
  amountRemainingForPayment: Scalars["Float"]
  amountRefunded: Scalars["Float"]
  readyToCapture: Scalars["Boolean"]
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  channelCode?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  fulfillmentInfo?: Maybe<FulfillmentInfo_Input>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  rejectedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountedSubtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  shippingSubTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  handlingTaxTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  taxTotal?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  lineItemSubtotalWithOrderAdjustments?: Maybe<Scalars["Float"]>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
  extendedProperties?: Maybe<Array<Maybe<ExtendedProperty_Input>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type OrderAction_Input = {
  actionName?: Maybe<Scalars["String"]>
}

export type OrderAttribute = {
  __typename?: "OrderAttribute"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderAttribute>
  auditInfo?: Maybe<AuditInfo>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type OrderAttribute_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderAttribute_Input = {
  auditInfo?: Maybe<AuditInfo_Input>
  fullyQualifiedName?: Maybe<Scalars["String"]>
  attributeDefinitionId?: Maybe<Scalars["Int"]>
  values?: Maybe<Array<Scalars["Object"]>>
}

export type OrderCollection = {
  __typename?: "OrderCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Order>>>
}

export type OrderCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderItem = {
  __typename?: "OrderItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderItem>
  id?: Maybe<Scalars["String"]>
  destinationId?: Maybe<Scalars["String"]>
  originalCartItemId?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  dutyAmount?: Maybe<Scalars["Float"]>
  expectedDeliveryDate?: Maybe<Scalars["DateTime"]>
  localeCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  product?: Maybe<Product>
  quantity: Scalars["Int"]
  isRecurring?: Maybe<Scalars["Boolean"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  subtotal?: Maybe<Scalars["Float"]>
  extendedTotal?: Maybe<Scalars["Float"]>
  taxableTotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  unitPrice?: Maybe<CommerceUnitPrice>
  productDiscount?: Maybe<AppliedLineItemProductDiscount>
  productDiscounts?: Maybe<Array<Maybe<AppliedLineItemProductDiscount>>>
  shippingDiscounts?: Maybe<Array<Maybe<AppliedLineItemShippingDiscount>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  weightedOrderAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderDiscount?: Maybe<Scalars["Float"]>
  adjustedLineItemSubtotal?: Maybe<Scalars["Float"]>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderTax?: Maybe<Scalars["Float"]>
  weightedOrderShipping?: Maybe<Scalars["Float"]>
  weightedOrderShippingDiscount?: Maybe<Scalars["Float"]>
  weightedOrderShippingManualAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderShippingTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFee?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeDiscount?: Maybe<Scalars["Float"]>
  weightedOrderDuty?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderHandlingAdjustment?: Maybe<Scalars["Float"]>
  autoAddDiscountId?: Maybe<Scalars["Int"]>
}

export type OrderItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderItem_Input = {
  id?: Maybe<Scalars["String"]>
  destinationId?: Maybe<Scalars["String"]>
  originalCartItemId?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  fulfillmentMethod?: Maybe<Scalars["String"]>
  dutyAmount?: Maybe<Scalars["Float"]>
  expectedDeliveryDate?: Maybe<Scalars["DateTime"]>
  localeCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  product?: Maybe<Product_Input>
  quantity: Scalars["Int"]
  isRecurring?: Maybe<Scalars["Boolean"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  subtotal?: Maybe<Scalars["Float"]>
  extendedTotal?: Maybe<Scalars["Float"]>
  taxableTotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  unitPrice?: Maybe<CommerceUnitPrice_Input>
  productDiscount?: Maybe<AppliedLineItemProductDiscount_Input>
  productDiscounts?: Maybe<Array<Maybe<AppliedLineItemProductDiscount_Input>>>
  shippingDiscounts?: Maybe<Array<Maybe<AppliedLineItemShippingDiscount_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo_Input>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  weightedOrderAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderDiscount?: Maybe<Scalars["Float"]>
  adjustedLineItemSubtotal?: Maybe<Scalars["Float"]>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderTax?: Maybe<Scalars["Float"]>
  weightedOrderShipping?: Maybe<Scalars["Float"]>
  weightedOrderShippingDiscount?: Maybe<Scalars["Float"]>
  weightedOrderShippingManualAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderShippingTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFee?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeDiscount?: Maybe<Scalars["Float"]>
  weightedOrderDuty?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderHandlingAdjustment?: Maybe<Scalars["Float"]>
  autoAddDiscountId?: Maybe<Scalars["Int"]>
}

export type OrderItemCollection = {
  __typename?: "OrderItemCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderItemCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<OrderItem>>>
}

export type OrderItemCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderNote = {
  __typename?: "OrderNote"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderNote>
  id?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type OrderNote_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderNote_Input = {
  id?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type OrderReturnableItem = {
  __typename?: "OrderReturnableItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderReturnableItem>
  productCode?: Maybe<Scalars["String"]>
  productName?: Maybe<Scalars["String"]>
  shipmentNumber?: Maybe<Scalars["Int"]>
  shipmentItemId?: Maybe<Scalars["Int"]>
  quantityOrdered: Scalars["Int"]
  quantityFulfilled: Scalars["Int"]
  quantityReturned: Scalars["Int"]
  quantityReturnable: Scalars["Int"]
  fulfillmentStatus?: Maybe<Scalars["String"]>
  orderItemId?: Maybe<Scalars["String"]>
  orderLineId: Scalars["Int"]
  orderItemOptionAttributeFQN?: Maybe<Scalars["String"]>
  unitQuantity: Scalars["Int"]
  parentProductCode?: Maybe<Scalars["String"]>
  parentProductName?: Maybe<Scalars["String"]>
}

export type OrderReturnableItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderReturnableItemCollection = {
  __typename?: "OrderReturnableItemCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderReturnableItemCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<OrderReturnableItem>>>
}

export type OrderReturnableItemCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export enum OrderType {
  Directship = "DIRECTSHIP",
  Transfer = "TRANSFER"
}

export type OrderValidationMessage = {
  __typename?: "OrderValidationMessage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderValidationMessage>
  orderItemId?: Maybe<Scalars["String"]>
  messageType?: Maybe<Scalars["String"]>
  message?: Maybe<Scalars["String"]>
}

export type OrderValidationMessage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderValidationMessage_Input = {
  orderItemId?: Maybe<Scalars["String"]>
  messageType?: Maybe<Scalars["String"]>
  message?: Maybe<Scalars["String"]>
}

export type OrderValidationResult = {
  __typename?: "OrderValidationResult"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<OrderValidationResult>
  validationId?: Maybe<Scalars["String"]>
  validatorName?: Maybe<Scalars["String"]>
  validatorType?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  createdDate?: Maybe<Scalars["DateTime"]>
  messages?: Maybe<Array<Maybe<OrderValidationMessage>>>
}

export type OrderValidationResult_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type OrderValidationResult_Input = {
  validationId?: Maybe<Scalars["String"]>
  validatorName?: Maybe<Scalars["String"]>
  validatorType?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  createdDate?: Maybe<Scalars["DateTime"]>
  messages?: Maybe<Array<Maybe<OrderValidationMessage_Input>>>
}

export type PackageItem = {
  __typename?: "PackageItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PackageItem>
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  fulfillmentItemType?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
}

export type PackageItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PackageItem_Input = {
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  fulfillmentItemType?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
}

export type PackageMeasurements = {
  __typename?: "PackageMeasurements"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PackageMeasurements>
  packageHeight?: Maybe<Measurement>
  packageWidth?: Maybe<Measurement>
  packageLength?: Maybe<Measurement>
  packageWeight?: Maybe<Measurement>
}

export type PackageMeasurements_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PackageMeasurements_Input = {
  packageHeight?: Maybe<Measurement_Input>
  packageWidth?: Maybe<Measurement_Input>
  packageLength?: Maybe<Measurement_Input>
  packageWeight?: Maybe<Measurement_Input>
}

export type PackageObj = {
  __typename?: "PackageObj"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PackageObj>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  shipmentId?: Maybe<Scalars["String"]>
  trackingNumber?: Maybe<Scalars["String"]>
  trackingNumbers?: Maybe<Array<Scalars["String"]>>
  packagingType?: Maybe<Scalars["String"]>
  hasLabel: Scalars["Boolean"]
  measurements?: Maybe<PackageMeasurements>
  carrier?: Maybe<Scalars["String"]>
  signatureRequired?: Maybe<Scalars["Boolean"]>
  trackings?: Maybe<Array<Maybe<Tracking>>>
  id?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<PackageItem>>>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  availableActions?: Maybe<Array<Scalars["String"]>>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
}

export type PackageObj_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PackageObj_Input = {
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  shipmentId?: Maybe<Scalars["String"]>
  trackingNumber?: Maybe<Scalars["String"]>
  trackingNumbers?: Maybe<Array<Scalars["String"]>>
  packagingType?: Maybe<Scalars["String"]>
  hasLabel: Scalars["Boolean"]
  measurements?: Maybe<PackageMeasurements_Input>
  carrier?: Maybe<Scalars["String"]>
  signatureRequired?: Maybe<Scalars["Boolean"]>
  trackings?: Maybe<Array<Maybe<Tracking_Input>>>
  id?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<PackageItem_Input>>>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  availableActions?: Maybe<Array<Scalars["String"]>>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
}

export type PackageSettings = {
  __typename?: "PackageSettings"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PackageSettings>
  unitType?: Maybe<Scalars["String"]>
}

export type PackageSettings_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PasswordInfo_Input = {
  oldPassword?: Maybe<Scalars["String"]>
  newPassword?: Maybe<Scalars["String"]>
  externalPassword?: Maybe<Scalars["String"]>
}

export type Payment = {
  __typename?: "Payment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Payment>
  id?: Maybe<Scalars["String"]>
  groupId?: Maybe<PaymentActionTarget>
  paymentServiceTransactionId?: Maybe<Scalars["String"]>
  availableActions?: Maybe<Array<Scalars["String"]>>
  orderId?: Maybe<Scalars["String"]>
  paymentType?: Maybe<Scalars["String"]>
  paymentWorkflow?: Maybe<Scalars["String"]>
  externalTransactionId?: Maybe<Scalars["String"]>
  billingInfo?: Maybe<BillingInfo>
  data?: Maybe<Scalars["Object"]>
  status?: Maybe<Scalars["String"]>
  subPayments?: Maybe<Array<Maybe<SubPayment>>>
  interactions?: Maybe<Array<Maybe<PaymentInteraction>>>
  isRecurring: Scalars["Boolean"]
  amountCollected: Scalars["Float"]
  amountCredited: Scalars["Float"]
  amountRequested: Scalars["Float"]
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
  auditInfo?: Maybe<AuditInfo>
}

export type Payment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Payment_Input = {
  id?: Maybe<Scalars["String"]>
  groupId?: Maybe<PaymentActionTarget_Input>
  paymentServiceTransactionId?: Maybe<Scalars["String"]>
  availableActions?: Maybe<Array<Scalars["String"]>>
  orderId?: Maybe<Scalars["String"]>
  paymentType?: Maybe<Scalars["String"]>
  paymentWorkflow?: Maybe<Scalars["String"]>
  externalTransactionId?: Maybe<Scalars["String"]>
  billingInfo?: Maybe<BillingInfo_Input>
  data?: Maybe<Scalars["Object"]>
  status?: Maybe<Scalars["String"]>
  subPayments?: Maybe<Array<Maybe<SubPayment_Input>>>
  interactions?: Maybe<Array<Maybe<PaymentInteraction_Input>>>
  isRecurring: Scalars["Boolean"]
  amountCollected: Scalars["Float"]
  amountCredited: Scalars["Float"]
  amountRequested: Scalars["Float"]
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type PaymentAction_Input = {
  actionName?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  checkNumber?: Maybe<Scalars["String"]>
  returnUrl?: Maybe<Scalars["String"]>
  cancelUrl?: Maybe<Scalars["String"]>
  amount?: Maybe<Scalars["Float"]>
  interactionDate?: Maybe<Scalars["DateTime"]>
  newBillingInfo?: Maybe<BillingInfo_Input>
  referenceSourcePaymentId?: Maybe<Scalars["String"]>
  manualGatewayInteraction?: Maybe<PaymentGatewayInteraction_Input>
  externalTransactionId?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
}

export type PaymentActionTarget = {
  __typename?: "PaymentActionTarget"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PaymentActionTarget>
  targetType?: Maybe<Scalars["String"]>
  targetId?: Maybe<Scalars["String"]>
  targetNumber?: Maybe<Scalars["Int"]>
}

export type PaymentActionTarget_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PaymentActionTarget_Input = {
  targetType?: Maybe<Scalars["String"]>
  targetId?: Maybe<Scalars["String"]>
  targetNumber?: Maybe<Scalars["Int"]>
}

export type PaymentCard = {
  __typename?: "PaymentCard"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PaymentCard>
  paymentServiceCardId?: Maybe<Scalars["String"]>
  isUsedRecurring?: Maybe<Scalars["Boolean"]>
  nameOnCard?: Maybe<Scalars["String"]>
  isCardInfoSaved: Scalars["Boolean"]
  isTokenized: Scalars["Boolean"]
  paymentOrCardType?: Maybe<Scalars["String"]>
  cardNumberPartOrMask?: Maybe<Scalars["String"]>
  expireMonth: Scalars["Int"]
  expireYear: Scalars["Int"]
  bin?: Maybe<Scalars["String"]>
}

export type PaymentCard_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PaymentCard_Input = {
  paymentServiceCardId?: Maybe<Scalars["String"]>
  isUsedRecurring?: Maybe<Scalars["Boolean"]>
  nameOnCard?: Maybe<Scalars["String"]>
  isCardInfoSaved: Scalars["Boolean"]
  isTokenized: Scalars["Boolean"]
  paymentOrCardType?: Maybe<Scalars["String"]>
  cardNumberPartOrMask?: Maybe<Scalars["String"]>
  expireMonth: Scalars["Int"]
  expireYear: Scalars["Int"]
  bin?: Maybe<Scalars["String"]>
}

export type PaymentCollection = {
  __typename?: "PaymentCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PaymentCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Payment>>>
}

export type PaymentCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PaymentGatewayInteraction_Input = {
  gatewayInteractionId?: Maybe<Scalars["Int"]>
  gatewayTransactionId?: Maybe<Scalars["String"]>
  gatewayAuthCode?: Maybe<Scalars["String"]>
  gatewayAVSCodes?: Maybe<Scalars["String"]>
  gatewayCVV2Codes?: Maybe<Scalars["String"]>
  gatewayResponseCode?: Maybe<Scalars["String"]>
  gatewayResponseText?: Maybe<Scalars["String"]>
}

export type PaymentGatewayResponseData = {
  __typename?: "PaymentGatewayResponseData"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PaymentGatewayResponseData>
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type PaymentGatewayResponseData_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PaymentGatewayResponseData_Input = {
  key?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type PaymentInteraction = {
  __typename?: "PaymentInteraction"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PaymentInteraction>
  id?: Maybe<Scalars["String"]>
  gatewayInteractionId?: Maybe<Scalars["Int"]>
  paymentId?: Maybe<Scalars["String"]>
  orderId?: Maybe<Scalars["String"]>
  target?: Maybe<PaymentActionTarget>
  currencyCode?: Maybe<Scalars["String"]>
  interactionType?: Maybe<Scalars["String"]>
  checkNumber?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  paymentEntryStatus?: Maybe<Scalars["String"]>
  isRecurring?: Maybe<Scalars["Boolean"]>
  isManual: Scalars["Boolean"]
  gatewayTransactionId?: Maybe<Scalars["String"]>
  gatewayAuthCode?: Maybe<Scalars["String"]>
  gatewayAVSCodes?: Maybe<Scalars["String"]>
  gatewayCVV2Codes?: Maybe<Scalars["String"]>
  gatewayResponseCode?: Maybe<Scalars["String"]>
  gatewayResponseText?: Maybe<Scalars["String"]>
  gatewayResponseData?: Maybe<Array<Maybe<PaymentGatewayResponseData>>>
  paymentTransactionInteractionIdReference?: Maybe<Scalars["Int"]>
  amount?: Maybe<Scalars["Float"]>
  note?: Maybe<Scalars["String"]>
  interactionDate?: Maybe<Scalars["DateTime"]>
  auditInfo?: Maybe<AuditInfo>
  returnId?: Maybe<Scalars["String"]>
  refundId?: Maybe<Scalars["String"]>
}

export type PaymentInteraction_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PaymentInteraction_Input = {
  id?: Maybe<Scalars["String"]>
  gatewayInteractionId?: Maybe<Scalars["Int"]>
  paymentId?: Maybe<Scalars["String"]>
  orderId?: Maybe<Scalars["String"]>
  target?: Maybe<PaymentActionTarget_Input>
  currencyCode?: Maybe<Scalars["String"]>
  interactionType?: Maybe<Scalars["String"]>
  checkNumber?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  paymentEntryStatus?: Maybe<Scalars["String"]>
  isRecurring?: Maybe<Scalars["Boolean"]>
  isManual: Scalars["Boolean"]
  gatewayTransactionId?: Maybe<Scalars["String"]>
  gatewayAuthCode?: Maybe<Scalars["String"]>
  gatewayAVSCodes?: Maybe<Scalars["String"]>
  gatewayCVV2Codes?: Maybe<Scalars["String"]>
  gatewayResponseCode?: Maybe<Scalars["String"]>
  gatewayResponseText?: Maybe<Scalars["String"]>
  gatewayResponseData?: Maybe<Array<Maybe<PaymentGatewayResponseData_Input>>>
  paymentTransactionInteractionIdReference?: Maybe<Scalars["Int"]>
  amount?: Maybe<Scalars["Float"]>
  note?: Maybe<Scalars["String"]>
  interactionDate?: Maybe<Scalars["DateTime"]>
  auditInfo?: Maybe<AuditInfo_Input>
  returnId?: Maybe<Scalars["String"]>
  refundId?: Maybe<Scalars["String"]>
}

export type PaymentResyncTarget_Input = {
  targetType?: Maybe<Scalars["String"]>
  targetId?: Maybe<Scalars["String"]>
  paymentId?: Maybe<Scalars["String"]>
}

export type PaymentToken = {
  __typename?: "PaymentToken"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PaymentToken>
  paymentServiceTokenId?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}

export type PaymentToken_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PaymentToken_Input = {
  paymentServiceTokenId?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}

export type Phone = {
  __typename?: "Phone"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Phone>
  home?: Maybe<Scalars["String"]>
  mobile?: Maybe<Scalars["String"]>
  work?: Maybe<Scalars["String"]>
}

export type Phone_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Phone_Input = {
  home?: Maybe<Scalars["String"]>
  mobile?: Maybe<Scalars["String"]>
  work?: Maybe<Scalars["String"]>
}

export type Pickup = {
  __typename?: "Pickup"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Pickup>
  id?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<PickupItem>>>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  availableActions?: Maybe<Array<Scalars["String"]>>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
}

export type Pickup_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Pickup_Input = {
  id?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<PickupItem_Input>>>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  availableActions?: Maybe<Array<Scalars["String"]>>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
}

export type PickupItem = {
  __typename?: "PickupItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PickupItem>
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  fulfillmentItemType?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
}

export type PickupItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PickupItem_Input = {
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
  fulfillmentItemType?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
}

export type PriceList = {
  __typename?: "PriceList"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PriceList>
  priceListCode?: Maybe<Scalars["String"]>
  priceListId: Scalars["Int"]
  enabled: Scalars["Boolean"]
  name?: Maybe<Scalars["String"]>
  resolvable: Scalars["Boolean"]
  isIndexed?: Maybe<Scalars["Boolean"]>
  filteredInStoreFront: Scalars["Boolean"]
  isSiteDefault: Scalars["Boolean"]
  description?: Maybe<Scalars["String"]>
  ancestors?: Maybe<Array<Maybe<PriceListNode>>>
  descendants?: Maybe<Array<Maybe<PriceListNode>>>
  validSites?: Maybe<Array<Scalars["Int"]>>
}

export type PriceList_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PriceListNode = {
  __typename?: "PriceListNode"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PriceListNode>
  priceListCode?: Maybe<Scalars["String"]>
  priceListId: Scalars["Int"]
  parentPriceListId?: Maybe<Scalars["Int"]>
  priceListLevel: Scalars["Int"]
}

export type PriceListNode_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Product = {
  __typename?: "Product"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Product>
  productCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  productSequence?: Maybe<Scalars["Int"]>
  productUsage?: Maybe<Scalars["String"]>
  fulfillmentTypesSupported?: Maybe<Array<Scalars["String"]>>
  goodsType?: Maybe<Scalars["String"]>
  bundledProducts?: Maybe<Array<Maybe<BundledProduct>>>
  content?: Maybe<ProductContent>
  purchasableState?: Maybe<ProductPurchasableState>
  isActive?: Maybe<Scalars["Boolean"]>
  publishState?: Maybe<Scalars["String"]>
  price?: Maybe<ProductPrice>
  priceRange?: Maybe<ProductPriceRange>
  volumePriceBands?: Maybe<Array<Maybe<ProductVolumePrice>>>
  volumePriceRange?: Maybe<ProductPriceRange>
  availableShippingDiscounts?: Maybe<Array<Maybe<Discount>>>
  productType?: Maybe<Scalars["String"]>
  productTypeId?: Maybe<Scalars["Int"]>
  isTaxable: Scalars["Boolean"]
  isRecurring: Scalars["Boolean"]
  pricingBehavior?: Maybe<ProductPricingBehaviorInfo>
  inventoryInfo?: Maybe<ProductInventoryInfo>
  createDate: Scalars["DateTime"]
  updateDate: Scalars["DateTime"]
  dateFirstAvailableInCatalog?: Maybe<Scalars["DateTime"]>
  catalogStartDate?: Maybe<Scalars["DateTime"]>
  catalogEndDate?: Maybe<Scalars["DateTime"]>
  daysAvailableInCatalog?: Maybe<Scalars["Int"]>
  upc?: Maybe<Scalars["String"]>
  upCs?: Maybe<Array<Scalars["String"]>>
  mfgPartNumber?: Maybe<Scalars["String"]>
  mfgPartNumbers?: Maybe<Array<Scalars["String"]>>
  variationProductCode?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Maybe<Category>>>
  measurements?: Maybe<PackageMeasurements>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  properties?: Maybe<Array<Maybe<ProductProperty>>>
  options?: Maybe<Array<Maybe<ProductOption>>>
  variations?: Maybe<Array<Maybe<VariationSummary>>>
  validPriceLists?: Maybe<Array<Scalars["String"]>>
  locationsInStock?: Maybe<Array<Scalars["String"]>>
  slicingAttributeFQN?: Maybe<Scalars["String"]>
  productImageGroups?: Maybe<Array<Maybe<ProductImageGroup>>>
  sliceValue?: Maybe<Scalars["String"]>
}

export type Product_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductPropertiesArgs = {
  filterAttribute?: Maybe<Scalars["String"]>
  filterOperator?: Maybe<Scalars["String"]>
  filterValue?: Maybe<Scalars["Object"]>
}

export type Product_Input = {
  productCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  productSequence?: Maybe<Scalars["Int"]>
  productUsage?: Maybe<Scalars["String"]>
  fulfillmentTypesSupported?: Maybe<Array<Scalars["String"]>>
  goodsType?: Maybe<Scalars["String"]>
  bundledProducts?: Maybe<Array<Maybe<BundledProduct_Input>>>
  content?: Maybe<ProductContent_Input>
  purchasableState?: Maybe<ProductPurchasableState_Input>
  isActive?: Maybe<Scalars["Boolean"]>
  publishState?: Maybe<Scalars["String"]>
  price?: Maybe<ProductPrice_Input>
  priceRange?: Maybe<ProductPriceRange_Input>
  volumePriceBands?: Maybe<Array<Maybe<ProductVolumePrice_Input>>>
  volumePriceRange?: Maybe<ProductPriceRange_Input>
  availableShippingDiscounts?: Maybe<Array<Maybe<Discount_Input>>>
  productType?: Maybe<Scalars["String"]>
  productTypeId?: Maybe<Scalars["Int"]>
  isTaxable: Scalars["Boolean"]
  isRecurring: Scalars["Boolean"]
  pricingBehavior?: Maybe<ProductPricingBehaviorInfo_Input>
  inventoryInfo?: Maybe<ProductInventoryInfo_Input>
  createDate: Scalars["DateTime"]
  updateDate: Scalars["DateTime"]
  dateFirstAvailableInCatalog?: Maybe<Scalars["DateTime"]>
  catalogStartDate?: Maybe<Scalars["DateTime"]>
  catalogEndDate?: Maybe<Scalars["DateTime"]>
  daysAvailableInCatalog?: Maybe<Scalars["Int"]>
  upc?: Maybe<Scalars["String"]>
  upCs?: Maybe<Array<Scalars["String"]>>
  mfgPartNumber?: Maybe<Scalars["String"]>
  mfgPartNumbers?: Maybe<Array<Scalars["String"]>>
  variationProductCode?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Maybe<Category_Input>>>
  measurements?: Maybe<PackageMeasurements_Input>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  properties?: Maybe<Array<Maybe<ProductProperty_Input>>>
  options?: Maybe<Array<Maybe<ProductOption_Input>>>
  variations?: Maybe<Array<Maybe<VariationSummary_Input>>>
  validPriceLists?: Maybe<Array<Scalars["String"]>>
  locationsInStock?: Maybe<Array<Scalars["String"]>>
  slicingAttributeFQN?: Maybe<Scalars["String"]>
  productImageGroups?: Maybe<Array<Maybe<ProductImageGroup_Input>>>
  sliceValue?: Maybe<Scalars["String"]>
}

export type ProductCollection = {
  __typename?: "ProductCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductCollection>
  nextCursorMark?: Maybe<Scalars["String"]>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Product>>>
}

export type ProductCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductContent = {
  __typename?: "ProductContent"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductContent>
  productName?: Maybe<Scalars["String"]>
  productFullDescription?: Maybe<Scalars["String"]>
  productShortDescription?: Maybe<Scalars["String"]>
  metaTagTitle?: Maybe<Scalars["String"]>
  metaTagDescription?: Maybe<Scalars["String"]>
  metaTagKeywords?: Maybe<Scalars["String"]>
  seoFriendlyUrl?: Maybe<Scalars["String"]>
  productImages?: Maybe<Array<Maybe<ProductImage>>>
}

export type ProductContent_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductContent_Input = {
  productName?: Maybe<Scalars["String"]>
  productFullDescription?: Maybe<Scalars["String"]>
  productShortDescription?: Maybe<Scalars["String"]>
  metaTagTitle?: Maybe<Scalars["String"]>
  metaTagDescription?: Maybe<Scalars["String"]>
  metaTagKeywords?: Maybe<Scalars["String"]>
  seoFriendlyUrl?: Maybe<Scalars["String"]>
  productImages?: Maybe<Array<Maybe<ProductImage_Input>>>
}

export type ProductCost = {
  __typename?: "ProductCost"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductCost>
  productCode?: Maybe<Scalars["String"]>
  cost: Scalars["Float"]
}

export type ProductCost_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductCostCollection = {
  __typename?: "ProductCostCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductCostCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ProductCost>>>
}

export type ProductCostCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductCostQuery_Input = {
  productCodes?: Maybe<Array<Scalars["String"]>>
}

export type ProductForIndexing = {
  __typename?: "ProductForIndexing"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductForIndexing>
  slices?: Maybe<Array<Maybe<Product>>>
  productCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  productSequence?: Maybe<Scalars["Int"]>
  productUsage?: Maybe<Scalars["String"]>
  fulfillmentTypesSupported?: Maybe<Array<Scalars["String"]>>
  goodsType?: Maybe<Scalars["String"]>
  bundledProducts?: Maybe<Array<Maybe<BundledProduct>>>
  content?: Maybe<ProductContent>
  purchasableState?: Maybe<ProductPurchasableState>
  isActive?: Maybe<Scalars["Boolean"]>
  publishState?: Maybe<Scalars["String"]>
  price?: Maybe<ProductPrice>
  priceRange?: Maybe<ProductPriceRange>
  volumePriceBands?: Maybe<Array<Maybe<ProductVolumePrice>>>
  volumePriceRange?: Maybe<ProductPriceRange>
  availableShippingDiscounts?: Maybe<Array<Maybe<Discount>>>
  productType?: Maybe<Scalars["String"]>
  productTypeId?: Maybe<Scalars["Int"]>
  isTaxable: Scalars["Boolean"]
  isRecurring: Scalars["Boolean"]
  pricingBehavior?: Maybe<ProductPricingBehaviorInfo>
  inventoryInfo?: Maybe<ProductInventoryInfo>
  createDate: Scalars["DateTime"]
  updateDate: Scalars["DateTime"]
  dateFirstAvailableInCatalog?: Maybe<Scalars["DateTime"]>
  catalogStartDate?: Maybe<Scalars["DateTime"]>
  catalogEndDate?: Maybe<Scalars["DateTime"]>
  daysAvailableInCatalog?: Maybe<Scalars["Int"]>
  upc?: Maybe<Scalars["String"]>
  upCs?: Maybe<Array<Scalars["String"]>>
  mfgPartNumber?: Maybe<Scalars["String"]>
  mfgPartNumbers?: Maybe<Array<Scalars["String"]>>
  variationProductCode?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Maybe<Category>>>
  measurements?: Maybe<PackageMeasurements>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  properties?: Maybe<Array<Maybe<ProductProperty>>>
  options?: Maybe<Array<Maybe<ProductOption>>>
  variations?: Maybe<Array<Maybe<VariationSummary>>>
  validPriceLists?: Maybe<Array<Scalars["String"]>>
  locationsInStock?: Maybe<Array<Scalars["String"]>>
  slicingAttributeFQN?: Maybe<Scalars["String"]>
  productImageGroups?: Maybe<Array<Maybe<ProductImageGroup>>>
  sliceValue?: Maybe<Scalars["String"]>
}

export type ProductForIndexing_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductImage = {
  __typename?: "ProductImage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductImage>
  imageLabel?: Maybe<Scalars["String"]>
  altText?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  cmsId?: Maybe<Scalars["String"]>
  videoUrl?: Maybe<Scalars["String"]>
  mediaType?: Maybe<Scalars["String"]>
  sequence?: Maybe<Scalars["Int"]>
  productImageGroupId?: Maybe<Scalars["String"]>
}

export type ProductImage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductImage_Input = {
  imageLabel?: Maybe<Scalars["String"]>
  altText?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  cmsId?: Maybe<Scalars["String"]>
  videoUrl?: Maybe<Scalars["String"]>
  mediaType?: Maybe<Scalars["String"]>
  sequence?: Maybe<Scalars["Int"]>
  productImageGroupId?: Maybe<Scalars["String"]>
}

export type ProductImageGroup = {
  __typename?: "ProductImageGroup"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductImageGroup>
  productImageGroupId: Scalars["String"]
  productImageGroupTags?: Maybe<Array<Maybe<ProductImageGroupTag>>>
}

export type ProductImageGroup_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductImageGroup_Input = {
  productImageGroupId: Scalars["String"]
  productImageGroupTags?: Maybe<Array<Maybe<ProductImageGroupTag_Input>>>
}

export type ProductImageGroupTag = {
  __typename?: "ProductImageGroupTag"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductImageGroupTag>
  attributeFqn?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type ProductImageGroupTag_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductImageGroupTag_Input = {
  attributeFqn?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type ProductInventoryInfo = {
  __typename?: "ProductInventoryInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductInventoryInfo>
  manageStock?: Maybe<Scalars["Boolean"]>
  outOfStockBehavior?: Maybe<Scalars["String"]>
  onlineStockAvailable?: Maybe<Scalars["Int"]>
  onlineSoftStockAvailable?: Maybe<Scalars["Int"]>
  onlineLocationCode?: Maybe<Scalars["String"]>
  availableDate?: Maybe<Scalars["DateTime"]>
}

export type ProductInventoryInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductInventoryInfo_Input = {
  manageStock?: Maybe<Scalars["Boolean"]>
  outOfStockBehavior?: Maybe<Scalars["String"]>
  onlineStockAvailable?: Maybe<Scalars["Int"]>
  onlineSoftStockAvailable?: Maybe<Scalars["Int"]>
  onlineLocationCode?: Maybe<Scalars["String"]>
  availableDate?: Maybe<Scalars["DateTime"]>
}

export type ProductOption = {
  __typename?: "ProductOption"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductOption>
  attributeFQN?: Maybe<Scalars["String"]>
  isRequired?: Maybe<Scalars["Boolean"]>
  isMultiValue?: Maybe<Scalars["Boolean"]>
  values?: Maybe<Array<Maybe<ProductOptionValue>>>
  attributeDetail?: Maybe<AttributeDetail>
  isProductImageGroupSelector: Scalars["Boolean"]
}

export type ProductOption_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductOption_Input = {
  attributeFQN?: Maybe<Scalars["String"]>
  isRequired?: Maybe<Scalars["Boolean"]>
  isMultiValue?: Maybe<Scalars["Boolean"]>
  values?: Maybe<Array<Maybe<ProductOptionValue_Input>>>
  attributeDetail?: Maybe<AttributeDetail_Input>
  isProductImageGroupSelector: Scalars["Boolean"]
}

export type ProductOptionSelection_Input = {
  attributeFQN?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Object"]>
  attributeValueId?: Maybe<Scalars["Int"]>
  shopperEnteredValue?: Maybe<Scalars["Object"]>
}

export type ProductOptionSelections_Input = {
  variationProductCode?: Maybe<Scalars["String"]>
  options?: Maybe<Array<Maybe<ProductOptionSelection_Input>>>
}

export type ProductOptionValue = {
  __typename?: "ProductOptionValue"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductOptionValue>
  value?: Maybe<Scalars["Object"]>
  attributeValueId: Scalars["Int"]
  stringValue?: Maybe<Scalars["String"]>
  isEnabled?: Maybe<Scalars["Boolean"]>
  isSelected?: Maybe<Scalars["Boolean"]>
  isDefault?: Maybe<Scalars["Boolean"]>
  deltaWeight?: Maybe<Scalars["Float"]>
  deltaPrice?: Maybe<Scalars["Float"]>
  shopperEnteredValue?: Maybe<Scalars["Object"]>
  bundledProduct?: Maybe<BundledProduct>
  displayInfo?: Maybe<AttributeVocabularyValueDisplayInfo>
}

export type ProductOptionValue_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductOptionValue_Input = {
  value?: Maybe<Scalars["Object"]>
  attributeValueId: Scalars["Int"]
  stringValue?: Maybe<Scalars["String"]>
  isEnabled?: Maybe<Scalars["Boolean"]>
  isSelected?: Maybe<Scalars["Boolean"]>
  isDefault?: Maybe<Scalars["Boolean"]>
  deltaWeight?: Maybe<Scalars["Float"]>
  deltaPrice?: Maybe<Scalars["Float"]>
  shopperEnteredValue?: Maybe<Scalars["Object"]>
  bundledProduct?: Maybe<BundledProduct_Input>
  displayInfo?: Maybe<AttributeVocabularyValueDisplayInfo_Input>
}

export type ProductPrice = {
  __typename?: "ProductPrice"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductPrice>
  msrp?: Maybe<Scalars["Float"]>
  price?: Maybe<Scalars["Float"]>
  priceType?: Maybe<Scalars["String"]>
  salePrice?: Maybe<Scalars["Float"]>
  salePriceType?: Maybe<Scalars["String"]>
  catalogSalePrice?: Maybe<Scalars["Float"]>
  catalogListPrice?: Maybe<Scalars["Float"]>
  discount?: Maybe<AppliedDiscount>
  creditValue?: Maybe<Scalars["Float"]>
  effectivePricelistCode?: Maybe<Scalars["String"]>
  priceListEntryCode?: Maybe<Scalars["String"]>
  priceListEntryMode?: Maybe<Scalars["String"]>
}

export type ProductPrice_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductPrice_Input = {
  msrp?: Maybe<Scalars["Float"]>
  price?: Maybe<Scalars["Float"]>
  priceType?: Maybe<Scalars["String"]>
  salePrice?: Maybe<Scalars["Float"]>
  salePriceType?: Maybe<Scalars["String"]>
  catalogSalePrice?: Maybe<Scalars["Float"]>
  catalogListPrice?: Maybe<Scalars["Float"]>
  discount?: Maybe<AppliedDiscount_Input>
  creditValue?: Maybe<Scalars["Float"]>
  effectivePricelistCode?: Maybe<Scalars["String"]>
  priceListEntryCode?: Maybe<Scalars["String"]>
  priceListEntryMode?: Maybe<Scalars["String"]>
}

export type ProductPriceRange = {
  __typename?: "ProductPriceRange"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductPriceRange>
  lower?: Maybe<ProductPrice>
  upper?: Maybe<ProductPrice>
}

export type ProductPriceRange_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductPriceRange_Input = {
  lower?: Maybe<ProductPrice_Input>
  upper?: Maybe<ProductPrice_Input>
}

export type ProductPricingBehaviorInfo = {
  __typename?: "ProductPricingBehaviorInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductPricingBehaviorInfo>
  discountsRestricted?: Maybe<Scalars["Boolean"]>
  discountsRestrictedStartDate?: Maybe<Scalars["DateTime"]>
  discountsRestrictedEndDate?: Maybe<Scalars["DateTime"]>
}

export type ProductPricingBehaviorInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductPricingBehaviorInfo_Input = {
  discountsRestricted?: Maybe<Scalars["Boolean"]>
  discountsRestrictedStartDate?: Maybe<Scalars["DateTime"]>
  discountsRestrictedEndDate?: Maybe<Scalars["DateTime"]>
}

export type ProductProperty = {
  __typename?: "ProductProperty"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductProperty>
  attributeFQN?: Maybe<Scalars["String"]>
  isHidden?: Maybe<Scalars["Boolean"]>
  isMultiValue?: Maybe<Scalars["Boolean"]>
  attributeDetail?: Maybe<AttributeDetail>
  values?: Maybe<Array<Maybe<ProductPropertyValue>>>
}

export type ProductProperty_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductProperty_Input = {
  attributeFQN?: Maybe<Scalars["String"]>
  isHidden?: Maybe<Scalars["Boolean"]>
  isMultiValue?: Maybe<Scalars["Boolean"]>
  attributeDetail?: Maybe<AttributeDetail_Input>
  values?: Maybe<Array<Maybe<ProductPropertyValue_Input>>>
}

export type ProductPropertyValue = {
  __typename?: "ProductPropertyValue"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductPropertyValue>
  value?: Maybe<Scalars["Object"]>
  stringValue?: Maybe<Scalars["String"]>
  displayInfo?: Maybe<AttributeVocabularyValueDisplayInfo>
}

export type ProductPropertyValue_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductPropertyValue_Input = {
  value?: Maybe<Scalars["Object"]>
  stringValue?: Maybe<Scalars["String"]>
  displayInfo?: Maybe<AttributeVocabularyValueDisplayInfo_Input>
}

export type ProductPurchasableState = {
  __typename?: "ProductPurchasableState"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductPurchasableState>
  isPurchasable: Scalars["Boolean"]
  messages?: Maybe<Array<Maybe<ValidationMessage>>>
}

export type ProductPurchasableState_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductPurchasableState_Input = {
  isPurchasable: Scalars["Boolean"]
  messages?: Maybe<Array<Maybe<ValidationMessage_Input>>>
}

export type ProductSearchRandomAccessCursor = {
  __typename?: "ProductSearchRandomAccessCursor"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductSearchRandomAccessCursor>
  cursorMarks?: Maybe<Array<Scalars["String"]>>
}

export type ProductSearchRandomAccessCursor_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductSearchResult = {
  __typename?: "ProductSearchResult"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductSearchResult>
  searchEngine?: Maybe<Scalars["String"]>
  facets?: Maybe<Array<Maybe<Facet>>>
  solrDebugInfo?: Maybe<SolrDebugInfo>
  nextCursorMark?: Maybe<Scalars["String"]>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Product>>>
}

export type ProductSearchResult_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductSortDefinition_Input = {
  sortExpressions?: Maybe<Array<Maybe<ProductSortExpression_Input>>>
  categoryId?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
  boosted?: Maybe<Array<Maybe<ProductSortOverride_Input>>>
  buried?: Maybe<Array<Maybe<ProductSortOverride_Input>>>
}

export type ProductSortExpression_Input = {
  field: Scalars["String"]
  direction?: Maybe<Scalars["String"]>
}

export type ProductSortOverride_Input = {
  productCode: Scalars["String"]
  sliceValue?: Maybe<Scalars["String"]>
  position: Scalars["Int"]
  isPinned?: Maybe<Scalars["Boolean"]>
}

export type ProductSummary = {
  __typename?: "ProductSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductSummary>
  productCode?: Maybe<Scalars["String"]>
  productSequence?: Maybe<Scalars["Int"]>
  productTypeId?: Maybe<Scalars["Int"]>
  publishState?: Maybe<Scalars["String"]>
  updateDate: Scalars["DateTime"]
}

export type ProductSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductValidationSummary = {
  __typename?: "ProductValidationSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductValidationSummary>
  productCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  productUsage?: Maybe<Scalars["String"]>
  fulfillmentTypesSupported?: Maybe<Array<Scalars["String"]>>
  goodsType?: Maybe<Scalars["String"]>
  bundledProducts?: Maybe<Array<Maybe<BundledProductSummary>>>
  upc?: Maybe<Scalars["String"]>
  mfgPartNumber?: Maybe<Scalars["String"]>
  variationProductCode?: Maybe<Scalars["String"]>
  purchasableState?: Maybe<ProductPurchasableState>
  price?: Maybe<ProductPrice>
  measurements?: Maybe<PackageMeasurements>
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  image?: Maybe<ProductImage>
  productShortDescription?: Maybe<Scalars["String"]>
  productName?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Maybe<Category>>>
  properties?: Maybe<Array<Maybe<ProductProperty>>>
  pricingBehavior?: Maybe<ProductPricingBehaviorInfo>
  inventoryInfo?: Maybe<ProductInventoryInfo>
  isTaxable: Scalars["Boolean"]
  productType?: Maybe<Scalars["String"]>
}

export type ProductValidationSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductVolumePrice = {
  __typename?: "ProductVolumePrice"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ProductVolumePrice>
  isCurrent: Scalars["Boolean"]
  minQty: Scalars["Int"]
  maxQty?: Maybe<Scalars["Int"]>
  priceRange?: Maybe<ProductPriceRange>
  price?: Maybe<ProductPrice>
}

export type ProductVolumePrice_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ProductVolumePrice_Input = {
  isCurrent: Scalars["Boolean"]
  minQty: Scalars["Int"]
  maxQty?: Maybe<Scalars["Int"]>
  priceRange?: Maybe<ProductPriceRange_Input>
  price?: Maybe<ProductPrice_Input>
}

export type Property = {
  __typename?: "Property"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Property>
  name?: Maybe<Scalars["String"]>
  isRequired: Scalars["Boolean"]
  isMultiValued: Scalars["Boolean"]
  propertyType?: Maybe<PropertyType>
}

export type Property_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Property_Input = {
  name?: Maybe<Scalars["String"]>
  isRequired: Scalars["Boolean"]
  isMultiValued: Scalars["Boolean"]
  propertyType?: Maybe<PropertyType_Input>
}

export type PropertyType = {
  __typename?: "PropertyType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PropertyType>
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  propertyTypeFQN?: Maybe<Scalars["String"]>
  adminName?: Maybe<Scalars["String"]>
  installationPackage?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
  isQueryable?: Maybe<Scalars["Boolean"]>
  isSortable?: Maybe<Scalars["Boolean"]>
  isAggregatable?: Maybe<Scalars["Boolean"]>
}

export type PropertyType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PropertyType_Input = {
  name?: Maybe<Scalars["String"]>
  namespace?: Maybe<Scalars["String"]>
  propertyTypeFQN?: Maybe<Scalars["String"]>
  adminName?: Maybe<Scalars["String"]>
  installationPackage?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  dataType?: Maybe<Scalars["String"]>
  isQueryable?: Maybe<Scalars["Boolean"]>
  isSortable?: Maybe<Scalars["Boolean"]>
  isAggregatable?: Maybe<Scalars["Boolean"]>
}

export type PropertyTypeCollection = {
  __typename?: "PropertyTypeCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PropertyTypeCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<PropertyType>>>
}

export type PropertyTypeCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PurchaseOrderCustomField = {
  __typename?: "PurchaseOrderCustomField"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PurchaseOrderCustomField>
  code?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type PurchaseOrderCustomField_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PurchaseOrderCustomField_Input = {
  code?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type PurchaseOrderPayment = {
  __typename?: "PurchaseOrderPayment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PurchaseOrderPayment>
  purchaseOrderNumber?: Maybe<Scalars["String"]>
  paymentTerm?: Maybe<PurchaseOrderPaymentTerm>
  customFields?: Maybe<Array<Maybe<PurchaseOrderCustomField>>>
}

export type PurchaseOrderPayment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PurchaseOrderPayment_Input = {
  purchaseOrderNumber?: Maybe<Scalars["String"]>
  paymentTerm?: Maybe<PurchaseOrderPaymentTerm_Input>
  customFields?: Maybe<Array<Maybe<PurchaseOrderCustomField_Input>>>
}

export type PurchaseOrderPaymentTerm = {
  __typename?: "PurchaseOrderPaymentTerm"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PurchaseOrderPaymentTerm>
  code?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
}

export type PurchaseOrderPaymentTerm_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PurchaseOrderPaymentTerm_Input = {
  code?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
}

export type PurchaseOrderTransaction = {
  __typename?: "PurchaseOrderTransaction"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PurchaseOrderTransaction>
  customerPurchaseOrderAccountId: Scalars["Int"]
  externalId?: Maybe<Scalars["String"]>
  siteId: Scalars["Int"]
  tenantId: Scalars["Int"]
  transactionDate: Scalars["DateTime"]
  orderId?: Maybe<Scalars["String"]>
  purchaseOrderNumber?: Maybe<Scalars["String"]>
  transactionAmount: Scalars["Float"]
  creditLimit: Scalars["Float"]
  additionalTransactionDetail?: Maybe<Scalars["String"]>
  availableBalance: Scalars["Float"]
  transactionTypeId: Scalars["Int"]
  transactionDescription?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
}

export type PurchaseOrderTransaction_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type PurchaseOrderTransaction_Input = {
  customerPurchaseOrderAccountId: Scalars["Int"]
  externalId?: Maybe<Scalars["String"]>
  siteId: Scalars["Int"]
  tenantId: Scalars["Int"]
  transactionDate: Scalars["DateTime"]
  orderId?: Maybe<Scalars["String"]>
  purchaseOrderNumber?: Maybe<Scalars["String"]>
  transactionAmount: Scalars["Float"]
  creditLimit: Scalars["Float"]
  additionalTransactionDetail?: Maybe<Scalars["String"]>
  availableBalance: Scalars["Float"]
  transactionTypeId: Scalars["Int"]
  transactionDescription?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type PurchaseOrderTransactionCollection = {
  __typename?: "PurchaseOrderTransactionCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<PurchaseOrderTransactionCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<PurchaseOrderTransaction>>>
}

export type PurchaseOrderTransactionCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Query = {
  __typename?: "Query"
  customerAccountAttributeDefinitions?: Maybe<AttributeCollection>
  customerAccountAttributeVocabularyValues?: Maybe<
    Array<Maybe<AttributeVocabularyValue>>
  >
  customerAccountAttributeDefinition?: Maybe<Attribute>
  b2bAccountAttributes?: Maybe<CustomerAttributeCollection>
  b2bAccountAttributeVocabularyValues?: Maybe<CustomerAttribute>
  b2bAccounts?: Maybe<B2BAccountCollection>
  b2bAccount?: Maybe<B2BAccount>
  b2bAccountUsers?: Maybe<B2BUserCollection>
  b2bAccountUserRoles?: Maybe<UserRoleCollection>
  b2bAccountUserBehaviors?: Maybe<Array<Maybe<Scalars["Int"]>>>
  customerCreditAuditTrail?: Maybe<CreditAuditEntryCollection>
  customerCredits?: Maybe<CreditCollection>
  customerCredit?: Maybe<Credit>
  customerCreditTransactions?: Maybe<CreditTransactionCollection>
  customerAccountAttributes?: Maybe<CustomerAttributeCollection>
  customerAccountAttribute?: Maybe<CustomerAttribute>
  customerAccountCards?: Maybe<CardCollection>
  customerAccountCard?: Maybe<Card>
  customerAccountContacts?: Maybe<CustomerContactCollection>
  customerAccountContact?: Maybe<CustomerContact>
  customerAccounts?: Maybe<CustomerAccountCollection>
  customerAccount?: Maybe<CustomerAccount>
  customerAccountTransactions?: Maybe<Array<Maybe<Transaction>>>
  customerAccountNotes?: Maybe<CustomerNoteCollection>
  customerAccountNote?: Maybe<CustomerNote>
  customerAccountSegments?: Maybe<CustomerSegmentCollection>
  customerAccountAuditLog?: Maybe<CustomerAuditEntryCollection>
  customerPurchaseOrderAccount?: Maybe<CustomerPurchaseOrderAccount>
  customerPurchaseOrderAccountTransaction?: Maybe<
    PurchaseOrderTransactionCollection
  >
  customerAccountLoginState?: Maybe<LoginState>
  customerContacts?: Maybe<CustomerContactCollection>
  customerSegments?: Maybe<CustomerSegmentCollection>
  customerSegment?: Maybe<CustomerSegment>
  customerSets?: Maybe<CustomerSetCollection>
  customerSet?: Maybe<CustomerSet>
  inStockNotifications?: Maybe<InStockNotificationSubscriptionCollection>
  inStockNotification?: Maybe<InStockNotificationSubscription>
  authTicket?: Maybe<CustomerAuthTicket>
  exchangeRates?: Maybe<Array<Maybe<CurrencyExchangeRate>>>
  resolvedPriceList?: Maybe<ResolvedPriceList>
  priceLists?: Maybe<Array<Maybe<PriceList>>>
  categoriesTree?: Maybe<CategoryCollection>
  categories?: Maybe<CategoryPagedCollection>
  category?: Maybe<Category>
  categoryOutOfSync?: Maybe<ProductCollection>
  products?: Maybe<ProductCollection>
  productLocationInventory?: Maybe<LocationInventoryCollection>
  product?: Maybe<Product>
  productVersion?: Maybe<ProductForIndexing>
  productSummary?: Maybe<ProductSummary>
  suggestionSearch?: Maybe<SearchSuggestionResult>
  productSearchRandomAccessCursor?: Maybe<ProductSearchRandomAccessCursor>
  productSearch?: Maybe<ProductSearchResult>
  debugProductSearch?: Maybe<Scalars["Boolean"]>
  productSearchTuningRules?: Maybe<Array<Maybe<SearchTuningRuleSolr>>>
  priceList?: Maybe<PriceList>
  cartsSummary?: Maybe<CartSummary>
  userCartSummary?: Maybe<CartSummary>
  cartSummary?: Maybe<CartSummary>
  userCart?: Maybe<Cart>
  currentCart?: Maybe<Cart>
  cart?: Maybe<Cart>
  currentCartExtendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  currentCartItems?: Maybe<CartItemCollection>
  cartItems?: Maybe<CartItemCollection>
  currentCartItem?: Maybe<CartItem>
  cartItem?: Maybe<CartItem>
  currentCartMessages?: Maybe<CartChangeMessageCollection>
  channels?: Maybe<ChannelCollection>
  channel?: Maybe<Channel>
  channelGroups?: Maybe<ChannelGroupCollection>
  channelGroup?: Maybe<ChannelGroup>
  checkoutAttributes?: Maybe<Array<Maybe<OrderAttribute>>>
  checkout?: Maybe<Checkout>
  checkouts?: Maybe<CheckoutCollection>
  checkoutShippingMethods?: Maybe<Array<Maybe<CheckoutGroupRates>>>
  checkoutActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  checkoutDestination?: Maybe<Destination>
  checkoutDestinations?: Maybe<Array<Maybe<Destination>>>
  orderPickup?: Maybe<Pickup>
  orderPickupActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderReturnableItems?: Maybe<OrderReturnableItemCollection>
  orderShipment?: Maybe<Shipment>
  orderShipmentMethods?: Maybe<Array<Maybe<ShippingRate>>>
  orderShopperNotes?: Maybe<ShopperNotes>
  orderValidationResults?: Maybe<Array<Maybe<OrderValidationResult>>>
  orderAttributes?: Maybe<Array<Maybe<OrderAttribute>>>
  orderBillingInfo?: Maybe<BillingInfo>
  orderCancelReasons?: Maybe<CancelReasonCollection>
  orderChangeMessages?: Maybe<ChangeMessageCollection>
  orderChangeMessage?: Maybe<ChangeMessage>
  orders?: Maybe<OrderCollection>
  order?: Maybe<Order>
  orderActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderTaxableOrders?: Maybe<
    Array<Maybe<MozuPricingRuntimeContractsTaxableOrder>>
  >
  orderData?: Maybe<Scalars["Object"]>
  orderItemData?: Maybe<Scalars["Object"]>
  orderDigitalPackage?: Maybe<DigitalPackage>
  orderDigitalPackageActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderExtendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  orderFulfillmentInfo?: Maybe<FulfillmentInfo>
  orderItems?: Maybe<OrderItemCollection>
  orderNotes?: Maybe<Array<Maybe<OrderNote>>>
  orderNote?: Maybe<OrderNote>
  orderPackage?: Maybe<PackageObj>
  orderPackageLabel?: Maybe<Scalars["Boolean"]>
  orderPackageActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderPaymentActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderPayment?: Maybe<Payment>
  orderPayments?: Maybe<PaymentCollection>
  indexableOrders?: Maybe<IndexableOrderCollection>
  deepIndexableOrders?: Maybe<IndexableOrderCollection>
  quote?: Maybe<Quote>
  quotes?: Maybe<QuoteCollection>
  customerAccountQuote?: Maybe<Quote>
  quoteItems?: Maybe<Array<Maybe<OrderItem>>>
  customerAccountQuoteItems?: Maybe<Array<Maybe<OrderItem>>>
  quoteItem?: Maybe<OrderItem>
  returns?: Maybe<ReturnCollection>
  returnReasons?: Maybe<ReasonCollection>
  returnReason?: Maybe<ReturnObj>
  returnActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  returnPayments?: Maybe<PaymentCollection>
  returnPayment?: Maybe<Payment>
  returnPaymentActions?: Maybe<Array<Maybe<Scalars["String"]>>>
  returnShippingLabel?: Maybe<KiboCarsContractsModelGenerateLabelResponse>
  returnItems?: Maybe<ReturnItemCollection>
  returnItem?: Maybe<ReturnItem>
  returnNotes?: Maybe<Array<Maybe<OrderNote>>>
  returnNote?: Maybe<OrderNote>
  returnPackage?: Maybe<PackageObj>
  returnPackageLabel?: Maybe<Scalars["Boolean"]>
  returnShipment?: Maybe<Shipment>
  wishlists?: Maybe<WishlistCollection>
  wishlist?: Maybe<Wishlist>
  customerWishlist?: Maybe<Wishlist>
  wishlistItems?: Maybe<WishlistItemCollection>
  customerWishlistItems?: Maybe<WishlistItemCollection>
  wishlistItem?: Maybe<WishlistItem>
  orderItem?: Maybe<OrderItem>
  documentListsDocumentContent?: Maybe<Scalars["Boolean"]>
  documentListDocumentContent?: Maybe<Scalars["Boolean"]>
  documentListDocumentTransform?: Maybe<Scalars["Boolean"]>
  documentListsDocumentTreeDocumentContent?: Maybe<Scalars["Boolean"]>
  documentListTreeDocumentContent?: Maybe<Scalars["Boolean"]>
  documentListTreeDocumentTransform?: Maybe<Scalars["Boolean"]>
  documentListsDocuments?: Maybe<MozuContentContractsR4DocumentCollection>
  documentListDocuments?: Maybe<DocumentCollection>
  documentListsDocument?: Maybe<MozuContentContractsR4Document>
  documentListDocument?: Maybe<Document>
  documentListsDocumentTreeDocument?: Maybe<MozuContentContractsR4Document>
  documentListTreeDocument?: Maybe<Document>
  documentLists?: Maybe<DocumentListCollection>
  documentList?: Maybe<DocumentList>
  documentListViewDocuments?: Maybe<DocumentCollection>
  documentListPropertyFacets?: Maybe<Array<Maybe<Facet>>>
  documentListFolders?: Maybe<FolderCollection>
  documentListFolder?: Maybe<Folder>
  documentListFolderTree?: Maybe<FolderTree>
  documentListTypes?: Maybe<DocumentListTypeCollection>
  documentListType?: Maybe<DocumentListType>
  documentDrafts?: Maybe<DocumentDraftSummaryPagedCollection>
  documentTypes?: Maybe<DocumentTypeCollection>
  documentType?: Maybe<DocumentType>
  propertyTypes?: Maybe<PropertyTypeCollection>
  propertyType?: Maybe<PropertyType>
  adminLocations?: Maybe<LocationCollection>
  adminLocation?: Maybe<Location>
  adminLocationAttributes?: Maybe<AttributeCollection>
  adminLocationAttributeVocabularyValues?: Maybe<
    Array<Maybe<AttributeVocabularyValue>>
  >
  adminLocationAttribute?: Maybe<Attribute>
  adminLocationGroups?: Maybe<LocationGroupCollection>
  dslLocation?: Maybe<Location>
  spLocations?: Maybe<LocationCollection>
  spLocation?: Maybe<Location>
  usageTypeLocations?: Maybe<LocationCollection>
  usageTypeLocation?: Maybe<Location>
  location?: Maybe<Location>
  locationUsages?: Maybe<LocationUsageCollection>
  locationUsage?: Maybe<LocationUsage>
  adminLocationTypes?: Maybe<Array<Maybe<LocationType>>>
  adminLocationType?: Maybe<LocationType>
  locationGroupConfig?: Maybe<LocationGroupConfiguration>
  locationGroup?: Maybe<LocationGroup>
  appdata?: Maybe<DbEntryCollection>
  appdataEntry?: Maybe<Scalars["String"]>
  entityListEntity?: Maybe<Scalars["String"]>
  entityListEntities?: Maybe<EntityCollection>
  entityListEntityContainer?: Maybe<EntityContainer>
  entityListEntityContainers?: Maybe<EntityContainerCollection>
  entityList?: Maybe<EntityList>
  entityLists?: Maybe<EntityListCollection>
  entityListViews?: Maybe<ListViewCollection>
  entityListView?: Maybe<ListView>
  entityListViewEntityContainers?: Maybe<EntityContainerCollection>
  entityListViewEntities?: Maybe<EntityCollection>
  entityListViewEntityContainer?: Maybe<EntityContainer>
  entityListViewEntity?: Maybe<Scalars["String"]>
  secureAppdata?: Maybe<DbEntry2Collection>
  secureAppdataEntry?: Maybe<Scalars["String"]>
  sitedata?: Maybe<DbEntryCollection>
  sitedataEntry?: Maybe<Scalars["String"]>
  tenantdata?: Maybe<DbEntryCollection>
  tenantdataEntry?: Maybe<Scalars["String"]>
  userdata?: Maybe<DbEntryCollection>
  userdataEntry?: Maybe<Scalars["String"]>
  carrierLocaleServiceTypes?: Maybe<Array<Maybe<ServiceType>>>
  localeServiceTypes?: Maybe<Array<Maybe<ServiceType>>>
  targetRules?: Maybe<TargetRuleCollection>
  targetRule?: Maybe<TargetRule>
  orderRoutingRoutingSuggestionLog?: Maybe<Array<Maybe<JsonNode>>>
}

export type QueryCustomerAccountAttributeDefinitionsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountAttributeVocabularyValuesArgs = {
  attributeFQN: Scalars["String"]
}

export type QueryCustomerAccountAttributeDefinitionArgs = {
  attributeFQN: Scalars["String"]
}

export type QueryB2bAccountAttributesArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryB2bAccountAttributeVocabularyValuesArgs = {
  accountId: Scalars["Int"]
  attributeFQN: Scalars["String"]
}

export type QueryB2bAccountsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  fields?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
}

export type QueryB2bAccountArgs = {
  accountId: Scalars["Int"]
}

export type QueryB2bAccountUsersArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
}

export type QueryB2bAccountUserRolesArgs = {
  accountId: Scalars["Int"]
  userId: Scalars["String"]
}

export type QueryB2bAccountUserBehaviorsArgs = {
  accountId: Scalars["Int"]
  userId: Scalars["String"]
}

export type QueryCustomerCreditAuditTrailArgs = {
  code: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerCreditsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerCreditArgs = {
  code: Scalars["String"]
}

export type QueryCustomerCreditTransactionsArgs = {
  code: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountAttributesArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountAttributeArgs = {
  accountId: Scalars["Int"]
  attributeFQN: Scalars["String"]
  userId?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountCardsArgs = {
  accountId: Scalars["Int"]
}

export type QueryCustomerAccountCardArgs = {
  accountId: Scalars["Int"]
  cardId: Scalars["String"]
}

export type QueryCustomerAccountContactsArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountContactArgs = {
  accountId: Scalars["Int"]
  contactId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  fields?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
  isAnonymous?: Maybe<Scalars["Boolean"]>
}

export type QueryCustomerAccountArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountTransactionsArgs = {
  accountId: Scalars["Int"]
}

export type QueryCustomerAccountNotesArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountNoteArgs = {
  accountId: Scalars["Int"]
  noteId: Scalars["Int"]
}

export type QueryCustomerAccountSegmentsArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountAuditLogArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerPurchaseOrderAccountArgs = {
  accountId: Scalars["Int"]
}

export type QueryCustomerPurchaseOrderAccountTransactionArgs = {
  accountId: Scalars["Int"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountLoginStateArgs = {
  accountId: Scalars["Int"]
  userId?: Maybe<Scalars["String"]>
}

export type QueryCustomerContactsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
}

export type QueryCustomerSegmentsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerSegmentArgs = {
  id: Scalars["Int"]
}

export type QueryCustomerSetsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
}

export type QueryCustomerSetArgs = {
  code: Scalars["String"]
}

export type QueryInStockNotificationsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryInStockNotificationArgs = {
  id: Scalars["Int"]
}

export type QueryAuthTicketArgs = {
  accountId?: Maybe<Scalars["Int"]>
}

export type QueryResolvedPriceListArgs = {
  customerAccountId?: Maybe<Scalars["Int"]>
}

export type QueryPriceListsArgs = {
  onlyIndexed?: Maybe<Scalars["Boolean"]>
}

export type QueryCategoriesArgs = {
  filter?: Maybe<Scalars["String"]>
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
}

export type QueryCategoryArgs = {
  categoryId: Scalars["Int"]
  allowInactive?: Maybe<Scalars["Boolean"]>
}

export type QueryCategoryOutOfSyncArgs = {
  categoryId: Scalars["Int"]
  excludeProductsAlreadyAssignedCategory?: Maybe<Scalars["Boolean"]>
  pageSize?: Maybe<Scalars["Int"]>
  cursorMark?: Maybe<Scalars["String"]>
}

export type QueryProductsArgs = {
  filter?: Maybe<Scalars["String"]>
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  responseOptions?: Maybe<Scalars["String"]>
  cursorMark?: Maybe<Scalars["String"]>
  defaultSort?: Maybe<Scalars["String"]>
  mid?: Maybe<Scalars["String"]>
}

export type QueryProductLocationInventoryArgs = {
  productCode: Scalars["String"]
  locationCodes?: Maybe<Scalars["String"]>
}

export type QueryProductArgs = {
  productCode: Scalars["String"]
  variationProductCode?: Maybe<Scalars["String"]>
  allowInactive?: Maybe<Scalars["Boolean"]>
  skipInventoryCheck?: Maybe<Scalars["Boolean"]>
  supressOutOfStock404?: Maybe<Scalars["Boolean"]>
  quantity?: Maybe<Scalars["Int"]>
  acceptVariantProductCode?: Maybe<Scalars["Boolean"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  variationProductCodeFilter?: Maybe<Scalars["String"]>
  sliceValue?: Maybe<Scalars["String"]>
}

export type QueryProductVersionArgs = {
  productCode: Scalars["String"]
  productVersion?: Maybe<Scalars["Int"]>
  lastModifiedDate?: Maybe<Scalars["DateTime"]>
}

export type QueryProductSummaryArgs = {
  productCode: Scalars["String"]
}

export type QuerySuggestionSearchArgs = {
  query?: Maybe<Scalars["String"]>
  groups?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  mid?: Maybe<Scalars["String"]>
}

export type QueryProductSearchRandomAccessCursorArgs = {
  query?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
}

export type QueryProductSearchArgs = {
  query?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  facetTemplate?: Maybe<Scalars["String"]>
  facetTemplateSubset?: Maybe<Scalars["String"]>
  facet?: Maybe<Scalars["String"]>
  facetFieldRangeQuery?: Maybe<Scalars["String"]>
  facetHierPrefix?: Maybe<Scalars["String"]>
  facetHierValue?: Maybe<Scalars["String"]>
  facetHierDepth?: Maybe<Scalars["String"]>
  facetStartIndex?: Maybe<Scalars["String"]>
  facetPageSize?: Maybe<Scalars["String"]>
  facetSettings?: Maybe<Scalars["String"]>
  facetValueFilter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  searchSettings?: Maybe<Scalars["String"]>
  enableSearchTuningRules?: Maybe<Scalars["Boolean"]>
  searchTuningRuleContext?: Maybe<Scalars["String"]>
  searchTuningRuleCode?: Maybe<Scalars["String"]>
  facetTemplateExclude?: Maybe<Scalars["String"]>
  facetPrefix?: Maybe<Scalars["String"]>
  responseOptions?: Maybe<Scalars["String"]>
  cursorMark?: Maybe<Scalars["String"]>
  facetValueSort?: Maybe<Scalars["String"]>
  defaultSort?: Maybe<Scalars["String"]>
  sortDefinitionName?: Maybe<Scalars["String"]>
  defaultSortDefinitionName?: Maybe<Scalars["String"]>
  shouldSlice?: Maybe<Scalars["Boolean"]>
  mid?: Maybe<Scalars["String"]>
}

export type QueryDebugProductSearchArgs = {
  query?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  facetTemplate?: Maybe<Scalars["String"]>
  facetTemplateSubset?: Maybe<Scalars["String"]>
  facet?: Maybe<Scalars["String"]>
  facetFieldRangeQuery?: Maybe<Scalars["String"]>
  facetHierPrefix?: Maybe<Scalars["String"]>
  facetHierValue?: Maybe<Scalars["String"]>
  facetHierDepth?: Maybe<Scalars["String"]>
  facetStartIndex?: Maybe<Scalars["String"]>
  facetPageSize?: Maybe<Scalars["String"]>
  facetSettings?: Maybe<Scalars["String"]>
  facetValueFilter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
  sliceSearchResults?: Maybe<Scalars["Boolean"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  searchSettings?: Maybe<Scalars["String"]>
  enableSearchTuningRules?: Maybe<Scalars["Boolean"]>
  searchTuningRuleContext?: Maybe<Scalars["String"]>
  searchTuningRuleCode?: Maybe<Scalars["String"]>
  facetTemplateExclude?: Maybe<Scalars["String"]>
  facetPrefix?: Maybe<Scalars["String"]>
  responseOptions?: Maybe<Scalars["String"]>
  cursorMark?: Maybe<Scalars["String"]>
  facetValueSort?: Maybe<Scalars["String"]>
  returnUrl?: Maybe<Scalars["Boolean"]>
  mid?: Maybe<Scalars["String"]>
}

export type QueryProductSearchTuningRulesArgs = {
  siteId: Scalars["Int"]
}

export type QueryPriceListArgs = {
  priceListCode?: Maybe<Scalars["String"]>
}

export type QueryUserCartSummaryArgs = {
  userId: Scalars["String"]
}

export type QueryCartSummaryArgs = {
  cartId: Scalars["String"]
}

export type QueryUserCartArgs = {
  userId: Scalars["String"]
}

export type QueryCartArgs = {
  cartId: Scalars["String"]
}

export type QueryCartItemsArgs = {
  cartId: Scalars["String"]
}

export type QueryCurrentCartItemArgs = {
  cartItemId: Scalars["String"]
}

export type QueryCartItemArgs = {
  cartId: Scalars["String"]
  cartItemId: Scalars["String"]
}

export type QueryChannelsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryChannelArgs = {
  code: Scalars["String"]
}

export type QueryChannelGroupsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryChannelGroupArgs = {
  code: Scalars["String"]
}

export type QueryCheckoutAttributesArgs = {
  checkoutId: Scalars["String"]
}

export type QueryCheckoutArgs = {
  checkoutId: Scalars["String"]
}

export type QueryCheckoutsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
}

export type QueryCheckoutShippingMethodsArgs = {
  checkoutId: Scalars["String"]
}

export type QueryCheckoutActionsArgs = {
  checkoutId: Scalars["String"]
}

export type QueryCheckoutDestinationArgs = {
  checkoutId: Scalars["String"]
  destinationId: Scalars["String"]
}

export type QueryCheckoutDestinationsArgs = {
  checkoutId: Scalars["String"]
}

export type QueryOrderPickupArgs = {
  orderId: Scalars["String"]
  pickupId: Scalars["String"]
}

export type QueryOrderPickupActionsArgs = {
  orderId: Scalars["String"]
  pickupId: Scalars["String"]
}

export type QueryOrderReturnableItemsArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderShipmentArgs = {
  orderId: Scalars["String"]
  shipmentId: Scalars["String"]
}

export type QueryOrderShipmentMethodsArgs = {
  orderId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryOrderShopperNotesArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderValidationResultsArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderAttributesArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderBillingInfoArgs = {
  orderId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryOrderCancelReasonsArgs = {
  category?: Maybe<Scalars["String"]>
}

export type QueryOrderChangeMessagesArgs = {
  orderId: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryOrderChangeMessageArgs = {
  orderId: Scalars["String"]
  changeMessageId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryOrdersArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
  includeBin?: Maybe<Scalars["Boolean"]>
  mode?: Maybe<Scalars["String"]>
}

export type QueryOrderArgs = {
  orderId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
  includeBin?: Maybe<Scalars["Boolean"]>
  mode?: Maybe<Scalars["String"]>
}

export type QueryOrderActionsArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderTaxableOrdersArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderDataArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderItemDataArgs = {
  orderId: Scalars["String"]
  orderItemId: Scalars["String"]
}

export type QueryOrderDigitalPackageArgs = {
  orderId: Scalars["String"]
  digitalPackageId: Scalars["String"]
}

export type QueryOrderDigitalPackageActionsArgs = {
  orderId: Scalars["String"]
  digitalPackageId: Scalars["String"]
}

export type QueryOrderExtendedPropertiesArgs = {
  orderId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryOrderFulfillmentInfoArgs = {
  orderId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryOrderItemsArgs = {
  orderId: Scalars["String"]
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryOrderNotesArgs = {
  orderId: Scalars["String"]
}

export type QueryOrderNoteArgs = {
  orderId: Scalars["String"]
  noteId: Scalars["String"]
}

export type QueryOrderPackageArgs = {
  orderId: Scalars["String"]
  packageId: Scalars["String"]
}

export type QueryOrderPackageLabelArgs = {
  orderId: Scalars["String"]
  packageId: Scalars["String"]
}

export type QueryOrderPackageActionsArgs = {
  orderId: Scalars["String"]
  packageId: Scalars["String"]
}

export type QueryOrderPaymentActionsArgs = {
  orderId: Scalars["String"]
  paymentId: Scalars["String"]
}

export type QueryOrderPaymentArgs = {
  orderId: Scalars["String"]
  paymentId: Scalars["String"]
}

export type QueryOrderPaymentsArgs = {
  orderId: Scalars["String"]
}

export type QueryIndexableOrdersArgs = {
  ids?: Maybe<Scalars["String"]>
}

export type QueryDeepIndexableOrdersArgs = {
  tenantIds?: Maybe<Scalars["String"]>
  idsOnly?: Maybe<Scalars["Boolean"]>
  count?: Maybe<Scalars["Int"]>
  token?: Maybe<Scalars["String"]>
}

export type QueryQuoteArgs = {
  quoteId: Scalars["String"]
}

export type QueryQuotesArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
}

export type QueryCustomerAccountQuoteArgs = {
  customerAccountId: Scalars["Int"]
  quoteName: Scalars["String"]
}

export type QueryQuoteItemsArgs = {
  quoteId: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerAccountQuoteItemsArgs = {
  customerAccountId: Scalars["Int"]
  quoteName: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryQuoteItemArgs = {
  quoteId: Scalars["String"]
  quoteItemId: Scalars["String"]
}

export type QueryReturnsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
}

export type QueryReturnReasonArgs = {
  returnId: Scalars["String"]
}

export type QueryReturnActionsArgs = {
  returnId: Scalars["String"]
}

export type QueryReturnPaymentsArgs = {
  returnId: Scalars["String"]
}

export type QueryReturnPaymentArgs = {
  returnId: Scalars["String"]
  paymentId: Scalars["String"]
}

export type QueryReturnPaymentActionsArgs = {
  returnId: Scalars["String"]
  paymentId: Scalars["String"]
}

export type QueryReturnShippingLabelArgs = {
  returnId: Scalars["String"]
}

export type QueryReturnItemsArgs = {
  returnId: Scalars["String"]
}

export type QueryReturnItemArgs = {
  returnId: Scalars["String"]
  returnItemId: Scalars["String"]
}

export type QueryReturnNotesArgs = {
  returnId: Scalars["String"]
}

export type QueryReturnNoteArgs = {
  returnId: Scalars["String"]
  noteId: Scalars["String"]
}

export type QueryReturnPackageArgs = {
  returnId: Scalars["String"]
  packageId: Scalars["String"]
}

export type QueryReturnPackageLabelArgs = {
  returnId: Scalars["String"]
  packageId: Scalars["String"]
  returnAsBase64Png?: Maybe<Scalars["Boolean"]>
}

export type QueryReturnShipmentArgs = {
  returnId: Scalars["String"]
  shipmentId: Scalars["String"]
}

export type QueryWishlistsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  q?: Maybe<Scalars["String"]>
  qLimit?: Maybe<Scalars["Int"]>
}

export type QueryWishlistArgs = {
  wishlistId: Scalars["String"]
}

export type QueryCustomerWishlistArgs = {
  customerAccountId: Scalars["Int"]
  wishlistName: Scalars["String"]
}

export type QueryWishlistItemsArgs = {
  wishlistId: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryCustomerWishlistItemsArgs = {
  customerAccountId: Scalars["Int"]
  wishlistName: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryWishlistItemArgs = {
  wishlistId: Scalars["String"]
  wishlistItemId: Scalars["String"]
}

export type QueryOrderItemArgs = {
  orderId?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  orderItemId?: Maybe<Scalars["String"]>
  draft?: Maybe<Scalars["Boolean"]>
}

export type QueryDocumentListsDocumentContentArgs = {
  documentId: Scalars["String"]
}

export type QueryDocumentListDocumentContentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
}

export type QueryDocumentListDocumentTransformArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  max?: Maybe<Scalars["Int"]>
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  crop?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
}

export type QueryDocumentListsDocumentTreeDocumentContentArgs = {
  documentName: Scalars["String"]
}

export type QueryDocumentListTreeDocumentContentArgs = {
  documentListName: Scalars["String"]
  documentName: Scalars["String"]
}

export type QueryDocumentListTreeDocumentTransformArgs = {
  documentListName: Scalars["String"]
  documentName: Scalars["String"]
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  max?: Maybe<Scalars["Int"]>
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  crop?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
}

export type QueryDocumentListsDocumentsArgs = {
  filter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
}

export type QueryDocumentListDocumentsArgs = {
  documentListName: Scalars["String"]
  filter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  includeInactive?: Maybe<Scalars["Boolean"]>
}

export type QueryDocumentListsDocumentArgs = {
  documentId: Scalars["String"]
}

export type QueryDocumentListDocumentArgs = {
  documentListName: Scalars["String"]
  documentId: Scalars["String"]
  includeInactive?: Maybe<Scalars["Boolean"]>
}

export type QueryDocumentListsDocumentTreeDocumentArgs = {
  documentName: Scalars["String"]
}

export type QueryDocumentListTreeDocumentArgs = {
  documentListName: Scalars["String"]
  documentName: Scalars["String"]
  includeInactive?: Maybe<Scalars["Boolean"]>
}

export type QueryDocumentListsArgs = {
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
}

export type QueryDocumentListArgs = {
  documentListName: Scalars["String"]
}

export type QueryDocumentListViewDocumentsArgs = {
  documentListName: Scalars["String"]
  viewName: Scalars["String"]
  filter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  includeInactive?: Maybe<Scalars["Boolean"]>
}

export type QueryDocumentListPropertyFacetsArgs = {
  documentListName: Scalars["String"]
  propertyName: Scalars["String"]
}

export type QueryDocumentListFoldersArgs = {
  documentListName: Scalars["String"]
  filter?: Maybe<Scalars["String"]>
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  sort?: Maybe<Scalars["String"]>
}

export type QueryDocumentListFolderArgs = {
  documentListName: Scalars["String"]
  folderId: Scalars["String"]
}

export type QueryDocumentListFolderTreeArgs = {
  documentListName: Scalars["String"]
  levels?: Maybe<Scalars["Int"]>
  rootFolderId?: Maybe<Scalars["String"]>
  rootFolderPath?: Maybe<Scalars["String"]>
}

export type QueryDocumentListTypesArgs = {
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
}

export type QueryDocumentListTypeArgs = {
  documentListTypeFQN: Scalars["String"]
}

export type QueryDocumentDraftsArgs = {
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  documentLists?: Maybe<Scalars["String"]>
}

export type QueryDocumentTypesArgs = {
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
}

export type QueryDocumentTypeArgs = {
  documentTypeName: Scalars["String"]
}

export type QueryPropertyTypesArgs = {
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
}

export type QueryPropertyTypeArgs = {
  propertyTypeName: Scalars["String"]
}

export type QueryAdminLocationsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryAdminLocationArgs = {
  locationCode: Scalars["String"]
}

export type QueryAdminLocationAttributesArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryAdminLocationAttributeVocabularyValuesArgs = {
  attributeFQN: Scalars["String"]
}

export type QueryAdminLocationAttributeArgs = {
  attributeFQN: Scalars["String"]
}

export type QueryAdminLocationGroupsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryDslLocationArgs = {
  includeAttributeDefinition?: Maybe<Scalars["Boolean"]>
}

export type QuerySpLocationsArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  includeAttributeDefinition?: Maybe<Scalars["Boolean"]>
}

export type QuerySpLocationArgs = {
  locationCode: Scalars["String"]
  includeAttributeDefinition?: Maybe<Scalars["Boolean"]>
}

export type QueryUsageTypeLocationsArgs = {
  locationUsageType: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
  includeAttributeDefinition?: Maybe<Scalars["Boolean"]>
}

export type QueryUsageTypeLocationArgs = {
  locationUsageType: Scalars["String"]
  locationCode: Scalars["String"]
  includeAttributeDefinition?: Maybe<Scalars["Boolean"]>
}

export type QueryLocationArgs = {
  locationCode: Scalars["String"]
  includeAttributeDefinition?: Maybe<Scalars["Boolean"]>
}

export type QueryLocationUsageArgs = {
  code: Scalars["String"]
}

export type QueryAdminLocationTypeArgs = {
  locationTypeCode: Scalars["String"]
}

export type QueryLocationGroupConfigArgs = {
  locationGroupId?: Maybe<Scalars["Int"]>
  locationGroupCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
}

export type QueryLocationGroupArgs = {
  groupId?: Maybe<Scalars["Int"]>
  locationGroupCode?: Maybe<Scalars["String"]>
}

export type QueryAppdataArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
}

export type QueryAppdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type QueryEntityListEntityArgs = {
  entityListFullName: Scalars["String"]
  id: Scalars["String"]
}

export type QueryEntityListEntitiesArgs = {
  entityListFullName: Scalars["String"]
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  filter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
}

export type QueryEntityListEntityContainerArgs = {
  entityListFullName: Scalars["String"]
  id: Scalars["String"]
}

export type QueryEntityListEntityContainersArgs = {
  entityListFullName: Scalars["String"]
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  filter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
}

export type QueryEntityListArgs = {
  entityListFullName: Scalars["String"]
}

export type QueryEntityListsArgs = {
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  filter?: Maybe<Scalars["String"]>
  sortBy?: Maybe<Scalars["String"]>
}

export type QueryEntityListViewsArgs = {
  entityListFullName: Scalars["String"]
}

export type QueryEntityListViewArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
}

export type QueryEntityListViewEntityContainersArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryEntityListViewEntitiesArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
  pageSize?: Maybe<Scalars["Int"]>
  startIndex?: Maybe<Scalars["Int"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryEntityListViewEntityContainerArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
  entityId: Scalars["String"]
}

export type QueryEntityListViewEntityArgs = {
  entityListFullName: Scalars["String"]
  viewName: Scalars["String"]
  entityId: Scalars["String"]
}

export type QuerySecureAppdataArgs = {
  appKeyId: Scalars["String"]
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
}

export type QuerySecureAppdataEntryArgs = {
  appKeyId: Scalars["String"]
  dbEntryQuery: Scalars["String"]
}

export type QuerySitedataArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
}

export type QuerySitedataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type QueryTenantdataArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
}

export type QueryTenantdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type QueryUserdataArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
}

export type QueryUserdataEntryArgs = {
  dbEntryQuery: Scalars["String"]
}

export type QueryCarrierLocaleServiceTypesArgs = {
  carrierId: Scalars["String"]
  localeCode: Scalars["String"]
}

export type QueryLocaleServiceTypesArgs = {
  localeCode: Scalars["String"]
}

export type QueryTargetRulesArgs = {
  startIndex?: Maybe<Scalars["Int"]>
  pageSize?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Scalars["String"]>
  filter?: Maybe<Scalars["String"]>
}

export type QueryTargetRuleArgs = {
  code: Scalars["String"]
}

export type QueryOrderRoutingRoutingSuggestionLogArgs = {
  externalResponseID?: Maybe<Scalars["String"]>
  orderID?: Maybe<Scalars["Int"]>
  responseID?: Maybe<Scalars["Int"]>
  suggestionID?: Maybe<Scalars["Int"]>
}

export type Quote = {
  __typename?: "Quote"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Quote>
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  siteId: Scalars["Int"]
  tenantId: Scalars["Int"]
  number?: Maybe<Scalars["Int"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  items?: Maybe<Array<Maybe<OrderItem>>>
  auditInfo?: Maybe<AuditInfo>
  comments?: Maybe<Array<Scalars["String"]>>
  expirationDate?: Maybe<Scalars["DateTime"]>
  destinations?: Maybe<Array<Maybe<Destination>>>
  userId?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  customerTaxId?: Maybe<Scalars["String"]>
  isTaxExempt?: Maybe<Scalars["Boolean"]>
  currencyCode?: Maybe<Scalars["String"]>
  priceListCode?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  channelCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  ipAddress?: Maybe<Scalars["String"]>
  sourceDevice?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  subTotal: Scalars["Float"]
  itemLevelProductDiscountTotal: Scalars["Float"]
  orderLevelProductDiscountTotal: Scalars["Float"]
  itemTaxTotal: Scalars["Float"]
  itemTotal: Scalars["Float"]
  total: Scalars["Float"]
  shippingDiscounts?: Maybe<Array<Maybe<ShippingDiscount>>>
  itemLevelShippingDiscountTotal: Scalars["Float"]
  orderLevelShippingDiscountTotal: Scalars["Float"]
  shippingAmount: Scalars["Float"]
  shippingSubTotal: Scalars["Float"]
  shippingTax?: Maybe<Scalars["Float"]>
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  itemLevelHandlingDiscountTotal: Scalars["Float"]
  orderLevelHandlingDiscountTotal: Scalars["Float"]
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal: Scalars["Float"]
  handlingTax?: Maybe<Scalars["Float"]>
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  dutyAmount?: Maybe<Scalars["Float"]>
  dutyTotal: Scalars["Float"]
  feeTotal: Scalars["Float"]
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
}

export type Quote_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Quote_Input = {
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  siteId: Scalars["Int"]
  tenantId: Scalars["Int"]
  number?: Maybe<Scalars["Int"]>
  submittedDate?: Maybe<Scalars["DateTime"]>
  items?: Maybe<Array<Maybe<OrderItem_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
  comments?: Maybe<Array<Scalars["String"]>>
  expirationDate?: Maybe<Scalars["DateTime"]>
  destinations?: Maybe<Array<Maybe<Destination_Input>>>
  userId?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  customerTaxId?: Maybe<Scalars["String"]>
  isTaxExempt?: Maybe<Scalars["Boolean"]>
  currencyCode?: Maybe<Scalars["String"]>
  priceListCode?: Maybe<Scalars["String"]>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  channelCode?: Maybe<Scalars["String"]>
  locationCode?: Maybe<Scalars["String"]>
  ipAddress?: Maybe<Scalars["String"]>
  sourceDevice?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  subTotal: Scalars["Float"]
  itemLevelProductDiscountTotal: Scalars["Float"]
  orderLevelProductDiscountTotal: Scalars["Float"]
  itemTaxTotal: Scalars["Float"]
  itemTotal: Scalars["Float"]
  total: Scalars["Float"]
  shippingDiscounts?: Maybe<Array<Maybe<ShippingDiscount_Input>>>
  itemLevelShippingDiscountTotal: Scalars["Float"]
  orderLevelShippingDiscountTotal: Scalars["Float"]
  shippingAmount: Scalars["Float"]
  shippingSubTotal: Scalars["Float"]
  shippingTax?: Maybe<Scalars["Float"]>
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  itemLevelHandlingDiscountTotal: Scalars["Float"]
  orderLevelHandlingDiscountTotal: Scalars["Float"]
  handlingAmount?: Maybe<Scalars["Float"]>
  handlingSubTotal: Scalars["Float"]
  handlingTax?: Maybe<Scalars["Float"]>
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  dutyAmount?: Maybe<Scalars["Float"]>
  dutyTotal: Scalars["Float"]
  feeTotal: Scalars["Float"]
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
}

export type QuoteCollection = {
  __typename?: "QuoteCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<QuoteCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Quote>>>
}

export type QuoteCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReasonCollection = {
  __typename?: "ReasonCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReasonCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Scalars["String"]>>
}

export type ReasonCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Refund = {
  __typename?: "Refund"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Refund>
  id?: Maybe<Scalars["String"]>
  orderId?: Maybe<Scalars["String"]>
  reason?: Maybe<Scalars["String"]>
  payment?: Maybe<Payment>
  amount: Scalars["Float"]
  auditInfo?: Maybe<AuditInfo>
}

export type Refund_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Refund_Input = {
  id?: Maybe<Scalars["String"]>
  orderId?: Maybe<Scalars["String"]>
  reason?: Maybe<Scalars["String"]>
  payment?: Maybe<Payment_Input>
  amount: Scalars["Float"]
  auditInfo?: Maybe<AuditInfo_Input>
}

export type RegularHours = {
  __typename?: "RegularHours"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<RegularHours>
  sunday?: Maybe<Hours>
  monday?: Maybe<Hours>
  tuesday?: Maybe<Hours>
  wednesday?: Maybe<Hours>
  thursday?: Maybe<Hours>
  friday?: Maybe<Hours>
  saturday?: Maybe<Hours>
  timeZone?: Maybe<Scalars["String"]>
}

export type RegularHours_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type RegularHours_Input = {
  sunday?: Maybe<Hours_Input>
  monday?: Maybe<Hours_Input>
  tuesday?: Maybe<Hours_Input>
  wednesday?: Maybe<Hours_Input>
  thursday?: Maybe<Hours_Input>
  friday?: Maybe<Hours_Input>
  saturday?: Maybe<Hours_Input>
  timeZone?: Maybe<Scalars["String"]>
}

export type RepriceShipmentObject_Input = {
  originalShipment?: Maybe<Shipment_Input>
  newShipment?: Maybe<Shipment_Input>
}

export type ResetPasswordInfo_Input = {
  emailAddress?: Maybe<Scalars["String"]>
  userName?: Maybe<Scalars["String"]>
  customerSetCode?: Maybe<Scalars["String"]>
}

export type ResolvedPriceList = {
  __typename?: "ResolvedPriceList"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ResolvedPriceList>
  priceListCode?: Maybe<Scalars["String"]>
  priceListId: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
}

export type ResolvedPriceList_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type RestockableReturnItem_Input = {
  returnItemId?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
}

export type ReturnAction_Input = {
  actionName?: Maybe<Scalars["String"]>
  returnIds?: Maybe<Array<Scalars["String"]>>
}

export type ReturnBundle = {
  __typename?: "ReturnBundle"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReturnBundle>
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
}

export type ReturnBundle_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReturnBundle_Input = {
  productCode?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
}

export type ReturnCollection = {
  __typename?: "ReturnCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReturnCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ReturnObj>>>
}

export type ReturnCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReturnItem = {
  __typename?: "ReturnItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReturnItem>
  id?: Maybe<Scalars["String"]>
  orderItemId?: Maybe<Scalars["String"]>
  orderLineId?: Maybe<Scalars["Int"]>
  orderItemOptionAttributeFQN?: Maybe<Scalars["String"]>
  product?: Maybe<Product>
  reasons?: Maybe<Array<Maybe<ReturnReason>>>
  excludeProductExtras?: Maybe<Scalars["Boolean"]>
  returnType?: Maybe<Scalars["String"]>
  returnNotRequired: Scalars["Boolean"]
  quantityReceived: Scalars["Int"]
  receiveStatus?: Maybe<Scalars["String"]>
  quantityShipped: Scalars["Int"]
  replaceStatus?: Maybe<Scalars["String"]>
  quantityRestockable: Scalars["Int"]
  quantityRestocked: Scalars["Int"]
  refundAmount?: Maybe<Scalars["Float"]>
  refundStatus?: Maybe<Scalars["String"]>
  quantityReplaced?: Maybe<Scalars["Int"]>
  notes?: Maybe<Array<Maybe<OrderNote>>>
  productLossAmount?: Maybe<Scalars["Float"]>
  productLossTaxAmount?: Maybe<Scalars["Float"]>
  shippingLossAmount?: Maybe<Scalars["Float"]>
  shippingLossTaxAmount?: Maybe<Scalars["Float"]>
  bundledProducts?: Maybe<Array<Maybe<ReturnBundle>>>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  shipmentItemId?: Maybe<Scalars["Int"]>
  shipmentNumber?: Maybe<Scalars["Int"]>
}

export type ReturnItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReturnItem_Input = {
  id?: Maybe<Scalars["String"]>
  orderItemId?: Maybe<Scalars["String"]>
  orderLineId?: Maybe<Scalars["Int"]>
  orderItemOptionAttributeFQN?: Maybe<Scalars["String"]>
  product?: Maybe<Product_Input>
  reasons?: Maybe<Array<Maybe<ReturnReason_Input>>>
  excludeProductExtras?: Maybe<Scalars["Boolean"]>
  returnType?: Maybe<Scalars["String"]>
  returnNotRequired: Scalars["Boolean"]
  quantityReceived: Scalars["Int"]
  receiveStatus?: Maybe<Scalars["String"]>
  quantityShipped: Scalars["Int"]
  replaceStatus?: Maybe<Scalars["String"]>
  quantityRestockable: Scalars["Int"]
  quantityRestocked: Scalars["Int"]
  refundAmount?: Maybe<Scalars["Float"]>
  refundStatus?: Maybe<Scalars["String"]>
  quantityReplaced?: Maybe<Scalars["Int"]>
  notes?: Maybe<Array<Maybe<OrderNote_Input>>>
  productLossAmount?: Maybe<Scalars["Float"]>
  productLossTaxAmount?: Maybe<Scalars["Float"]>
  shippingLossAmount?: Maybe<Scalars["Float"]>
  shippingLossTaxAmount?: Maybe<Scalars["Float"]>
  bundledProducts?: Maybe<Array<Maybe<ReturnBundle_Input>>>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  shipmentItemId?: Maybe<Scalars["Int"]>
  shipmentNumber?: Maybe<Scalars["Int"]>
}

export type ReturnItemCollection = {
  __typename?: "ReturnItemCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReturnItemCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<ReturnItem>>>
}

export type ReturnItemCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReturnItemSpecifier_Input = {
  returnItemId?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
}

export type ReturnObj = {
  __typename?: "ReturnObj"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReturnObj>
  id?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  availableActions?: Maybe<Array<Scalars["String"]>>
  returnNumber?: Maybe<Scalars["Int"]>
  contact?: Maybe<Contact>
  locationCode?: Maybe<Scalars["String"]>
  originalOrderId?: Maybe<Scalars["String"]>
  originalOrderNumber?: Maybe<Scalars["Int"]>
  returnOrderId?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  receiveStatus?: Maybe<Scalars["String"]>
  refundStatus?: Maybe<Scalars["String"]>
  replaceStatus?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<ReturnItem>>>
  notes?: Maybe<Array<Maybe<OrderNote>>>
  rmaDeadline?: Maybe<Scalars["DateTime"]>
  returnType?: Maybe<Scalars["String"]>
  refundAmount?: Maybe<Scalars["Float"]>
  auditInfo?: Maybe<AuditInfo>
  payments?: Maybe<Array<Maybe<Payment>>>
  packages?: Maybe<Array<Maybe<PackageObj>>>
  productLossTotal?: Maybe<Scalars["Float"]>
  shippingLossTotal?: Maybe<Scalars["Float"]>
  lossTotal?: Maybe<Scalars["Float"]>
  productLossTaxTotal?: Maybe<Scalars["Float"]>
  shippingLossTaxTotal?: Maybe<Scalars["Float"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  channelCode?: Maybe<Scalars["String"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
  actionRequired: Scalars["Boolean"]
  isUnified: Scalars["Boolean"]
}

export type ReturnObj_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReturnObj_Input = {
  id?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  availableActions?: Maybe<Array<Scalars["String"]>>
  returnNumber?: Maybe<Scalars["Int"]>
  contact?: Maybe<Contact_Input>
  locationCode?: Maybe<Scalars["String"]>
  originalOrderId?: Maybe<Scalars["String"]>
  originalOrderNumber?: Maybe<Scalars["Int"]>
  returnOrderId?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["String"]>
  receiveStatus?: Maybe<Scalars["String"]>
  refundStatus?: Maybe<Scalars["String"]>
  replaceStatus?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<ReturnItem_Input>>>
  notes?: Maybe<Array<Maybe<OrderNote_Input>>>
  rmaDeadline?: Maybe<Scalars["DateTime"]>
  returnType?: Maybe<Scalars["String"]>
  refundAmount?: Maybe<Scalars["Float"]>
  auditInfo?: Maybe<AuditInfo_Input>
  payments?: Maybe<Array<Maybe<Payment_Input>>>
  packages?: Maybe<Array<Maybe<PackageObj_Input>>>
  productLossTotal?: Maybe<Scalars["Float"]>
  shippingLossTotal?: Maybe<Scalars["Float"]>
  lossTotal?: Maybe<Scalars["Float"]>
  productLossTaxTotal?: Maybe<Scalars["Float"]>
  shippingLossTaxTotal?: Maybe<Scalars["Float"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  userId?: Maybe<Scalars["String"]>
  channelCode?: Maybe<Scalars["String"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
  actionRequired: Scalars["Boolean"]
  isUnified: Scalars["Boolean"]
}

export type ReturnReason = {
  __typename?: "ReturnReason"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ReturnReason>
  reason?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
}

export type ReturnReason_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ReturnReason_Input = {
  reason?: Maybe<Scalars["String"]>
  quantity: Scalars["Int"]
}

export type SearchSuggestion = {
  __typename?: "SearchSuggestion"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SearchSuggestion>
  suggestionType?: Maybe<Scalars["String"]>
  suggestion?: Maybe<Scalars["Object"]>
}

export type SearchSuggestion_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SearchSuggestionGroup = {
  __typename?: "SearchSuggestionGroup"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SearchSuggestionGroup>
  name?: Maybe<Scalars["String"]>
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>
}

export type SearchSuggestionGroup_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SearchSuggestionResult = {
  __typename?: "SearchSuggestionResult"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SearchSuggestionResult>
  query?: Maybe<Scalars["String"]>
  suggestionGroups?: Maybe<Array<Maybe<SearchSuggestionGroup>>>
}

export type SearchSuggestionResult_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SearchTuningRuleExpressionSolr = {
  __typename?: "SearchTuningRuleExpressionSolr"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SearchTuningRuleExpressionSolr>
  expression?: Maybe<Scalars["String"]>
  boostScore: Scalars["Float"]
  boostOp?: Maybe<Scalars["String"]>
}

export type SearchTuningRuleExpressionSolr_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SearchTuningRuleQueryClause = {
  __typename?: "SearchTuningRuleQueryClause"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SearchTuningRuleQueryClause>
  queryEntry?: Maybe<Scalars["String"]>
  queryType?: Maybe<Scalars["String"]>
}

export type SearchTuningRuleQueryClause_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SearchTuningRuleSolr = {
  __typename?: "SearchTuningRuleSolr"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SearchTuningRuleSolr>
  siteId: Scalars["Int"]
  mzOverrideCode?: Maybe<Scalars["String"]>
  query?: Maybe<Array<Array<Maybe<SearchTuningRuleQueryClause>>>>
  boostedIds?: Maybe<Array<Scalars["String"]>>
  blockedIds?: Maybe<Array<Scalars["String"]>>
  boostBlockFunctions?: Maybe<Array<Maybe<SearchTuningRuleExpressionSolr>>>
}

export type SearchTuningRuleSolr_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SearchTuningRuleValidationRequest_Input = {
  boostExpressions?: Maybe<Array<Scalars["String"]>>
  boostFunctions?: Maybe<Array<Scalars["String"]>>
}

export type ServiceType = {
  __typename?: "ServiceType"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ServiceType>
  code?: Maybe<Scalars["String"]>
  deliveryDuration?: Maybe<Scalars["String"]>
  content?: Maybe<ServiceTypeLocalizedContent>
}

export type ServiceType_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ServiceTypeLocalizedContent = {
  __typename?: "ServiceTypeLocalizedContent"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ServiceTypeLocalizedContent>
  localeCode?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type ServiceTypeLocalizedContent_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Shipment = {
  __typename?: "Shipment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Shipment>
  id?: Maybe<Scalars["String"]>
  externalShipmentId?: Maybe<Scalars["String"]>
  number?: Maybe<Scalars["Int"]>
  orderId?: Maybe<Scalars["String"]>
  orderNumber: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  customerTaxId?: Maybe<Scalars["String"]>
  shipmentType?: Maybe<Scalars["String"]>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  origin?: Maybe<Contact>
  destination?: Maybe<Destination>
  shipmentStatus?: Maybe<Scalars["String"]>
  shipmentStatusReason?: Maybe<ShipmentStatusReason>
  transferShipmentNumbers?: Maybe<Array<Scalars["Int"]>>
  isTransfer?: Maybe<Scalars["Boolean"]>
  originalShipmentNumber?: Maybe<Scalars["Int"]>
  parentShipmentNumber?: Maybe<Scalars["Int"]>
  fulfillmentStatus?: Maybe<Scalars["String"]>
  workflowProcessId?: Maybe<Scalars["String"]>
  workflowProcessContainerId?: Maybe<Scalars["String"]>
  workflowState?: Maybe<WorkflowState>
  backorderCreatedDate?: Maybe<Scalars["Int"]>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  orderSubmitDate?: Maybe<Scalars["DateTime"]>
  pickStatus?: Maybe<Scalars["String"]>
  pickType?: Maybe<Scalars["String"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
  packages?: Maybe<Array<Maybe<PackageObj>>>
  items?: Maybe<Array<Maybe<ShipmentItem>>>
  canceledItems?: Maybe<Array<Maybe<CanceledItem>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo>
  shipmentAdjustment: Scalars["Float"]
  lineItemSubtotal: Scalars["Float"]
  lineItemTaxAdjustment: Scalars["Float"]
  lineItemTaxTotal: Scalars["Float"]
  lineItemTotal: Scalars["Float"]
  shippingAdjustment: Scalars["Float"]
  shippingSubtotal: Scalars["Float"]
  shippingTaxAdjustment: Scalars["Float"]
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingAdjustment: Scalars["Float"]
  handlingSubtotal: Scalars["Float"]
  handlingTaxAdjustment: Scalars["Float"]
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  dutyAdjustment: Scalars["Float"]
  dutyTotal: Scalars["Float"]
  total: Scalars["Float"]
  cost?: Maybe<Scalars["Float"]>
  externalOrderId?: Maybe<Scalars["String"]>
  isExpress?: Maybe<Scalars["Boolean"]>
  readyToCapture: Scalars["Boolean"]
}

export type Shipment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Shipment_Input = {
  id?: Maybe<Scalars["String"]>
  externalShipmentId?: Maybe<Scalars["String"]>
  number?: Maybe<Scalars["Int"]>
  orderId?: Maybe<Scalars["String"]>
  orderNumber: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  customerAccountId?: Maybe<Scalars["Int"]>
  customerTaxId?: Maybe<Scalars["String"]>
  shipmentType?: Maybe<Scalars["String"]>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  origin?: Maybe<Contact_Input>
  destination?: Maybe<Destination_Input>
  shipmentStatus?: Maybe<Scalars["String"]>
  shipmentStatusReason?: Maybe<ShipmentStatusReason_Input>
  transferShipmentNumbers?: Maybe<Array<Scalars["Int"]>>
  isTransfer?: Maybe<Scalars["Boolean"]>
  originalShipmentNumber?: Maybe<Scalars["Int"]>
  parentShipmentNumber?: Maybe<Scalars["Int"]>
  fulfillmentStatus?: Maybe<Scalars["String"]>
  workflowProcessId?: Maybe<Scalars["String"]>
  workflowProcessContainerId?: Maybe<Scalars["String"]>
  workflowState?: Maybe<WorkflowState_Input>
  backorderCreatedDate?: Maybe<Scalars["Int"]>
  fulfillmentDate?: Maybe<Scalars["DateTime"]>
  orderSubmitDate?: Maybe<Scalars["DateTime"]>
  pickStatus?: Maybe<Scalars["String"]>
  pickType?: Maybe<Scalars["String"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
  packages?: Maybe<Array<Maybe<PackageObj_Input>>>
  items?: Maybe<Array<Maybe<ShipmentItem_Input>>>
  canceledItems?: Maybe<Array<Maybe<CanceledItem_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo_Input>
  shipmentAdjustment: Scalars["Float"]
  lineItemSubtotal: Scalars["Float"]
  lineItemTaxAdjustment: Scalars["Float"]
  lineItemTaxTotal: Scalars["Float"]
  lineItemTotal: Scalars["Float"]
  shippingAdjustment: Scalars["Float"]
  shippingSubtotal: Scalars["Float"]
  shippingTaxAdjustment: Scalars["Float"]
  shippingTaxTotal: Scalars["Float"]
  shippingTotal: Scalars["Float"]
  handlingAdjustment: Scalars["Float"]
  handlingSubtotal: Scalars["Float"]
  handlingTaxAdjustment: Scalars["Float"]
  handlingTaxTotal: Scalars["Float"]
  handlingTotal: Scalars["Float"]
  dutyAdjustment: Scalars["Float"]
  dutyTotal: Scalars["Float"]
  total: Scalars["Float"]
  cost?: Maybe<Scalars["Float"]>
  externalOrderId?: Maybe<Scalars["String"]>
  isExpress?: Maybe<Scalars["Boolean"]>
  readyToCapture: Scalars["Boolean"]
}

export type ShipmentAdjustment_Input = {
  itemAdjustment?: Maybe<Scalars["Float"]>
  itemTaxAdjustment?: Maybe<Scalars["Float"]>
  shippingAdjustment?: Maybe<Scalars["Float"]>
  shippingTaxAdjustment?: Maybe<Scalars["Float"]>
  handlingAdjustment?: Maybe<Scalars["Float"]>
  handlingTaxAdjustment?: Maybe<Scalars["Float"]>
}

export type ShipmentItem = {
  __typename?: "ShipmentItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShipmentItem>
  lineId: Scalars["Int"]
  originalOrderItemId?: Maybe<Scalars["String"]>
  parentId?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  variationProductCode?: Maybe<Scalars["String"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  isTaxable: Scalars["Boolean"]
  quantity: Scalars["Int"]
  unitPrice: Scalars["Float"]
  actualPrice: Scalars["Float"]
  overridePrice?: Maybe<Scalars["Float"]>
  itemDiscount: Scalars["Float"]
  lineItemCost: Scalars["Float"]
  itemTax: Scalars["Float"]
  shipping: Scalars["Float"]
  shippingDiscount: Scalars["Float"]
  shippingTax: Scalars["Float"]
  handling: Scalars["Float"]
  handlingDiscount: Scalars["Float"]
  handlingTax: Scalars["Float"]
  duty: Scalars["Float"]
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  readyForPickupQuantity?: Maybe<Scalars["Int"]>
  backorderReleaseDate?: Maybe<Scalars["DateTime"]>
  measurements?: Maybe<PackageMeasurements>
  options?: Maybe<Array<Maybe<ProductOption>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  weightedShipmentAdjustment: Scalars["Float"]
  weightedLineItemTaxAdjustment: Scalars["Float"]
  weightedShippingAdjustment: Scalars["Float"]
  weightedShippingTaxAdjustment: Scalars["Float"]
  weightedHandlingAdjustment: Scalars["Float"]
  weightedHandlingTaxAdjustment: Scalars["Float"]
  weightedDutyAdjustment: Scalars["Float"]
  taxableShipping: Scalars["Float"]
  taxableLineItemCost: Scalars["Float"]
  taxableHandling: Scalars["Float"]
}

export type ShipmentItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShipmentItem_Input = {
  lineId: Scalars["Int"]
  originalOrderItemId?: Maybe<Scalars["String"]>
  parentId?: Maybe<Scalars["String"]>
  productCode?: Maybe<Scalars["String"]>
  variationProductCode?: Maybe<Scalars["String"]>
  optionAttributeFQN?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  auditInfo?: Maybe<AuditInfo_Input>
  fulfillmentLocationCode?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  isTaxable: Scalars["Boolean"]
  quantity: Scalars["Int"]
  unitPrice: Scalars["Float"]
  actualPrice: Scalars["Float"]
  overridePrice?: Maybe<Scalars["Float"]>
  itemDiscount: Scalars["Float"]
  lineItemCost: Scalars["Float"]
  itemTax: Scalars["Float"]
  shipping: Scalars["Float"]
  shippingDiscount: Scalars["Float"]
  shippingTax: Scalars["Float"]
  handling: Scalars["Float"]
  handlingDiscount: Scalars["Float"]
  handlingTax: Scalars["Float"]
  duty: Scalars["Float"]
  isPackagedStandAlone?: Maybe<Scalars["Boolean"]>
  readyForPickupQuantity?: Maybe<Scalars["Int"]>
  backorderReleaseDate?: Maybe<Scalars["DateTime"]>
  measurements?: Maybe<PackageMeasurements_Input>
  options?: Maybe<Array<Maybe<ProductOption_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  weightedShipmentAdjustment: Scalars["Float"]
  weightedLineItemTaxAdjustment: Scalars["Float"]
  weightedShippingAdjustment: Scalars["Float"]
  weightedShippingTaxAdjustment: Scalars["Float"]
  weightedHandlingAdjustment: Scalars["Float"]
  weightedHandlingTaxAdjustment: Scalars["Float"]
  weightedDutyAdjustment: Scalars["Float"]
  taxableShipping: Scalars["Float"]
  taxableLineItemCost: Scalars["Float"]
  taxableHandling: Scalars["Float"]
}

export type ShipmentItemAdjustment_Input = {
  overridePrice?: Maybe<Scalars["Float"]>
}

export type ShipmentStatusReason = {
  __typename?: "ShipmentStatusReason"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShipmentStatusReason>
  reasonCode?: Maybe<Scalars["String"]>
  moreInfo?: Maybe<Scalars["String"]>
}

export type ShipmentStatusReason_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShipmentStatusReason_Input = {
  reasonCode?: Maybe<Scalars["String"]>
  moreInfo?: Maybe<Scalars["String"]>
}

export type ShippingAddress_Input = {
  addressID: Scalars["Int"]
  addressLine1: Scalars["String"]
  city: Scalars["String"]
  countryCode: Scalars["String"]
  customerID: Scalars["Int"]
  latitude: Scalars["Float"]
  longitude: Scalars["Float"]
  phone: Scalars["String"]
  postalCode: Scalars["String"]
  state: Scalars["String"]
}

export type ShippingDiscount = {
  __typename?: "ShippingDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShippingDiscount>
  methodCode?: Maybe<Scalars["String"]>
  discount?: Maybe<AppliedDiscount>
}

export type ShippingDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShippingDiscount_Input = {
  methodCode?: Maybe<Scalars["String"]>
  discount?: Maybe<AppliedDiscount_Input>
}

export type ShippingMethodMappings = {
  __typename?: "ShippingMethodMappings"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShippingMethodMappings>
  shippingMethods?: Maybe<Array<Scalars["String"]>>
  returnLabelShippingMethod?: Maybe<Scalars["String"]>
  standardDefault?: Maybe<Scalars["String"]>
  express1DayDefault?: Maybe<Scalars["String"]>
  express2DayDefault?: Maybe<Scalars["String"]>
  express3DayDefault?: Maybe<Scalars["String"]>
  enableSmartPost?: Maybe<Scalars["Boolean"]>
  internationalUsReturnLabelShippingMethod?: Maybe<Scalars["String"]>
}

export type ShippingMethodMappings_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShippingOriginContact = {
  __typename?: "ShippingOriginContact"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShippingOriginContact>
  firstName?: Maybe<Scalars["String"]>
  middleNameOrInitial?: Maybe<Scalars["String"]>
  lastNameOrSurname?: Maybe<Scalars["String"]>
  companyOrOrganization?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
}

export type ShippingOriginContact_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShippingOriginContact_Input = {
  firstName?: Maybe<Scalars["String"]>
  middleNameOrInitial?: Maybe<Scalars["String"]>
  lastNameOrSurname?: Maybe<Scalars["String"]>
  companyOrOrganization?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
}

export type ShippingRate = {
  __typename?: "ShippingRate"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShippingRate>
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  shippingZoneCode?: Maybe<Scalars["String"]>
  isValid?: Maybe<Scalars["Boolean"]>
  messages?: Maybe<Array<Scalars["String"]>>
  data?: Maybe<Scalars["Object"]>
  currencyCode?: Maybe<Scalars["String"]>
  price?: Maybe<Scalars["Float"]>
}

export type ShippingRate_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShippingRate_Input = {
  shippingMethodCode?: Maybe<Scalars["String"]>
  shippingMethodName?: Maybe<Scalars["String"]>
  shippingZoneCode?: Maybe<Scalars["String"]>
  isValid?: Maybe<Scalars["Boolean"]>
  messages?: Maybe<Array<Scalars["String"]>>
  data?: Maybe<Scalars["Object"]>
  currencyCode?: Maybe<Scalars["String"]>
  price?: Maybe<Scalars["Float"]>
}

export type ShopperNotes = {
  __typename?: "ShopperNotes"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ShopperNotes>
  giftMessage?: Maybe<Scalars["String"]>
  comments?: Maybe<Scalars["String"]>
}

export type ShopperNotes_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ShopperNotes_Input = {
  giftMessage?: Maybe<Scalars["String"]>
  comments?: Maybe<Scalars["String"]>
}

export type SolrDebugInfo = {
  __typename?: "SolrDebugInfo"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SolrDebugInfo>
  searchTuningRuleCode?: Maybe<Scalars["String"]>
  boostedProductCodes?: Maybe<Array<Scalars["String"]>>
  blockedProductCodes?: Maybe<Array<Scalars["String"]>>
  boostQueries?: Maybe<Array<Scalars["String"]>>
  boostFunctions?: Maybe<Array<Scalars["String"]>>
}

export type SolrDebugInfo_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SplitShipmentsObject_Input = {
  originalShipment?: Maybe<Shipment_Input>
  newShipments?: Maybe<Array<Maybe<Shipment_Input>>>
}

export type SubPayment = {
  __typename?: "SubPayment"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SubPayment>
  status?: Maybe<Scalars["String"]>
  amountCollected: Scalars["Float"]
  amountCredited: Scalars["Float"]
  amountRequested: Scalars["Float"]
  amountRefunded: Scalars["Float"]
  target?: Maybe<PaymentActionTarget>
}

export type SubPayment_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SubPayment_Input = {
  status?: Maybe<Scalars["String"]>
  amountCollected: Scalars["Float"]
  amountCredited: Scalars["Float"]
  amountRequested: Scalars["Float"]
  amountRefunded: Scalars["Float"]
  target?: Maybe<PaymentActionTarget_Input>
}

export type SuggestedDiscount = {
  __typename?: "SuggestedDiscount"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SuggestedDiscount>
  productCode?: Maybe<Scalars["String"]>
  autoAdd: Scalars["Boolean"]
  discountId: Scalars["Int"]
  hasMultipleProducts: Scalars["Boolean"]
  hasOptions: Scalars["Boolean"]
}

export type SuggestedDiscount_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SuggestedDiscount_Input = {
  productCode?: Maybe<Scalars["String"]>
  autoAdd: Scalars["Boolean"]
  discountId: Scalars["Int"]
  hasMultipleProducts: Scalars["Boolean"]
  hasOptions: Scalars["Boolean"]
}

export type SuggestionEvent = {
  __typename?: "SuggestionEvent"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SuggestionEvent>
  causeID: Scalars["Int"]
  errors: Array<Scalars["String"]>
  name: Scalars["String"]
  type?: Maybe<Type>
}

export type SuggestionEvent_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SuggestionLog = {
  __typename?: "SuggestionLog"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SuggestionLog>
  created: Scalars["DateTime"]
  creatorUsername: Scalars["String"]
  environmentID: Scalars["Int"]
  events: Array<Maybe<SuggestionEvent>>
  externalResponseID: Scalars["String"]
  orderID: Scalars["Int"]
  pathString: Scalars["String"]
  persisted: Scalars["Boolean"]
  siteID: Scalars["Int"]
  suggestionID: Scalars["Int"]
  tenantID: Scalars["Int"]
  updated: Scalars["DateTime"]
  updaterUsername: Scalars["String"]
}

export type SuggestionLog_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type SuggestionRequest_Input = {
  bundlingStrategy?: Maybe<BundlingStrategy>
  customData: Scalars["Object"]
  environmentID: Scalars["Int"]
  exclusionListLocationCode: Array<Maybe<ExclusionListEntryLocationCode_Input>>
  externalResponseID: Scalars["String"]
  fraud: Scalars["Int"]
  inventoryRequestType?: Maybe<InventoryRequestType>
  isExpress: Scalars["Boolean"]
  items: Array<Maybe<OrderItem_Input>>
  locationCodeWhiteList: Array<Scalars["String"]>
  numShipmentsNotInRequest: Scalars["Int"]
  orderID: Scalars["Int"]
  orderType?: Maybe<OrderType>
  pickupLocationCode: Scalars["String"]
  shippingAddress?: Maybe<ShippingAddress_Input>
  total: Scalars["Float"]
}

export type SuggestionResponse = {
  __typename?: "SuggestionResponse"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<SuggestionResponse>
  assignmentSuggestions: Scalars["Object"]
  availableLocations: Array<Scalars["Int"]>
  externalResponseID: Scalars["String"]
  responseID: Scalars["Int"]
  stateChangeSuggestions: Scalars["Object"]
  suggestionLog?: Maybe<SuggestionLog>
}

export type SuggestionResponse_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type TargetRule = {
  __typename?: "TargetRule"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<TargetRule>
  code?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  domain?: Maybe<Scalars["String"]>
  expression?: Maybe<Scalars["String"]>
}

export type TargetRule_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type TargetRule_Input = {
  code?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  domain?: Maybe<Scalars["String"]>
  expression?: Maybe<Scalars["String"]>
}

export type TargetRuleCollection = {
  __typename?: "TargetRuleCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<TargetRuleCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<TargetRule>>>
}

export type TargetRuleCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type TaskInput = {
  __typename?: "TaskInput"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<TaskInput>
  helpMessage?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
  maxLength?: Maybe<Scalars["Int"]>
  maximum: Scalars["Float"]
  minLength?: Maybe<Scalars["Int"]>
  minimum: Scalars["Float"]
  name?: Maybe<Scalars["String"]>
  options?: Maybe<Array<Scalars["Object"]>>
  pattern?: Maybe<Scalars["String"]>
  required?: Maybe<Scalars["Boolean"]>
  type?: Maybe<Scalars["String"]>
}

export type TaskInput_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type TaskInput_Input = {
  helpMessage?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
  maxLength?: Maybe<Scalars["Int"]>
  maximum: Scalars["Float"]
  minLength?: Maybe<Scalars["Int"]>
  minimum: Scalars["Float"]
  name?: Maybe<Scalars["String"]>
  options?: Maybe<Array<Scalars["Object"]>>
  pattern?: Maybe<Scalars["String"]>
  required?: Maybe<Scalars["Boolean"]>
  type?: Maybe<Scalars["String"]>
}

export type ThresholdMessage = {
  __typename?: "ThresholdMessage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ThresholdMessage>
  discountId: Scalars["Int"]
  message?: Maybe<Scalars["String"]>
  thresholdValue: Scalars["Float"]
  showOnCheckout: Scalars["Boolean"]
  showInCart: Scalars["Boolean"]
  requiresCouponCode: Scalars["Boolean"]
}

export type ThresholdMessage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ThresholdMessage_Input = {
  discountId: Scalars["Int"]
  message?: Maybe<Scalars["String"]>
  thresholdValue: Scalars["Float"]
  showOnCheckout: Scalars["Boolean"]
  showInCart: Scalars["Boolean"]
  requiresCouponCode: Scalars["Boolean"]
}

export type Tracking = {
  __typename?: "Tracking"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Tracking>
  attributes?: Maybe<Scalars["Object"]>
  number?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type Tracking_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Tracking_Input = {
  attributes?: Maybe<Scalars["Object"]>
  number?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type Transaction = {
  __typename?: "Transaction"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Transaction>
  transactionId?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  transactionType?: Maybe<Scalars["String"]>
  interactionType?: Maybe<Scalars["String"]>
  amount: Scalars["Float"]
  date: Scalars["DateTime"]
  currencyCode?: Maybe<Scalars["String"]>
}

export type Transaction_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Transaction_Input = {
  transactionId?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  transactionType?: Maybe<Scalars["String"]>
  interactionType?: Maybe<Scalars["String"]>
  amount: Scalars["Float"]
  date: Scalars["DateTime"]
  currencyCode?: Maybe<Scalars["String"]>
}

export enum Type {
  NewRequest = "NEW_REQUEST",
  RouteSelected = "ROUTE_SELECTED",
  MakeLocationsAvailable = "MAKE_LOCATIONS_AVAILABLE",
  NoRouteFound = "NO_ROUTE_FOUND",
  RemovedInactiveLocations = "REMOVED_INACTIVE_LOCATIONS",
  RemovedOnHoldLocations = "REMOVED_ON_HOLD_LOCATIONS",
  RemovedOverfulfilledLocations = "REMOVED_OVERFULFILLED_LOCATIONS",
  Group = "GROUP",
  GroupFilter = "GROUP_FILTER",
  GroupSort = "GROUP_SORT",
  Filter = "FILTER",
  Sort = "SORT",
  AfterAction = "AFTER_ACTION",
  FoundFullOrderLocation = "FOUND_FULL_ORDER_LOCATION",
  Response = "RESPONSE",
  AfterActionSort = "AFTER_ACTION_SORT",
  DefaultResponse = "DEFAULT_RESPONSE",
  MaxSplitsExceeded = "MAX_SPLITS_EXCEEDED",
  AutoAssignLimitExceeded = "AUTO_ASSIGN_LIMIT_EXCEEDED",
  InventoryRequest = "INVENTORY_REQUEST",
  RemovedInternationalLocations = "REMOVED_INTERNATIONAL_LOCATIONS"
}

export type UserRole = {
  __typename?: "UserRole"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<UserRole>
  userId?: Maybe<Scalars["String"]>
  assignedInScope?: Maybe<UserScope>
  roleId: Scalars["Int"]
  roleName?: Maybe<Scalars["String"]>
  roleTags?: Maybe<Array<Scalars["String"]>>
  auditInfo?: Maybe<AuditInfo>
}

export type UserRole_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type UserRole_Input = {
  userId?: Maybe<Scalars["String"]>
  assignedInScope?: Maybe<UserScope_Input>
  roleId: Scalars["Int"]
  roleName?: Maybe<Scalars["String"]>
  roleTags?: Maybe<Array<Scalars["String"]>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type UserRoleCollection = {
  __typename?: "UserRoleCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<UserRoleCollection>
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<UserRole>>>
}

export type UserRoleCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type UserScope = {
  __typename?: "UserScope"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<UserScope>
  type?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
}

export type UserScope_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type UserScope_Input = {
  type?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
}

export type ValidationMessage = {
  __typename?: "ValidationMessage"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ValidationMessage>
  severity?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
  message?: Maybe<Scalars["String"]>
  validationType?: Maybe<Scalars["String"]>
  sourceId?: Maybe<Scalars["String"]>
}

export type ValidationMessage_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ValidationMessage_Input = {
  severity?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
  message?: Maybe<Scalars["String"]>
  validationType?: Maybe<Scalars["String"]>
  sourceId?: Maybe<Scalars["String"]>
}

export type VariationOption = {
  __typename?: "VariationOption"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<VariationOption>
  valueSequence: Scalars["Int"]
  attributeFQN?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Object"]>
}

export type VariationOption_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type VariationOption_Input = {
  valueSequence: Scalars["Int"]
  attributeFQN?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["Object"]>
}

export type VariationSummary = {
  __typename?: "VariationSummary"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<VariationSummary>
  productCode?: Maybe<Scalars["String"]>
  options?: Maybe<Array<Maybe<VariationOption>>>
  inventoryInfo?: Maybe<ProductInventoryInfo>
}

export type VariationSummary_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type VariationSummary_Input = {
  productCode?: Maybe<Scalars["String"]>
  options?: Maybe<Array<Maybe<VariationOption_Input>>>
  inventoryInfo?: Maybe<ProductInventoryInfo_Input>
}

export type Version_Input = {
  major: Scalars["Int"]
  minor: Scalars["Int"]
  build: Scalars["Int"]
  revision: Scalars["Int"]
  majorRevision: Scalars["Int"]
  minorRevision: Scalars["Int"]
}

export type View = {
  __typename?: "View"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<View>
  name?: Maybe<Scalars["String"]>
  usages?: Maybe<Array<Scalars["String"]>>
  metadata?: Maybe<Scalars["Object"]>
  isVisibleInStorefront?: Maybe<Scalars["Boolean"]>
  filter?: Maybe<Scalars["String"]>
  includeInactiveMode?: Maybe<Scalars["String"]>
  isAdminDefault?: Maybe<Scalars["Boolean"]>
  fields?: Maybe<Array<Maybe<ViewField>>>
}

export type View_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type View_Input = {
  name?: Maybe<Scalars["String"]>
  usages?: Maybe<Array<Scalars["String"]>>
  metadata?: Maybe<Scalars["Object"]>
  isVisibleInStorefront?: Maybe<Scalars["Boolean"]>
  filter?: Maybe<Scalars["String"]>
  includeInactiveMode?: Maybe<Scalars["String"]>
  isAdminDefault?: Maybe<Scalars["Boolean"]>
  fields?: Maybe<Array<Maybe<ViewField_Input>>>
}

export type ViewField = {
  __typename?: "ViewField"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<ViewField>
  name?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
}

export type ViewField_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type ViewField_Input = {
  name?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
}

export type Wishlist = {
  __typename?: "Wishlist"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<Wishlist>
  customerAccountId?: Maybe<Scalars["Int"]>
  typeTag?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<WishlistItem>>>
  privacyType?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  version?: Maybe<Scalars["String"]>
  isImport?: Maybe<Scalars["Boolean"]>
  importDate?: Maybe<Scalars["DateTime"]>
  externalId?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  channelCode?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  fulfillmentInfo?: Maybe<FulfillmentInfo>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  rejectedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountedSubtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  shippingSubTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  handlingTaxTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  taxTotal?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  lineItemSubtotalWithOrderAdjustments?: Maybe<Scalars["Float"]>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage>>>
  extendedProperties?: Maybe<Array<Maybe<ExtendedProperty>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage>>>
  auditInfo?: Maybe<AuditInfo>
}

export type Wishlist_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type Wishlist_Input = {
  customerAccountId?: Maybe<Scalars["Int"]>
  typeTag?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<WishlistItem_Input>>>
  privacyType?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  version?: Maybe<Scalars["String"]>
  isImport?: Maybe<Scalars["Boolean"]>
  importDate?: Maybe<Scalars["DateTime"]>
  externalId?: Maybe<Scalars["String"]>
  userId?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  siteId?: Maybe<Scalars["Int"]>
  channelCode?: Maybe<Scalars["String"]>
  currencyCode?: Maybe<Scalars["String"]>
  visitId?: Maybe<Scalars["String"]>
  webSessionId?: Maybe<Scalars["String"]>
  customerInteractionType?: Maybe<Scalars["String"]>
  fulfillmentInfo?: Maybe<FulfillmentInfo_Input>
  orderDiscounts?: Maybe<Array<Maybe<AppliedDiscount_Input>>>
  suggestedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  rejectedDiscounts?: Maybe<Array<Maybe<SuggestedDiscount_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  subtotal?: Maybe<Scalars["Float"]>
  discountedSubtotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  shippingSubTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  handlingTaxTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  taxTotal?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  lineItemSubtotalWithOrderAdjustments?: Maybe<Scalars["Float"]>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  lastValidationDate?: Maybe<Scalars["DateTime"]>
  expirationDate?: Maybe<Scalars["DateTime"]>
  changeMessages?: Maybe<Array<Maybe<ChangeMessage_Input>>>
  extendedProperties?: Maybe<Array<Maybe<ExtendedProperty_Input>>>
  discountThresholdMessages?: Maybe<Array<Maybe<ThresholdMessage_Input>>>
  auditInfo?: Maybe<AuditInfo_Input>
}

export type WishlistCollection = {
  __typename?: "WishlistCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<WishlistCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<Wishlist>>>
}

export type WishlistCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type WishlistItem = {
  __typename?: "WishlistItem"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<WishlistItem>
  id?: Maybe<Scalars["String"]>
  comments?: Maybe<Scalars["String"]>
  priorityType?: Maybe<Scalars["String"]>
  purchasableStatusType?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  product?: Maybe<Product>
  quantity: Scalars["Int"]
  isRecurring?: Maybe<Scalars["Boolean"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  subtotal?: Maybe<Scalars["Float"]>
  extendedTotal?: Maybe<Scalars["Float"]>
  taxableTotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  unitPrice?: Maybe<CommerceUnitPrice>
  productDiscount?: Maybe<AppliedLineItemProductDiscount>
  productDiscounts?: Maybe<Array<Maybe<AppliedLineItemProductDiscount>>>
  shippingDiscounts?: Maybe<Array<Maybe<AppliedLineItemShippingDiscount>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  weightedOrderAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderDiscount?: Maybe<Scalars["Float"]>
  adjustedLineItemSubtotal?: Maybe<Scalars["Float"]>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderTax?: Maybe<Scalars["Float"]>
  weightedOrderShipping?: Maybe<Scalars["Float"]>
  weightedOrderShippingDiscount?: Maybe<Scalars["Float"]>
  weightedOrderShippingManualAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderShippingTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFee?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeDiscount?: Maybe<Scalars["Float"]>
  weightedOrderDuty?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderHandlingAdjustment?: Maybe<Scalars["Float"]>
  autoAddDiscountId?: Maybe<Scalars["Int"]>
}

export type WishlistItem_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type WishlistItem_Input = {
  id?: Maybe<Scalars["String"]>
  comments?: Maybe<Scalars["String"]>
  priorityType?: Maybe<Scalars["String"]>
  purchasableStatusType?: Maybe<Scalars["String"]>
  localeCode?: Maybe<Scalars["String"]>
  purchaseLocation?: Maybe<Scalars["String"]>
  lineId?: Maybe<Scalars["Int"]>
  product?: Maybe<Product_Input>
  quantity: Scalars["Int"]
  isRecurring?: Maybe<Scalars["Boolean"]>
  isTaxable?: Maybe<Scalars["Boolean"]>
  subtotal?: Maybe<Scalars["Float"]>
  extendedTotal?: Maybe<Scalars["Float"]>
  taxableTotal?: Maybe<Scalars["Float"]>
  discountTotal?: Maybe<Scalars["Float"]>
  discountedTotal?: Maybe<Scalars["Float"]>
  itemTaxTotal?: Maybe<Scalars["Float"]>
  shippingTaxTotal?: Maybe<Scalars["Float"]>
  shippingTotal?: Maybe<Scalars["Float"]>
  handlingAmount?: Maybe<Scalars["Float"]>
  feeTotal?: Maybe<Scalars["Float"]>
  total?: Maybe<Scalars["Float"]>
  unitPrice?: Maybe<CommerceUnitPrice_Input>
  productDiscount?: Maybe<AppliedLineItemProductDiscount_Input>
  productDiscounts?: Maybe<Array<Maybe<AppliedLineItemProductDiscount_Input>>>
  shippingDiscounts?: Maybe<Array<Maybe<AppliedLineItemShippingDiscount_Input>>>
  data?: Maybe<Scalars["Object"]>
  taxData?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo_Input>
  shippingAmountBeforeDiscountsAndAdjustments?: Maybe<Scalars["Float"]>
  weightedOrderAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderDiscount?: Maybe<Scalars["Float"]>
  adjustedLineItemSubtotal?: Maybe<Scalars["Float"]>
  totalWithoutWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderTax?: Maybe<Scalars["Float"]>
  weightedOrderShipping?: Maybe<Scalars["Float"]>
  weightedOrderShippingDiscount?: Maybe<Scalars["Float"]>
  weightedOrderShippingManualAdjustment?: Maybe<Scalars["Float"]>
  weightedOrderShippingTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFee?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeTax?: Maybe<Scalars["Float"]>
  weightedOrderHandlingFeeDiscount?: Maybe<Scalars["Float"]>
  weightedOrderDuty?: Maybe<Scalars["Float"]>
  totalWithWeightedShippingAndHandling?: Maybe<Scalars["Float"]>
  weightedOrderHandlingAdjustment?: Maybe<Scalars["Float"]>
  autoAddDiscountId?: Maybe<Scalars["Int"]>
}

export type WishlistItemCollection = {
  __typename?: "WishlistItemCollection"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<WishlistItemCollection>
  startIndex: Scalars["Int"]
  pageSize: Scalars["Int"]
  pageCount: Scalars["Int"]
  totalCount: Scalars["Int"]
  items?: Maybe<Array<Maybe<WishlistItem>>>
}

export type WishlistItemCollection_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type WorkflowState = {
  __typename?: "WorkflowState"
  _get?: Maybe<Scalars["AnyScalar"]>
  _root?: Maybe<WorkflowState>
  attributes?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo>
  completedDate?: Maybe<Scalars["DateTime"]>
  processInstanceId?: Maybe<Scalars["String"]>
  shipmentState?: Maybe<Scalars["String"]>
  taskList?: Maybe<Array<Maybe<FulfillmentTask>>>
}

export type WorkflowState_GetArgs = {
  path: Scalars["String"]
  defaultValue?: Maybe<Scalars["AnyScalar"]>
  allowUndefined?: Maybe<Scalars["Boolean"]>
}

export type WorkflowState_Input = {
  attributes?: Maybe<Scalars["Object"]>
  auditInfo?: Maybe<AuditInfo_Input>
  completedDate?: Maybe<Scalars["DateTime"]>
  processInstanceId?: Maybe<Scalars["String"]>
  shipmentState?: Maybe<Scalars["String"]>
  taskList?: Maybe<Array<Maybe<FulfillmentTask_Input>>>
}
