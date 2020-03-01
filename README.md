# Basic usage

```js
// In feature.config.js
export default {
	'specific-feature-toggle': {
		status: true
	}
}
```

```js
// In main.js
import vueFeature from 'vue-feature'
import config from '../path-to-config/feature.config'

Vue.use(vueFeature,config)
```

```html
<div v-feature:specific-feature-toggle>
</div>
```

```js
// in js, example in vue's mounted lifecycle hook
mounted(){
  this.$feature('specific-feature-toggle') ? this.dothis() : this.doThat()
}
```
