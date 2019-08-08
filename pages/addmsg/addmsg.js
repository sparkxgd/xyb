Page({
    data: {
      PageCur: '1',
      index: 0,
      pickers: [{ name: '兼职', pc: '1' }, { name: '讲座', pc: '2' }, { name: '活动', pc: '3' }, { name: '二手商品', pc: '4' }, { name: '互帮互助', pc: '5' }],
    },
 
pickerChange:function(e) {
    console.log(e);
    this.setData({
      index: e.detail.value,
      PageCur: this.data.pickers[e.detail.value].pc
    })
  }
})