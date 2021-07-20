import { getCategoryTree } from './../../src/getters/categoryGetters';

const category = {
  categoryId: 31,
  categoryCode: 'MAT',
  content: {
    name: 'Shirts',
    slug: 'tops',
    description: '',
    __typename: 'CategoryContent'
  },
  __typename: 'Category',
  childrenCategories: [],
  parentCategory: {
    categoryId: 15,
    categoryCode: 'MA',
    content: {
      name: 'Active',
      slug: 'active',
      description: 'Be like an old spice commercial',
      __typename: 'CategoryContent'
    },
    __typename: 'Category',
    childrenCategories: [
      {
        categoryId: 33,
        categoryCode: 'MAF',
        content: {
          name: 'Footwear',
          slug: 'footwear',
          description: '',
          __typename: 'CategoryContent'
        },
        __typename: 'Category',
        childrenCategories: []
      },
      {
        categoryId: 31,
        categoryCode: 'MAT',
        content: {
          name: 'Shirts',
          slug: 'tops',
          description: '',
          __typename: 'CategoryContent'
        },
        __typename: 'Category',
        childrenCategories: []
      },
      {
        categoryId: 30,
        categoryCode: 'MAB',
        content: {
          name: 'Bottoms',
          slug: 'bottoms',
          description: '',
          __typename: 'CategoryContent'
        },
        __typename: 'Category',
        childrenCategories: []
      }
    ],
    parentCategory: {
      categoryId: 1,
      categoryCode: 'M',
      content: {
        name: 'Mens',
        slug: 'mens',
        description: '',
        __typename: 'CategoryContent'
      },
      __typename: 'Category',
      childrenCategories: [
        {
          categoryId: 15,
          categoryCode: 'MA',
          content: {
            name: 'Active',
            slug: 'active',
            description: 'Be like an old spice commercial',
            __typename: 'CategoryContent'
          },
          __typename: 'Category',
          childrenCategories: [
            {
              categoryId: 33,
              categoryCode: 'MAF',
              content: {
                name: 'Footwear',
                slug: 'footwear',
                description: '',
                __typename: 'CategoryContent'
              },
              __typename: 'Category',
              childrenCategories: []
            },
            {
              categoryId: 31,
              categoryCode: 'MAT',
              content: {
                name: 'Shirts',
                slug: 'tops',
                description: '',
                __typename: 'CategoryContent'
              },
              __typename: 'Category',
              childrenCategories: []
            },
            {
              categoryId: 30,
              categoryCode: 'MAB',
              content: {
                name: 'Bottoms',
                slug: 'bottoms',
                description: '',
                __typename: 'CategoryContent'
              },
              __typename: 'Category',
              childrenCategories: []
            }
          ]
        },
        {
          categoryId: 21,
          categoryCode: 'MC',
          content: {
            name: 'Casual',
            slug: 'casual',
            description: 'Because sweating is overrated',
            __typename: 'CategoryContent'
          },
          __typename: 'Category',
          childrenCategories: [
            {
              categoryId: 32,
              categoryCode: 'MCF',
              content: {
                name: 'Footwear',
                slug: 'footwear',
                description: '',
                __typename: 'CategoryContent'
              },
              __typename: 'Category',
              childrenCategories: []
            },
            {
              categoryId: 34,
              categoryCode: 'MCT',
              content: {
                name: 'Shirts',
                slug: 'tops',
                description: '',
                __typename: 'CategoryContent'
              },
              __typename: 'Category',
              childrenCategories: []
            },
            {
              categoryId: 35,
              categoryCode: 'MCB',
              content: {
                name: 'Bottoms',
                slug: 'bottoms',
                description: '',
                __typename: 'CategoryContent'
              },
              __typename: 'Category',
              childrenCategories: []
            }
          ]
        },
        {
          categoryId: 17,
          categoryCode: 'MS',
          content: {
            name: 'Swim',
            slug: 'swim',
            description: 'Marco! Marco!',
            __typename: 'CategoryContent'
          },
          __typename: 'Category',
          childrenCategories: []
        }
      ]
    }
  }
} as any;

describe('[kibo-getters] category helpers', () => {
  it('returns empty object when there is no category', () => {
    expect(getCategoryTree(null)).toStrictEqual({});
  });

  it('returns category tree', () => {
    const categoryRoot = getCategoryTree(category);
    expect(categoryRoot.id).toBe('M');
  });
});
