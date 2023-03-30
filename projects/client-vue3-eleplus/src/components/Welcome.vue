<template>
  <el-card h-full>
    <div h-full w-full flex items-center justify-around bg-blue-100 px-5>
      <div>
        <div text-2xl>欢迎登录</div>
        <div text-4xl text-indigo-500 my-2>CYQ admin后台管理系统</div>
        <div text-sm text-gray-500 text-right>Vue3 + koa2 + mongodb</div>
      </div>
      <div class="w-1/3">
        <img w-full src="../assets/welcome.svg" alt="" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.el-card__body) {
  height: 100%;
  padding: 0;
}
</style>
