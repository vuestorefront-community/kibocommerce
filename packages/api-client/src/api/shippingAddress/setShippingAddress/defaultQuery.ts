import gql from 'graphql-tag';
import fullfillmentInfoFields from '../../fragments/fulfillmentInfo';

const query = gql`
  mutation setShippingAddress(
    $orderId: String!,
    $updateMode: String
    $fulfillmentInfoInput: FulfillmentInfoInput){
    updateOrderFulfillmentInfo(
      orderId: $orderId
      updateMode: $updateMode
      fulfillmentInfoInput: $fulfillmentInfoInput
    ){
      ...fullfillmentInfoFields    
    }
  }

  ${fullfillmentInfoFields}
`;

export default query;

