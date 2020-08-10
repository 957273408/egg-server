// app/router.ts
import { Application } from 'egg';
import base from './router/base'

export default (app: Application) => {
    const { router, controller } = app;
    base(app)
    router.resources('users', '/users', controller.users);
};