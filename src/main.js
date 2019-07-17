import Vue from 'vue'
import App from './App.vue'
import store from './state/store'
import featureConfig from './features.config'
import feature from './lib/feature'

Vue.use(feature, featureConfig)

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
