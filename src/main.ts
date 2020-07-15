import Vue from 'vue';
import VueCompositionApi, { createApp } from '@vue/composition-api';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

const app = createApp({
  ...App,
  router
});

app.mount('#app');
