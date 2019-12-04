import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['pageIndex', 'page', 'totalNum'])
  },
  methods: {
    ...mapMutations(['UPDATA_PAGE', 'UPDATA_PAGENUM', 'TOTAL_NUM']),
    ...mapActions(['GET_ORDER_LIST'])
  }
}
