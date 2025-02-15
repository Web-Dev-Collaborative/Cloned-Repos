/// <reference types="react" />
import { ListControllerProps } from './useListController';
/**
 * Context to store the filter part of the useListController() result.
 *
 * Use the useListFilterContext() hook to read the context. That's what many
 * List components do in react-admin (e.g. <Filter>, <FilterListItem>).
 *
 * @typedef {Object} ListFilterContextValue
 * @prop {Object}   filterValues a dictionary of filter values, e.g. { title: 'lorem', nationality: 'fr' }
 * @prop {Function} setFilters a callback to update the filters, e.g. setFilters(filters, displayedFilters)
 * @prop {Object}   displayedFilters a dictionary of the displayed filters, e.g. { title: true, nationality: true }
 * @prop {Function} showFilter a callback to show one of the filters, e.g. showFilter('title', defaultValue)
 * @prop {Function} hideFilter a callback to hide one of the filters, e.g. hideFilter('title')
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @typedef Props
 * @prop {ListFilterContextValue} value
 *
 * @param {Props}
 *
 * @see useListController
 * @see useListFilterContext
 *
 * @example
 *
 * import { useListController, usePickFilterContext, ListFilterContext } from 'ra-core';
 *
 * const List = props => {
 *     const controllerProps = useListController(props);
 *     return (
 *         <ListFilterContext.Provider value={usePickFilterContext(controllerProps)}>
 *             ...
 *         </ListFilterContext.Provider>
 *     );
 * };
 */
declare const ListFilterContext: import("react").Context<Pick<ListControllerProps<import("..").Record>, "resource" | "displayedFilters" | "filterValues" | "hideFilter" | "setFilters" | "showFilter">>;
export declare type ListFilterContextValue = Pick<ListControllerProps, 'displayedFilters' | 'filterValues' | 'hideFilter' | 'setFilters' | 'showFilter' | 'resource'>;
export declare const usePickFilterContext: (context: ListControllerProps) => ListFilterContextValue;
export default ListFilterContext;
