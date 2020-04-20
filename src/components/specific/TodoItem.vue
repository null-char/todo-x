<template>
  <li class="todo-item">
    <div class="text-wrapper" @click="changeCompletionStatus">
      <p class="task-text" :class="taskTextClasses">{{ todo.task }}</p>
    </div>

    <div class="actions">
      <check-box v-model="isCompleted" :checkId="todo.id" />
      <font-awesome-icon class="trash-icon" icon="trash" @click="deleteTodo" />
    </div>
  </li>
</template>

<script lang="ts">
/**
 * reflect-metadata must be imported first before vue-property-decorator
 * This allows us to set the type property of a prop from its type definition
 */
import 'reflect-metadata';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import TodoModule from '@/store/modules/TodoModule';
import CheckBox from '@/components/shared/CheckBox.vue';
import Todo from '@/types/Todo';

const todoMod = getModule(TodoModule);

@Component({
  components: {
    CheckBox,
  },
})
export default class TodoItem extends Vue {
  @Prop({ required: true }) public readonly todo!: Todo;
  public isCompleted = false;

  public deleteTodo() {
    todoMod.removeTodo(this.todo.id);
  }

  public get taskTextClasses() {
    return {
      completed: this.isCompleted,
    };
  }

  public changeCompletionStatus() {
    this.isCompleted = !this.isCompleted;
  }

  @Watch('isCompleted')
  private onCompleteStatusChange() {
    todoMod.setTodoIsComplete({ id: this.todo.id, value: this.isCompleted });
  }
}
</script>

<style lang="scss" scoped>
@import '../../utils/colors';
@import '../../utils/mixins';

.todo-item {
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 1.5rem 2rem;
  border-bottom: 0.1rem solid #{$primary}40;
  background-color: transparent;
  width: 100%;
  height: fit-content;
  column-gap: 1.5rem;

  & > .text-wrapper {
    height: 100%;
    width: 100%;

    & > .task-text {
      display: block;
      white-space: normal;
      word-break: break-word;
      font-size: 1.8rem;
      position: relative;
      width: fit-content;
      transition: all 0.2s ease-in-out;

      &::before {
        content: '';
        margin-top: 1.15rem;
        display: block;
        position: absolute;
        height: 0.2rem;
        transform: translateY(-50%) scaleX(0);
        background-color: $white;
        width: 100%;
        transition: transform 0.2s ease-in-out;
        transform-origin: left;
      }

      &.completed {
        color: rgba(255, 255, 255, 0.6);

        &::before {
          transform: translateY(-50%) scaleX(1);
        }
      }
    }
  }

  .actions {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;

    .trash-icon {
      margin-left: 2rem;
      color: $secondary;
      font-size: 1.8rem;
      opacity: 0.8;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      @include color-shadow($secondary);

      &:hover {
        animation: jiggleAnimation 0.2s 3 ease-in-out;
      }

      &:active {
        transform: scale(0.9);
      }

      @keyframes jiggleAnimation {
        25% {
          transform: rotate(10deg);
        }
        75% {
          transform: rotate(-10deg);
        }
      }
    }
  }
}
</style>
