import { Application, IBoot } from "egg";
import { Wechaty } from "wechaty";
export default class FooBoot implements IBoot {
  private readonly app: Application;
  private bot: Wechaty;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {
    this.app;
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    this.bot = new Wechaty({ name: "WechatEveryDay" });
    this.bot.on("scan", (qrcode) => {
      console.log(qrcode)
      const qrImgUrl = [
        "https://api.qrserver.com/v1/create-qr-code/?data=",
        encodeURIComponent(qrcode),
      ].join("");
      console.log(qrImgUrl)
      this.app.config.qrImgUrl = qrImgUrl;
    });
    this.bot.on("login", (user) => {
      console.log(`贴心助理${user}登录了`);
    });
    this.bot.on("logout", (user) => {
      console.log(`贴心助理${user}退出了`);
    });
    this.bot.on('message', async msg => {
      const contact = msg.from()
      const text = msg.text()
      const room = msg.room()


      if (room) {

        const topic = await room.topic()
        console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
      } else {
        if (msg.self()) return;
        console.log(`Contact: ${contact.name()} Text: ${text}`)
        let index: number = Math.random() * text.length
        const keywods = text[parseInt(`${index}`)]
        const result = await this.app.curl(`https://api.lovelive.tools/api/SweetNothing/Keyword/${keywods}`, { dataType: 'json' });
        if((result as any).res.data.returnObj[0]){
          await msg.say()
        }
       
      }
    })
    this.bot.start();
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}
