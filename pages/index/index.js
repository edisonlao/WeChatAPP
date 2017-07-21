//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    topbar: "http://www.meixiangdaoba.com/index/pic5/topbar.png",
    bicon1: [],
    bicon2: [],
    bicon3: [],
    bicon4: [],
    btext1: [],
    btext2: [],
    btext3: [],
    btext4: [],
    hidden1: [],
    hidden2: [],
    hidden3: [],
    hidden4: [],
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
    result: [],
    userId: [],
    nickName: [],
    userInfoAvatar: [],
    sex: [],
    province: [],
    city: [],
    touxiang: [],
    hasLocation: false,//默认未获取地址
  },
  
  onLoad: function () {
   
    var that = this;

    /***********************************获取用户信息**************************************************** */

    // wx.getUserInfo({
    //   success: function (res) {
    //     // success
    //     that.setData({
    //       nickName: res.userInfo.nickName,
    //       userInfoAvatar: res.userInfo.avatarUrl,
    //       province: res.userInfo.province,
    //       city: res.userInfo.city
    //     })
    //     switch (res.userInfo.gender) {
    //       case 0:
    //         that.setData({
    //           sex: '未知'
    //         })
    //         break;
    //       case 1:
    //         that.setData({
    //           sex: '男'
    //         })
    //         break;
    //       case 2:
    //         that.setData({
    //           sex: '女'
    //         })
    //         break;
    //     }
    //   },
    //   fail: function () {
    //     // fail
    //     console.log("获取失败！")
    //   },
    //   complete: function () {
    //     // complete
    //     console.log("获取用户信息完成！")
    //   }
    // })

    app.getUserInfo(function (userInfo) {
      //传递用户详细信息
      that.setData({
        userInfo: userInfo,
      })
    })

    app.getUserOpenId(function (openId) {
      //传递用户openid
      that.setData({
        openId: openId,
      })
    })


    /***********************************页面跳转功能**************************************************** */
    that.setData({
      bicon1: "http://www.meixiangdaoba.com/index/pic5/bicon1on.png",
      bicon2: "http://www.meixiangdaoba.com/index/pic5/bicon2off.png",
      bicon3: "http://www.meixiangdaoba.com/index/pic5/bicon3off.png",
      bicon4: "http://www.meixiangdaoba.com/index/pic5/bicon4off.png",
      btext1: "#ff758a",
      btext2: "#676762",
      btext3: "#676762",
      btext4: "#676762",
      hidden1: "",
      hidden2: "true",
      hidden3: "true",
      hidden4: "true",
    })

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
    var that = this
    that.setData({
      bicon1: "http://www.meixiangdaoba.com/index/pic5/bicon1on.png",
      bicon2: "http://www.meixiangdaoba.com/index/pic5/bicon2off.png",
      bicon3: "http://www.meixiangdaoba.com/index/pic5/bicon3off.png",
      bicon4: "http://www.meixiangdaoba.com/index/pic5/bicon4off.png",
      btext1: "#ff758a",
      btext2: "#676762",
      btext3: "#676762",
      btext4: "#676762",
      hidden1: "",
      hidden2: "true",
      hidden3: "true",
      hidden4: "true",
    })
  },

  skipwanna: function () {
    var that = this
    that.setData({
      bicon1: "http://www.meixiangdaoba.com/index/pic5/bicon1off.png",
      bicon2: "http://www.meixiangdaoba.com/index/pic5/bicon2on.png",
      bicon3: "http://www.meixiangdaoba.com/index/pic5/bicon3off.png",
      bicon4: "http://www.meixiangdaoba.com/index/pic5/bicon4off.png",
      btext1: "#676762",
      btext2: "#ff758a",
      btext3: "#676762",
      btext4: "#676762",
      hidden1: "true",
      hidden2: "",
      hidden3: "true",
      hidden4: "true",
    })
  },

  skipbuy: function () {
    var that = this
    that.setData({
      bicon1: "http://www.meixiangdaoba.com/index/pic5/bicon1off.png",
      bicon2: "http://www.meixiangdaoba.com/index/pic5/bicon2off.png",
      bicon3: "http://www.meixiangdaoba.com/index/pic5/bicon3on.png",
      bicon4: "http://www.meixiangdaoba.com/index/pic5/bicon4off.png",
      btext1: "#676762",
      btext2: "#676762",
      btext3: "#ff758a",
      btext4: "#676762",
      hidden1: "true",
      hidden2: "true",
      hidden3: "",
      hidden4: "true",
    })
  },

  skipmy: function () {
    var that = this
    that.setData({
      bicon1: "http://www.meixiangdaoba.com/index/pic5/bicon1off.png",
      bicon2: "http://www.meixiangdaoba.com/index/pic5/bicon2off.png",
      bicon3: "http://www.meixiangdaoba.com/index/pic5/bicon3off.png",
      bicon4: "http://www.meixiangdaoba.com/index/pic5/bicon4on.png",
      btext1: "#676762",
      btext2: "#676762",
      btext3: "#676762",
      btext4: "#ff758a",
      hidden1: "true",
      hidden2: "true",
      hidden3: "true",
      hidden4: "",
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
    var sp = 33.3 * currentposition + "%";
    this.setData({
      slipposition: sp,
      msg: sp,
    })

  },

    //获取经纬度
    getLocation: function(e) {
      console.log(e)
      var that = this
      wx.getLocation({
        success: function (res) {
          console.log(res)
          that.setData({
            hasLocation: true,
            location: {
              longitude: res.longitude,
              latitude: res.latitude,
              accuracy: res.accuracy
            }
          })
        }
      })
    },
  //根据经纬度在地图上显示
  openLocation: function (e) {
    var value = e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    })
  }

})
