<template>
  <div class="check-box">
    <input
      :id="checkId"
      type="checkbox"
      :checked="value"
      @change.stop="$emit('input', $event.target.checked)"
    />
    <label :for="checkId">
      <span></span>
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CheckBox extends Vue {
  @Prop() public readonly value!: boolean;
  @Prop({ required: true }) public readonly checkId!: string;
}
</script>

<style lang="scss" scoped>
@import '../../utils/colors';

.check-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type='checkbox'] {
  height: 0;
  width: 0;

  & + label {
    position: relative;
    display: flex;
    align-items: center;
    color: $white;
    transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.8rem;
      height: 1.8rem;
      background: transparent;
      border: 0.2rem solid $white;
      border-radius: 0.2rem;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
    }
  }

  & + label:hover > span,
  &:focus + label > span {
    border: 0.3rem solid $white;
  }

  &:checked + label > span {
    animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
    background-color: $white;

    &::before {
      content: '';
      position: absolute;
      top: 0.6em;
      left: 0.2em;
      border-right: 0.3rem solid transparent;
      border-bottom: 0.3rem solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1)
        forwards;
    }
  }

  @keyframes shrink-bounce {
    0% {
      transform: scale(1);
    }
    33% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes checkbox-check {
    0% {
      width: 0;
      height: 0;
      border-color: $background;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    33% {
      width: 0.8rem;
      height: 0;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    100% {
      width: 0.8rem;
      height: 1.2rem;
      border-color: $background;
      transform: translate3d(0, -0.9rem, 0) rotate(45deg);
    }
  }
}
</style>
