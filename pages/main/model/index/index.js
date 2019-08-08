Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    autoplay: true,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      type: '1',
      name: '兼职'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      type: '3',
      name: '活动'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      type: '4',
      name: '闲置'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      type: '5',
      name: '互助'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      type: '6',
      name: '新闻'
    }, 
      {
        icon: 'recordfill',
        color: 'orange',
        badge: 1,
        type: '2',
        name: '讲座'
      },{
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      type: '1',
      name: '发现'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      type: '1',
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      type: '1',
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      type: '1',
      name: '版权'
    }],
    gridCol: 5,
    skin: false,
    rollData :[
      "139****2396在手机贷成功贷款5000元",
      "136****3365在信用贷成功贷款2000元",
      "159****9685在手机贷成功贷款3000元",
      "137****4867在农户贷成功贷款6000元",
      "156****5530在法人贷成功贷款9000元",
      "158****6940在保单贷成功贷款4000元",
      "153****3364在热门网贷成功贷款3000元",
      "157****2564在大学生创业贷款成功贷款10000元",
      "139****2396在手机贷成功贷款5000元",
      "136****3365在信用贷成功贷款2000元",
      "159****9685在手机贷成功贷款3000元",
      "137****4867在农户贷成功贷款6000元",
      "156****5530在法人贷成功贷款9000元",
      "158****6940在保单贷成功贷款4000元",
      "153****3364在热门网贷成功贷款3000元"
    ]
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  openptj(e) {
    //打开兼职主页面    
    //console.log(e.currentTarget.dataset['type']);
    wx.navigateTo({
      url: '../parttimejob/index/index'
    })

  },
  //打开发布信息界面
  openaddmsg: function (op) {
    wx.navigateTo({
      url: '../addmsg/addmsg'
    })
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openptj: function (data) {
      // 自定义组件向父组件传值 
      let val = data,
        my_event_detail = {
          pagetype: val.currentTarget.dataset.pagetype
        }
      // myevent自定义名称事件，父组件中使用
      this.triggerEvent('openpage', my_event_detail)
      /*
       在父组件中写上bind:myevent="get_emit",在父组件中就需要调用get_emit事件
      */
    },
  }
})
