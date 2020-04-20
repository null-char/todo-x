<template>
  <div class="add-todo">
    <form class="todo-form" v-on:submit.prevent="onSubmit">
      <styled-input v-model="taskInput" placeholder="Enter task" />
      <styled-button :secondary="true" :disabled="isBtnDisabled" type="submit"
        >Add Todo</styled-button
      >
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { v4 as uuid } from 'uuid';
import TodoModule from '@/store/modules/TodoModule';
import StyledInput from '@/components/shared/StyledInput.vue';
import StyledButton from '@/components/shared/StyledButton.vue';
import { Todo } from '@/types/Todo';

// typesafe module accessor 👌
const todoMod = getModule(TodoModule);

@Component({
  components: {
    StyledButton,
    StyledInput,
  },
})
export default class AddTodo extends Vue {
  public taskInput = '';

  public onSubmit() {
    if (this.taskInput) {
      const task = this.taskInput;
      this.taskInput = '';

      const newTodo: Todo = {
        id: uuid(),
        task,
        isCompleted: false,
      };

      todoMod.addTodo(newTodo);
    }
  }

  public get isBtnDisabled() {
    return !this.taskInput ? true : false;
  }
}
</script>

<style lang="scss" scoped>
@import '../../utils/colors';

.add-todo {
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-color: $card-background;

  .todo-form {
    display: grid;
    grid-template-rows: repeat(2, min-content);
    justify-content: stretch;
    align-content: center;
    row-gap: 3rem;
    width: 100%;
    height: 100%;
    padding: 0rem 3rem;
  }
}
</style>
