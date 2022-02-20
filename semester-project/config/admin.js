module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da03098f1b8c16e434ee4f9238d7a07b'),
  },
});
