<template>
  <button class="styled-button" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StyledButton extends Vue {
  @Prop() public readonly secondary!: boolean;

  public get classes() {
    return {
      secondary: this.secondary,
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../utils/colors';
@import '../../utils/mixins';

// all the styles that are changed according to class
@mixin button-styles($color) {
  color: $color;
  border: 0.2rem solid $color;
  @include color-shadow($color);

  &:hover {
    @include color-shadow-hover($color);
  }

  &:active {
    @include color-shadow($color);
  }

  &:disabled {
    opacity: 0.8;
    box-shadow: none;
    cursor: default;

    &:hover,
    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
}

.styled-button {
  @include button-styles($primary);
  outline: none;
  border-radius: 0.3rem;
  cursor: pointer;
  padding: 1rem 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  width: 100%;
  font-size: 2rem;

  &:hover {
    transform: translateY(-0.1rem);
  }

  &:active {
    transform: translateY(0.1rem);
  }

  &.secondary {
    @include button-styles($secondary);
  }
}
</style>
