import { createRouter, createWebHistory } from "vue-router";
import CoachList from './components/pages/coaches/CoachList.vue';
import CoachDetails from './components/pages/coaches/CoachDetails.vue';
import CoachRegister from './components/pages/coaches/CoachRegister.vue';
import RequestList from './components/pages/requests/RequestList.vue';
import ContactCoach from './components/pages/requests/ContactCoach.vue';
import NotFound from './components/pages/NotFound.vue';
import UserAuth from './components/pages/auth/UserAuth.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id', component: CoachDetails, props: true,
            children: [
                { path: 'contact', component: ContactCoach },
            ]
        },
        { path: '/register', component: CoachRegister },
        { path: '/requests', component: RequestList },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;