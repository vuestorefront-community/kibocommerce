import gql from 'graphql-tag';

const query = gql`
query getShipmentMethod($orderId: String!){
  orderShipmentMethods(orderId: $orderId) {
    shippingMethodCode,
    shippingMethodName
    shippingZoneCode,
    isValid,
    messages,
    data,
    currencyCode,
    price
  }
}`;

export default query;

