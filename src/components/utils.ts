import { MenuItem, MenuItemKey } from "./types";

export const initMenuData = (data: MenuItem[]) => {
  for (let index = 0; index < data.length; index++) {
    data[index].isOpen = false;
    if (data[index].children) {
      initMenuData(data[index].children!);
    }
  }
};

export const findKeys = (menuData: MenuItem[]): MenuItemKey[] => {
  const keys: MenuItemKey[] = [];
  const mapKey = (menus: MenuItem[]) => {
    for (let index = 0; index < menus.length; index++) {
      // ？父级不展开则认为其子级全部属于关闭
      if (menus[index].isOpen) {
        if (menus[index].children && menus[index].children!.length > 0) {
          keys.push(menus[index].key);
          mapKey(menus[index].children!);
        }
      }
    }
  };
  mapKey(menuData);
  return keys;
};

export const checkKeys = (key: any) => {
  return [undefined, null, ""].includes(key);
};

export const updatePathByKey = (
  forest: MenuItem[],
  key: string | number | undefined | null
) => {
  if (checkKeys(key)) return;
  for (let index = 0; index < forest.length; index++) {
    if (forest[index].children && forest[index].children!.length > 0) {
      updatePathByKey(forest[index].children!, key);
    }
    forest[index].isOpen = forest[index].key === key;
    if (forest[index].children?.some(item => item.isOpen)) {
      forest[index].isOpen = true;
    }
  }
};

export const closeOthers = (forest: MenuItem[], key: MenuItemKey) => {
  if (checkKeys(key)) return;
  
};
