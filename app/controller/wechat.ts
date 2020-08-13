import { Controller } from "egg";
import { Wechaty } from "wechaty";

export default class WechatController extends Controller {
  /**
   * 生成验证码
   * Router /base/captcha [post]
   * accept application/json
   * Produce application/json
   * Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
   *
   */
  public bot: Wechaty;

  public async login() {
    console.log(this.app.config.qrImgUrl);
    this.bot = new Wechaty({ name: "WechatEveryDay" });
    this.bot.on("scan", (qrcode) => {
      console.log(qrcode);
      const qrImgUrl = [
        "https://api.qrserver.com/v1/create-qr-code/?data=",
        encodeURIComponent(qrcode),
      ].join("");
      console.log(qrImgUrl);
      this.app.config.qrImgUrl = qrImgUrl;
    });
    this.bot.on("login", (user) => {
      console.log(`贴心助理${user}登录了`);
    });
    this.bot.on("logout", (user) => {
      console.log(`贴心助理${user}退出了`);
    });
    this.bot.start();

    this.ctx.body = `<img src=${this.app.config.qrImgUrl}>`;
  }
}
