import * as React from "react";
import { useFetchClient } from "@strapi/helper-plugin";
import { useQuery } from "react-query";
function useReviewWorkflows(params = {}) {
  const { get } = useFetchClient();
  const { id = "", ...queryParams } = params;
  const defaultQueryParams = {
    populate: "stages"
  };
  const { data, isLoading, status, refetch } = useQuery(
    ["review-workflows", "workflows", id],
    async () => {
      const { data: data2 } = await get(
        `/admin/review-workflows/workflows/${id}`,
        {
          params: { ...defaultQueryParams, ...queryParams }
        }
      );
      return data2;
    }
  );
  const workflows = React.useMemo(() => {
    let workflows2 = [];
    if (data?.data) {
      if (Array.isArray(data.data)) {
        workflows2 = data.data;
      } else {
        workflows2 = [data.data];
      }
    }
    return workflows2;
  }, [data]);
  const meta = React.useMemo(() => {
    let meta2;
    if (data && "meta" in data) {
      meta2 = data.meta;
    }
    return meta2;
  }, [data]);
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta,
    workflows,
    isLoading,
    status,
    refetch
  };
}
export {
  useReviewWorkflows as u
};
//# sourceMappingURL=useReviewWorkflows-3e0bcb69.mjs.map
