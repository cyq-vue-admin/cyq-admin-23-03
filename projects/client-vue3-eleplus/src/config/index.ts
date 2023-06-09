const env: string = import.meta.env.MODE || 'pord';

interface envConfigItemI {
  baseUrl: string;
  mockUrl: string;
}
interface envConfigI {
  development: envConfigItemI;
  prod: envConfigItemI;
  test: envConfigItemI;
}
const envConfig: envConfigI = {
  development: {
    baseUrl: "/api",
    mockUrl: "https://mock.apifox.cn/m1/2513163-0-default",
  },
  prod: {
    baseUrl: "",
    mockUrl: "",
  },
  test: {
    baseUrl: "",
    mockUrl: "",
  },
};
const envConfigItem: envConfigItemI =
  envConfig[env as "development" | "prod" | "test"];
export default {
  env,
  mock: false,
  namespace: "cyq-admin-23-03",
  ...envConfigItem,
};
