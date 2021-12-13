### Varlet折叠菜单组件

## 功能

### 1. 组件基本展示 ✅

### 2. 状态change通知NavMenu ✅

### 3. 根据传入的初始值默认展开菜单 ✅

### 4. 单例（手风琴）模式 

### 5. icon优化（支持object，function）

### 6. ident

### 7. others 样式、右侧icon、插槽...

## 问题

### 1. item递归的位置

![image-20211213161359690](/Users/lihangyu/Library/Application Support/typora-user-images/image-20211213161359690.png)

当前版本是在item内部递归，目的是：item和group的逻辑拆分开来，item负责根据数据显示，group负责处理数据，缺点：可能让人看着不爽

### 2. 通过provide/inject 实现子通知父 隐患？

