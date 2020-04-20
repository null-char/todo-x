<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import './utils/colors';

#app {
  height: 100vh;
  width: 100vw;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  color: inherit;
  -webkit-tap-highlight-color: inherit;
}

html,
body {
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  background-color: $background;
  color: $white;
  -webkit-tap-highlight-color: transparent;
}
</style>
