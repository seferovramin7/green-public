import type { FindRole, FindRoles } from '../../../shared/contracts/roles';
export type APIRolesQueryParams = FindRole.Request['params'] | (FindRoles.Request['query'] & {
    id?: never;
});
export type AdminRole = FindRoles.Response['data'][number];
export declare const useAdminRoles: (params?: APIRolesQueryParams, queryOptions?: {}) => {
    roles: (import("../../../shared/contracts/shared").SanitizedAdminRole & {
        usersCount?: number | undefined;
    })[];
    error: unknown;
    isError: boolean;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<FindRole.Response | FindRoles.Response, unknown>>;
};
