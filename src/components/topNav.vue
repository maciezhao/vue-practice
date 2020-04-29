<template>  
  <el-container style="height: 600px">
    <el-header>
      <el-menu router
        :default-active="defaultActiveIndex"
        class="el-menu-demo"
        route mode="horizontal"
        @select="handleSelect">
        <!-- 顶部导航 -->
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" style="width: 25%">
              {{ item.navItem }}
          </el-menu-item>
      </el-menu>
    </el-header>
      <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      defaultActiveIndex: '/content',
      navList: [
        {name: '/content', navItem: '主页'},
        {name: '/wan', navItem: '网络设置'},
        {name: '/wlan', navItem: 'wlan设置'},
        {name: '/info', navItem: '高级设置'}
      ]
    }
  },
  created () {
    this.fetchNavData()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$route.path)
      this.defaultActiveIndex = key
    },
    fetchNavData () {
      var cur_path = this.$route.path // 获取当前路由
      var nav_name = '/content'
      var cur_path_split = '/' + cur_path.split('/')[1] // 匹配根节点路由
      nav_name = cur_path_split

      this.defaultActiveIndex = cur_path_split
      this.$store.state.topNavState = nav_name // 改变topNavState状态的值
      console.log("topNavState:" + this.$store.state.topNavState)
    }
  },
  watch: {
    '$route': 'fetchNavData'  //监听router值改变时，改变导航菜单激活项
  }
}

</script>


<style>
  .el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0!important; /* 顶部导航内边距设为0 */
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: justify;
    line-height: 100px;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu--collapse, .el-menu-item, .el-submenu-item, .el-menu--popup {
    border-right-width: 0;/* 修复三级子菜单选中超出边界1px问题 */
  },
  .el-container{height:100%;padding:0;margin:0;width:100%;}
</style>

