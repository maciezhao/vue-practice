<template>
  <div class="app-container" align="center">
  <el-table
    v-loading="listLoading"
    :data="basicInfo"
    border
    fit
  style="width:50%; margin:50px">
    <el-table-column
      label=""
      width="180"
      align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
    </el-table-column>
    <el-table-column
      label=""
      align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getHomeInfo } from '@/api/api'

  export default {
    data() {
      return {
        basicInfo: null,
        listLoading: true
      }
    },
    created() {
      this.getBasicInfo()
    },
    methods: {
      getBasicInfo() {
        this.listLoading = true
        getHomeInfo().then(response => {
          this.basicInfo = response.basicInfo
          console.log("basicInfo:",this.basicInfo)
          this.listLoading = false
        })
      }
    }
  }
</script>

<style>

</style>
