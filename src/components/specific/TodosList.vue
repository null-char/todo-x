<template>
  <main class="todos-list">
    <transition-group tag="ul" name="slide" class="list-container">
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </transition-group>

    <transition name="fade">
      <span v-if="!hasTodos" class="fallback">No tasks yet! Try adding one.</span>
      <span v-else-if="isFilteredTodosEmpty" class="fallback">No todos for this filter.</span>
    </transition>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import TodoModule from "@/store/modules/TodoModule";
import TodoItem from "@/components/specific/TodoItem.vue";

const todoMod = getModule(TodoModule);

@Component({
  components: {
    TodoItem
  }
})
export default class TodosList extends Vue {
  public get todos() {
    return todoMod.todos;
  }

  public get hasTodos() {
    return todoMod.hasTodos;
  }

  public get isFilteredTodosEmpty() {
    return this.todos.length === 0;
  }
}
</script>

<style lang="scss" scoped>
/* $bezier-curve: cubic-bezier(0.27, 1.72, 0.38, 0.92); */
$bezier-curve: cubic-bezier(0.18, 0.31, 0, 1.51);

.todos-list {
  width: 100%;
  height: 100%;
  display: block;
  padding-bottom: 6rem;
  overflow-y: auto;
  overflow-x: hidden;

  & > .list-container {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & > .fallback {
    display: block;
    font-size: 1.8rem;
    margin: 1.5rem 2rem;
  }
}

.slide-move {
  transition: transform 1s $bezier-curve;
}

.slide-enter-active {
  transition: all 0.75s $bezier-curve;
}

.slide-leave-active {
  position: absolute;
  transition: all 0.6s ease-in-out;
}

.slide-enter {
  transform: translateX(-110%);
}

.slide-leave-to {
  transform: translateX(110%);
}

.fade-enter-active {
  transition: all 0.25s ease-in-out;
  transition-delay: 0.6s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
