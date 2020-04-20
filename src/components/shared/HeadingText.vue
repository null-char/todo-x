<template>
  <span class="heading-text">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeadingText extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../utils/colors";

.heading-text {
  font-family: "Fira Sans", serif;
  font-weight: 400;
  font-size: 4rem;
  color: $white;
}
</style>
