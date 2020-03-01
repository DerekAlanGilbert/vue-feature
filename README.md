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
// In template
<div v-feature:specific-feature-toggle>
// some content
</div>
```

```js
mounted(){
  this.$feature('specific-feature-toggle') ? this.dothis() : this.doThat()
}
```
