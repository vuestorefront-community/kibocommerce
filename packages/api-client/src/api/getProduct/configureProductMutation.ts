import gql from 'graphql-tag';

export default gql`
  mutation configureProduct(
    $productCode: String!,
    $selectedOptions: ProductOptionSelectionsInput!
  ) {
    configureProduct(
      productCode: $productCode, 
      includeOptionDetails:true, 
      productOptionSelectionsInput: $selectedOptions
    ) {
      productCode
      variationProductCode
      purchasableState {
        isPurchasable
      }
      price {
        salePrice
        price
      }
      productImages {
        imageUrl
        imageLabel
        productImageGroupId   
      }
      options {
        attributeFQN
        values {
          value
          attributeValueId
          isEnabled
          isSelected
        }
        isProductImageGroupSelector
      }
    }
  }
`;
