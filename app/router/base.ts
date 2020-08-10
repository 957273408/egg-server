import { Application } from 'egg';
const routerName = "/base"

export default (app: Application) => {

    const { router, controller } = app;
    router.post(`${routerName}/captcha`, controller.base.create)
};