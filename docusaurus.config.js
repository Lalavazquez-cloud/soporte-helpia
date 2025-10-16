// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual de Soporte Helpia',
  tagline: 'Guía interna para garantizar una atención de soporte coherente, eficiente y centrada en la experiencia del cliente.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Lalavazquez-cloud.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/soporte-helpia/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Lalavazquez-cloud', // Usually your GitHub org/user name.
  projectName: 'soporte-helpia', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: undefined, // nadie más puede editar desde la web
      },
      blog: false, // deshabilitamos el blog
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],
],

 themeConfig: 
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
navbar: {
  title: 'Inicio',
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Documentación',
    },
    {
      label: 'CX-Core',
      position: 'left',
      href: 'https://cgc.helpia.com/',
    },
    {
      label: 'Formularios de Solicitudes',
      position: 'left',
      href: 'https://docs.google.com/spreadsheets/d/1N6BCVYehhejq886tcPjMMo4kykoMB2paKMIRDs9b364/edit?resourcekey=&gid=719191107#gid=719191107',
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
              label: 'Documentación',
              to: '/docs/intro',
            },
          ],
        },

      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
