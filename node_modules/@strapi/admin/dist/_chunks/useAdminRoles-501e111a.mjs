import * as React from "react";
import { useFetchClient, useCollator } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";
import { useQuery } from "react-query";
const useAdminRoles = (params = {}, queryOptions = {}) => {
  const { id = "", ...queryParams } = params;
  const { get } = useFetchClient();
  const { locale } = useIntl();
  const formatter = useCollator(locale, {
    sensitivity: "base"
  });
  const { data, error, isError, isLoading, refetch } = useQuery(
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
  const roles = React.useMemo(() => {
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
export {
  useAdminRoles as u
};
//# sourceMappingURL=useAdminRoles-501e111a.mjs.map
