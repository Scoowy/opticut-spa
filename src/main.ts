import { createApp } from 'vue';
import App from './App.vue';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

//plugins
import plugins from './plugins';

// Run app
const app = createApp(App);
app.use(plugins);
app.mount('#app');
