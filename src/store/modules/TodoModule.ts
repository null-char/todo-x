import store from '@/store';
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import Todo from '@/types/Todo';

//! The store must be passed into the Module decorator for dynamic modules to work
@Module({ dynamic: true, store, namespaced: true, name: 'todo' })
export default class TodoModule extends VuexModule {
  todos: Todo[] = [];

  get completedTodos() {
    return this.todos.filter((t) => t.isCompleted);
  }

  // incomplete refers to todos that are still due to be done
  get incompleteTodos() {
    return this.todos.filter((t) => !t.isCompleted);
  }

  @Mutation
  addTodo(payload: Todo) {
    this.todos.push(payload);
  }

  @Mutation
  setTodoIsComplete(payload: { id: string; value: boolean }) {
    const idx = this.todos.findIndex((t) => t.id === payload.id);
    this.todos[idx].isCompleted = payload.value;
  }

  @Mutation
  removeTodo(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
