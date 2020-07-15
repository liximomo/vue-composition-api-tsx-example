import './App.css';
import { defineComponent } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld';
import ImageLogo from './assets/logo.png';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="app">
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/foo">foo</router-link></li>
        </ul>
        <router-view></router-view>
      </div>
    );
  },
});
