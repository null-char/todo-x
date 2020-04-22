import store from '@/store';
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import Todo from '@/types/Todo';

//! The store must be passed into the Module decorator for dynamic modules to work
@Module({ dynamic: true, store, namespaced: true, name: 'todo' })
export default class TodoModule extends VuexModule {
  private _todos: Todo[] = [];
  public filter = '';

  get todos() {
    switch (this.filter) {
      case 'all':
        return this._todos;
      case 'completed':
        return this.completedTodos;
      case 'incomplete':
        return this.incompleteTodos;
      default:
        return this._todos;
    }
  }

  get completedTodos() {
    return this._todos.filter((t) => t.isCompleted);
  }

  // incomplete refers to todos that are still due to be done
  get incompleteTodos() {
    return this._todos.filter((t) => !t.isCompleted);
  }

  // getter which computes whether or not there are any todos in the list
  get hasTodos() {
    return this._todos.length !== 0;
  }

  @Mutation
  addTodo(payload: Todo) {
    this._todos.push(payload);
  }

  @Mutation
  setTodoIsComplete(payload: { id: string; value: boolean }) {
    const idx = this._todos.findIndex((t) => t.id === payload.id);
    this._todos[idx].isCompleted = payload.value;
  }

  @Mutation
  removeTodo(id: string) {
    this._todos = this._todos.filter((t) => t.id !== id);
  }

  @Mutation
  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }
}
