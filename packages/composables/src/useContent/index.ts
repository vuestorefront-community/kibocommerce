// export default function useContent() {}
import { Context } from '@vue-storefront/core';
import {
  useContentFactory,
  UseContentFactoryParams,
} from '@vue-storefront/core';

const params: UseContentFactoryParams<any, any> = {
  search: async (
    context: Context,
    params: { documentType: string; slug: string }
  ) => {
    const searchParams = {
      documentListName: params.documentType,
      filter: `properties.tags eq ${params.slug}`,
    };

    const response = await context.$kibo.api.getCMSContent(searchParams);
    const items = response?.data?.documentListDocuments?.items;
    return items || [];
  }
};

export const useContent = useContentFactory<any, any>(params);
