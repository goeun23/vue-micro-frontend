import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#app",
    render: (h) => h(App),
    router,
    store,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
