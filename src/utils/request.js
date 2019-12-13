// const header = 'application/x-www-form-urlencoded'//python后台
// const url = 'http://192.168.10.109:8080'
const url = 'https://www.gz-wnkj.com:8806'
function request(path, method, data) {
    let promise = new Promise((resolve, reject) => {
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        wx.request({
            url: url + path,
            method: method,
            header: {
                'content-type': 'application/json' // 默认值
            },
            data: data,
            success: res => {
                wx.hideLoading()
                console.log(`--------${url}----------`);
                console.log(res);
                if (res.statusCode == 200 && res.data.status == 200) {
                    console.log('resolve');
                    resolve(res)
                } else {
                    console.log('rejected');
                    reject(res.data)
                }
            },
            fail: res => {
                wx.hideLoading()
                wx.showToast({
                    title: '网络出错',
                    icon: 'none',
                    duration: 1500
                })
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('网络错误')
            }
        })
    }).catch(err => {
        wx.hideLoading()
        wx.showToast({
            title: err.msg || '网络出错',
            icon: 'none',
            duration: 1500
        })
    })
    return promise
}

export default {
    request,
    url
}
