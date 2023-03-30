const router = require("koa-router")();
const User = require("../models/userSchema");
const util = require("../utils");

router.prefix("/user");

router.post("/login", async (ctx, next) => {
  console.log(ctx.request.body);
  const { userName, password } = ctx.request.body;
  const user = await User.findOne({ userName, password });
  console.log(user);
  if (user) {
    ctx.body = util.success(user);
  } else {
    ctx.body = util.fail("用户名或密码错误", util.CODE.USER_ACCOUNT_ERROR);
  }
});

module.exports = router;
