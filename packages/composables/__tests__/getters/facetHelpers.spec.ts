import { facetGetters } from './../../src/getters/facetGetters';
// import { getProductFiltered } from './../../src/getters/productGetters';
import categoryGetters from './../../src/getters/categoryGetters';

jest.mock('./../../src/getters/productGetters', () => ({
  getProductFiltered: jest.fn()
}));

jest.mock('./../../src/getters/categoryGetters', () => ({
  getTree: jest.fn(),
  getCategoryTree: jest.fn()
}));

describe('[kibo-getters] facet getters', () => {
  it('returns sorting options', () => {
    expect(facetGetters.getSortOptions({ input: { sort: null } } as any)).toEqual({
      options: [
            { type:'sort', value: "Default", id: "", count: null, selected: false },
            { type:'sort', value: "Price: Low to High", id: "price asc" , count: null, selected: false},
            { type:'sort', value: "Price: High to Low", id: "price desc" , count: null, selected: false},
            { type:'sort', value: "Latest", id: "createDate desc" , count: null, selected: false },
            { type:'sort', value: "Oldest", id: "createDate asc" , count: null, selected: false }
      ],
      selected: ''
    });

    expect(facetGetters.getSortOptions({ input: { sort: 'price asc' } } as any)).toEqual({
        options: [
            { type:'sort', value: "Default", id: "", count: null, selected: false },
            { type:'sort', value: "Price: Low to High", id: "price asc" , count: null, selected: true},
            { type:'sort', value: "Price: High to Low", id: "price desc" , count: null, selected: false},
            { type:'sort', value: "Latest", id: "createDate desc" , count: null, selected: false },
            { type:'sort', value: "Oldest", id: "createDate asc" , count: null, selected: false }
      ],
      selected: 'price asc'
    });
  });

  it('returns grouped facets', () => {
    expect(facetGetters.getGrouped({} as any)).toEqual([]);

    const searchData = {
      input: {},
      data: {
        facets: [
          {
            label: 'Color',
            field: 'Tenant~color',
            values: [
              { label: 'Black', value: 'black', isApplied: false, filterValue: 'Tenant~color:black', isDisplayed: true, count: 20 },
              { label: 'Blue', value: 'blue', isApplied: false, filterValue: 'Tenant~color:blue', isDisplayed: true, count: 9 }
            ]
          },
          {
            label: 'Gender',
            field: 'Tenant~gender',
            values: [{ label: 'Men', value: 'men', isApplied: false, filterValue: 'Tenant~gender:men', isDisplayed: true, count: 20 }]
          }
        ]
      }
    } as any;

    const facets = facetGetters.getGrouped(searchData, ['tenant~color']);

    expect(facets).toEqual([
      {
        count: null,
        id: 'Color',
        label: 'Color',
        options: [
          {
            attrName: 'Black',
            count: 20,
            id: 'black',
            selected: false,
            type: 'attribute',
            value: 'Tenant~color:black'
          },
          {
            attrName: 'Blue',
            count: 9,
            id: 'blue',
            selected: false,
            type: 'attribute',
            value: 'Tenant~color:blue'
          }
        ]
      }
    ]);

  });

  it('returns facets', () => {
    expect(facetGetters.getGrouped({} as any)).toEqual([]);

    const searchData = {
      input: {},
      data: {
        facets: [
          {
            label: 'Color',
            field: 'Tenant~color',
            values: [
              { label: 'Black', value: 'black', isApplied: false, filterValue: 'Tenant~color:black', isDisplayed: true, count: 20 },
              { label: 'Blue', value: 'blue', isApplied: false, filterValue: 'Tenant~color:blue', isDisplayed: true, count: 9 }
            ]
          },
          {
            label: 'Gender',
            field: 'Tenant~gender',
            values: [{ label: 'Men', value: 'men', isApplied: false, filterValue: 'Tenant~gender:men', isDisplayed: true, count: 20 }]
          }
        ]
      }
    } as any;

    const facets = facetGetters.getAll(searchData, ['tenant~color']);

    expect(facets).toEqual([
      { attrName: 'Black', count: 20, id: 'black', selected: false, type: 'attribute', value: 'Tenant~color:black' },
      { attrName: 'Blue', count: 9, id: 'blue', selected: false, type: 'attribute', value: 'Tenant~color:blue' }
    ]);
  });

  it('returns search results', () => {
    const searchData = {
      input: {},
      data: {
        products: []
      }
    } as any;

    facetGetters.getProducts(searchData);

    // expect(getProductFiltered).toBeCalled();
  });

  it('returns category tree', () => {
    expect(facetGetters.getCategoryTree({ data: null } as any)).toEqual({});

    const searchData = {
      input: {},
      data: {
        products: [],
        categories: []
      }
    } as any;

    facetGetters.getCategoryTree(searchData);

    expect(categoryGetters.getTree).toBeCalled();
  });

  it('returns breadcrumbs', () => {
    expect(facetGetters.getBreadcrumbs({ data: null } as any)).toEqual([]);

    const searchData = {
      input: {},
      data: {
        categories: [{
          categoryCode: 'cat3code',
          content: {
                name: 'cat3',
                slug: 'cat-3'
          },
          parentCategory: {
            categoryCode: 'cat2code',
            content: {
                  name: 'cat2',
                  slug: 'cat-2'
            },
            parentCategory: {
              categoryCode: 'cat1code',
              content: {
                name: 'cat1',
                slug: 'cat-1'
              }
            }
        }
        }]
      }
    } as any;

    const breadcrumbs = facetGetters.getBreadcrumbs(searchData);

    expect(breadcrumbs).toEqual([
      { link: '/', text: 'Home' },
      { link: 'c/cat-1/cat1code', text: 'cat1' },
      { link: 'c/cat-2/cat2code', text: 'cat2' },
      { link: 'c/cat-3/cat3code', text: 'cat3' }
    ]);
  });

  it('returns pagination info', () => {

    expect(facetGetters.getPagination({ data: null } as any)).toEqual({
      currentPage: 1,
      itemsPerPage: 10,
      pageOptions: undefined,
      totalItems: 0,
      totalPages: 1
    });

    const searchData = {
      input: {
        page: 2,
        itemsPerPage: 10
      },
      data: {
        total: 120,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 50]
      }
    } as any;

    const paginationInfo = facetGetters.getPagination(searchData);

    expect(paginationInfo).toEqual({
      currentPage: 2,
      itemsPerPage: 10,
      pageOptions: [10, 20, 50],
      totalItems: 120,
      totalPages: 12
    });
  });
});
