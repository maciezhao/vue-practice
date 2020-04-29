<template>
    <el-container>
        <el-aside style="width:20%">
            <!-- 左侧导航菜单 -->
            <el-menu router
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            style="height:100%">
                <template v-for="proute in $router.options.routes">
                     <template v-if="proute.path === $store.state.topNavState">
                        <template v-for="(item,index) in proute.children">
                            <el-submenu v-if="item.children.length > 1" :index="index+''" :key="index">
                                <template slot="title"><i class="el-icon-menu"></i><span slot="title">{{item.name}}</span></template>
                                <el-menu-item v-for="ichild in item.children" :key="ichild.path" :index="ichild.path" :class="$route.path==ichild.path?'is-active':''">
                                    <i class=""></i><span slot="title">{{ichild.name}}</span>
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else-if="item.children.length == 1" :index="item.children[0].path" :class="$route.path==item.children[0].path?'is-active':''" :key="index">
                                <i class="el-icon-menu"></i><span slot="title">{{item.children[0].name}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </template>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {

}

</script>
