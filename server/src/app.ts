import Koa from 'koa';

import bodyParser from 'koa-bodyparser'

import path from 'path';

import koaStatic from 'koa-static';

import ZYResponse from './utils/koa-response/koa-response'

import info from "./middlewares/info";

import cors from "./middlewares/cors";

import errorHandler from "./middlewares/errorHandler";

import router from "./routes/index";

const app = new Koa();

const port: number = 8008;


// logger
//1.应用级中间件
app.use(bodyParser());
app.use(ZYResponse.middleware());

app.use(info);

app.use(cors());//跨域

//2.路由中间件
app.use(router.routes());

//3.第三方中间件
app.use(koaStatic(path.join(__dirname, 'public')))

//4.错误中间件
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`服务启动：${port} 端口`)
})