<template>
  <div h-12 leading-12 font-bold text-2xl text-center overflow-hidden>
    CYQ {{ appStore.collapse ? "" : "admin" }}
  </div>
  <div style="height: calc(100vh - 3rem)">
    <el-menu default-active="2" :collapse="appStore.collapse">
      <el-sub-menu index="1">
        <template #title>
          <!-- <div class="i-ic:baseline-grid-view text-xl" /> -->
          <el-icon><Menu /></el-icon>
          <span ml-2>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
          <el-menu-item index="1-3">角色管理</el-menu-item>
          <el-menu-item index="1-4">部门管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <!-- <div class="i-ic:round-collections-bookmark text-xl" /> -->
          <el-icon><Promotion /></el-icon>
          <span ml-2>审批管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">休假管理</el-menu-item>
          <el-menu-item index="2-2">待我审批</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { Menu, Promotion } from "@element-plus/icons-vue";
const appStore = useAppStore();
</script>

<style scoped>
:deep(.el-menu) {
  border-right: none;
}
</style>
