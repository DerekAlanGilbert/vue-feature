# Basic usage

Lightweight directive and instance method in vuejs for feature toggling based on configuration keys in your `feature.config.js` file.

### In your feature.config.js
```js
export default {
	'specific-feature-toggle': {
		status: true
	}
}
```

### In your main.js

```js
import vueFeature from 'vue-feature'
import config from '../path-to-config/feature.config'

Vue.use(vueFeature,config)
```

### In your markup

```html
<div v-feature:specific-feature-toggle>
</div>
```

### In your javascript

```js

mounted(){
  this.$feature('specific-feature-toggle') ? this.dothis() : this.doThat()
}
```
