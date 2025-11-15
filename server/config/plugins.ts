export default ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["bio", "isOnboarded"],
      },
    },
  },
  // email: {
  //   config: {
  //     provider: "mailgun",
  //     providerOptions: {
  //       key: env("MAILGUN_API_KEY", "jjjj"), // Required
  //       domain: env("MAILGUN_DOMAIN", "dancediction.com"), // Required
  //       url: env("MAILGUN_URL", "https://api.mailgun.net"), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
  //     },
  //     settings: {
  //       defaultFrom: "noreply@dancediction.com",
  //       defaultReplyTo: "official@dancediction.com",
  //     },
  //   },
  // },
});
