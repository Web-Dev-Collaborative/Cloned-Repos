"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useMutation_1 = __importDefault(require("./useMutation"));
/**
 * Get a callback to call the data provider and pass the result to a child function
 *
 * @param {Function} children Must be a function which will be called with the mutate callback
 * @param {string} type The method called on the data provider, e.g. 'update', 'delete'. Can also be a custom method if the dataProvider supports is.
 * @param {string} resource A resource name, e.g. 'posts', 'comments'
 * @param {Object} payload The payload object, e.g; { id: 12 }
 * @param {Object} options
 * @param {string} options.action Redux action type
 * @param {boolean} options.undoable Set to true to run the mutation locally before calling the dataProvider
 * @param {boolean} options.returnPromise Set to true to return the result promise of the mutation
 * @param {Function} options.onSuccess Side effect function to be executed upon success or failure, e.g. { onSuccess: response => refresh() }
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. { onFailure: error => notify(error.message) }
 *
 * @example
 *
 * const ApproveButton = ({ record }) => (
 *     <Mutation
 *         type="update"
 *         resource="comments"
 *         payload={{ id: record.id, data: { isApproved: true } }}
 *     >
 *         {approve => (
 *             <Button label="Approve" onClick={approve} />
 *         )}
 *     </Mutation>
 * );
 */
var Mutation = function (_a) {
    var children = _a.children, type = _a.type, resource = _a.resource, payload = _a.payload, 
    // Provides an undefined onSuccess just so the key `onSuccess` is defined
    // This is used to detect options in useDataProvider
    _b = _a.options, 
    // Provides an undefined onSuccess just so the key `onSuccess` is defined
    // This is used to detect options in useDataProvider
    options = _b === void 0 ? { onSuccess: undefined } : _b;
    return children.apply(void 0, useMutation_1.default({ type: type, resource: resource, payload: payload }, __assign(__assign({}, options), { withDeclarativeSideEffectsSupport: true })));
};
exports.default = Mutation;
