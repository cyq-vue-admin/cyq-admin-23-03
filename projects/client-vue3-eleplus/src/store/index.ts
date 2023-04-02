import { defineStore } from "pinia";
import storage from "@/utils/storage";
export const useAppStore = defineStore("app", {
  state: () => {
    return {
      count: 0,
      userInfo: storage.getItem("userInfo") || {},
      collapse: false,
    };
  },
  // persist: true, // 持久化
  actions: {
    addCount() {
      this.count++;
    },
    async saveUserInfo(userInfo: any) {
      this.userInfo = userInfo;
      storage.setItem("userInfo", userInfo);
    },
    logout() {
      this.saveUserInfo("");
    },
    toggleCollapse() {
      this.collapse = !this.collapse;
    },
  },
});
