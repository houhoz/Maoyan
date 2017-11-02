//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  //数据源
  data: {
    movies: [],
    loading: false,
    limit: 6,
    windowHeight: 0,
    scrollTop: 100
  },
  requestData: function (a) {
    var that = this
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json', //仅为示例，并非真实的接口地址
      data: {
        limit: that.data.limit
      },
      success: function (res) {
        // 数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
        console.log(res);
        that.setData({
          movies: res.data.data.movies,
          loading: true
        })
      }
    })
    // 获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        that.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.requestData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 下拉加载
  onPullDownRefresh: function (e) {
    var limit = this.data.limit + 6
    this.setData({
      limit: limit
    })
    this.requestData();
  },
  // 购票
  buyTickets: function () {
    wx.showModal({
      title: '购票提示：',
      content: '目前不支持购买',
      showCancel: false,
      confirmColor: '#ff4d64'
    })
  }
})