import crypto from "crypto";
export default class Account {
    static async sigin(ctx, next) {
        console.log(ctx.request.body);
        ctx.success('登陆');
    }
    static async signup(ctx, next) {
        console.log(ctx.querystring);
    }
    static async signout(ctx, next) {
        console.log(ctx.querystring);
    }
    MD5(password) {
        const md5 = crypto.createHash("md5");
        return md5.update(password).digest('base64');
    }
}
