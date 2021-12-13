<template>
  <var-popup :position="position" v-model:show="isShowPopup">
    <div class="sider">
      <NavMenuItem :data="menuData" @onChange="onChange" />
    </div>
  </var-popup>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, toRaw, watch } from "vue";
import NavMenuItem from "./NavMenuItem.vue";
import { initMenuData, findKeys, updatePathByKey } from "./utils";
import { MenuItem } from "./types";

export default defineComponent({
  name: "NavMenu",
  inheritAttrs: false,
  components: {
    NavMenuItem,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    activeKey: {
      type: [String, Number],
      default: null,
    },
    accordion: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "left",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  emit: ["onMenuChange", "update:show"],
  setup(props, { emit }) {
    const isShowPopup = ref(true);
    const menuData = reactive(props.options);

    initMenuData(menuData as MenuItem[]);
    updatePathByKey(menuData as MenuItem[], props.activeKey);

    watch(isShowPopup, (v) => void emit("update:show", v));
    watch(
      () => props.show,
      (v) => (isShowPopup.value = v)
    );

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