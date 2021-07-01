export const productPrices = `
fragment productPrices on pr_Product {
      price {
        price
        salePrice
      }
      priceRange {
        lower { price, salePrice}
        upper { price, salePrice }
      }
    }
`;
export const productAttributes = `
fragment productAttributes on pr_Product {
  properties {
    attributeFQN
    attributeDetail {
      name
    }
    isHidden
    values {
      value
      stringValue
    }
 }
}
`;
export const productContent = `
fragment productContent on pr_Product {
  content {
    productFullDescription
    productShortDescription
    seoFriendlyUrl
    productName
    productImages {
      imageUrl
      imageLabel
      mediaType
    }
  }
}
`;
export const productOptions = `
fragment productOptions on pr_Product {
  options {
    attributeFQN
    attributeDetail {
      name
    }
    isProductImageGroupSelector
    isRequired
    isMultiValue
    values {
      value
      isSelected
      deltaPrice
      stringValue
    }
  }
}
`;
export const productInfo = `
fragment productInfo on pr_Product {
        productCode
        productUsage
        isPackagedStandAlone
        categories {
          categoryCode
          categoryId
          content { 
            name 
            slug
          }
        }
        ...productPrices
        ...productAttributes
        ...productContent
        ...productOptions
}
${productPrices}
${productAttributes}
${productContent}
${productOptions}
`;
