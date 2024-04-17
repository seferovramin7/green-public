import * as React from "react";
import { useFetchClient } from "@strapi/helper-plugin";
import { useQuery } from "react-query";
function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = useFetchClient();
  const { data, isError, isLoading } = useQuery(
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
  const getFeature = React.useCallback(
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
export {
  useLicenseLimits as u
};
//# sourceMappingURL=useLicenseLimits-497c0f5f.mjs.map
