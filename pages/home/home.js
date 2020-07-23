import request from '../../utils/request'
// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swiperList: [],
    // 推荐课程
    courseList: [],
    // 热门视频
    videoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getSwiperData()
    this.getCourseData()
    this.getVideoData()
  },

  // 轮播图数据
  async getSwiperData(){
    let res = await request({
      url: '/api/home/swipers',
    })
    this.setData({
      swiperList: res.message
    })
  },

  // 推荐课程数据
  async getCourseData(){
    let res = await request({
      url: '/api/home/course',
    })
    this.setData({
      courseList: res.message
    })
  },

  // 热门视频数据
  async getVideoData(){
    let res = await request({
      url: '/api/home/video',
    })
    this.setData({
      videoList: res.message
    })
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