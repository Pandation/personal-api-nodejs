/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Accueil', // name that appear in Sidebar
  },
  // {
  //   path: '/forms',
  //   icon: 'FormsIcon',
  //   name: 'Forms',
  // },
  // {
  //   path: '/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  {
    path: '/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  // {
  //   path: '/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  {
    icon: 'PagesIcon',
    name: 'Portfolio',
    // path: "/portfolio",
    routes: [
      // submenu
      {
        path: '/pf/experiences',
        name: 'Experiences',
      },
      {
        path: '/pf/educations',
        name: 'Educations',
      },
      {
        path: '/pf/skills',
        name: 'Skills',
      },
      // {
      //   path: '/pf/projects',
      //   name: 'Projects',
      // },
      {
        path: '/pf/learnings',
        name: 'Learnings',
      },
    ],
  },
  {
    icon: 'MailIcon',
    name: 'Nailed It',
    // path: "/portfolio",
    routes: [
      // submenu
      {
        path: '/ni/sendingConfigs',
        name: 'Sending Configurations',
      },
      {
        path: '/ni/companies',
        name: 'Companies',
      },
      {
        path: '/ni/emailTemplates',
        name: 'Email Templates',
      },
      {
        path: '/ni/processes',
        name: 'Processes',
      },
    ],
  },
]

export default routes
