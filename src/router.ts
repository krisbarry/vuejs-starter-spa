import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'about',
      path: '/about',
      // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */'./views/AboutUs.vue'),
    },
    {
      name: 'faqs',
      path: '/faqs',
      component: () => import(/* webpackChunkName: "faqs" */'./views/FAQs.vue'),
    },
    {
      name: 'search',
      path: '/search/:searchTerm',
      component: () => import(/* webpackChunkName: "search" */'./views/Search.vue'),
    },
  ],
});
