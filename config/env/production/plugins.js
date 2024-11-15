module.exports = ({ env }) => ({
  // Other plugins configuration
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        sizeLimit: 5000000,
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // Documentation plugin configuration
  'plugin-documentation': {
    enabled: true,
    config: {
      servers: [
        {
          url: 'http://37.60.230.124/', // Your server URL
          description: 'Production server',
        },
      ],
    },
  },
});
