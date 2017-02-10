# [UXCore](http://uxco.re/)

[![npm version](https://img.shields.io/npm/v/uxcore.svg?style=flat-square)](https://www.npmjs.com/package/uxcore) [![Dependency Status](https://img.shields.io/david/uxcore/uxcore.svg?label=deps&style=flat-square)](https://david-dm.org/uxcore/uxcore) [![devDependency Status](https://img.shields.io/david/dev/uxcore/uxcore.svg?label=devDeps&style=flat-square)](https://david-dm.org/uxcore/uxcore#info=devDependencies)

UXCore is a set of [React](http://facebook.github.io/react/) Components that is designed for enterprise-class pc backend application.

* **Rich library:** more than 40 React Components available with high quality design.

* **Focus on backend App:** Powerful but easy-to-use Form and Table.

* **Customizable theme:** theme can be customized easily.


Check out our [documentation site](http://uxco.re/) for live examples. 

[Learn how to use Uxcore in your project.](http://uxco.re/start/base/)

Before posting an issue, please read the [CHANGELOG](https://github.com/uxcore/uxcore/releases) and the README and the documentation to check the recently updated.


## Installation

The fastest way to get started is to serve JavaScript from the CDN

```html
<link rel="stylesheet" type="text/css" href="//g.alicdn.com/??platform/common/s/1.1/global/global.css,uxcore/uxcore-kuma/2.0.19/orange.min.css">
<script src="//g.alicdn.com/uxcore/uxcore/0.1.9/uxcore.min.js">
```

if you'd like to use [npm](npmjs.com)

```sh
npm install uxcore
```

## Usage

### For cdn

```jsx
const {Button} = Uxcore;
ReactDOM.render(<Button />, mountNode);
```

### For npm
```jsx
import {Button} from 'uxcore';
// or
import Button from 'uxcore/lib/Button';
ReactDOM.render(<Button />, mountNode);
```

And import style mannally

```less
@import '~uxcore/assets/iconfont.css';
@import '~uxcore/assets/orange.css';
```

### import component as required

Install the component

```sh
npm install uxcore-button kuma-base
```

```jsx
import Button from 'uxcore-button';
```

And import style in your less file

```less
@import '~kuma-base/theme/blue.less'; // or orange.less global variables which components need
@import '~kuma-base/core.less'; // base element style and reset
@import '~uxcore-button/src/Button.less'; // component style
```


## Browser Support

Mainstream browsers and Internet Explorer 8+. For IE 8, see [react-ie8](https://github.com/xcatliu/react-ie8) to get support.  

## Customization

We have implemented two default themes(orange/blue) to render UXCore Components. Theme customization is simple using our online [design tools](http://uxco.re/theme/builder).

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## License

This project is licensed under the terms of the [MIT license](This project is licensed under the terms of the MIT license)





