Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    index: 0,
    danwei:['时', '天', '月'],
    recruiter: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '20', '30', '40', '50', '100'],
    salaryDanwei:'时',
    salaryValue:100,
    tags:[],
    items: [
      {value: '女生', cor: 'yellow', checked: false},
      {value: '男生', cor: 'red', checked: false},
      {value: '数学', cor: 'gray', checked: false},
      {value: '英语', cor: 'orange', checked: false},
      {value: '化学', cor: 'olive', checked: false},
      {value: '其他', cor: 'cyan', checked: false},
    ]
  },

  /**
   * 组件的属性列表
   */
  properties: {
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    recruitChange: function (e) {
      this.setData({
        index: e.detail.value
      })
    },

    salaryDanwei:function(e){
      this.setData({
        salaryDanwei: this.data.danwei[e.detail.value]
      })
    },
    salaryValue: function (e) {
      this.setData({
        salaryValue: e.detail.value
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
       this.setData({
        modalName: null,
        
      })
    },

    textareaAInput(e) {
      this.setData({
        textareaAValue: e.detail.value
      })
    },

    checkboxChange: function (e) {
     // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      var values = e.detail.value;
      for (var i = 0; i < this.data.items.length ; i++)
      {
        this.data.items[i].flg = 0
        for (var j = 0; j < values.length;j++){
          if (this.data.items[i].id==values[j]){
            this.data.items[i].flg = 1
          }
        }
      }
      this.setData({
        tags: this.data.items
      })
    },
    //多选
    userCheck: function (e) {
      let index = e.currentTarget.dataset.id;//获取用户当前选中的索引值
      let checkBox = this.data.items;
      if (checkBox[index].checked) {
        this.data.items[index].checked = false;
      } else {
        this.data.items[index].checked = true;
      }
      this.setData({
        tags: this.data.items,
        items: this.data.items
        })

      //返回用户选中的值
      let value = checkBox.filter((item, index) => {
        return item.checked == true;
      })
      // console.log(value)
    },

    openmap: function () {
      var that = this;
      //获取当前位置
      wx.getLocation({
        type: 'gcj02',
        success: function (res) {
          console.log(res)
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
        }
      })
      wx.chooseLocation({
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          var address = res.address
          var accuracy = res.accuracy
          that.setData({ latitude: address })
          that.setData({ longitude: longitude })
        }
      })
    }

  }
})
