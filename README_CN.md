中文 | [English](./README.md)

# [UXCore](http://uxco.re/)

[![npm version](https://img.shields.io/npm/v/uxcore.svg?style=flat-square)](https://www.npmjs.com/package/uxcore) [![Dependency Status](https://img.shields.io/david/uxcore/uxcore.svg?label=deps&style=flat-square)](https://david-dm.org/uxcore/uxcore) [![devDependency Status](https://img.shields.io/david/dev/uxcore/uxcore.svg?label=devDeps&style=flat-square)](https://david-dm.org/uxcore/uxcore#info=devDependencies)

UXCore is a set of [React](http://facebook.github.io/react/) Components that is designed for enterprise-class pc backend application.

* **丰富的组件功能：** 超过 50 个高质量组件供使用

* **专注于企业级中后台应用场景：** 强大易用的表单表格

* **精心设计的视觉风格：**  深耕中后台场景，让工作变得简单幸福。


点击 [文档站点](http://uxco.re/) 获取动态演示例子。 

在提 issue 之前, 请阅读 [更新日志](https://github.com/uxcore/uxcore/releases) 获取最新的功能更新。


## 安装

```sh
npm install uxcore --save
```

## 使用

### 引入 js

```jsx
import { Button } from 'uxcore';
ReactDOM.render(<Button />, mountNode);
```

### 按需引入 js

*  使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { libraryName: "uxcore", camel2DashComponentName: false }]
    ]
  }
  ```

  然后只需从 uxcore 引入模块即可。

  ```jsx
  // babel-plugin-import 会帮助你按需加载 JS
  import { Button } from 'uxcore';
  ```


* 或者，手动引入

  ```js
  import Button from 'uxcore/lib/Button';
  ```

### 引入样式包

```less
@import '~uxcore/assets/iconfont.css';
@import '~uxcore/assets/orange.css';
```


## 浏览器支持

主流浏览器及 IE9+

## 项目共建

我们非常欢迎您一起将 uxcore 做的更好! 查看 [CONTRIBUTING 文档](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) 获取详细信息。

## 许可

本项目基于 [MIT 协议](https://github.com/uxcore/uxcore/blob/master/LICENSE) 进行开发和发布






