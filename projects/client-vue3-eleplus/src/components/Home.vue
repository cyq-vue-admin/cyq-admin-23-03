<template>
  <div h-screen w-screen>
    <el-container>
      <el-aside h-screen bg-blue-600 width="200px">Aside</el-aside>
      <el-container>
        <el-header bg-red-500>Header</el-header>
        <el-main bg-blue-100> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
