import AboutPage from '../pages/about';
import AdminPage from '../pages/admin';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFound';

export const routeConfig = [
  {
    path: '/',
    roleDefine: [],
    public: true,
    name: 'Trang chủ',
    exact: true,
    component: HomePage,
  },
  {
    path: '/home',
    roleDefine: [],
    public: true,
    name: 'Trang chủ',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    roleDefine: [],

    public: true,
    component: AboutPage,
  },
  {
    path: '/404',
    roleDefine: [],
    public: true,
    component: NotFoundPage,
  },
  {
    path: '/admin',
    roleDefine: [],
    name: 'Quản lý',
    public: true,
    component: AdminPage,
  },
];
