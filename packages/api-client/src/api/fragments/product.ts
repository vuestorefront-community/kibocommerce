import gql from 'graphql-tag';
import category from './category';

export default gql`
  ${category}

  fragment ProductFields on Product {
    categories {
      ...Category
    }
    productCode
    price {
      price
      salePrice
    }
    content {	
      productName,
      productFullDescription,
      productImages {
        imageUrl
        sequence
      }
      seoFriendlyUrl
    }
    properties {
      attributeDetail {
        name
      }
      isHidden
      values {
        stringValue
        value
      }
    }
  }
`;
