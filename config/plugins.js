module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
  // redis: {
  //   config: {
  //     connections: {
  //       default: {
  //         connection: env("UPSTASH_REDIS_URL"),
  //       },
  //     },
  //   },
  // },
  // "rest-cache": {
  //   config: {
  //     provider: {
  //       name: "redis",
  //     },
  //     strategy: {
  //       contentTypes: [
  //         { contentType: "api::blog-post.blog-post", hitpass: false },
  //         { contentType: "api::team-member.team-member", hitpass: false },
  //         { contentType: "api::tag.tag", hitpass: false },
  //       ],
  //       // 60000 = 1 minute, 3600000 = 1 hour, 86400000 = 1 day, 604800000 = 1 week,
  //       maxAge: 86400000,
  //       // debug: true,
  //     },
  //   },
  // },
});
