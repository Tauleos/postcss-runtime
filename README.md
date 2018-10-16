# autoCompiler

[![Greenkeeper badge](https://badges.greenkeeper.io/Tauleos/autocompiler.svg)](https://greenkeeper.io/)
postcss自动编译插件.可以在非webpack编译的项目中实时编译css文件。
<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">
     
[![NPM](https://nodei.co/npm/autocompiler.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/autocompiler/)

## 使用方法

通过npm安装

    npm install postcss-runtime --save

然后在项目中引用

```javascript
    var compiler = require('postcss-runtime');
    compiler({
        plugins:[a,b,c],
        source:'/Users/wenlei/WebstormProjects/autoCompiler/css',//源代码地址
        desc: '/Users/wenlei/WebstormProjects/autoCompiler/dcss',//编译后的css代码
        suffix: '.pcss',
        sourceMap:false,
        multiPath:[{
            source:'/Users/wenlei/WebstormProjects/autoCompiler/css',
            desc: '/Users/wenlei/WebstormProjects/autoCompiler/dcss'
        }]
  })

```

## 配置项
+ `plugins` (type:`array`). postcss编译css代码所需要的插件
+ `source` (type:`string`). 源地址路径;支持文件和文件夹两种类型
+ `desc` (type:`string`). 目标地址路径;支持文件和文件夹两种类型
+ `suffix` (type:`string`). 文件后缀;默认是`.pcss`;非此后缀文件会自动忽略
+ `multiPath` (type:`array`). 多目录输出配置。每个输入地址对应一个输出地址,如果设置该选项，会默认覆盖`source`和`desc`配置项
    * `source` (type:`string`) 参考上述`source`
    * `desc` (type:`string`) 参考上述 `desc`
+ `sourceMap` (type:`Boolean` default:`true`). 是否启动sourceMap,默认true

## DEBUG
+ `windows`环境下 `set DEBUG=runtime`
+ `osx/linux`环境下  `export DEBUG=runtime`

## License

MIT License

Copyright (c) 2018 Tauleos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
