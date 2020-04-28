<template>
    <el-row type="flex" class="row-bg" justify="center" align="center">
  <el-col :span="6">
    <div class="grid-content">
              <p>登录</p>
        <el-input v-model="input1" placeholder="请输入账号" clearable></el-input>
        <el-input v-model="input2" placeholder="请输入密码" show-password></el-input>
    </div>
  </el-col>
</el-row>

</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: ''
    }
  }
}

</script>

<style>
  .el-row {
    margin-bottom: 20px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 200px 0;
    background-color: #f9fafc;
  }
</style>
