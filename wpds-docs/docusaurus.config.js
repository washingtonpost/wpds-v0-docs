const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'WPDS',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WP-Media', // Usually your GitHub org/user name.
  projectName: 'WPDS-Docs', // Usually your repo name.
  themeConfig: {
    colorMode:{
      defaultMode:'light',
      disableSwitch:true
    },
    navbar: {
      title: 'Design System',
      logo: {
        alt: 'My Site Logo',
        src: 'img/wp-mark.svg',
      },
      
      items: [
        {
          type: 'doc',
          docId: 'getting-started/getting-started',
          position: 'right',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'tokens/introduction/what-are-tokens',
          position: 'right',
          label: 'Tokens',
        },
        {
          type: 'doc',
          docId: 'components/uncategorized/button',
          position: 'right',
          label: 'Components',
        },
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
        {
          type: 'doc',
          docId: 'resources/intro',
          position: 'right',
          label: 'Resources',
        },
        {
          type: 'doc',
          docId: 'release-notes/notes',
          position: 'right',
          label: 'Release Notes',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type:'docsVersionDropdown'
        }
      ],
    },
    footer: {
      style: 'light',
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
      copyright: `Copyright © ${new Date().getFullYear()} The Washington Post`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme:{
          customCss:[require.resolve('@washingtonpost/site-components/css/index.css')]
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/WPMedia/WPDS-Docs/tree/main/wpds-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/WPMedia/WPDS-Docs/tree/main/wpds-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
