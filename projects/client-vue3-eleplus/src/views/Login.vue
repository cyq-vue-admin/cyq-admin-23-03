<template>
  <div h-screen flex justify-center items-center>
    <el-card class="w-3/5">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        status-icon
        :rules="rules"
        :hide-required-asterisk="true"
      >
        <h1 text-center>CYQ admin</h1>
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" placeholder="用户名">
            <template #prefix>
              <div class="i-ic:baseline-person text-xl" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            type="password"
            show-password
          >
            <template #prefix>
              <div class="i-ic:baseline-vpn-key text-xl" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button w-full type="primary" @click="submitForm(loginFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import * as API from "@/api";
import { loginFormI } from "@/api";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store";
const router = useRouter();
const appStore = useAppStore();
const loginFormRef = ref<FormInstance>();

const loginForm = reactive<loginFormI>({
  userName: "",
  password: "",
});

const rules = reactive<FormRules>({
  userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      API.login(loginForm)
        .then((res) => {
          console.log(res);
          appStore.saveUserInffo(res.data.data);
          router.push("/welcome");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      return false;
    }
  });
};
</script>

<style scoped></style>
