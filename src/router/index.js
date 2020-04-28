import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Menu'
import leftMenu from '@/components/leftNav'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    // redirect: '/content',
    redirect: '/content',
    component: Home
  },
  {
    path: '/content',
    component: Home,
    name: '主页'
  },
  {
    path: '/wan',
    component: Home,
    redirect: '/wan/mobileconnection',
    children: [
      {
        path: '/wan/mobileconnection',
        component: leftMenu,
        name: 'mobileconnection',
        children: [
          {
            path: '/wan/mobileconnection',
            component: () => import('@/views/wan/index'),
            name: 'mobileconnections'
          },
          {
            path: '/wan/mobilesearch',
            component: () => import('@/views/content/index'),
            name: 'mobilesearch'
          }
        ]
      },
      {
        path: '/wan/ethernetsettings',
        component: leftMenu,
        name: '以太网',
        children: [
          {
            path: '/wan/ethernetsettings',
            component: () => import('@/views/content/index'),
            name: '以太网设置'
          },
          {
            path: '/wan/ethernetstatus',
            component: () => import('@/views/content/index'),
            name: '以太网状态'
          }
        ]
      },
      {
        path: '/wan/dualnetlink',
        component: leftMenu,
        children: [
          {
            path: '/wan/dualnetlink',
            component: () => import('@/views/content/index'),
            name: 'dualnetlink'
          }
        ]
      }
    ]
  },
  {
    path: '/wlan',
    component: Home,
    redirect: '/wlan/wifieasy',
    children: [
      {
        path: '/wlan/wifieasy',
        component: leftMenu,
        children: [
          {
            path: '/wlan/wifieasy',
            component: () => import('@/views/content/index'),
            name: 'wifieasy'
          }
        ]
      },
      {
        path: '/wlan/guestwifi',
        component: leftMenu,
        children: [
          {
            path: '/wlan/guestwifi',
            component: () => import('@/views/content/index'),
            name: 'guestwifi'
          }
        ]
      }
    ]
  },
  {
    path: '/info',
    component: Home
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401')
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404')
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter () {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
