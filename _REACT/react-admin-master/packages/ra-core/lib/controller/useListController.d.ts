import { ReactElement } from 'react';
import { Location } from 'history';
import { FilterPayload, SortPayload, RecordMap, Identifier, Record, Exporter } from '../types';
export interface ListProps {
    filter?: FilterPayload;
    filters?: ReactElement<any>;
    filterDefaultValues?: object;
    perPage?: number;
    sort?: SortPayload;
    exporter?: Exporter | false;
    basePath?: string;
    debounce?: number;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasList?: boolean;
    hasShow?: boolean;
    location?: Location;
    path?: string;
    resource?: string;
    syncWithLocation?: boolean;
    [key: string]: any;
}
export interface ListControllerProps<RecordType extends Record = Record> {
    basePath: string;
    currentSort: SortPayload;
    data: RecordMap<RecordType>;
    defaultTitle?: string;
    displayedFilters: any;
    error?: any;
    exporter?: Exporter | false;
    filter?: FilterPayload;
    filterValues: any;
    hasCreate: boolean;
    hideFilter: (filterName: string) => void;
    ids: Identifier[];
    loading: boolean;
    loaded: boolean;
    onSelect: (ids: Identifier[]) => void;
    onToggleItem: (id: Identifier) => void;
    onUnselectItems: () => void;
    page: number;
    perPage: number;
    resource: string;
    selectedIds: Identifier[];
    setFilters: (filters: any, displayedFilters: any, debounce?: boolean) => void;
    setPage: (page: number) => void;
    setPerPage: (page: number) => void;
    setSort: (sort: string, order?: string) => void;
    showFilter: (filterName: string, defaultValue: any) => void;
    total: number;
}
/**
 * Prepare data for the List view
 *
 * @param {Object} props The props passed to the List component.
 *
 * @return {Object} controllerProps Fetched and computed data for the List view
 *
 * @example
 *
 * import { useListController } from 'react-admin';
 * import ListView from './ListView';
 *
 * const MyList = props => {
 *     const controllerProps = useListController(props);
 *     return <ListView {...controllerProps} {...props} />;
 * }
 */
declare const useListController: <RecordType extends Record = Record>(props: ListProps) => ListControllerProps<RecordType>;
export declare const injectedProps: string[];
/**
 * Select the props injected by the useListController hook
 * to be passed to the List children need
 * This is an implementation of pick()
 */
export declare const getListControllerProps: (props: any) => {};
/**
 * Select the props not injected by the useListController hook
 * to be used inside the List children to sanitize props injected by List
 * This is an implementation of omit()
 */
export declare const sanitizeListRestProps: (props: any) => {};
export default useListController;
