import gql from 'graphql-tag';
import {cartDetails} from '../../../fragments';

const addToCurrentCartQuery = gql`
${cartDetails}

mutation deleteCurrentCartItems {
  deleteCurrentCartItems {
    ...cartDetails
  }
}`;

export default addToCurrentCartQuery;
