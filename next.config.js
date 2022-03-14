const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/components",
          destination: "/components/alert-banner",
        },
        {
          source: "/foundations",
          destination: "/foundations/principles",
        },
        {
          source: "/support",
          destination: "/resources/process/support",
        },
      ],
      fallback: [
        {
          source: "/v0",
          destination: "https://v0.wpds.docs.preview.now.washingtonpost.com",
        },
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
  swcMinify: false,
});
