import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    },
    {
        path: '/',
        name: 'Main',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    },
    {
        path: '/leaderboards',
        name: 'Leaderboards',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Leaderboards.vue'),
    },
    {
        path: '/leaderboard/SpaceJumper',
        name: 'Leaderboards',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Leaderboard-staticue.vue'
            ),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import(/* webpackChunkName: "dashboard" */ '../views/Profile.vue'),
        meta: {
            authRequired: true,
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router;
