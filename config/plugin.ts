import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  static: true,
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  io: {
    enable: true,
    package: "egg-socket.io",
  },
};

export default plugin;
