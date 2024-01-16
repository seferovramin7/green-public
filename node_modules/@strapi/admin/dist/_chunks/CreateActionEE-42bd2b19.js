"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const Icons = require("@strapi/icons");
const isNil = require("lodash/isNil");
const PropTypes = require("prop-types");
const reactIntl = require("react-intl");
const useLicenseLimits = require("./useLicenseLimits-e60a01b1.js");
require("react");
require("@strapi/helper-plugin");
require("react-query");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const isNil__default = /* @__PURE__ */ _interopDefault(isNil);
const PropTypes__default = /* @__PURE__ */ _interopDefault(PropTypes);
const CreateActionEE = ({ onClick }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { license, isError, isLoading } = useLicenseLimits.useLicenseLimits();
  const { permittedSeats, shouldStopCreate } = license ?? {};
  if (isError || isLoading) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
    !isNil__default.default(permittedSeats) && shouldStopCreate && /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Tooltip,
      {
        description: formatMessage({
          id: "Settings.application.admin-seats.at-limit-tooltip",
          defaultMessage: "At limit: add seats to invite more users"
        }),
        position: "left",
        children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Icon,
          {
            width: `${14 / 16}rem`,
            height: `${14 / 16}rem`,
            color: "danger500",
            as: Icons.ExclamationMarkCircle
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Button,
      {
        "data-testid": "create-user-button",
        onClick,
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Envelop, {}),
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
  onClick: PropTypes__default.default.func.isRequired
};
exports.CreateActionEE = CreateActionEE;
//# sourceMappingURL=CreateActionEE-42bd2b19.js.map
