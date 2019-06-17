// const _meta = { requiresAuth: true }

export default [
  {
    path: '/',
    name: 'home',
    meta: { hideTabBar: false },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '@/views/category')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/cart')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user')
  }
]
