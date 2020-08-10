import { Controller } from "egg";
import { Wechaty } from "wechaty";
import Qrterminal from "qrcode-terminal";
export default class WechatController extends Controller {
  /**
   * 生成验证码
   * Router /base/captcha [post]
   * accept application/json
   * Produce application/json
   * Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
   *
   */
  public bot;

  public async login() {
    this.bot = new Wechaty({ name: "WechatEveryDay" });
    this.bot.on("scan", this.onScan);
    this.bot.on("login", this.onLogin);
    this.bot.on("logout", this.onLogout);
    this.bot.start();
  }
  // 二维码生成
  private onScan(qrcode) {
    Qrterminal.generate(qrcode);
    const qrImgUrl = [
      "https://api.qrserver.com/v1/create-qr-code/?data=",
      encodeURIComponent(qrcode),
    ].join("");
    console.log(qrImgUrl);
    this.ctx.body = qrImgUrl;
  }

  // 登录事件
  onLogin = async (user) => {
    console.log(`贴心助理${user}登录了`);
  };

  // 登出事件
  onLogout(user) {
    console.log(`贴心助理${user}退出了`);
  }
}
