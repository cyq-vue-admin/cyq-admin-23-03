const router = require("koa-router")();
const User = require("../models/userSchema");
const util = require("../utils");

router.prefix("/users");

router.post("/login", async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  const user = await User.findOne({ userName, password });
  console.log(user);
});

module.exports = router;
