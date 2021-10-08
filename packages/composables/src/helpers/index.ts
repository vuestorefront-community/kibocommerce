export { default as selectCategoryRootByCode } from './selectCategoryRootByCode';

export const removeTypename = (obj: any[]): void => {
  try {
    if (Array.isArray(obj)) {
      obj.forEach((v) => {
        removeTypename(v);
      });
    } else if (typeof obj === 'object') {
      Object.keys(obj).forEach((k) => {
        if (
          k === '__typename' ||
          typeof obj[k] === 'undefined' ||
          obj[k] === null
        ) {
          delete obj[k];
        } else {
          removeTypename(obj[k]);
        }
      });
    }
  } catch (ex) {
    console.error(ex);
  }
};
