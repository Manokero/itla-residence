// export const navItems = [
//   {
//     name: 'Dashboard',
//     url: '/dashboard',
//     icon: 'icon-speedometer',
//     badge: {
//       variant: 'info',
//       text: 'NEW'
//     }
//   },
//   {
//     title: true,
//     name: 'Theme'
//   },
//   {
//     name: 'Colors',
//     url: '/theme/colors',
//     icon: 'icon-drop'
//   },
//   {
//     name: 'Typography',
//     url: '/theme/typography',
//     icon: 'icon-pencil'
//   },
//   {
//     title: true,
//     name: 'Components'
//   },
//   {
//     name: 'Base',
//     url: '/base',
//     icon: 'icon-puzzle',
//     children: [
//       {
//         name: 'Cards',
//         url: '/base/cards',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Carousels',
//         url: '/base/carousels',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Collapses',
//         url: '/base/collapses',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Forms',
//         url: '/base/forms',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Pagination',
//         url: '/base/paginations',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Popovers',
//         url: '/base/popovers',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Progress',
//         url: '/base/progress',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Switches',
//         url: '/base/switches',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Tables',
//         url: '/base/tables',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Tabs',
//         url: '/base/tabs',
//         icon: 'icon-puzzle'
//       },
//       {
//         name: 'Tooltips',
//         url: '/base/tooltips',
//         icon: 'icon-puzzle'
//       }
//     ]
//   },
//   {
//     name: 'Buttons',
//     url: '/buttons',
//     icon: 'icon-cursor',
//     children: [
//       {
//         name: 'Buttons',
//         url: '/buttons/buttons',
//         icon: 'icon-cursor'
//       },
//       {
//         name: 'Dropdowns',
//         url: '/buttons/dropdowns',
//         icon: 'icon-cursor'
//       },
//       {
//         name: 'Brand Buttons',
//         url: '/buttons/brand-buttons',
//         icon: 'icon-cursor'
//       }
//     ]
//   },
//   {
//     name: 'Charts',
//     url: '/charts',
//     icon: 'icon-pie-chart'
//   },
//   {
//     name: 'Icons',
//     url: '/icons',
//     icon: 'icon-star',
//     children: [
//       {
//         name: 'CoreUI Icons',
//         url: '/icons/coreui-icons',
//         icon: 'icon-star',
//         badge: {
//           variant: 'success',
//           text: 'NEW'
//         }
//       },
//       {
//         name: 'Flags',
//         url: '/icons/flags',
//         icon: 'icon-star'
//       },
//       {
//         name: 'Font Awesome',
//         url: '/icons/font-awesome',
//         icon: 'icon-star',
//         badge: {
//           variant: 'secondary',
//           text: '4.7'
//         }
//       },
//       {
//         name: 'Simple Line Icons',
//         url: '/icons/simple-line-icons',
//         icon: 'icon-star'
//       }
//     ]
//   },
//   {
//     name: 'Notifications',
//     url: '/notifications',
//     icon: 'icon-bell',
//     children: [
//       {
//         name: 'Alerts',
//         url: '/notifications/alerts',
//         icon: 'icon-bell'
//       },
//       {
//         name: 'Badges',
//         url: '/notifications/badges',
//         icon: 'icon-bell'
//       },
//       {
//         name: 'Modals',
//         url: '/notifications/modals',
//         icon: 'icon-bell'
//       }
//     ]
//   },
//   {
//     name: 'Widgets',
//     url: '/widgets',
//     icon: 'icon-calculator',
//     badge: {
//       variant: 'info',
//       text: 'NEW'
//     }
//   },
//   {
//     divider: true
//   },
//   {
//     title: true,
//     name: 'Extras',
//   },
//   {
//     name: 'Pages',
//     url: '/pages',
//     icon: 'icon-star',
//     children: [
//       {
//         name: 'Login',
//         url: '/login',
//         icon: 'icon-star'
//       },
//       {
//         name: 'Register',
//         url: '/register',
//         icon: 'icon-star'
//       },
//       {
//         name: 'Error 404',
//         url: '/404',
//         icon: 'icon-star'
//       },
//       {
//         name: 'Error 500',
//         url: '/500',
//         icon: 'icon-star'
//       }
//     ]
//   },
//   // {
//   //   name: 'Download CoreUI',
//   //   url: 'http://coreui.io/angular/',
//   //   icon: 'icon-cloud-download',
//   //   class: 'mt-auto',
//   //   variant: 'success'
//   // },
// ];

export const navItems = [
  {
    name: 'Inicio',
    url: '/dashboard',
    icon: 'icon-home'
  },
  {
    name: 'Peticion de Producto',
    // url: "/product-request",
    icon: 'icon-layers',
    children: [
      {
        name: 'Crear Peticion',
        url: '/product-request/create',
        icon: 'icon-cursor'
      },
      {
        name: 'Lista de Peticiones',
        url: '/product-request/list',
        icon: 'icon-list',
        badge: {
          variant: 'info',
          text: '0'
        }
      }
    ]
  },
  {
    name: 'Crear Horario',
    icon: 'icon-cursor',
    url: '/create-horary'
  },
  {
    title: true,
    name: 'Por GRUPO DCU'
  }
];
