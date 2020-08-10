import { Controller } from "egg";
const { Wechaty, Friendship } = require("wechaty");

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
    const { ctx } = this;
    const captcha = svgCaptcha.create();
    ctx.session.captcha = captcha.text;
    ctx.body = captcha.data.replace(`width="150" height="50"`, "");
  }
  // 二维码生成
  private onScan(qrcode, status) {
    Qrterminal.generate(qrcode);
    const qrImgUrl = [
      "https://api.qrserver.com/v1/create-qr-code/?data=",
      encodeURIComponent(qrcode),
    ].join("");
    console.log(qrImgUrl);
  }

  // 登录事件
onLogin = async(user) => {
  console.log(`贴心助理${user}登录了`)
  request(host + '/getScheduleList', 'GET').then((res) => {
      let text = JSON.parse(res.text)
      let scheduleList = text.data
      console.log('定时任务列表', scheduleList)
      initSchedule(scheduleList)
  }).catch(err => {
      console.log('获取任务列表错误', err)
  })
}

作者：Leo_chen
链接：https://juejin.im/post/6844903811648077832
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

}
