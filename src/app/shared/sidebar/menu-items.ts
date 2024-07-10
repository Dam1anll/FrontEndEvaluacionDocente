import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Panel de control',
    icon: 'bi bi-speedometer2',
    role: ['ADMIN'],
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/users',
    title: 'Usuarios',
    icon: 'bi bi-person',
    role: ['ADMIN'],
    class: '',
    extralink: false,
    submenu: []
  },
  /* {
    path: '',
    title: 'Control',
    icon: 'bi bi-ui-radios-grid',
    role: ['ADMIN'],
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/component/careers',
        title: 'Carreras',
        icon: 'bi bi-bookmark',
        role: ['ADMIN'],
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/buildings',
        title: 'Edificios',
        icon: 'bi bi-building',
        role: ['ADMIN'],
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/classrooms',
        title: 'Aulas',
        icon: 'bi bi-house-door-fill',
        role: ['ADMIN'],
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/groups',
        title: 'Grupos',
        icon: 'bi bi-people-fill',
        role: ['ADMIN'],
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/subjects',
        title: 'Materias',
        icon: 'bi bi-list',
        role: ['ADMIN'],
        class: '',
        extralink: false,
        submenu: []
      },

      {
        path: '/component/teachers',
        title: 'Docentes',
        icon: 'bi bi-person-badge',
        role: ['ADMIN'],
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }, */
  /* {
    path: '/component/settings',
    title: 'Configuración',
    icon: 'bi bi-gear',
    role: ['ADMIN'],
    class: '',
    extralink: false,
    submenu: []
  } */
];
