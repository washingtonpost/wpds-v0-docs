module.exports = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/components",
          destination: "/components/design",
        },
        {
          source: "/foundations",
          destination: "/foundations/principles",
        },
        {
          source: "/",
          destination: "/foundations",
        },
      ],
      fallback: [
        {
          source: "/v0/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/:slug*",
        },
        {
          source: "/assets/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/assets/:slug*",
        },
        {
          source: "/img/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/img/:slug*",
        },
      ],
    };
  },
};
