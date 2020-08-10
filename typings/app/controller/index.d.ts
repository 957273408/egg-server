// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportUsers from '../../../app/controller/users';
import ExportWechat from '../../../app/controller/wechat';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    users: ExportUsers;
    wechat: ExportWechat;
  }
}
