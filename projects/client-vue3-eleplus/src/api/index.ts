import request from "./request";
import type { ResType } from "./request";

export interface loginFormI {
  userName: string;
  password: string;
}
export const login = (loginForm: loginFormI): Promise<ResType<any>> => {
  // return request.get("/user/login");

  return request({
    url: "/user/login",
    method: "post",
    data: loginForm,
  });
};
