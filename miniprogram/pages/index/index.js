// index.js
// 获取应用实例
const app = getApp()

Page({
  data: { },
  // 事件处理函数
 
  onLoad() {

  },

  openStore(){
    wx.navigateToMiniProgram({
      appId: 'wx670e31de4f9fd898',
      success(res) {
        console.log("打开成功");
      },
      fail(error){
        console.log(error);
      }
    })
  },

  openSellPage(){
    wx.navigateTo({
      url: '/pages/sell/sell',
    })
  }

})
