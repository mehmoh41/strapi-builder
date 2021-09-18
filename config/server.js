module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1212),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b1521a933eacde324baf3fc6c7aaec58'),
    },
  },
});
