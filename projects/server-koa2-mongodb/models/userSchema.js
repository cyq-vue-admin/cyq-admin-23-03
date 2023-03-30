const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    default: 1, // 1.在,2.离职,3.试用
  },
  job: String,
  sex: String,
  mobile: String,
  role: {
    type: Number,
    default: 1, //1.系统管理员,2.普通用户
  },
  roleList: [],
  createTime: {
    type: Date,
    default: new Date(),
  },
  lastLoginTime: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", userSchema, "users");
