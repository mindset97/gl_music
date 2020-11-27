// pages/index/index.js
//引入request
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储轮播图数据
    banners:[],
    recommendList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //获取轮播图列表
    const bannerListData=await request('/banner',{type:2})
    //更新数据
    this.setData({
      banners:bannerListData.banners
    })
   
    //获取歌曲推荐数据
    const recommendListData=await request('/personalized',{limit:10})
    console.log(recommendListData);
    this.setData({
      recommendList:recommendListData.result
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