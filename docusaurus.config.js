import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEUUNI UNIVERSIDAD',
  tagline: 'Centro de Ayuda y Documentación Oficial',
  favicon: 'img/logo-n.png',
  url: 'https://docs.unineuuni.com',
  baseUrl: '/',
  organizationName: 'Neuuni',
  projectName: 'Tutoriales',
  deploymentBranch: 'main',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          showReadingTime: true,
        },
        pages: {
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mentores',
        path: 'mentores',
        routeBasePath: 'mentores',
        sidebarPath: require.resolve('./mentoresSidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-7G7NHQBYKM',
        anonymizeIP: true,
      },
    ],
    [
      'docusaurus-plugin-image-zoom',
      {}
    ],
    [
      'docusaurus-pushfeedback',
      {
        project: 'qraohpqvhi',
        buttonPosition: 'center-right',
        modalPosition: 'sidebar-right',
        buttonStyle: 'dark',
        modalTitle: '¿Te parece útil lo que ves?',
        placeholder: 'Cuéntanos cómo podemos mejorarlo...',
        ratingMode: 'thumbs',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/theme-common').UserThemeConfig} */
    ({
      // CONFIGURACIÓN DE METADATOS Y OPEN GRAPH (Vista previa al compartir enlaces)
      metadata: [
        { 
          name: 'description', 
          content: 'Plataforma oficial de guías, tutoriales y solución de problemas de NEUUNI Universidad.' 
        },
        { 
          property: 'og:description', 
          content: 'Plataforma oficial de guías, tutoriales y solución de problemas de NEUUNI Universidad.' 
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],

      // CONFIGURACIÓN DEL ZOOM DE IMÁGENES
      zoom: {
        selector: '.markdown img, .card img, Card img',
        background: {
          light: 'rgba(255, 255, 255, 0.95)',
          dark: 'rgba(30, 30, 30, 0.95)'
        },
        config: {
          margin: 24,
        }
      },
      image: 'img/logo-2-n.jpeg',
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'Logo',
          src: 'img/logo-n.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriales',
          },
          {
            type: 'docSidebar',
            sidebarId: 'whattodoSidebar',
            position: 'left',
            label: 'Problemas frecuentes',
          },
          {
            type: 'doc',
            docId: 'directorio/contacto',
            position: 'left',
            label: 'Contacto',
          },
          {
            type: 'dropdown',
            label: 'Plataformas 🔗',
            position: 'right',
            items: [
              {
                href: 'https://unineuuni.edu.mx',
                label: '🔵 NEUUNI',
              },
              {
                href: 'https://app.gedux.mx/',
                label: '🟠 Gedux',
              },
              {
                href: 'https://research.unineuuni.com/',
                label: '📚 NeuuniResearch',
              },
            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contacto de Soporte Técnico:',
            items: [
              {
                label: 'Whatsapp',
                href: 'https://wa.me/message/RSY3GACKA2KTN1',
              },
              {
                label: 'Correo Electrónico',
                href: 'mailto:ayuda@unineuuni.edu.mx',
              },
            ],
          },
          {
            title: 'Nuestras plataformas:',
            items: [
              {
                label: 'NEUUNI Universidad',
                href: 'https://cursos.unineuuni.edu.mx/',
              },
              {
                label: 'Gedux',
                href: 'https://app.gedux.mx/login',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neuuni Universidad.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: '7A0CPPGF5D',
        apiKey: '3c11cba64b9fb86705de0ceff7298d96',
        indexName: 'unineuuni',
        contextsearch: true,
        lang: 'es',
      },
    }),
};

export default config;