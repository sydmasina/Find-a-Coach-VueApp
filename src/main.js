import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './components/store/index.js';
import BaseCard from './components/minicomps/ui/BaseCard.vue';
import BaseButton from './components/minicomps/ui/BaseButton.vue';
import BaseBadge from './components/minicomps/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
