import { Entity } from '@strapi/types';
import { UseQueryOptions } from 'react-query';
import { GetOwnPermissions } from '../../../../../../../shared/contracts/users';
export interface APIRolePermissionsQueryParams {
    id: null | Entity.ID;
}
export declare const useAdminRolePermissions: (params?: APIRolePermissionsQueryParams, queryOptions?: Omit<UseQueryOptions<GetOwnPermissions.Response['data']>, 'queryKey' | 'queryFn'>) => {
    permissions: import("../../../../../../../shared/contracts/shared").Permission[] | undefined;
    error: unknown;
    isError: boolean;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("../../../../../../../shared/contracts/shared").Permission[], unknown>>;
};
