module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df351be01ad3a19611a46c6111c3e497'),
  },
});
