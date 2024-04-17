import { GetAll, Get } from '../../../../../../../../shared/contracts/review-workflows';
export type APIReviewWorkflowsQueryParams = Get.Params | (GetAll.Request['query'] & {
    id?: never;
});
export declare function useReviewWorkflows(params?: APIReviewWorkflowsQueryParams): {
    meta: {
        workflowCount: number;
    } | undefined;
    workflows: import("../../../../../../../../shared/contracts/review-workflows").Workflow[];
    isLoading: boolean;
    status: "error" | "success" | "loading" | "idle";
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<GetAll.Response | Get.Response, unknown>>;
};
