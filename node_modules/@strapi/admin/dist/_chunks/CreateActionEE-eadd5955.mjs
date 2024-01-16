import { jsxs, jsx } from "react/jsx-runtime";
import { Flex, Tooltip, Icon, Button } from "@strapi/design-system";
import { ExclamationMarkCircle, Envelop } from "@strapi/icons";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { u as useLicenseLimits } from "./useLicenseLimits-497c0f5f.mjs";
import "react";
import "@strapi/helper-plugin";
import "react-query";
const CreateActionEE = ({ onClick }) => {
  const { formatMessage } = useIntl();
  const { license, isError, isLoading } = useLicenseLimits();
  const { permittedSeats, shouldStopCreate } = license ?? {};
  if (isError || isLoading) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Flex, { gap: 2, children: [
    !isNil(permittedSeats) && shouldStopCreate && /* @__PURE__ */ jsx(
      Tooltip,
      {
        description: formatMessage({
          id: "Settings.application.admin-seats.at-limit-tooltip",
          defaultMessage: "At limit: add seats to invite more users"
        }),
        position: "left",
        children: /* @__PURE__ */ jsx(
          Icon,
          {
            width: `${14 / 16}rem`,
            height: `${14 / 16}rem`,
            color: "danger500",
            as: ExclamationMarkCircle
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        "data-testid": "create-user-button",
        onClick,
        startIcon: /* @__PURE__ */ jsx(Envelop, {}),
        size: "S",
        disabled: shouldStopCreate,
        children: formatMessage({
          id: "Settings.permissions.users.create",
          defaultMessage: "Invite new user"
        })
      }
    )
  ] });
};
CreateActionEE.propTypes = {
  onClick: PropTypes.func.isRequired
};
export {
  CreateActionEE
};
//# sourceMappingURL=CreateActionEE-eadd5955.mjs.map
