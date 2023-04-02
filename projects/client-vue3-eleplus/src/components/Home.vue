<template>
  <div h-screen w-screen flex bg-gray-200>
    <div
      :class="appStore.collapse ? ['w-16'] : ['w-50']"
      bg-white
      transition-width
      duration-500
      ease-in-out
    >
      <Side></Side>
    </div>
    <div
      :style="{
        width: appStore.collapse
          ? `calc(100vw - 4rem)`
          : `calc(100vw - 12.5rem)`,
      }"
      transition-width
      duration-500
      ease-in-out
    >
      <div h-12 bg-gray-100>
        <Header></Header>
      </div>
      <div p-4 box-border style="height: calc(100vh - 3rem)">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>

<style scoped></style>
