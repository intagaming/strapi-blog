module.exports = ({ env }) => {
  return {
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 1024 * 1024 * 1024,
        },
      },
    },
  };
};
