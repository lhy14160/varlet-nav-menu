<template>
  <div class="var-nav" v-for="item of data" :key="item.key">
    <div class="var-nav-title" @click="handleClick(item)">
      <var-icon class="var-nav-title__icon" :name="item.icon" />
      <span class="var-nav-title__label" v-text="item.label" />
      <var-icon
        class="var-nav-title__close"
        v-if="hasChildren(item)"
        :name="item.isOpen ? 'chevron-up' : 'chevron-down'"
      />
    </div>

    <div
      class="var-nav-content"
      v-show="item.isOpen"
      ref="navParcel"
      :style="{ paddingLeft: `${item.ident}px` }"
    >
      <NavMenuItem
        v-if="hasChildren(item)"
        :data="item.children"
        @onChange="onChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
import { MenuItem } from "./types";

export default defineComponent({
  name: "NavMenuItem",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["onChange"],
  setup(props, { emit }) {
    const onChange = inject("onChange");

    const hasChildren = (item: MenuItem) =>
      item.children && item.children.length > 0;

    const handleClick = (item: MenuItem) => {
      item.isOpen = !item.isOpen;
      emit("onChange", item);
    };

    return {
      hasChildren,
      handleClick,
      onChange,
    };
  },
});
</script>

<style>
.var-nav-title {
  display: flex;
}
.var-nav-title__label {
  flex-grow: 1;
}
.var-nav-title__close {
  padding-right: 15px;
}
</style>