const transformHeroes = (content)=>{
  return content.map(item => ({
    title: item.properties.title,
    subtitle: item.properties.subtitle,
    buttonText: item.properties.buttonText,
    background: item.properties.background,
    image: item.properties.image.desktop,
    link: item.properties.link,
    className: item.properties.className ? item.properties.className : ''
  }));
};

const transformBanners = (content)=>{
  return content.map((item, index) => ({
    slot: item.properties?.slot ? item.properties?.slot : 'banner-' + String.fromCharCode(index + 65),
    subtitle: item.properties.subtitle,
    title: item.properties.title,
    description: item.properties.description,
    buttonText: 'Shop now',
    image: item.properties.image,
    class: item.properties.className ? item.properties.className : '',
    link: item.properties.link
  }));
};

// UseContent<any, any>
const contentGetters: any = {
  getContent: (content, type: string, criteria?: Record<string, any>) => {

    if (type?.toLowerCase() === 'hero_images' || type?.toLowerCase() === 'banners') {
      return type.toLowerCase() === 'hero_images' ? transformHeroes(content) : transformBanners(content);
    }

    return content;

  }
};

export default contentGetters;
