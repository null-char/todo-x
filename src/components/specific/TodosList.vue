<template>
  <ul class="todos-list" v-if="hasTodos">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
  <div v-else class="fallback">
    <span>No tasks yet! Try adding one.</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import TodoModule from '@/store/modules/TodoModule';
import TodoItem from '@/components/specific/TodoItem.vue';

const todoMod = getModule(TodoModule);

@Component({
  components: {
    TodoItem,
  },
})
export default class TodosList extends Vue {
  public get todos() {
    return todoMod.todos;
  }

  public get hasTodos() {
    return this.todos.length !== 0;
  }
}
</script>

<style lang="scss" scoped>
.todos-list {
  list-style: none;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 3rem 0rem;
  margin: 0;
}

.fallback {
  padding: 3rem 2rem;

  & > span {
    font-size: 1.8rem;
  }
}
</style>
