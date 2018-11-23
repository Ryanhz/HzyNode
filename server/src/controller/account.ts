import ZYResponse, {ZYContext, next} from '../utils/koa-response/koa-response'

import crypto from "crypto";

export default class Account {

  static async sigin(ctx: ZYContext, next: ZYResponse.next) {
    console.log(ctx.request.body);
    ctx.success('登陆')
  }

  static async signup(ctx: ZYContext, next: next ) {
    console.log(ctx.querystring)
  }

  static async signout(ctx: ZYContext, next: next) {
    console.log(ctx.querystring)
  }


  MD5(password: string) {
    const md5 = crypto.createHash("md5");
    return md5.update(password).digest('base64');
  }
  
} 