import Router from "koa-router";
import Account from "../../../controller/account";

const router = new Router();

// el/api/v1/account
router.post("/signup",   Account.signup)
router.post("/sign",   Account.sigin)
router.post("/signout", Account.signout)


export default router.routes();