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
        <el-input placeholder="请输入账号" v-model="loginData.name"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
            v-model="loginData.password" type="password" placeholder="请输入密码" show-password/>
      </el-form-item>
      <el-form-item>
        <el-button @click="subFun" class="sub-btn" type="primary">登录</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import {reactive} from "vue"
import {ElMessage} from 'element-plus'
import {login} from "@/http/api";
import router from "../router"

export default {
  name: "LoginView",
  setup() {
    let loginData = reactive({
      name: "",
      password: ""
    })
    let subFun = () => {
      if (!loginData.name || !loginData.password) {
        ElMessage({
          showClose: true,
          message: '请先填写账号或者密码',
          type: 'error',
        })
        return
      }
      // 登录操作
      login(loginData).then(res => {
        console.log(res)
        router.push("/about")
      })

    }

    return {
      loginData,
      subFun
    }
  }
}
</script>

<style scoped>
.login {
  width: 600px;
  margin: 150px auto;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 20px;
}

h4 {
  text-align: center;
}

.sub-btn {
  width: 100%;
}
</style>