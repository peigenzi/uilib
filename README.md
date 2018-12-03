# layout-ui

## 目录结构

```shell
|-- dist    //打包后的文件
|-- docs    //文档
|-- src
    |-- example         //示例
    |-- scss            //样式源码
    |-- animation       //动画
    |   |-- attention   //提醒类动画
    |   |-- bounce.scss //弹跳类动画
    |   |-- fade.scss   //淡入淡出类动画
    |-- animation.scss  //所有动画类的入口
    |-- extends.scss    //可继承的 scss
    |-- gird.scss       //栅格布局
    |-- mixins.scss     //mixins
    |-- pxborder.scss   //一像素边框
    |-- reset.scss      //样式重置
    |-- ui.scss         //总入口
    |-- utils.scss      //工具类
    |-- variables.scss  //scss变量
```

## 开发

```shell
npm run dev
```

运行命名后 `dist` 文件夹就会生成编译后的文件

## 开发时预览

`http://localhost:8888/examples/` 后面跟对应的 `html` 文件名
