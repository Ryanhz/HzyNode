import Router from "koa-router";

import account from "./account";

const router = new Router();

//el/api/v1/account/
router.use("/account", account);

export default router.routes();
