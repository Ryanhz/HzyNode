import Koa from 'koa';

import bodyParser from 'koa-bodyparser'

import path from 'path';

import koaStatic from 'koa-static';

import ZYResponse from './utils/koa-response/koa-response'

import info from "./middlewares/info";

import cors from "./middlewares/cors";

import errorHandler from "./middlewares/errorHandler";

import router from "./routes/index";

import sslRouter from './routes/ssl'

const app = new Koa();

//1.应用级中间件
app.use(bodyParser());
app.use(ZYResponse.middleware());

app.use(info);

app.use(cors());//跨域

//2.路由中间件
app.use(sslRouter.routes());
app.use(router.routes());

//3.第三方中间件
app.use(koaStatic(path.join(__dirname, '..', "public")));

//4.错误中间件
app.use(errorHandler);

export default app;