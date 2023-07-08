### 功能实现情况：
##### demo前端实例 './src/SearchBar.js'
##### demo后端实例 './service/app.js'
##### demo单元测试 './src/SearchBar.test.js'
- 支持web端 & h5端响应处理 :white_check_mark: 
- 使用前缀匹配 :white_check_mark: 
- 没有匹配的建议词则无需显示下拉框  :white_check_mark: 
- 点击建议词后可将建议词回填至输入框； :white_check_mark: 
- 搜索建议词的数据源使用 JSON 文件： :white_check_mark: 
- 点击右侧的 「x」按钮，可清除输入框内的文本并隐藏下拉框；
- 可通过键盘的方向键在下拉框中选择（参考百度），按下回车将建议词回填至输入框； :white_check_mark: 
- 可使用任意第三方框架和库；(采用react原生写法) :white_check_mark: 
- 除以上提及的交互外，无需实现其它按钮的交互效果； :white_check_mark: 

### 技术栈:
- React 18.2 (JS框架) 
- Create-React-App (脚手架CLI)
- Axios 1.4.0 (网络请求) 
- Jest 5.16.5 (单元测试) 
- Express 4.18.2 (node后端框架) 
- http-proxy-middleware 2.0.6 (跨域处理库)
- eslint (代码规范工具)

### 项目使用:
```txt
依赖构建:
npm ci

前端:
npm run start

后端:
cd ./service
node app.js

单元测试:
npm run test
```

### 个人介绍:
1.	具备良好的编程基础，熟悉JavaScript语法，js的原型链、闭包以及es6的常用特征。
2.	熟练掌握React框架及其生态，了解 Vue 框架开发可以快速上手项目。
3.	熟悉微信小程序开发, 了解 Taro 跨平台移动开发。
4.	有全栈能力，熟悉 Java、mysql开发使用，可以独立开发后端接口。
5.	了解webpack等构建工具的使用和配置，掌握git，了解Docker使用，熟悉Linux常用命令。
