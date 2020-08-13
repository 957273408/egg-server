import { Controller } from "egg";
import * as svgCaptcha from "svg-captcha";

export default class BaseConterller extends Controller {
  /**
   * 生成验证码
   * Router /base/captcha [post]
   * accept application/json
   * Produce application/json
   * Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
   *
   */
  public async create() {
    const { ctx } = this;
    const captcha = svgCaptcha.create();
    ctx.session.captcha = captcha.text;
    console.log(captcha.text);
    ctx.body = captcha.data.replace(`width="150" height="50"`, "");
  }
  public hallow(){
    this.ctx.body= "hallo "
  }
}
