import pkg from 'single-spa-vue';
const {registerApplication, start} = pkg;


registerApplication({
    name : "vue-app", 
    app: () => import('./src/main')
    , activeWhen: ["/"]
})

start();