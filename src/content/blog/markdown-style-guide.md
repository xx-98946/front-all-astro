---
title: "Markdown 语法指南"
description: "在 astro 中编写 Markdown 的基本语法"
pubDate: "Jun 19 2024"
heroImage: "/blogs/blog-placeholder-1.jpg"
---

在 astro 中编写 Markdown 的基本语法

## 标题

下面六个 HTML标签 `<h1>`—`<h6>` 代表六中标题。 `<h1>` 是最高级的标题，而 `<h6>` 是最低级的。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

段落就是一段直接用于描述的文字，只要换行就是更换为新一个段落了。

## 图片

### 语法

```markdown
![替换文本](链接地址)
```

### 输出

![占位文字](/blogs/blog-placeholder-about.jpg)

## 引用

引用表示标签中的内容来自另一个参考地址，不是作者自己说的。可选的可以使用`footer` 或者 `cite` 标签添加标题，也可以设置引用样式如斜体等。

### 普通引用

#### 语法

```markdown
> 这是引用内容，这是引用内容，这是引用内容，这是引用内容，
> 在引用中可以使用 `markdown` 的样式语法设置 **加粗** _斜体_
```

#### 输出

> 这是引用内容，这是引用内容，这是引用内容，这是引用内容，
> 在引用中可以使用 `markdown` 的样式语法设置 **加粗** _斜体_

### 附属性引用

#### 语法

```markdown
> 不要通过共享内存进行通信，而是通过通信共享内存.
>
> — <cite>Rob Pike[^1]</cite>
>
> 引用内部不会换行，可以通过追加 > 进行空行占位
>
> [^1] 这个表示引用地址，可以在外部设置同下标的内容，点击可以跳转

[^1]: 上述内容摘录在2015年11月18日 `Gopherfest` 大会中 `Rob Pike` 的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)
```

#### 输出

> 不要通过共享内存进行通信，而是通过通信共享内存.
>
> — <cite>Rob Pike[^1]</cite>
>
> 引用内部不会换行，可以通过追加 > 进行空行占位
>
> [^1] 这个表示引用地址，可以在外部设置同下标的内容，点击可以跳转

[^1]: 上述内容摘录在2015年11月18日 `Gopherfest` 大会中 `Rob Pike` 的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)

## 表格

### 语法

```markdown
| 斜体   | 加粗     | 代码   |
| ------ | -------- | ------ |
| _斜体_ | **加粗** | `代码` |
```

### 输出

| 斜体   | 加粗     | 代码   |
| ------ | -------- | ------ |
| _斜体_ | **加粗** | `代码` |

## 代码块

### 语法

可以在新行中使用三个反引号 \`\`\` （更多个也可以，闭合时使用相同数量），为了显示高亮，其后可以紧跟着使用的编程语言，在添加完代码片段后，同样使用三个反引号 \`\`\` 进行闭合，支持的语言不限于`html, javascript, css, markdown, typescript, txt, bash` 等。

````markdown
```html
<!doctype html>
<html lang="zh">
  <head>
    <meta charset="utf-8" />
    <title>HTML5文档代码片段</title>
  </head>
  <body>
    <p>测试内容</p>
  </body>
</html>
```
````

### 输出

```html
<!doctype html>
<html lang="zh">
  <head>
    <meta charset="utf-8" />
    <title>HTML5文档代码片段</title>
  </head>
  <body>
    <p>测试内容</p>
  </body>
</html>
```

## 列表

### 有序列表

#### 语法

```markdown
1. 第一项
2. 第二项
3. 第三项
```

#### 输出

1. 第一项
2. 第二项
3. 第三项

### 无序列表

#### 语法

```markdown
- 列表项
- 另一个列表项
- 以及另一个列表项
```

#### 输出

- 列表项
- 另一个列表项
- 以及另一个列表项

### 嵌套列表

#### 语法

```markdown
- 水果
  - 苹果
  - 橘子
  - 香蕉
- 奶制品
  - 牛奶
  - 奶酪
```

#### 输出

- 水果
  - 苹果
  - 橘子
  - 香蕉
- 奶制品
  - 牛奶
  - 奶酪

## 其他标签

如 abbr, sub, sup, kbd, mark

`markdown` 其实就是一种简化的`html`方言，尽量减少`html`本身样式和排版带来的复杂性，主要目的是为了专注于内容的编写，不必被样式所分心。

但是`markdown`本身是被处理为`html`而后进行渲染的，所以任何在`html`中可用的标签在`markdown`中都是可以正常使用的，包括样式和脚本等。

### 语法

```html
<abbr title="Graphics Interchange Format">GIF</abbr> 是一种二进制图片格式.
H<sub>2</sub>O X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按下 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> 结束会话.
大多数<mark>蝾螈</mark>都是夜行动物，捕食昆虫、蠕虫和其他小动物。
```

### 输出

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种二进制图片格式.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按下 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> 结束会话.

大多数<mark>蝾螈</mark>都是夜行动物，捕食昆虫、蠕虫和其他小动物。
