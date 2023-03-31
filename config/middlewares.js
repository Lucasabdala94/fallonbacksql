module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com','https://res.cloudinary.com/dgjk5awtd','https://fallon-backsql2.onrender.com/api'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com','https://fallon-backsql2.onrender.com/api'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
