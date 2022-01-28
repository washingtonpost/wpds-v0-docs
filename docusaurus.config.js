const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "WPDS",
  tagline: "v0 Washington Post Design System",
  url: "https://build.washingtonpost.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/wp-mark.svg",
  organizationName: "WP-Media", // Usually your GitHub org/user name.
  projectName: "wpds-docs", // Usually your repo name.
  plugins: [
    "@docusaurus/plugin-ideal-image",
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-WHNNX8B"
      }
    ]
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true
    },
    navbar: {
      title: "Design System",
      logo: {
        alt: "My Site Logo",
        src: "img/wp-mark.svg"
      },

      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "right",
          label: "Getting Started"
        },
        {
          type: "doc",
          docId: "foundations/introduction/what-are-tokens",
          position: "right",
          label: "Foundations"
        },
        {
          type: "doc",
          docId: "design/uncategorized/accordion",
          position: "right",
          label: "Components"
        }
      ]
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} The Washington Post`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    algolia: {
      appId: "8BNQMF2X1D",
      apiKey: "d287a51f05def4ddf91374a3a92fa5fa",
      indexName: "build-washingtonpost"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [
            require.resolve("@washingtonpost/site-components/css/index.css")
          ]
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/WPMedia/wpds-docs/tree/main/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/WPMedia/wpds-docs/tree/main/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
