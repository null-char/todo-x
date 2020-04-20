<template>
  <main class="home">
    <h1 class="heading">
      <heading-text>My Tasks</heading-text>
    </h1>
    <todos-list />
    <add-todo />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodosList from "@/components/specific/TodosList.vue";
import AddTodo from "@/components/specific/AddTodo.vue";
import HeadingText from "@/components/shared/HeadingText.vue";

@Component({
  components: {
    TodosList,
    AddTodo,
    HeadingText
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: grid;
  grid-template-rows: min-content 3fr 1.3fr;
  height: 100%;
  width: 100%;

  & > .heading {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 1rem 2rem;
  }
}
</style>
