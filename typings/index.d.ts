import "egg";
import { Wechaty } from "wechaty";
declare module "egg" {
  interface Application {
    dashboard: any;
  }
  interface Context {
    model: IModel | any;
  }
  interface BaseContextClass {
    /**bot 微信机器人 */
    protected bot: Wechaty;
  }
}
