<template>
  <div class="filterBox">
    <el-form ref="form" :model="form" label-width="100px">
        <el-select v-model="form.region" placeholder="请选择订单类型">
          <el-option label="类型一" value="one"></el-option>
          <el-option label="类型二" value="tow"></el-option>
        </el-select>
    </el-form>
    <el-scrollbar
        style="height:calc(100vh - 100px)"
        :wrap-class="wrapClass"
        :wrap-style="wrapStyle"
        :view-class="viewClass"
        :view-style="viewStyle"
        :native="native"
        :tag="tag"
        :noresize="noresize"
      >
        <ul>
          <li v-for="(item,index) in 100" :key="index">{{item}}</li>
        </ul>
      </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'OrderFilter',
  data(){
    return {
      form: {
        region: ''
      },
      wrapClass:{
          wrapClass:true
        },
        wrapStyle:{
          fontWeight:800
        },

        //滚动整体区域的class
        viewClass:{
          viewClass:true
        },
        viewStyle:{
          border:'1px solid #000000',
          boxSizing:'border-box'
        },
        // native属性：如果为true就不显示el的bar，也就是el模拟出来的滚动条，如果为false就显示模拟的滚动条
        native:false,
        // tag 渲染出来的标签
        tag:'section',
        // noresize 是否刷新滚动条大小
        noresize:true
    }
  }
}

</script>
<style lang="scss">
.filterBox {
  .wrapClass {
    overflow-x: hidden;
  }
}
</style>
