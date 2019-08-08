Page({
  data: {
    PageCur: '0',
  },
  footaction: function (op) {
    var page=op.currentTarget.dataset.page
    if (page =='index'){
      this.setData({
        PageCur: '0'
      })
    } else if (page == 'addmsg'){
      wx.navigateTo({
        url: '../../pages/addmsg/addmsg'
      })

    }else{

      wx.navigateTo({
        url: '../../pages/homepage/home'
      })

    }

  },
  // 接受子组件的传值
  openpage: function (e) {
    console.log(e.detail.pagetype);
    this.setData({
      PageCur: e.detail.pagetype

    })
  },
})
