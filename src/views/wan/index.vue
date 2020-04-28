<template>
  <el-main>
    <template>
      <div>拨号方式：
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
              <el-input v-model="value"></el-input>
      </div>        

    </template>

    <div>

    </div>
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
      value: ""
    };
  }
};
</script>

<style>

</style>