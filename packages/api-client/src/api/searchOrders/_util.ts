import { SearchOrdersParams, SearchOrderInput } from '../../types/Api';

export const buildSearchOrderVariables = (params: SearchOrdersParams) => {
    const variables: SearchOrderInput = {};
    if (params.id) {
        variables.filter = `orderId eq ${params.id}`;
    }
    if (params.page) {
        variables.startIndex = (params.page - 1) * (params.pageSize || 20);
        variables.pageSize = params.pageSize || 20;
    }
    return variables;
}
