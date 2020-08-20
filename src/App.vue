<template>
  <div id="app" name="app">
    <!-- 顶部导航栏 -->
    <div class="topbar">
      <div class="nav">
        <ul>
        </ul>
      </div>
    </div>
    <!-- 顶部导航栏END -->

    <!-- 顶栏容器 -->
    <el-header>
      <el-menu
      :default-active='activeIndex'
      class="el-menu-demo"
      mode='horizontal'
      router
    >
    <div class="logo">
      <router-link to="/">
        <img src="./assets/imgs/logo.png" alt />
      </router-link>
    </div>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/goods">全部商品</el-menu-item>
    <el-menu-item index="/about">关于我们</el-menu-item>

    <div class="so">
      <el-input placeholder='请输入' v-model='search'>
        <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
      </el-input>
    </div>
    </el-menu>
    </el-header>
    <!-- 顶栏容器END -->

    <!-- 主要区域容器 -->
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
    <!-- 主要区域容器END -->

    <!-- 底栏容器 -->
    <el-footer>
    </el-footer>
    <!-- 底栏容器END -->
  </div>
</template>

<style>

/* 全局CSS */
* {
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
}
#app .el-header {
  padding: 0;
}
#app .el-main {
  min-height: 300px;
  padding: 20px 0;
}
#app .el-footer {
  padding: 0;
}
a,
a:hover {
  text-decoration: none;
}
/* 全局CSS END */

/* 顶栏容器CSS */
.el-header .el-menu {
  max-width: 1225px;
  margin: 0 auto;
}
.el-header .logo {
  height: 60px;
  width: 189px;
  float: left;
  margin-right: 100px;
}
.el-header .so {
  margin-top: 10px;
  width: 300px;
  float: right;
}
/* 顶栏容器CSS END */
</style>
