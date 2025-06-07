---
title: "Ts 语法指南"
description: "Typescript 的基本语法"
pubDate: "2025-06-06"
heroImage: "/blogs/blog-placeholder-1.jpg"
---

## 设置 tsx 编译类型

通常来说一个前端项目只会使用一种框架，或者使用`react`或者使用`vue`，但是`astro`中可以同时使用多种编程框架。此时就可以在文件上方进行指定。

```tsx
/** @jsxImportSource react */
// 上面那行表示该 tsx 文件将会使用react进行编译
export default function Page() {
  return <div>react</div>;
}
```

而对于像`solid-js`这种也使用`jsx`语法的框架而言，则可以在`tsconfig.json`中配置解析方式：

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "solid-js"
  }
}
```
