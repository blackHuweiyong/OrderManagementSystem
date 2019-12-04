<template>
  <div class="order-main">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">一类订单</el-menu-item>
      <el-menu-item index="2">二类订单</el-menu-item>
    </el-menu>
    <div class="order-header">
      <div class="order-header-search">
        <order-filter></order-filter>
      </div>
      <div class="order-header-export">
        <el-button type="primary">导出</el-button>
      </div>
    </div>
    <div class="order-list">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>

        <el-table-column
          :show-overflow-tooltip="showTooltip"
          label="详情"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="toDetail()">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        :page-size="pageIndex"
        :current-page="page"
        layout="prev, pager, next, jumper, total"
        :total="totalNum">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import OrderFilter from '../components/OrderFilter'
import paginationMixin from '../mixins/pagination-mixin'
import { mapActions, mapGetters, mapMutations } from 'vuex'


export default {
  name: 'OrderMain',
  mixins: [paginationMixin],
  data(){
    return{
      showTooltip: true,
      activeIndex:this.totalNum,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    this.GET_ORDER_LIST()
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
    },
    toDetail(){
      console.log('去详情页了');
      this.UPDATA_PAGE(Math.floor(Math.random() * 6))
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{
    OrderFilter
  }
}

</script>
<style lang="less" scoped>
.order-main {
  width: 100%;
  flex-grow: 1;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .order-header {
    padding: 20px 20px 0 20px;
    .order-header-search {
      float: left;
    }
    .order-header-export {
      float: right;
    }
  }
  .order-list {
    padding: 20px;
  }
}
</style>

