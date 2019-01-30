//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pageSize: 10,
    currPage: 0,
    list: [],
    loading: false,
  },

  onLoad() {
    wx.startPullDownRefresh();
  },

  onPullDownRefresh() {
    this.setData({
      currPage: 0
    })
    
    this.fetchListData();
  },
  
  onReachBottom () {
    this.setData({
      currPage: this.data.currPage
    })
    this.fetchListData();
  },

  fetchListData() {
    this.setData({ loading: true })
    const self = this;
    const { pageSize, currPage, list } = this.data;

    // 用定时器模拟数据请求
    setTimeout(() => {

      const data = []
      for (let i = 0; i < pageSize; i++) {
        let count = pageSize * currPage + i ;
        data.push({ id: count, text: `${count}${count}${count}${count}` })
      }

      // 处理请求得到的数据
      self.setData({
        list: list.concat(data),
        currPage: currPage + 1,
        loading: false,
      });

      wx.stopPullDownRefresh();

    }, 1000)
  }
});