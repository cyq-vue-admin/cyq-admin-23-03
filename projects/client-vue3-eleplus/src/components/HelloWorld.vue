<template>
  <div>1</div>
</template>

<script setup lang="ts">
import axios from "axios";
import config from "@/config";
axios.get(config.mockUrl + "/user/login").then((res) => {
  console.log(res);
});
</script>

<style scoped></style>
