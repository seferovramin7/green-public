module.exports = [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'https://*.basemaps.cartocdn.com',
            'market-assets.strapi.io',
            'https://tile.openstreetmap.org',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'https://*.basemaps.cartocdn.com',
            'https://tile.openstreetmap.org',
          ],
          'script-src': [
            "'self'",
            'unsafe-inline',
            'https://*.basemaps.cartocdn.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
