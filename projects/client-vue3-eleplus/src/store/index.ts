import { defineStore } from "pinia";
import storage from "@/utils/storage";
export const useAppStore = defineStore("app", {
  state: () => {
    return {
      count: 0,
      userInfo: storage.getItem("userInfo") || {},
    };
  },
  // persist: true, // 持久化
  actions: {
    addCount() {
      this.count++;
    },
    async saveUserInffo(userInfo: any) {
      this.userInfo = userInfo;
      storage.setItem("userInfo", userInfo);
    },
  },
});
