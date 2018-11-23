import Router from "koa-router";

import v1 from "./v1/index";

const router = new Router();
// el/api
router.use("/v1", v1);

export default router;