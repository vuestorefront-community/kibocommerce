import gql from 'graphql-tag';
import { fullfillmentInfoFields } from '../../../fragments';

const query = gql`
  mutation setShippingAddress(
    $orderId: String!,
    $fulfillmentInfoInput: FulfillmentInfoInput){
    updateOrderFulfillmentInfo(
      orderId: $orderId
      fulfillmentInfoInput: $fulfillmentInfoInput
    ){
      ...fullfillmentInfoFields    
    }
  }

  ${fullfillmentInfoFields}
`;

export default query;

