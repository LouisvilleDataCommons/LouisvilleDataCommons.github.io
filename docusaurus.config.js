// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

///** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Louisville Data Commons',
  tagline: 'A website to store and share data generated by local communities in Louisville, Kentucky, USA.',
  url: 'https://louisvilledatacommons.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LouisvilleDataCommons', // Usually your GitHub org/user name.
  projectName: 'LouisvilleDataCommons.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Louisville Data Commons Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Data',

          },
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSf1ZEo_Dp4YkoEq1YTJHfNtXBZWy1l2SLG4c3hf1E4yjPFbmw/viewform',
            label: 'Submit Data',
            position: 'left',
            
          },
          {
            href: 'https://github.com/LouisvilleDataCommons',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Data',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Meeting Minutes',
                href: 'https://drive.google.com/drive/u/0/folders/189FUGs5BbYzMluCy6Ow2iEM-EssH2Lv_',
              },
              {
                label: 'Envirome Institute',
                href: 'https://enviromeinstitute.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/LouisvilleDataCommons',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
