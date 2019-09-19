import style from './HelloWorld.module.css';
import { createComponent, PropType } from '@vue/composition-api';

export default createComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
    // Note that this prop must not start with on, otherwise Babel plugin will catch it and process 
    // it as an event listener and store it to setupContext.listeners.
    // For type-safety, we should use function props instead of vue listeners. The prefix "event" is
    // for consistence.
    eventClick: {
      type: (null as unknown) as PropType<(event: MouseEvent) => void>,
    }
  },
  setup(props) {
    return () => (
      <div>
        <h1 onClick={props.eventClick}>{props.msg}</h1>
        <p>
          For a guide and recipes on how to configure / customize this project,
          <br />
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
            vue-cli documentation
          </a>
          .
        </p>
        <h3 class={style.listTitle}>Installed CLI Plugins</h3>
        <ul class={style.list}>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
              target="_blank"
              rel="noopener"
            >
              babel
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
              target="_blank"
              rel="noopener"
            >
              typescript
            </a>
          </li>
        </ul>
        <h3 class={style.listTitle}>Essential Links</h3>
        <ul class={style.list}>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Core Docs
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://forum.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Forum
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://chat.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Community Chat
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://twitter.com/vuejs"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://news.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              News
            </a>
          </li>
        </ul>
        <h3 class={style.listTitle}>Ecosystem</h3>
        <ul class={style.list}>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://router.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              vue-router
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://vuex.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              vuex
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://github.com/vuejs/vue-devtools#vue-devtools"
              target="_blank"
              rel="noopener"
            >
              vue-devtools
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://vue-loader.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              vue-loader
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://github.com/vuejs/awesome-vue"
              target="_blank"
              rel="noopener"
            >
              awesome-vue
            </a>
          </li>
        </ul>
      </div>
    );
  },
});
