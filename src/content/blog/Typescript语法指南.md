---
标题: "Ts 语法指南"
描述: "Typescript 的基本语法"
发布日期: "2025-06-06"
图片: "/blogs/blog-placeholder-1.jpg"
---

## 设置编译类型

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

通过上述案例可以看出，`ts` 的编译器还是非常灵活的，目前已经实现了条件编译，可以将同一个项目中的不同`tsx`文件根据不同的配置规则进行编译。

## 总结
