<template>
  <div class="about">
    <el-container>
      <el-header class="top-box">
        <el-row :gutter="24">
          <el-col :span="3">
            <img class="logo" src="../assets/logo.png" alt="">
          </el-col>
          <el-col :span="15">

          </el-col>
          <el-col :span="6">
            <div class="info-box">
              <span>x</span>
              <el-button class="out-btn" type="text">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              router="router"
              class="el-menu-vertical-demo"
          >
            <el-menu-item v-for="i in tableList" :key="i.name" :index="i.name" :route="i.path">
              <template #title>{{ i.meta.title }}</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {} from "vue";
import router from "../router";

export default {
  name: "ContainerView",
  setup() {
    console.log(router.options.routes)
    let tableList = router.options.routes[1].children
    return {
      tableList
    }
  },
};
</script>
<style lang="scss" scoped>
.top-box {
  background: #efefef;
  padding: 5px;

  .logo {
    text-align: right;
    width: 50px;
    height: 50px;
  }

  .info-box {
    text-align: right;
  }

  .out-btn {
    margin-left: 10px;
  }
}
</style>