<template>
  <div>这是订单主页
    <span>测试less</span>
    <el-button type="primary">测试elemnet-ui</el-button>
    <button @click="sendmessage">测试axios</button>
  </div>
</template>

<script>
export default {
  name: 'OrderMain',
  data(){
    return{

    }
  },
  methods:{
    sendmessage(){
      this.$axios.get('/user', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    }
  },
}

</script>
<style lang="less" scoped>
div {
  background-color: #ccc;
  span{
    width: 100px;
    height: 100px;
    font-size: 50px;
    background-color: red;
  }
}
</style>

