//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  /********************************获取用户详细信息******************************************/
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          }); 
        }
      })
    }
  },

  /********************************获取用户openid******************************************/
  getUserOpenId:function(cb){
    var that = this
    // var jieguo = []
    if (this.globalData.openId) {
      typeof cb == "function" && cb(this.globalData.openId)
    } else {
      wx.login({
        success: function (res) {
          // jieguo = res.code
          var d = that.globalData;//这里存储了appid、secret、token串    
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          wx.request({
            url: l,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
            // header: {}, // 设置请求的 header    
            success: function (res) {
              var obj = {};
              obj.openId = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              that.globalData.openId = res.data.openid;
              typeof cb == "function" && cb(res.data.openid);
              //console.log(obj);  
              wx.setStorageSync('user', obj);//存储openid    
            }
          });
        }
      })  
    }
  },
  globalData:{
    userInfo: null,
    appid: 'wx70068afb2df28fb8',  
    secret: '0b7edc1963a6ad822c25e5a3b5157a36',
    openId: null
  }
})