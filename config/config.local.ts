import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.sequelize = {
    // 单数据库信息配置
    dialect: "mysql",
    // host
    host: "127.0.0.1",
    // 端口号
    port: 3306,
    // 用户名
    username: "root",
    // 密码
    password: "123",
    // 数据库名
    database: "egg-sequelize-doc-default",
  };

  // 目的是将业务配置属性合并到 EggAppConfig 中返回
  return {
    // 如果直接返回 config ，将该类型合并到 EggAppConfig 的时候可能会出现 circulate type 错误。
    ...(config as {}),
    // ...bizConfig,
  };
};
