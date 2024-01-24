
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/products', component: () => import('pages/Products.vue') },
      { path: '/add-product', component: () => import('pages/AddProduct.vue') },
      { path: '/', component: () => import('pages/About.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
