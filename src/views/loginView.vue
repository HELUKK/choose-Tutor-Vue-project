<template>
  <div class="background">
    <el-row class="maxtype" justify="center" align="middle">
      <el-form
        label-position="right"
        label-width="100px"
        size="large"
        :model="formLabelAlign"
        class="loginDialog"
      >
        <el-row justify="center"><h2>dl</h2></el-row>
        <el-form-item label="Name">
          <el-input v-model="userFrom.number" />
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" v-model="userFrom.password" />
        </el-form-item>
        <el-row justify="center">
          <el-button @click="login">登录</el-button>
        </el-row>
      </el-form>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
})

const userFrom = ref({ number: '', password: '' })
const login = () => {
  const user = {
    number: userFrom.value.number,
    password: userFrom.value.password
  }
}
</script>
<style scoped>
.maxtype {
  min-width: 100vw;
  min-height: 100vh;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-image: url('@/assets/background.jpg'); */
  background-size: cover;
}
.loginDialog {
  max-width: 500px;
  min-width: 400px;
  max-height: 500px;
  border: 4px solid rgb(63, 112, 134);
  border-radius: 20px;
  padding: 20px;
}
</style>
