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
  plugins: ["@docusaurus/plugin-ideal-image"],
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
        // {
        //   type: 'doc',
        //   docId: 'content/voice',
        //   position: 'right',
        //   label: 'Content',
        // },
        // {
        //   type: 'doc',
        //   docId: 'patterns/pattern',
        //   position: 'right',
        //   label: 'Pattern',
        // },
      ]
    },
    footer: {
      style: "light",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} The Washington Post`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    algolia: {
      appId: "O19N5YY9R3",
      apiKey: "d6e309a4051d820cae616d3419f4a5d9",
      indexName: "crawler_WPDS Documentation Website"
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
        },
        gtag: {
          trackingID: "G-DD0F8SKR32",
          anonymizeIP: true
        }
      }
    ]
  ]
};
