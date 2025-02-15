import { PaginationPayload, Record, SortPayload } from '../../types';
import { ListControllerProps } from '../useListController';
declare const defaultReferenceSource: (resource: string, source: string) => string;
/**
 * A hook for choosing a reference record. Useful for foreign keys.
 *
 * This hook fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), it returns the possible choices
 * as the `choices` attribute.
 *
 * @example
 * const {
 *      choices, // the available reference resource
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 * });
 *
 * The hook also allow to filter results. It returns a `setFilter`
 * function. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function option
 * You can also add a permanentFilter to further filter the result:
 *
 * @example
 * const {
 *      choices, // the available reference resource
 *      setFilter,
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 *      permanentFilter: {
 *          author: 'john'
 *      },
 *      filterToQuery: searchText => ({ title: searchText })
 * });
 */
export declare const useReferenceInputController: (props: Option) => ReferenceInputValue;
export interface ReferenceInputValue {
    possibleValues: ListControllerProps;
    referenceRecord: {
        data?: Record;
        loaded: boolean;
        loading: boolean;
        error?: any;
    };
    dataStatus: {
        error?: any;
        loading: boolean;
        warning?: string;
    };
    choices: Record[];
    error?: string;
    loaded: boolean;
    loading: boolean;
    pagination: PaginationPayload;
    setFilter: (filter: string) => void;
    filter: any;
    setPagination: (pagination: PaginationPayload) => void;
    setSort: (sort: SortPayload) => void;
    sort: SortPayload;
    warning?: string;
}
interface Option {
    allowEmpty?: boolean;
    basePath?: string;
    filter?: any;
    filterToQuery?: (filter: string) => any;
    input?: any;
    page?: number;
    perPage?: number;
    record?: Record;
    reference: string;
    referenceSource?: typeof defaultReferenceSource;
    resource?: string;
    sort?: SortPayload;
    source: string;
}
export {};
