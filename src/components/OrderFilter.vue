<template>
  <div class="filterBox">
    <el-form ref="form" :model="form" label-width="100px">
        <el-select v-model="form.region" placeholder="请选择订单类型">
          <el-option label="类型一" value="one"></el-option>
          <el-option label="类型二" value="tow"></el-option>
        </el-select>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'OrderFilter',
  data(){
    return {
      form: {
        region: ''
      }
    }
  }
}

</script>
<style scopet>
</style>