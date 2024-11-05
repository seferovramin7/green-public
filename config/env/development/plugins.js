module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["name","surname", "phoneNumber", "phoneNumber", "companyName", "position", "type"],
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
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
  // ...
});
