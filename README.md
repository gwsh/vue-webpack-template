# 项目创建流程

``` JavaScript

  1.初始化工程
    yarn install
  2.add webpack
    yarn add webpack
    ps:可以吧 ^这个兼容版本符号去掉
  3.增加build命令到 Scripts 并且增加webpack的配置文件  
    3.1 在项目根目录增加webpack配置文件
        new ——> webpack.prod.js
    3.2 在package.json的scripts配置中加入webpage的命令指令
        ....
         "scripts": {
            "build": "webpack --config/webpack.prod.js"
          },
        ....
  

```
