import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact/ContactPage.vue')
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import('@/pages/Sales/SalesPage.vue')
  },
  // category
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/pages/Category/CategoryAll/CategoriesPage.vue'),
  },
  {
    path: '/category/:category',
    name: 'CategoryName',
    component: () => import('@/pages/Category/CategoryPage.vue')
  },
  // category
  {
    path: '/new',
    name: 'New',
    component: () => import('@/pages/New/NewPage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/pages/Cart/CartPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/pages/Error/ErrorPage.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: () => import('@/pages/Product/ProductPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 
