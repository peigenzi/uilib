# css 规范

## 命名

### 使用小写字母，以中划线分隔；使用类选择器放弃 ID 选择器

ID 在一个页面中的唯一性导致了如果以 ID 为选择器来写 CSS，就无法重用。

```css
/* class  */
.element-content {
    ...;
}
```

### 后代选择器命名

-   使用字符数大于等于 2 的类选择器为后代选择器。如：.item 为 list 模块中每一项，.text 为 list 模块中的文本部分。
    `.list .item { }; .list .text { }`
-   一个语义化的标签也可以是后代选择器。`.list li{}`

通过使用后代选择器的方法，你不需要考虑他的命名是否已被使用，因为他只在当前模块或元件中生效，同样的样式名可以在不同的模块或元件中重复使用，互不干扰。

后代选择器不需要完整表现结构树层级，尽量能短则短。

### 相同语义的不同类命名

直接加数字或字母区分。如 `list1, .list2` 等。都是列表模块，但是是完全不一样的模块。

## 缩进

统一使用 4 个空格缩进。

## 书写顺序

先写定位布局属性，后盒模型等自身属性，最后是文本类及修饰类属性。

| 定位布局属性 | 自身属性  | 修饰类属性      |
| :----------- | :-------- | :-------------- |
| display      | width     | font            |
| visibility   | height    | text-align      |
| position     | margin    | text-decoration |
| float        | padding   | vertical-align  |
| clear        | border    | white-space     |
| list-style   | overflow  | color           |
| top          | min-width | background      |

```css
.element {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    border: 1px solid #e5e5e5;
    border-radius: 3px;
    width: 100px;
    height: 100px;

    font: normal 13px sans-serif;
    line-height: 1.5;
    text-align: center;
    color: #333;
    background-color: #f5f5f5;
    opacity: 1;
}
```

## 媒体查询

尽量将媒体查询的规则**靠近**与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。

```css
.element {
    ...;
}

.element-avatar {
    ...;
}

@media (min-width: 480px) {
    .element {
        ...;
    }

    .element-avatar {
        ...;
    }
}
```

## 颜色

-   颜色 16 进制时用小写字母颜色
-   颜色 16 进制时尽量用简写

```css
.element {
    color: #abcdef;
    background-color: #012;
}
```

## 引号

-   统一使用单引号

-   url 的内容要用引号

-   属性选择器中的属性值需要引号

```css
.element::after {
    content: '';
    background-image: url('logo.png');
}

li[data-type='single'] {
    ...;
}
```

## 省略值为 0 时的单位

为节省不必要的字节同时也使阅读方便，将 0px、0em、0%等值缩写为 0。

```css
.element {
    margin: 0 10px;
    background-position: 50% 0;
}
```

## 空行

-   `'}'` 后跟一个空行

```css
.element1 {
    ...;
}

.element2 {
    ...;
}
```

## !important

尽量不要使用。

## 注释

注释格式：`/* 注释文字 */`

-   对选择器的注释统一写在被注释对象的上一行，对属性及值的注释写于分号后。

-   注释内容两端需空格，已确保即使在编码错误的情况下也可以正确解析样式。

-   在必要的情况下，可以使用块状注释，块状注释保持统一的缩进对齐。

-   注释应该言简意赅的表明名称、用途、注意事项等。

```css
/* 块状注释文字
 * 块状注释文字
 * 块状注释文字
 */
.element {
    width: 500px;
}

.element li {
    height: 20px;
    line-height: 20px; /* 这里是对line-height的一个注释 */
    overflow: hidden;
}

/* 单行注释文字 */
.element li em {
    color: #666;
}
```

## 页面模块分类

1. 布局(grid)(.g-)：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等。
2. 模块(module)(.m-)：通常为一个语义化的较大的整体，如导航、登录、注册、各种列表、评论、搜索等。
3. 元件(unit)(.u-)：通常模块中一个较小巧的个体，如按钮，输入框等。
4. 状态(.z-)：状态类样式，可以组合使用或作为后代出现。

### 常用命名

布局(.g-)
|语义|命名|简写|
|:---|:---|:---|
|文档|doc|doc|
|头部|head|hd|
|主体|body|bd|
|尾部|foot|ft|
|主栏|main|mn|
|主栏子容器|mainc|mnc|
|侧栏|side|sd|
|侧栏子容器|sidec|sdc|
|盒容器|wrap|wrap|

模块(.m-)、元件(.u-)
|语义|命名|简写|
|:---|:---|:---|
|导航|nav|nav|
|子导航|subnav|snav|
|面包屑|crumb|crm|
|菜单|menu|menu|
|选项卡|tab|tab|
|标题区|head/title|hd/tt|
|内容区|body/content|bd/ct|
|列表|list|lst|
|表格|table|tb|
|表单|form|fm|
|热点|hot|hot|
|排行|top|top|
|登录|login|log|
|标志|logo|logo|
|广告|advertise|ad|
|搜索|search|sch|
|幻灯|slide|sld|
|提示|tips|tips|
|帮助|help|help|
|新闻|news|news|
|下载|download|dld|
|注册|regist|reg|
|投票|vote|vote|
|版权|copyright|cprt|
|结果|result|rst|
|标题|title|tt|
|按钮|button|btn|
|输入|input|ipt|

状态(.z-)
|语义|命名|简写|
|:---|:---|:---|
|选中|selected|sel|
|当前|current|crt|
|显示|show|show|
|隐藏|hide|hide|
|打开|open|open|
|关闭|close|close|
|出错|error|err|
|成功|success|succ|
|不可用|disabled|dis|

```css
/* 布局 */
.g-sd {
}

/* 这是某个模块 */
.m-nav {
} /* 模块容器 */

.m-nav li,
.m-nav a {
} /* 先共性  优化组合 */

.m-nav li {
} /* 后个性  语义化标签选择器 */

.m-nav a {
} /* 后个性中的共性 按结构顺序 */
.m-nav a.a1 {
} /* 后个性中的个性 */
.m-nav a.a2 {
} /* 后个性中的个性 */

.m-nav .u-sch {
} /* 模块内部元件 */
.m-nav .u-sch .btn {
}
.m-nav .u-sch .btn1 {
}
.m-nav .u-sch .btn.z-dis {
}
```

**没有必要给每个标签都加上模块和元件前缀，常用命名也不一定都要加上前缀。
布局和模块只是用于页面的划分。**

### 不符合规范的写法

-   `.calss()`：不要以一个没有类别的样式作为主选择器，这样的选择器只能作为后代选择器使用，比如 `.m-xxx .class{}`。
-   `.m-xxx div{}`：不要随便以没有语义的标签作为选择器，这会造成大面积污染，除非你可以断定现在或将来你的这个选择器不会污染其他同类。
-   `.g-xxx .class{}`：不要在页面布局中使用后代选择器，因为这个后代选择器可能会污染里面的元素。
-   `.g-xxx .m-yyy{}.g-xxx .u-yyy{}`：不要用布局去控制模块或元件，模块和元件应与布局分离独立。
-   `.m-xxx .class .class .class .class{}`：不要将选择器写的过于冗长，选择器并不需要完整反映结构嵌套顺序。
-   `.m-xxx .m-yyy .zzz{}`：不要越级控制，如果 `.zzz` 是 `.m-yyy` 的后代选择器，那么不允许 `.m-yyy` 之外的选择器控制或修改 `.zzz`。
