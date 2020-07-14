import './App.css';
import { defineComponent, SetupContext } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld';
import ImageLogo from './assets/logo.png';

export default defineComponent({
  name: 'App',
  setup(props, ctx: SetupContext) {
    const h = ctx.root.$createElement
    return () => (
      <div id="app">
        <img alt="Vue" src={ImageLogo} />
        <HelloWorld
          msg="Welcome to Your Vue.js + TypeScript App"
          eventClick={e => console.log('click', e.target)}
        />
      </div>
    );
  },
});
