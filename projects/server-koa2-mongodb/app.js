const Koa = require("koa");
const app = new Koa();
// const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
// const logger = require("koa-logger");
const router = require("koa-router")();

require("./config/db");

const index = require("./routes/index");
const users = require("./routes/users");
const log4j = require("./utils/log4j");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
// app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// app.use(
//   views(__dirname + "/views", {
//     extension: "pug",
//   })
// );

// logger
app.use(async (ctx, next) => {
  await next();
});

router.prefix("/api");
router.use(users.routes());
// routes
app.use(index.routes(), index.allowedMethods());
app.use(router.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
  log4j.error(err);
});

module.exports = app;
