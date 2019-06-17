import layout from '@/views/layout'

const meta = { requiresAuth: true }
const pre = '/index/'

export default [
  {
    path: '/index/',
    name: 'demo-index',
    meta,
    redirect: { name: 'dashboard' },
    component: layout,
    children: [
      { path: `${pre}dashboard`, name: `dashboard`, component: () => import('@/views/home/dashboard'), meta: { ...meta, title: '公告板' } },
      { path: `${pre}test`, name: `test`, component: () => import('@/views/other/test'), meta: { ...meta, title: '测试菜单' } }
    ]
  }
]
