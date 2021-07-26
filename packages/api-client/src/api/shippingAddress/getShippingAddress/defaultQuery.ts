import gql from 'graphql-tag';
import {fullfillmentInfoFields} from '../../../fragments';

const query = gql`
query SearchOrderFulfillmentInfo($orderId: String!){
  orderFulfillmentInfo(orderId: $orderId) {
    ...fullfillmentInfoFields   
  }
}

${fullfillmentInfoFields}
`;

export default query;

