import gql from 'graphql-tag';

export default gql`
mutation addPaymentMethod($orderId: String!,$paymentAction: PaymentActionInput){
  createOrderPaymentAction(orderId:$orderId, paymentActionInput: $paymentAction) {
    id
  }
}
`;
