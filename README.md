# reactbone

## Manifest

``` bash
├── build                       # 构建配置
├── dist                        # 发布目录
├── mock                        # 本地模拟数据  
├── public
│   └── favicon.ico             # Favicon
├── src 
│   ├── assets                  # 静态资源
│   │   ├── fonts       
│   │   └── images    
│   ├── common                  # 公用配置
│   ├── components              # 通用组件
│   ├── layouts                 # 通用模板
│   │   └── index.html    
│   ├── pages                   # 业务组件页面
│   ├── router                  # 路由
│   ├── store                   # redux
│   ├── styles                  # 通用样式库
│   │   ├── base.less       
│   │   └── mixin.less        
│   ├── utils                   # 工具库
│   └── index.js                # 入口文件       
├── package.json 
├── README.md 

```

## Build
``` bash
npm install
# watch:
npm run dev
# test:
npm run test
# build:
npm run build
```