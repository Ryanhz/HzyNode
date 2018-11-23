import Router from "koa-router";
const router = new Router();
router.get("/", (ctx, next) => {
    ctx.body = `
  <h2>This is demo2</h2>
  <form method="POST" action="/api/v1/account/sign">
      <p>username:</p>
      <input name="username">
      <p>age:</p>
      <input name="age">
      <p>website</p>
      <input name="website">
      <button type="submit">submit</button>                   
  </form>
  `;
});
export default router;
