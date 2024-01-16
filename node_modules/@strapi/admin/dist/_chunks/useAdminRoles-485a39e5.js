"use strict";
const React = require("react");
const helperPlugin = require("@strapi/helper-plugin");
const reactIntl = require("react-intl");
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
const useAdminRoles = (params = {}, queryOptions = {}) => {
  const { id = "", ...queryParams } = params;
  const { get } = helperPlugin.useFetchClient();
  const { locale } = reactIntl.useIntl();
  const formatter = helperPlugin.useCollator(locale, {
    sensitivity: "base"
  });
  const { data, error, isError, isLoading, refetch } = reactQuery.useQuery(
    ["roles", id, queryParams],
    async () => {
      const { data: data2 } = await get(
        `/admin/roles/${id ?? ""}`,
        {
          params: queryParams
        }
      );
      return data2;
    },
    queryOptions
  );
  const roles = React__namespace.useMemo(() => {
    let roles2 = [];
    if (data) {
      if (Array.isArray(data.data)) {
        roles2 = data.data;
      } else {
        roles2 = [data.data];
      }
    }
    return [...roles2].sort((a, b) => formatter.compare(a.name, b.name));
  }, [data, formatter]);
  return {
    roles,
    error,
    isError,
    isLoading,
    refetch
  };
};
exports.useAdminRoles = useAdminRoles;
//# sourceMappingURL=useAdminRoles-485a39e5.js.map
