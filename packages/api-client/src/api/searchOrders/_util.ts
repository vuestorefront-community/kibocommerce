import { SearchOrdersParams, SearchOrderInput } from '../../types/Api';

export const buildSearchOrderVariables = (
  params: SearchOrdersParams
): SearchOrderInput => {
  const variables: SearchOrderInput = {
    filter: '',
  };
  if (params.id) {
    variables.filter = `orderId eq ${params.id} and `;
  }
  variables.filter += 'status ne Abandoned';
  if (params.page) {
    variables.startIndex = (params.page - 1) * (params.pageSize || 20);
    variables.pageSize = params.pageSize || 20;
  }
  return variables;
};
