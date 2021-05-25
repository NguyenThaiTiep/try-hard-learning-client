import AboutPage from '../pages/about';

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
];
