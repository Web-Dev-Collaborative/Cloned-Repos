import { ListParams } from '../actions/listActions';
import { SortPayload, FilterPayload } from '../types';
interface ListParamsOptions {
    resource: string;
    perPage?: number;
    sort?: SortPayload;
    filterDefaultValues?: FilterPayload;
    debounce?: number;
    syncWithLocation?: boolean;
}
interface Parameters extends ListParams {
    filterValues: object;
    displayedFilters: {
        [key: string]: boolean;
    };
    requestSignature: any[];
}
interface Modifiers {
    changeParams: (action: any) => void;
    setPage: (page: number) => void;
    setPerPage: (pageSize: number) => void;
    setSort: (sort: string, order?: string) => void;
    setFilters: (filters: any, displayedFilters: any) => void;
    hideFilter: (filterName: string) => void;
    showFilter: (filterName: string, defaultValue: any) => void;
}
/**
 * Get the list parameters (page, sort, filters) and modifiers.
 *
 * These parameters are merged from 3 sources:
 *   - the query string from the URL
 *   - the params stored in the state (from previous navigation)
 *   - the options passed to the hook (including the filter defaultValues)
 *
 * @returns {Array} A tuple [parameters, modifiers].
 * Destructure as [
 *    { page, perPage, sort, order, filter, filterValues, displayedFilters, requestSignature },
 *    { setFilters, hideFilter, showFilter, setPage, setPerPage, setSort }
 * ]
 *
 * @example
 *
 * const [listParams, listParamsActions] = useListParams({
 *      resource: 'posts',
 *      location: location // From react-router. Injected to your component by react-admin inside a List
 *      filterDefaultValues: {
 *          published: true
 *      },
 *      sort: {
 *          field: 'published_at',
 *          order: 'DESC'
 *      },
 *      perPage: 25
 * });
 *
 * const {
 *      page,
 *      perPage,
 *      sort,
 *      order,
 *      filter,
 *      filterValues,
 *      displayedFilters,
 *      requestSignature
 * } = listParams;
 *
 * const {
 *      setFilters,
 *      hideFilter,
 *      showFilter,
 *      setPage,
 *      setPerPage,
 *      setSort,
 * } = listParamsActions;
 */
declare const useListParams: ({ resource, filterDefaultValues, sort, perPage, debounce, syncWithLocation, }: ListParamsOptions) => [Parameters, Modifiers];
export declare const validQueryParams: string[];
export declare const parseQueryFromLocation: ({ search }: {
    search: any;
}) => Partial<ListParams>;
/**
 * Check if user has already set custom sort, page, or filters for this list
 *
 * User params come from the Redux store as the params props. By default,
 * this object is:
 *
 * { filter: {}, order: null, page: 1, perPage: null, sort: null }
 *
 * To check if the user has custom params, we must compare the params
 * to these initial values.
 *
 * @param {Object} params
 */
export declare const hasCustomParams: (params: ListParams) => boolean;
/**
 * Merge list params from 3 different sources:
 *   - the query string
 *   - the params stored in the state (from previous navigation)
 *   - the props passed to the List component (including the filter defaultValues)
 */
export declare const getQuery: ({ queryFromLocation, params, filterDefaultValues, sort, perPage, }: {
    queryFromLocation: any;
    params: any;
    filterDefaultValues: any;
    sort: any;
    perPage: any;
}) => ListParams;
export declare const getNumberOrDefault: (possibleNumber: string | number | undefined, defaultValue: number) => number;
export default useListParams;
