import gql from 'graphql-tag';

export const CategoryInfo = `
fragment categoryInfo on PrCategory {
    categoryId
    categoryCode
    isDisplayed
    content {
        name
        slug
        description
    }
}`;

const categoryFields = gql`
fragment CategoryFields on PrCategory {
  categoryId
  categoryCode
  content {
    name
    description
    pageTitle
    metaTagTitle
    metaTagDescription
    metaTagKeywords
    slug
    categoryImages {
      altText
      imageUrl
      cmsId
      sequence
    }
  }
  sequence
  isDisplayed
  count
  updateDate
  shouldSlice
}
`;

export default gql`
  ${categoryFields}

  fragment Category on PrCategory {
    ...CategoryFields
    parentCategory {
      ...CategoryFields
    }
  }
`;
