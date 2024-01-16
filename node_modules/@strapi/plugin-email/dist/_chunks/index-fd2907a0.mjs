import { prefixPluginTranslations } from "@strapi/helper-plugin";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const PERMISSIONS = {
  // This permission regards the main component (App) and is used to tell
  // If the plugin link should be displayed in the menu
  // And also if the plugin is accessible. This use case is found when a user types the url of the
  // plugin directly in the browser
  settings: [{ action: "plugin::email.settings.read", subject: null }]
};
const admin = {
  // TODO typing app in strapi/types as every plugin needs it
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register(app) {
    app.createSettingSection(
      {
        id: "email",
        intlLabel: { id: "email.SettingsNav.section-label", defaultMessage: "Email Plugin" }
      },
      [
        {
          intlLabel: {
            id: "email.Settings.email.plugin.title",
            defaultMessage: "Settings"
          },
          id: "settings",
          to: `/settings/email`,
          async Component() {
            const { ProtectedSettingsPage } = await import("./Settings-28b53b3c.mjs");
            return ProtectedSettingsPage;
          },
          permissions: PERMISSIONS.settings
        }
      ]
    );
    app.registerPlugin({
      id: "email",
      name: "email"
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  bootstrap() {
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/ar.json": () => import("./ar-ff435927.mjs"), "./translations/cs.json": () => import("./cs-4ffeb632.mjs"), "./translations/de.json": () => import("./de-58c5639c.mjs"), "./translations/dk.json": () => import("./dk-bcedd153.mjs"), "./translations/en.json": () => import("./en-4fbcf167.mjs"), "./translations/es.json": () => import("./es-2461d4c2.mjs"), "./translations/fr.json": () => import("./fr-ceba6845.mjs"), "./translations/id.json": () => import("./id-821189d3.mjs"), "./translations/it.json": () => import("./it-d4d32c9d.mjs"), "./translations/ja.json": () => import("./ja-dfc835e1.mjs"), "./translations/ko.json": () => import("./ko-56f5ccba.mjs"), "./translations/ms.json": () => import("./ms-78a5a894.mjs"), "./translations/nl.json": () => import("./nl-afdad856.mjs"), "./translations/pl.json": () => import("./pl-e37f4736.mjs"), "./translations/pt-BR.json": () => import("./pt-BR-864b3c17.mjs"), "./translations/pt.json": () => import("./pt-8340cbeb.mjs"), "./translations/ru.json": () => import("./ru-f43d8f2b.mjs"), "./translations/sk.json": () => import("./sk-1526c0dc.mjs"), "./translations/th.json": () => import("./th-ce674242.mjs"), "./translations/tr.json": () => import("./tr-49a8b0bf.mjs"), "./translations/uk.json": () => import("./uk-98a2ef93.mjs"), "./translations/vi.json": () => import("./vi-fd5a1ce5.mjs"), "./translations/zh-Hans.json": () => import("./zh-Hans-cb4344eb.mjs"), "./translations/zh.json": () => import("./zh-cabf07c2.mjs") }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: prefixPluginTranslations(data, "email"),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
export {
  PERMISSIONS as P,
  admin as a
};
//# sourceMappingURL=index-fd2907a0.mjs.map
