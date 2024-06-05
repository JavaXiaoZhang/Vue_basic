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

**预设值**:定义好的单词
**三原色，色值**：（红绿蓝）可以表达所有颜色，0-255, 0标识不掺杂，255掺杂到最大

```
rgb(0,255,0)
hex(16进制)表示法
#红绿蓝
```
2. font-size

元素内部文字尺寸大小

1）px：像素
2）em：相对单位，相对于父元素的字体大小
每个元素必须有字体大小，如果没有声明，则直接使用父元素字体大小，如果没有父元素（html），则使用基准字号。
user agent, UA，即浏览器。

3. font-weight

文字粗细程度，可以取值数字，也可以取值预设值
1）normal 普通
2）bold 加粗

4. font-family

文字类型，可写多个以逗号分隔

5. font-style

一般用于设置字体倾斜

6. text-decoration

斜线、下划线

7. text-indent

首行文本缩进

8. line-height

行高

# 选择器

1. ID选择器
2. 元素选择器
3. 类选择器
4. 通配符选择器
5. 属性选择器

搜索 属性选择器 MDN
```html
[href='www.baidu.com']{
    color: red;
}
```

6. 伪类选择器

选中某些元素的某种状态

hover：鼠标悬停状态

active：激活状态，鼠标按下状态

link: 超链接未访问状态

visited: 超链接已访问状态

```html
a:hover{
    color:red;
}
```

7. 伪元素选择器

```html
span::before{
    content: "《"
}
```

## 选择器的组合

1. 后代元素 -- 空格
2. 子元素 -- >
3. 相邻兄弟（下一个）元素 -- +
4. 后面出现的所有兄弟元素 -- ~

## 选择器的并列

多个选择器用逗号分隔

语法糖