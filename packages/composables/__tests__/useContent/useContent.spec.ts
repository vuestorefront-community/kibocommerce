import { CustomQuery } from '@vue-storefront/core';
import useContent from '../../src/useContent';

const heroesResponse = {
  data: {
    documentListDocuments: {
      startIndex: 0,
      totalCount: 3,
      items: [
        {
          properties: {
            tags: [
              'home'
            ],
            title: 'Colorful summer dresses are already in store',
            subtitle: 'SUMMER COLLECTION 2021',
            buttonText: 'Learn more',
            background: '#eceff1',
            image: {
              mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg',
              desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg'
            },
            link: '/c/women/women-clothing-shirts'
          }
        },
        {
          properties: {
            title: 'Colorful summer dresses are already in store',
            subtitle: 'SUMMER COLLECTION 2021',
            buttonText: 'Learn more',
            background: '#fce4ec',
            image: {
              mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg',
              desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg'
            },
            link: '/c/women/women-clothing-dresses',
            tags: [
              'home'
            ]
          }
        },
        {
          properties: {
            title: 'Colorful summer dresses are already in store',
            subtitle: 'SUMMER COLLECTION 2021',
            buttonText: 'Learn more',
            background: '#efebe9',
            image: {
              mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg',
              desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg'
            },
            link: '/c/women/women-shoes-sandals',
            className: 'sf-hero-item--position-bg-top-left sf-hero-item--align-right',
            tags: [
              'home'
            ]
          }
        }
      ]
    }
  }
};

const bannersResponse = {
  data: {
    documentListDocuments: {
      startIndex: 0,
      totalCount: 3,
      items: [
        {
          properties: {
            tags: [
              'home'
            ],
            title: 'Colorful summer dresses are already in store',
            subtitle: 'SUMMER COLLECTION 2021',
            buttonText: 'Learn more',
            background: '#eceff1',
            image: {
              mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg',
              desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg'
            },
            link: '/c/women/women-clothing-shirts'
          }
        },
        {
          properties: {
            title: 'Colorful summer dresses are already in store',
            subtitle: 'SUMMER COLLECTION 2021',
            buttonText: 'Learn more',
            background: '#fce4ec',
            image: {
              mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg',
              desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg'
            },
            link: '/c/women/women-clothing-dresses',
            tags: [
              'home'
            ]
          }
        },
        {
          properties: {
            title: 'Colorful summer dresses are already in store',
            subtitle: 'SUMMER COLLECTION 2021',
            buttonText: 'Learn more',
            background: '#efebe9',
            image: {
              mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg',
              desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg'
            },
            link: '/c/women/women-shoes-sandals',
            className: 'sf-hero-item--position-bg-top-left sf-hero-item--align-right',
            tags: [
              'home'
            ]
          }
        }
      ]
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useContentFactory: (params) => () => params
}));

const context = {
  $kibo: {
    api: {
      getCMSContent: jest.fn()
        .mockImplementationOnce(()=>(heroesResponse))
        .mockImplementationOnce(()=>(bannersResponse))
    }
  }
} as any;

describe('[Kibo-composables] useContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads heroes if useContent is present in context', async () => {
    const heroesItems = heroesResponse.data.documentListDocuments.items;

    const { search } = useContent('heroes') as any;
    const customQuery: CustomQuery = {};

    const response = await search(context, { documentType: 'hero_images@mozu', slug: 'home'}, { customQuery });
    expect(response).toStrictEqual(heroesItems);
    expect(context.$kibo.api.getCMSContent).toBeCalled();
  });

  it('loads banners if useContent is present in context', async () => {
    const bannersItems = bannersResponse.data.documentListDocuments.items;

    const { search } = useContent('heroes') as any;
    const customQuery: CustomQuery = {};

    const response = await search(context, { documentType: 'banners@mozu', slug: 'home'}, { customQuery });
    expect(response).toStrictEqual(bannersItems);
    expect(context.$kibo.api.getCMSContent).toBeCalled();
  });
});
