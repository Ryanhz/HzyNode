import Router from "koa-router";
import api from "./api";
//  el/
const router = new Router();
router.use("/api", api.routes());
export default router.routes();
