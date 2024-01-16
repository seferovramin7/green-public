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
function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = helperPlugin.useFetchClient();
  const { data, isError, isLoading } = reactQuery.useQuery(
    ["ee", "license-limit-info"],
    async () => {
      const { data: data2 } = await get(
        "/admin/license-limit-information"
      );
      return data2;
    },
    {
      enabled
    }
  );
  const getFeature = React__namespace.useCallback(
    (name) => {
      const feature = data?.data?.features.find((feature2) => feature2.name === name);
      if (feature && "options" in feature) {
        return feature.options;
      } else {
        return {};
      }
    },
    [data]
  );
  return { license: data?.data, getFeature, isError, isLoading };
}
exports.useLicenseLimits = useLicenseLimits;
//# sourceMappingURL=useLicenseLimits-e60a01b1.js.map
