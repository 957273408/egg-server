import { Controller } from "egg";

export default class WechatController extends Controller {
  /**
   * 生成验证码
   * Router /base/captcha [post]
   * accept application/json
   * Produce application/json
   * Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
   *
   */

  public async login() {
    console.log(this.app.config.qrImgUrl);
    this.ctx.body = `<img src=${this.app.config.qrImgUrl}>`;
  }

  public async say() {
   console.log(this.app.config.msg)
  }

}
