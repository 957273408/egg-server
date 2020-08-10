import { EggAppInfo, EggAppConfig, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    config.sequelize = {
      // 单数据库信息配置
      dialect: 'mysql',
      // host
      host: '39.107.89.227',
      // 端口号
      port: 3306,
      // 用户名
      username: 'sud',
      // 密码
      password: 'Sun123456.',
      // 数据库名
      database: 'egg-sequelize-doc-default',
  };

    // 目的是将业务配置属性合并到 EggAppConfig 中返回
    return {
        // 如果直接返回 config ，将该类型合并到 EggAppConfig 的时候可能会出现 circulate type 错误。
        ...config as {},
        // ...bizConfig,
    };
}



