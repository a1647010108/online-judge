<template>
  <div class="login">

    <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="loginData"
        style="max-width: 460px"
    >
      <h4>后台系统登录</h4>
      <el-form-item label="账号">
        <el-input v-model="loginData.name" placeholder="请输入账号"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
            v-model="loginData.password" type="password" placeholder="请输入密码" show-password/>
      </el-form-item>
      <el-form-item>
        <el-button class="sub-btn" type="primary">登录</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import {reactive} from "vue"

export default {
  name: "LoginView",
  setup() {
    let loginData = reactive({
      name: "",
      password: ""
    })

    return {
      loginData
    }
  }
}
</script>

<style scoped>
.login{
  width: 600px;
  margin: 150px auto;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 20px;
}
h4{
  text-align: center;
}
.sub-btn{
  width: 100%;
}
</style>