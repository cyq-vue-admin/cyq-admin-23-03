<template>
  <div flex justify-between px-5 items-center h-full >
    <div flex items-center>
      <div
        @click="appStore.toggleCollapse"
        :class="`i-ic:baseline-format-align-${
          appStore.collapse ? 'right' : 'left'
        }`"
        class="text-xl cursor-pointer"
      />
      <div ml-5>菜单</div>
    </div>
    <div flex items-center>
      <el-badge is-dot>
        <div class="i-ic:baseline-notifications text-xl cursor-pointer" />
      </el-badge>
      <div ml-5 cursor-pointer>
        <el-dropdown @command="handleCommand">
          <div flex items-center>
            admin
            <div class="i-ic:baseline-keyboard-arrow-down text-xl"></div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();
const appStore = useAppStore();
const handleCommand = (command: string) => {
  if (command === "logout") {
    appStore.logout();
    router.push("/login");
  }
};
</script>

<style scoped>
:deep(.el-tooltip__trigger) {
  outline: none;
}
</style>
