import Router from "koa-router";
import fs from "mz/fs";
import path from "path";
import mime from "mime";
//  el/
const router = new Router();
let file = path.join(__dirname, "..", 'public', 'ssl/fileauth.txt');
router.get("/.well-known/pki-validation/:id", async (ctx, next) => {

    console.log(ctx.params.id);
    if (fs.exists(file)) {
      let type =  mime.getType(file);
      ctx.type =  type ? type : '';
      ctx.body = await fs.readFile(file);
    }
   

});
export default router;
