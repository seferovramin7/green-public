import { FormikProps } from 'formik';
import type { AdminRole } from '../../../../../hooks/useAdminRoles';
import type { EditPageFormValues } from '../EditPage';
interface RoleFormProps extends Pick<FormikProps<EditPageFormValues>, 'values' | 'errors'> {
    onBlur: FormikProps<EditPageFormValues>['handleBlur'];
    onChange: FormikProps<EditPageFormValues>['handleChange'];
    disabled?: boolean;
    role: AdminRole;
}
declare const RoleForm: ({ disabled, role, values, errors, onChange, onBlur }: RoleFormProps) => import("react/jsx-runtime").JSX.Element;
export { RoleForm };
export type { RoleFormProps };
