import gql from 'graphql-tag';
import { billingContactDetails } from '../../fragments';

export default gql`

${billingContactDetails}

query getOrderBillingInfo($orderId: String!) {
    orderBillingInfo(orderId:$orderId) { 
      isSameBillingShippingAddress
      billingContact {
        ...billingContactDetails
      }
    }
  }
`;
