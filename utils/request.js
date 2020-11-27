
import config from './config'

export default(url,data={},method='GET')=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:config.host+url,
      data,
      method,
      //请求成功的回调
      success:function(res){
        resolve(res.data)
      },
      //请求失败的回调
      fail:function(error){
        reject(error)
      }
    })
    
    
  })

}