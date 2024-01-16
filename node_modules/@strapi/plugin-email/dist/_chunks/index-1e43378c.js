"use strict";
const helperPlugin = require("@strapi/helper-plugin");
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
            const { ProtectedSettingsPage } = await Promise.resolve().then(() => require("./Settings-2f1f90aa.js"));
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
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/ar.json": () => Promise.resolve().then(() => require("./ar-536c2a86.js")), "./translations/cs.json": () => Promise.resolve().then(() => require("./cs-7d88d2f0.js")), "./translations/de.json": () => Promise.resolve().then(() => require("./de-1e7f180f.js")), "./translations/dk.json": () => Promise.resolve().then(() => require("./dk-13a3c7d6.js")), "./translations/en.json": () => Promise.resolve().then(() => require("./en-ea59141b.js")), "./translations/es.json": () => Promise.resolve().then(() => require("./es-ef277f11.js")), "./translations/fr.json": () => Promise.resolve().then(() => require("./fr-a99da513.js")), "./translations/id.json": () => Promise.resolve().then(() => require("./id-72ee7b90.js")), "./translations/it.json": () => Promise.resolve().then(() => require("./it-b49a9ad6.js")), "./translations/ja.json": () => Promise.resolve().then(() => require("./ja-f46b70ef.js")), "./translations/ko.json": () => Promise.resolve().then(() => require("./ko-315e2412.js")), "./translations/ms.json": () => Promise.resolve().then(() => require("./ms-3a86d274.js")), "./translations/nl.json": () => Promise.resolve().then(() => require("./nl-3e842531.js")), "./translations/pl.json": () => Promise.resolve().then(() => require("./pl-783da2e5.js")), "./translations/pt-BR.json": () => Promise.resolve().then(() => require("./pt-BR-3c8a6e1a.js")), "./translations/pt.json": () => Promise.resolve().then(() => require("./pt-9322c111.js")), "./translations/ru.json": () => Promise.resolve().then(() => require("./ru-f0e4e7f5.js")), "./translations/sk.json": () => Promise.resolve().then(() => require("./sk-523e2dc8.js")), "./translations/th.json": () => Promise.resolve().then(() => require("./th-95fe97e0.js")), "./translations/tr.json": () => Promise.resolve().then(() => require("./tr-a9eac9c3.js")), "./translations/uk.json": () => Promise.resolve().then(() => require("./uk-445e13c8.js")), "./translations/vi.json": () => Promise.resolve().then(() => require("./vi-9fb584d2.js")), "./translations/zh-Hans.json": () => Promise.resolve().then(() => require("./zh-Hans-6c6b056b.js")), "./translations/zh.json": () => Promise.resolve().then(() => require("./zh-cb970da6.js")) }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: helperPlugin.prefixPluginTranslations(data, "email"),
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
exports.PERMISSIONS = PERMISSIONS;
exports.admin = admin;
//# sourceMappingURL=index-1e43378c.js.map
