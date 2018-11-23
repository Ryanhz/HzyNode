import Router from "koa-router";
import index from "./web";
import api from "./api";
//  el/
const router = new Router();
router.use("/api", api.routes());
router.use("", index.routes());
export default router;
