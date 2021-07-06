import gql from 'graphql-tag';

/*
* Delete cart based on current user session
*/
const deleteCurrentCartItemQuery = gql`
mutation deleteCartItem($id: String!) {
    deleteCurrentCartItem(cartItemId:$id)
}`;

export default deleteCurrentCartItemQuery;
