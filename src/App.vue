<template>
  <div id="app">
    <h1 v-feature:can-see-vue-logo>A Feature toggle is letting you see this heading</h1>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <pre>
        {{item}}
        </pre>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    this.$feature("can-use-users-api-v1") ?  this.getDataV1() : this.getDataV2()
  },
  methods: {
    ...mapActions("demo", ["getDataV1", "getDataV2"]),
  },
  computed: {
    ...mapGetters("demo", ["data", "user"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
ul > li {
  background-color: #2c3e50;
  color: #41B883;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
}
</style>
