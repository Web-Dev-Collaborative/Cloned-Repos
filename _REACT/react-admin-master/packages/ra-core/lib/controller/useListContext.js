"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var merge_1 = __importDefault(require("lodash/merge"));
var ListContext_1 = __importDefault(require("./ListContext"));
/**
 * Hook to read the list controller props from the ListContext.
 *
 * Mostly used within a <ListContext.Provider> (e.g. as a descendent of <List>
 * or <ListBase>).
 *
 * But you can also use it without a <ListContext.Provider>. In this case, it is up to you
 * to pass all the necessary props (see the list below).
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} ListControllerProps
 * @prop {Object}   data an id-based dictionary of the list data, e.g. { 123: { id: 123, title: 'hello world' }, 456: { ... } }
 * @prop {Array}    ids an array listing the ids of the records in the list, e.g. [123, 456, ...]
 * @prop {integer}  total the total number of results for the current filters, excluding pagination. Useful to build the pagination controls. e.g. 23
 * @prop {boolean}  loaded boolean that is false until the data is available
 * @prop {boolean}  loading boolean that is true on mount, and false once the data was fetched
 * @prop {integer}  page the current page. Starts at 1
 * @prop {Function} setPage a callback to change the page, e.g. setPage(3)
 * @prop {integer}  perPage the number of results per page. Defaults to 25
 * @prop {Function} setPerPage a callback to change the number of results per page, e.g. setPerPage(25)
 * @prop {Object}   currentSort a sort object { field, order }, e.g. { field: 'date', order: 'DESC' }
 * @prop {Function} setSort a callback to change the sort, e.g. setSort('name', 'ASC')
 * @prop {Object}   filterValues a dictionary of filter values, e.g. { title: 'lorem', nationality: 'fr' }
 * @prop {Function} setFilters a callback to update the filters, e.g. setFilters(filters, displayedFilters)
 * @prop {Object}   displayedFilters a dictionary of the displayed filters, e.g. { title: true, nationality: true }
 * @prop {Function} showFilter a callback to show one of the filters, e.g. showFilter('title', defaultValue)
 * @prop {Function} hideFilter a callback to hide one of the filters, e.g. hideFilter('title')
 * @prop {Array}    selectedIds an array listing the ids of the selected rows, e.g. [123, 456]
 * @prop {Function} onSelect callback to change the list of selected rows, e.g. onSelect([456, 789])
 * @prop {Function} onToggleItem callback to toggle the selection of a given record based on its id, e.g. onToggleItem(456)
 * @prop {Function} onUnselectItems callback to clear the selection, e.g. onUnselectItems();
 * @prop {string}   basePath deduced from the location, useful for action buttons
 * @prop {string}   defaultTitle the translated title based on the resource, e.g. 'Posts'
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @returns {ListControllerProps} list controller props
 *
 * @see useListController for how it is filled
 *
 * @example // custom list view
 *
 * import { useListContext } from 'react-admin';
 *
 * const MyList = () => {
 *     const { data, ids, loaded } = useListContext();
 *     if (!loaded) {
 *         return <>Loading...</>;
 *     }
 *     const records = ids.map(id => data[id]);
 *     return (
 *         <ul>
 *             {records.map(record => (
 *                 <li key={record.id}>{record.name}</li>
 *             ))}
 *         </ul>
 *     );
 * }
 *
 * @example // custom pagination
 *
 * import { useListContext } from 'react-admin';
 * import { Button, Toolbar } from '@material-ui/core';
 * import ChevronLeft from '@material-ui/icons/ChevronLeft';
 * import ChevronRight from '@material-ui/icons/ChevronRight';
 *
 * const PrevNextPagination = () => {
 *     const { page, perPage, total, setPage } = useListContext();
 *     const nbPages = Math.ceil(total / perPage) || 1;
 *     return (
 *         nbPages > 1 &&
 *             <Toolbar>
 *                 {page > 1 &&
 *                     <Button color="primary" key="prev" onClick={() => setPage(page - 1)}>
 *                         <ChevronLeft />
 *                         Prev
 *                     </Button>
 *                 }
 *                 {page !== nbPages &&
 *                     <Button color="primary" key="next" onClick={() => setPage(page + 1)}>
 *                         Next
 *                         <ChevronRight />
 *                     </Button>
 *                 }
 *             </Toolbar>
 *     );
 * }
 */
var useListContext = function (props) {
    var context = react_1.useContext(ListContext_1.default);
    // Props take precedence over the context
    return react_1.useMemo(function () {
        return merge_1.default({}, context, props != null ? extractListContextProps(props) : {});
    }, [context, props]);
};
exports.default = useListContext;
/**
 * Extract only the list controller props
 *
 * @param {Object} props Props passed to the useListContext hook
 *
 * @returns {ListControllerProps} List controller props
 */
var extractListContextProps = function (_a) {
    var basePath = _a.basePath, currentSort = _a.currentSort, data = _a.data, defaultTitle = _a.defaultTitle, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues, hasCreate = _a.hasCreate, hideFilter = _a.hideFilter, ids = _a.ids, loaded = _a.loaded, loading = _a.loading, onSelect = _a.onSelect, onToggleItem = _a.onToggleItem, onUnselectItems = _a.onUnselectItems, page = _a.page, perPage = _a.perPage, resource = _a.resource, selectedIds = _a.selectedIds, setFilters = _a.setFilters, setPage = _a.setPage, setPerPage = _a.setPerPage, setSort = _a.setSort, showFilter = _a.showFilter, total = _a.total;
    return ({
        basePath: basePath,
        currentSort: currentSort,
        data: data,
        defaultTitle: defaultTitle,
        displayedFilters: displayedFilters,
        filterValues: filterValues,
        hasCreate: hasCreate,
        hideFilter: hideFilter,
        ids: ids,
        loaded: loaded,
        loading: loading,
        onSelect: onSelect,
        onToggleItem: onToggleItem,
        onUnselectItems: onUnselectItems,
        page: page,
        perPage: perPage,
        resource: resource,
        selectedIds: selectedIds,
        setFilters: setFilters,
        setPage: setPage,
        setPerPage: setPerPage,
        setSort: setSort,
        showFilter: showFilter,
        total: total,
    });
};
