import Vue from 'vue';
import VueCompositionApi, { createApp } from '@vue/composition-api';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

const app = createApp(App);
app.mount('#app');
