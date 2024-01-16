import { Entity } from '@strapi/types';
interface ModalFormProps {
    onSuccess: () => Promise<void>;
    onToggle: () => void;
}
declare const ModalForm: ({ onSuccess, onToggle }: ModalFormProps) => import("react/jsx-runtime").JSX.Element | null;
interface InitialData {
    firstname?: string;
    lastname?: string;
    email?: string;
    roles?: Entity.ID[];
    useSSORegistration?: boolean;
}
export { ModalForm };
export type { InitialData };
