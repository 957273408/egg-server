import { EggAppInfo, EggAppConfig, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // 覆盖框架，插件的配置
  config.keys = appInfo.name + "123456";
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.security = {
    domainWhiteList: ["*"],
    csrf: {
      enable: false,
    },
  };
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      "/": {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      "/example": {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

  // 应用本身的配置
  // const bizConfig = {};
  // bizConfig.news = {
  //     pageSize: 30,
  //     serverUrl: 'https://hacker-news.firebaseio.com/v0',
  // };

  // 目的是将业务配置属性合并到 EggAppConfig 中返回
  return {
    // 如果直接返回 config ，将该类型合并到 EggAppConfig 的时候可能会出现 circulate type 错误。
    ...(config as {}),
    // ...bizConfig,
  };
};
