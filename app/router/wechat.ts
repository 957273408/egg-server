import { Application } from 'egg';
const routerName = "/wechat"

export default (app: Application) => {

    const { router, controller } = app;
    router.post(`${routerName}/login`, controller.wechat.login)
};