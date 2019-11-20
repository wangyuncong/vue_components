<template>
  <div id="app">
    <el-container style="position:relative;height:100vh">
      <el-aside width="200px" style="overflow-x:hidden;background:rgb(0, 21, 41);">
        <el-menu
          background-color="#001529"
          text-color="#fff"
          :router="true"
          :default-active="defaultActive"
        >
          <el-submenu
            v-if="menus.length>=1 && item.children.length > 0"
            v-for="item in menus"
            :key="item.index"
            :index="item.path"
          >
            <span slot="title">{{item.name}}</span>
            <el-menu-item-group v-bind:index="item.path">
              <el-menu-item
                v-for="item2 in item.children"
                v-bind:index="item2.path"
                :key="item2.index"
                style="paddingLeft:80px"
              >{{item2.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item
            v-bind:index="item.path"
            v-for="item in menus"
            :key="item.index"
            v-if="item.children&&item.children.length == 0"
          >
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main_container">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      defaultActive: "",
      isTemp:false,
      origin:'',
      menus: [
        {
          name: "Button",
          path: "/WycButtonIframe",
          children: []
        }
      ]
    };
  },
  mounted(){
    let url = window.location.hash.replace("#", "");
    let arr = url.split("/");
    arr.map(item => {
      if (item !== "") {
        this.defaultActive = `/${item}`;
      }
    });
  },
};
</script>

<style>
.el-menu-item.is-active {
  color: #fff;
  background: #1890ff !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
