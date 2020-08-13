import { Controller } from "egg";
function toInt(str: string | number) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

export default class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    try {
      ctx.body = await ctx.model.User.findAll(query);
    } catch (error) {
      ctx.body= 'halow'
    }
  }
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }
  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    console.log(name, age);
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }
}
