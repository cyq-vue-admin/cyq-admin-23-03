<template>
  <div h-screen w-screen flex bg-gray-200>
    <div w-50 bg-white>1</div>
    <div style="width: calc(100vw - 12.5rem)">
      <div h-12 bg-white>2</div>
      <div p-4 box-border style="height: calc(100vh - 3rem)">
        <router-view></router-view>
      </div>
    </div>
    <!-- <el-container>
      <el-aside h-screen bg-blue-600 width="200px">Aside</el-aside>
      <el-container>
        <el-header bg-red-500>Header</el-header>
        <el-main bg-blue-100> </el-main>
      </el-container>
    </el-container> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
