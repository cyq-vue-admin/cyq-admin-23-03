import config from "@/config";

export default {
  getStorage() {
    return JSON.parse(localStorage.getItem(config.namespace) as string) || {};
  },
  setItem(key: string, value: unknown) {
    const storage = this.getStorage();
    storage[key] = value;
    localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  getItem(key: string) {
    return this.getStorage()[key];
  },
  removeItem(key: string) {
    const storage = this.getStorage();
    delete storage[key];
    localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  clear() {
    localStorage.clear();
  },
};
