import { FieldState } from 'final-form';
declare type FormGroupState = {
    dirty: boolean;
    errors: object;
    invalid: boolean;
    pristine: boolean;
    touched: boolean;
    valid: boolean;
};
/**
 * Retrieve a specific form group data such as its validation status (valid/invalid) or
 * or whether its inputs have been updated (dirty/pristine)
 *
 * @example
 * import { Edit, SimpleForm, TextInput, FormGroupContextProvider, useFormGroup } from 'react-admin';
 * import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <FormGroupContextProvider name="options">
 *                 <Accordion>
 *                     <AccordionSummary
 *                         expandIcon={<ExpandMoreIcon />}
 *                         aria-controls="options-content"
 *                         id="options-header"
 *                     >
 *                         <AccordionSectionTitle name="options">Options</AccordionSectionTitle>
 *                     </AccordionSummary>
 *                     <AccordionDetails id="options-content" aria-labelledby="options-header">
 *                         <TextInput source="teaser" validate={minLength(20)} />
 *                     </AccordionDetails>
 *                 </Accordion>
 *             </FormGroupContextProvider>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * const AccordionSectionTitle = ({ children, name }) => {
 *     const formGroupState = useFormGroup(name);
 *     return (
 *         <Typography color={formGroupState.invalid && formGroupState.dirty ? 'error' : 'inherit'}>
 *             {children}
 *         </Typography>
 *     );
 * }
 *
 * @param {string] name The form group name
 * @returns {FormGroupState} The form group state
 */
export declare const useFormGroup: (name: string) => FormGroupState;
/**
 * Get the state of a form group
 *
 * @param {FieldStates} fieldStates A map of field states from final-form where the key is the field name.
 * @returns {FormGroupState} The state of the group.
 */
export declare const getFormGroupState: (fieldStates: FieldState<any>[]) => FormGroupState;
export {};
