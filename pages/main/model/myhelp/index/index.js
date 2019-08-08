// pages/main/model/myhelp/index/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
  * 页面的初始数据
  */
  data: {
    TabCur: 0,
    iscomment:false,
    showView: false

  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabSelect: function (op) {
      let type = op.currentTarget.dataset.type
      this.setData({
        TabCur: type
      })
    },
    showcomment: function (e) {
      let msgid = e.currentTarget.dataset.msgid
      this.setData({
        iscomment: true,
        showView: true
      })

    }

  }
})
