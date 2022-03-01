module.exports = {
  async rewrites() {
    return [
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
    ];
  },
};
