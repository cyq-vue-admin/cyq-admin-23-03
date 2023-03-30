const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, // 参数错误
  USER_ACCOUNT_ERROR: 20001, // 账号或密码错误
  USER_LOGIN_ERROR: 30001, // 用户未登录
  AUTH_ERROR: 40001, // 认证失败或token过期
  BUSSINESS_ERROR: 50001, // 业务请求错误
};

module.exports = {
  pager(pageNum = 0, pageSize = 10) {
    pageNum *= 1;
    pageSize *= 1;
    const skipIndex = (pageNum <= 0 ? 0 : pageNum - 1) * pageSize;
    return {
      page: {
        pageNum,
        pageSize,
      },
      skipIndex,
    };
  },
  success(data = "", message = "", code = CODE.SUCCESS) {
    return {
      code,
      message,
      data,
    };
  },
  fail(message = "", code = CODE.BUSSINESS_ERROR) {
    return {
      code,
      message,
    };
  },
};
