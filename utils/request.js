const BASE_URL = 'http://localhost:3000'
export default function request (options) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.request({
      url: BASE_URL + options.url,
      method: options.method,
      data: options.data,
      header:options.header,
      success: (res) => {
        let {status} = res.data
        if(status === 0) {
          resolve(res.data)
        }
      },
      fail: (error) => {
        reject(error)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}