Component({
  options: {
    addGlobalClass: true,
  },

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 组件的方法列表
   */
  methods: {
    openptjdetail: function (e) {
      //打开兼职详情页面    
      //console.log(e.currentTarget.dataset['type']);
      wx.navigateTo({
        url: '../../pages/main/model/parttimejob/detail/detail'
      })

      },

      tabSelect:function(op){
        let type = op.currentTarget.dataset.type
        this.setData({
          TabCur: type
        })        
      }
  }
  
})