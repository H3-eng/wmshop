import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import './common/stylus/mixins.styl'
import './assets/css/reset.css'
import store from './store'
/** font-awesome*/
import 'font-awesome/css/font-awesome.css'
/**MintUI */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})