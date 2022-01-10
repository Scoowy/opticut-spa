import { App } from 'vue';

import { router } from './router';
import { BootstrapVue3 } from './bootstrap-vue';

export default {
  install(vue: App) {
    vue.use(router);
    vue.use(BootstrapVue3);
  },
};
