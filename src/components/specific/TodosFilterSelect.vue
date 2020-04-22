<template>
  <div class="filter-select">
    <select name="filter" v-model="filter" title="Filter By">
      <option value="all" selected>All Todos</option>
      <option value="completed">Completed Todos</option>
      <option value="incomplete">Incomplete Todos</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import TodoModule from "@/store/modules/TodoModule";

const todoMod = getModule(TodoModule);

@Component
export default class TodosFilterSelect extends Vue {
  public filter = "all";

  @Watch("filter")
  private onFilterChange() {
    todoMod.updateFilter(this.filter);
  }
}
</script>

<style lang="scss" scoped>
@import "../../utils/colors";
@import "../../utils/media";

.filter-select {
  position: relative;
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: $card-background;
  overflow: hidden;
  border-radius: 1rem;

  @include tablet {
    width: 20rem;
  }

  &::after {
    content: "\25BC";
    height: 100%;
    width: 10%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
    pointer-events: none;
    color: $white;
  }

  & > select {
    width: 100%;
    height: 100%;
    padding: 0rem 1rem;
    color: $white;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: inherit;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: $card-background;
    background-image: none;
    appearance: none;
  }
}
</style>
