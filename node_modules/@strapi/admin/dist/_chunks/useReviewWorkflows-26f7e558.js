"use strict";
const React = require("react");
const helperPlugin = require("@strapi/helper-plugin");
const reactQuery = require("react-query");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
function useReviewWorkflows(params = {}) {
  const { get } = helperPlugin.useFetchClient();
  const { id = "", ...queryParams } = params;
  const defaultQueryParams = {
    populate: "stages"
  };
  const { data, isLoading, status, refetch } = reactQuery.useQuery(
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
  const workflows = React__namespace.useMemo(() => {
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
  const meta = React__namespace.useMemo(() => {
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
exports.useReviewWorkflows = useReviewWorkflows;
//# sourceMappingURL=useReviewWorkflows-26f7e558.js.map
