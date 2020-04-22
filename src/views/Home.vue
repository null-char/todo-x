<template>
  <div class="home">
    <div class="tasks-container">
      <h1 class="heading">
        <heading-text>My Tasks</heading-text>
      </h1>
      <div class="filter-select-container">
        <todos-filter-select />
      </div>
      <todos-list />
    </div>

    <add-todo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import TodoModule from "@/store/modules/TodoModule";
import TodosList from "@/components/specific/TodosList.vue";
import AddTodo from "@/components/specific/AddTodo.vue";
import TodosFilterSelect from "@/components/specific/TodosFilterSelect.vue";
import HeadingText from "@/components/shared/HeadingText.vue";

const todoMod = getModule(TodoModule);

@Component({
  components: {
    TodosList,
    AddTodo,
    TodosFilterSelect,
    HeadingText
  }
})
export default class Home extends Vue {
  get hasTodos() {
    return todoMod.hasTodos;
  }
}
</script>

<style lang="scss" scoped>
@import "../utils/media";

.home {
  position: relative;
  display: grid;
  grid-template-rows: 2.7fr 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @include tablet {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 3fr;

    .tasks-container {
      grid-area: 1 / 2 / 1 / 3;
    }
  }

  .tasks-container {
    display: grid;
    grid-template-rows: 0.3fr 0.1fr 4fr;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    & > .heading {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 1rem 2rem;
    }
  }

  .filter-select-container {
    padding: 1rem 1rem;
    width: 60%;
  }
}
</style>
