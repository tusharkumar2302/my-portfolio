import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/certificate',
    name: 'certificate',
    // Tidak perlu komponen karena akan langsung redirect
    beforeEnter: (to, from, next) => {
      // Buka tautan Google Drive di tab atau jendela baru
      window.open('https://drive.google.com/drive/folders/1oFNYvsYlel-5rKdFisMw1FHWN5FUkMGR', '_blank');
      // Berikan instruksi ke Vue Router untuk tidak menjalankan rute ini
      next(false);
    },
    meta: { title: 'certificate' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' Tushar Kumar'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router
