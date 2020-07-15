import { defineComponent } from '@vue/composition-api';
import HelloWorld from '../components/HelloWorld';
import ImageLogo from '../assets/logo.png';

export default defineComponent({
    name: 'Home',
    setup() {
        return () => (
            <div>
                <h1>Foo Page</h1>
            </div>
        );
    }
});