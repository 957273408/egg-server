// app/router.ts
import { Application } from "egg";
import base from "./router/base";
import wechat from "./router/wechat";

export default (app: Application) => {
  const { router, controller } = app;
  base(app);
  wechat(app);
  router.resources("users", "/users", controller.users);
};
