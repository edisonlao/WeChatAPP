//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    topbar: "http://www.meixiangdaoba.com/index/pic5/topbar.png",
    bicon1: "http://www.meixiangdaoba.com/index/pic5/bicon1off.png",
    bicon2: "http://www.meixiangdaoba.com/index/pic5/bicon2on.png",
    bicon3: "http://www.meixiangdaoba.com/index/pic5/bicon3off.png",
    bicon4: "http://www.meixiangdaoba.com/index/pic5/bicon4off.png",
    commodity1: "http://www.meixiangdaoba.com/index/pic5/commodity1.jpg",
    commodity2: "http://www.meixiangdaoba.com/index/pic5/commodity2.jpg",
    commodity3: "http://www.meixiangdaoba.com/index/pic5/commodity3.jpg",
    commodity4: "http://www.meixiangdaoba.com/index/pic5/commodity4.jpg",
    text1: "http://www.meixiangdaoba.com/index/pic5/text1.png",
    text2: "http://www.meixiangdaoba.com/index/pic5/text2.png",
    text3: "http://www.meixiangdaoba.com/index/pic5/text3.png",
    text4: "http://www.meixiangdaoba.com/index/pic5/text4.png",
    slipposition: [],
    currentpage: [],
    msg: [],
    result: []
  },

  onLoad: function () {

    var that = this;
    wx.request({
      url: 'http://www.meixiangdaoba.com/type/queryAll2.do',
      data: { style: "1", currentPage: "1" },
      method: 'post',
      // dataType: 'JSON',
      success: function (res) {

        that.setData({
          result: res.data
        })
      },
      fail: function (err) {
        alert("失败")
      },
    })
  },

  skiphome: function () {
    wx.navigateBack({
      url: '../index/index'
    })
  },

  movetoleft: function () {
    this.setData({
      slipposition: "0",
      currentpage: "0"
    })
  },

  movetocenter: function () {
    this.setData({
      slipposition: "33.3%",
      currentpage: "1"
    })
  },

  movetoright: function () {
    this.setData({
      slipposition: "66.6%",
      currentpage: "2"
    })
  },

  EventHandle: function (event) {
    var currentposition = event.detail.current;
    var sp = 33.3*currentposition+"%";
    this.setData({
      slipposition: sp,
      msg: sp,
    })

  },

})
