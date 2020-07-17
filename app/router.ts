// app/router.ts
import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller } = app;
    router.resources('users', '/users', controller.users);
};