import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEUUNI UNIVERSIDAD',
  tagline: 'Bienvenidos 👋 ',
  favicon: 'img/logo-n.png',
  url: 'https://docs.unineuuni.com',
  baseUrl: '/',
  organizationName: 'Neuuni', // Usually your GitHub org/user name.
  projectName: 'Tutoriales', // Usually your repo name.
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
        trackingID: 'G-7G7NHQBYKM', // Aquí va tu ID de medición de GA4
        anonymizeIP: true, // Opcional: para anonimizar las IPs de los usuarios
      },
    ],
    [
      'docusaurus-plugin-image-zoom',
      {}
    ],
    [
      'docusaurus-pushfeedback',
      {
        project: 'qraohpqvhi', // Reemplaza esto con el ID que te dio PushFeedback
        buttonPosition: 'center-right',     // Flota a la mitad derecha del navegador (muy cómodo)
        modalPosition: 'sidebar-right',     // Al hacer clic, se abre una barra lateral elegante
        buttonStyle: 'dark',                // Estilo del botón (puedes usar 'light' o 'dark')
        modalTitle: '¿Te parece útil lo que ves?',
        placeholder: 'Cuéntanos cómo podemos mejorarlo...',
        ratingMode: 'thumbs',               // Sistema de calificación por Pulgar Arriba / Abajo
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // CONFIGURACIÓN DEL ZOOM DE IMÁGENES
      zoom: {
        selector: '.markdown img, .card img, Card img', // Funciona en markdown estándar y dentro de tus componentes Card
        background: {
          light: 'rgba(255, 255, 255, 0.95)',
          dark: 'rgba(30, 30, 30, 0.95)'
        },
        config: {
          // Opciones de medium-zoom (ej: distancia o margen en px)
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
        apiKey: '3c11cba64b9fb86705de0ceff7298d96', // Esta es tu clave de búsqueda (Search-Only API Key)
        indexName: 'unineuuni', // Este es el nombre del índice que has configurado en Algolia
        contextsearch: true, // Habilita la búsqueda contextual
        // Opcional: Cómo se muestran los resultados de búsqueda
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Opcional: Parámetros de búsqueda adicionales (para filtros, etc.)
        searchParameters: {},

        // Opcional: Ruta para el CSS de DocSearch (ya viene con el tema)
        // Esto solo es necesario si no usas el preset classic o si quieres una ruta diferente
        // You can use a custom CSS file to override the default DocSearch CSS (might be useful for dark mode adjustments)
        // searchPagePath: 'search',

        // Opcional: Idioma del buscador (si tu sitio no es inglés)
        lang: 'es', // Por ejemplo, para español
      },
    }),
};

export default config;