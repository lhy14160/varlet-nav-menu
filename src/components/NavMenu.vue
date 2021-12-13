<template>
  <var-popup position="left" v-model:show="isShowPopup">
    <div class="sider">
      <NavMenuItem :data="menuData" @onChange="onChange" />
    </div>
  </var-popup>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, toRaw } from "vue";
import NavMenuItem from "./NavMenuItem.vue";
import { initMenuData, findKeys, updatePathByKey } from "./utils";
import { MenuItem } from "./types";

export default defineComponent({
  name: "NavMenu",
  components: {
    NavMenuItem,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  emit: ["onMenuChange"],
  setup(props, { emit }) {

    const isShowPopup = ref(true);
    const menuData = reactive(props.options);

    initMenuData(menuData as MenuItem[]);
    updatePathByKey(menuData as MenuItem[], props.modelValue);

    const onChange = (changeItem: MenuItem) => {
      const openKeys = findKeys(menuData as MenuItem[]);
      emit("onMenuChange", openKeys, toRaw(changeItem));
    };
    provide("onChange", onChange);

    return {
      isShowPopup,
      menuData,
      onChange,
    };
  },
});
</script>

<style>
.sider {
  width: 200px;
}
</style>