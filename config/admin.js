module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '809b161d18eae0cdb5642ece889eea4f'),
  },
});
