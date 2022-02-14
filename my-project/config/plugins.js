module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  },


//   email: {
//     provider: 'sendgrid',
//     providerOptions: {
//       apiKey: env('SENDGRID_API_KEY'),
//     },
//     settings: {
//       defaultFrom: 'juliasedefdjian@strapi.io',
//       defaultReplyTo: 'juliasedefdjian@strapi.io',
//       testAddress: 'juliasedefdjian@strapi.io',
//     },
//   },
});

