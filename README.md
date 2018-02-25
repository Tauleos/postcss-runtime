# autoCompiler
>postcss自动编译插件.可以在非webpack编译的项目中实时编译css文件。
<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">
     
[![NPM](https://nodei.co/npm/autocompiler.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/autocompiler/)

## 使用方法

通过npm安装

    npm install autocompiler --save

然后在项目中引用

```javascript
    var compiler = require('autocompiler');
    compiler({
        plugins:[a,b,c],
        source:'/Users/wenlei/WebstormProjects/autoCompiler/css',//源代码地址
        desc: '/Users/wenlei/WebstormProjects/autoCompiler/dcss',//编译后的css代码
        suffix: '.pcss',  //文件后缀。默认.pcss
        sourceMap: true    //是否开启sourceMap,默认false
  })

```
## License

MIT License

Copyright (c) 2018 macurial

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
