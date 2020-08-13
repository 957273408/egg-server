import { Application } from 'egg';
const routerName = "/base"

export default (app: Application) => {

    const { router, controller } = app;
    router.get('/',controller.base.hallow)
    router.get(`${routerName}/captcha`, controller.base.create)
};