import request from '../../utils/request'
// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  wxLogin (event) {
    let { avatarUrl, nickName } = event.detail.userInfo
    wx.login({
      success: async (res) => {
        let data = await request({
          url: '/api/user/wxlogin',
          method: 'POST',
          data: {
            code: res.code,
            nickname: nickName,
            avatar: avatarUrl
          }
        })
        // 存token
        wx.setStorageSync('token', data.token)
        // 提示
        wx.showToast({
          title: data.message,
          duration: 2000,
          success: () => {
            setTimeout(()=>{
              wx.navigateBack()
            }, 2000)
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // // 1.发起授权
    // wx.authorize({
    //   scope: 'scope.userInfo',
    //   success: () => {
    //       // 2.调用授权接口,scope对应的方法
    //       wx.getUserInfo({
    //           success(res) {
    //             // console.log(res)
    //           }
    //       })
    //   }
    // }),
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})