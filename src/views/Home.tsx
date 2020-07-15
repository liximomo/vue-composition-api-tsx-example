import { defineComponent } from '@vue/composition-api';
import HelloWorld from '../components/HelloWorld';
import ImageLogo from '../assets/logo.png';

export default defineComponent({
    name: 'Home',
    setup() {
        return () => (
            <div>
                <img alt="Vue" src={ImageLogo} />
                <HelloWorld
                    msg="Welcome to Your Vue.js + TypeScript App"
                    eventClick={e => console.log('click', e.target)}
                />
            </div>
        );
    }
});