import request from "./request";
import type { ResType } from "./request";
export const login = (): Promise<ResType<any>> => {
  // return request.get("/user/login");

  return request({
    url: "/user/login",
    method: "get",
  });
};
