<template>
  <div>1</div>
</template>

<script setup lang="ts">
import axios from "axios";
import config from "@/config";
import { login } from "@/api";

login().then((res) => {
  console.log(res);
});
</script>

<style scoped></style>
