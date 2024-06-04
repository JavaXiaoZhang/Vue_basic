# 为网页添加样式

## 术语解释

```css
h1{
    color: red;
    background-color: black;
    text-align: center;
}
```

CSS规则 = 选择器 + 声明块

### 选择器

1. ID选择器
2. 元素选择器
3. 类选择器

### 声明块

出现在大括号中

声明块包含很多声明（属性），每个声明（属性）表达了某一方面的样式。

## CSS代码书写位置

1. 内部样式表

写在 style元素中，一般放在head元素里，希望比body代码先加载

2. 内联样式表，元素样式表

直接书写在元素的style属性中

```html
<h1 style="color:red; display: block;"></h1>
```

3. 外部样式表[推荐]

将样式写到独立的css文件中,通过link元素关联起来

```html
<link rel="stylesheet" href="./css/index.css">
```

1) 可以解决多页面样式重复问题
2) 有利于浏览器缓存，从而提供页面响应速度
3) 有利于代码分离，html代码和css代码分开，更容易阅读和维护

# 常见样式声明

1. color

元素内部的文字颜色

2. 