import gql from 'graphql-tag';
import { fullfillmentInfoFields } from '../../../fragments';

const query = gql`
  mutation setShipmentMethod(
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

