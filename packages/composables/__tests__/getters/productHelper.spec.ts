import {
  getProductName,
  getProductSlug,
  getProductPrice,
  getProductGallery,
  getProductCoverImage,
  getProductFiltered,
  getProductAttributes,
  getProductCategoryIds,
  getProductId,
  getProductDescription,
  getIsPurchasable,
  getProductInventory
} from './../../src/getters/productGetters';

const product = {
  productCode: 'product-code',
  content: {
    productName: 'product name',
    seoFriendlyUrl: 'slug',
    productFullDescription: 'Product description',
    productImages: [{ imageUrl: 'img1.jpg' }, { imageUrl: 'img2.jpg' }]
  },
  price: {
    price: 10,
    salePrice: 5
  },
  properties: [
    {
      attributeFQN: 'Tenant~color',
      attributeDetail: { name: 'Color' },
      isHidden: false,
      values: [{ value: 'Blue', stringValue: 'Blue' }]
    }
  ],
  categories: [
    {
      categoryId: 'cat1'
    },
    {
      categoryId: 'cat2'
    }
  ]
} as any;
describe('[kibo-getters] product getters', () => {
  it('returns default values', () => {
    expect(getProductName(null)).toBe('');
    expect(getProductSlug(null)).toBe('');
    expect(getProductGallery(null)).toEqual([]);
    expect(getProductFiltered(null, null)).toEqual([]);
  });

  it('returns name', () => {
    expect(getProductName(product)).toBe('product name');
  });

  it('returns slug', () => {
    expect(getProductSlug(product)).toBe('slug');
  });

  it('returns price', () => {
    expect(getProductPrice(product)).toEqual({ regular: 10, special: 5 });
  });

  it('returns gallery', () => {
    expect(getProductGallery(product)).toEqual([
      {
        small: 'img1.jpg',
        big: 'img1.jpg',
        normal: 'img1.jpg'
      },
      {
        small: 'img2.jpg',
        big: 'img2.jpg',
        normal: 'img2.jpg'
      }
    ]);
  });

  it('returns cover image', () => {
    expect(
      getProductCoverImage({ content: { productImages: [] } } as any)
    ).toEqual('');
    expect(getProductCoverImage(product)).toEqual('img1.jpg');
  });

  it('returns product attributes', () => {
    expect(getProductAttributes([product])).toEqual({ Color: ['Blue'] });
  });

  it('returns attributes of single product', () => {
    expect(getProductAttributes(product)).toEqual({ Color: ['Blue'] });
  });

  it('returns product description', () => {
    expect(getProductDescription(product)).toEqual('Product description');
  });

  it('returns product categories', () => {
    expect(getProductCategoryIds(product)).toEqual(['cat1', 'cat2']);
  });

  it('returns product ID', () => {
    expect(getProductId(product)).toEqual('product-code');
  });

  it('returns empty array if there is no product', () => {
    expect(getProductAttributes(null)).toEqual({});
  });

  it('returns product is purchasable', () => {
    const prod = {
      ...product,
      purchasableState: {
        isPurchasable: false
      }
    };
    expect(getIsPurchasable(prod)).toEqual(false);
  });

  it('returns product inventory', () => {
    const prod = {
      ...product,
      inventoryInfo: {
        manageStock: true,
        onlineStockAvailable: 5
      }
    };
    expect(getProductInventory(prod)).toEqual(5);
  });
});
