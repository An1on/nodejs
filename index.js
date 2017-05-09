const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

router.get('/', async function (ctx, next) {
  ctx.body = 'Hello Koa!';
  next();
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('.'))
  .listen(3000);

/* eslint-disable*/
console.log('listening on port 3000');
