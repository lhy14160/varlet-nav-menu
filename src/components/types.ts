export type MenuItemKey = string | number;
export type MenuItemLabel = string | number;
export type MenuItemIcon = string | Function | Object;
export type MenuItemIdent = string | number;

export interface MenuItem {
  key: MenuItemKey;
  label: MenuItemLabel;
  icon?: MenuItemIcon;
  ident?: MenuItemIdent;
  children?: MenuItem[];
  isOpen?: Boolean;
}
