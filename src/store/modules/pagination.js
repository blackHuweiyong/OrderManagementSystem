const pagination = {
  state: {
    page: null,
    pageNum: null,
    totalNum: null
  },
  mutations: {
    UPDATA_PAGE: (state, data) => {
      state.page = data
    },
    UPDATA_PAGENUM: (state, data) => {
      state.pageNum = data
    },
    TOTAL_NUM: (state, data) => {
      state.totalNum = data
    }
  },
  actions: {
    GET_ORDER_LIST: ({ commit }, params) => {
      const listPageData = {
        page: 1,
        pageNum: 10,
        totalNum: 99
      }
      commit('UPDATA_PAGE', listPageData.page)
      commit('UPDATA_PAGENUM', listPageData.pageNum)
      commit('TOTAL_NUM', listPageData.totalNum)
      return listPageData;
    }
  }
}

export default pagination
