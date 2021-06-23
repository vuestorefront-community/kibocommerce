import gql from 'graphql-tag';

export default gql`
  mutation configureProduct(
    $productCode: String!,
    $selectedOptions: ProductOptionSelections_Input!
  ) {
    configureProduct(
      productCode: $productCode, 
      includeOptionDetails:true, 
      productOptionSelections_Input: $selectedOptions
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
