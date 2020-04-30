<template>
  <el-main>
    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <!-- <el-divider style="height:30px"></el-divider> -->
      <el-collapse v-model="form.open">
        <el-collapse-item title="拨号设置" name="1">
      <el-form-item label="拨号方式">
        <el-select v-model="form.dialMethod" placeholder="请选择">
          <el-option label="RNDIS拨号" value="1"></el-option>
          <el-option label="PPPOE拨号" value="2" disabled></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设置PDP类型">
        <el-select v-model="form.pdpType" placeholder="请选择">
          <el-option label="IPV4" value="IP"></el-option>
          <el-option label="IPV6" value="IPV6"></el-option>
          <el-option label="IPV4/IPV6" value="IPV4V6"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="NDIS连接">
        <el-switch v-model="form.connect"></el-switch>
      </el-form-item>
      <div v-if="form.connect === true">
        <el-form-item label="APN">
          <el-input v-model="form.apn" placeholder=""></el-input>
        </el-form-item>
              <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder=""></el-input>
        </el-form-item>
              <el-form-item label="密码">
          <el-input v-model="form.password" placeholder=""></el-input>
        </el-form-item>
              <el-form-item label="静态IP地址">
          <el-input v-model="form.staticIp" placeholder=""></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>

    </el-collapse-item>
</el-collapse>
    </el-form>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      options: [
      {
        value: "选项1",
        label: "RNIDS拨号"
      },
      {
        value: "选项2",
        label: "PPPOE拨号"
      }
      ],
      value: "",
      form: 
      {
        open:'1',
        name: '',
        dialMethod: '',
        pdpType: '',
        date1: '',
        date2: '',
        connect: false,
        type: [],
        resource: '',
        apn: '',
        username: '',
        password: '',
        staticIp: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      var formData = JSON.stringify(this.form);
      this.$http.post("cgi-bin/hello",formData).then(function(data){
        if(data.json().state=="success"){
                console.log("success");
        }
      }).catch(function(){
      console.log("服务器异常！");
      });
    }
  }
}
</script>

<style>
.el-input {
  width:260px;
  /* margin:10px; */
},
.el-form-item__content {
  margin:20px;
}
</style>