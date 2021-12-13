<script setup lang="ts">
import NavMenu from "./components/NavMenu.vue";
import type { MenuItemKey, MenuItem } from "./components/types";
const options = [
  {
    key: "1",
    label: "一级菜单1",
    icon: "star",
    ident: 20,
    children: [
      {
        key: "1-1",
        label: "二级菜单1",
        icon: "star",
        ident: 20,
        children: [
          {
            key: "1-1-1",
            label: "三级菜单1",
            icon: "star",
          },
          {
            key: "1-1-2",
            label: "三级菜单2",
            icon: "star",
          },
        ],
      },
      {
        key: "1-2",
        label: "二级菜单2",
        icon: "star",
        ident: 20,
        children: [
          {
            key: "1-2-1",
            label: "三级菜单3",
            icon: "star",
          },
          {
            key: "1-2-2",
            label: "三级菜单4",
            icon: "star",
          },
        ],
      },
      {
        key: "1-3",
        label: "二级菜单3",
        icon: "star",
      },
    ],
  },
  {
    key: "2",
    label: "一级菜单2",
    icon: "star",
    ident: 20,
    children: [
      {
        key: "2-1",
        label: "二级菜单1",
        icon: "star",
      },
      {
        key: "2-2",
        label: "二级菜单2",
        icon: "star",
      },
      {
        key: "2-3",
        label: "二级菜单3",
        icon: "star",
      },
    ],
  },
];
const onMenuChange = (openKeys: MenuItemKey[], changeItem: MenuItem) => {
  console.log(openKeys, changeItem);
};
const key = "1-2-2";
</script>

<template>
  <NavMenu
    :options="options"
    @onMenuChange="onMenuChange"
    v-model="key"
    accordion
  />
</template>