import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Experiences = lazy(() => import('../pages/Experiences'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

const routes = [
  {
    path: '/', 
    component: Dashboard, 
  },
  {
    path: '/pf/experiences',
    component: Experiences,
  },
  // {
  //   path: '/cards',
  //   component: Cards,
  // },
  // {
  //   path: '/charts',
  //   component: Charts,
  // },
  // {
  //   path: '/buttons',
  //   component: Buttons,
  // },
  // {
  //   path: '/modals',
  //   component: Modals,
  // },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  {
    path: '/404',
    component: Page404,
  },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
