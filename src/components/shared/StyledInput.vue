<template>
  <input
    class="styled-input"
    :value="value"
    @input.stop="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StyledInput extends Vue {
  @Prop() public readonly value!: string;
}
</script>

<style lang="scss" scoped>
@import '../../utils/colors';
@import '../../utils/mixins';

.styled-input {
  outline: none;
  border: 2px solid $primary;
  transition: border-width 0.2s ease-in-out;
  @include color-shadow($primary);
  background-color: transparent;
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  font-family: inherit;
  font-size: 1.6rem;

  &:focus {
    border-width: 3px;
  }
}
</style>
