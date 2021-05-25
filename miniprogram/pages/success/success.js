// miniprogram/pages/successPage/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  finish(){
    wx.navigateBack({
      delta: 2
    })
  }
})