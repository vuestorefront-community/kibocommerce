import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetCMSContentParams, GetCMSContentResponse } from '../../types/Api';

export default async function getCMSContent(context:Context, params:GetCMSContentParams, customQuery?: CustomQuery): Promise<GetCMSContentResponse> {

  const { cmsContent } = context.extendQuery(customQuery,
    { cmsContent: { query: defaultQuery, variables: params } }
  );

  const request = await context.client.query({
    query: cmsContent.query,
    variables: cmsContent.variables,
    fetchPolicy: 'no-cache',
    context: {
      headers: {
        'x-vol-user-claims': null
      }
    }
  });

  return request;
}

