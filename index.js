const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async function(ctx, next) {
  ctx.body = 'Hello Koa!';
  next();
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
