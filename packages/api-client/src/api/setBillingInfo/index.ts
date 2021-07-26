import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { setBillingInfoParams, setBillingInfoResponse } from '../../types/Api';

const buildSetBillingVars = (params: {orderId: string, billingDetails: any}) => {
  const { orderId, billingDetails } = params;
  if (billingDetails && billingDetails.isDefault) {
    delete billingDetails.isDefault;
  }
  return {
    orderId,
    billingInfoInput: {
      isSameBillingShippingAddress: false,
      billingContact: billingDetails
    }
  };
};
const setBillingInfo = async (context: Context, params: setBillingInfoParams, customQuery: CustomQuery): Promise<setBillingInfoResponse> => {

  const billingVariables = buildSetBillingVars(params);
  const { billingInfo } = context.extendQuery(customQuery,
    { billingInfo: { mutation: defaultMutation, variables: billingVariables } }
  );
  const resp = await context.client.mutate({
    mutation: billingInfo.mutation,
    variables: billingInfo.variables
  });

  return resp;
};

export default setBillingInfo;
