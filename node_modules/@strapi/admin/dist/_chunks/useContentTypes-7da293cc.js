"use strict";
const React = require("react");
const helperPlugin = require("@strapi/helper-plugin");
const axios = require("axios");
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
function useContentTypes() {
  const { get } = helperPlugin.useFetchClient();
  const { formatAPIError } = helperPlugin.useAPIErrorHandler();
  const toggleNotification = helperPlugin.useNotification();
  const queries = reactQuery.useQueries([
    {
      queryKey: ["content-manager", "components"],
      async queryFn() {
        const {
          data: { data }
        } = await get(`/content-manager/components`);
        return data;
      },
      onError(error) {
        if (error instanceof axios.AxiosError) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      }
    },
    {
      queryKey: ["content-manager", "content-types"],
      async queryFn() {
        const {
          data: { data }
        } = await get(`/content-manager/content-types`);
        return data;
      },
      onError(error) {
        if (error instanceof axios.AxiosError) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      }
    }
  ]);
  const [components, contentTypes] = queries;
  const isLoading = components.isLoading || contentTypes.isLoading;
  const collectionTypes = React__namespace.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind === "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  const singleTypes = React__namespace.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind !== "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  return {
    isLoading,
    components: React__namespace.useMemo(() => components?.data ?? [], [components?.data]),
    collectionTypes,
    singleTypes
  };
}
exports.useContentTypes = useContentTypes;
//# sourceMappingURL=useContentTypes-7da293cc.js.map
