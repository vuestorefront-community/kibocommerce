import contentGetters from './../../src/getters/contentGetters';

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

const heroes = [
  {
    title: 'Colorful summer dresses are already in store',
    subtitle: 'SUMMER COLLECTION 2021',
    buttonText: 'Learn more',
    background: '#eceff1',
    image: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg',
    link: '/c/women/women-clothing-shirts',
    className: ''
  },
  {
    title: 'Colorful summer dresses are already in store',
    subtitle: 'SUMMER COLLECTION 2021',
    buttonText: 'Learn more',
    background: '#fce4ec',
    image: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg',
    link: '/c/women/women-clothing-dresses',
    className: ''
  },
  {
    title: 'Colorful summer dresses are already in store',
    subtitle: 'SUMMER COLLECTION 2021',
    buttonText: 'Learn more',
    background: '#efebe9',
    image: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg',
    link: '/c/women/women-shoes-sandals',
    className: 'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
  }
];

const banners = [
  {
    slot: 'banner-A',
    subtitle: 'SUMMER COLLECTION 2021',
    title: 'Colorful summer dresses are already in store',
    description: undefined,
    buttonText: 'Shop now',
    image: {
      mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg',
      desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg'
    },
    class: '',
    link: '/c/women/women-clothing-shirts'
  },
  {
    slot: 'banner-B',
    subtitle: 'SUMMER COLLECTION 2021',
    title: 'Colorful summer dresses are already in store',
    description: undefined,
    buttonText: 'Shop now',
    image: {
      mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg',
      desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg'
    },
    class: '',
    link: '/c/women/women-clothing-dresses'
  },
  {
    slot: 'banner-C',
    subtitle: 'SUMMER COLLECTION 2021',
    title: 'Colorful summer dresses are already in store',
    description: undefined,
    buttonText: 'Shop now',
    image: {
      mobile: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg',
      desktop: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg'
    },
    class: 'sf-hero-item--position-bg-top-left sf-hero-item--align-right',
    link: '/c/women/women-shoes-sandals'
  }
];

const heroesItems = heroesResponse.data.documentListDocuments.items;
const bannersItems = bannersResponse.data.documentListDocuments.items;

describe('[Kibo-getters] content getters', () => {
  it('returns default values', () => {
    expect(contentGetters.getContent(null)).toBe(null);
  });

  it('returns Heroes', () => {
    expect(contentGetters.getContent(heroesItems, 'hero_images')).toStrictEqual(heroes);
  });

  it('returns Banners', () => {
    expect(contentGetters.getContent(bannersItems, 'banners')).toStrictEqual(banners);
  });
});
