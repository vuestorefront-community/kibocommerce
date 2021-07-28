import gql from 'graphql-tag';
import { billingContactDetails } from '../../fragments';

export default gql`

${billingContactDetails}
mutation updateBillingInfo($orderId: String!, $billingInfoInput: BillingInfoInput!) {
    updateOrderBillingInfo(orderId:$orderId, billingInfoInput:$billingInfoInput)
    {
      billingContact {
        ...billingContactDetails
      }
    }
}
`;
