<template>
  <div @click="clickHandle">

    <div class="userinfo"
         @click="bindViewTap">
      <!-- <img class="userinfo-avatar"
           v-if="userInfo.avatarUrl"
           :src="userInfo.avatarUrl"
           background-size="cover" />
      <img class="userinfo-avatar"
           src="/static/images/user.png"
           background-size="cover" /> -->

    </div>
    <info text='姓名'
          :value='userInfo.USER_NAME' />
    <info text='手机'
          :value='userInfo.USER_TELEPHONE' />
    <info text='区域'
          :value='userInfo.REGION' />
    <info text='角色'
          :value='userInfo.ROLE' />
    <info text='产业'
          :value='userInfo.INDUSTRY' />

    <div class="copyright red"
         @click="toActiveList">我的活动列表</div>
    <div class="copyright">版本号: v0.0.1</div>
    <button @click='signout'>注销</button>

  </div>
</template>

<script>
import info from '@/components/info'
import request from '../../utils/request'
export default {
  data () {
    return {
      userInfo: {}
    }
  },

  components: {
    info
  },

  methods: {
    toActiveList () {
      mpvue.navigateTo({ url: '../myActlist/main' })
    },
    signout () {
      wx.redirectTo({
        url: '/pages/signin/main'
      })
      try {
        wx.removeStorageSync('userinfo')
      } catch (e) {
        // Do something when catch error
      }
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  onShow () {
    try {
      var userstr = wx.getStorageSync('userinfo')
      if (userstr) {
        // { "CITY": "上海", "INDUSTRY": "洗衣机", "USER_EMAIL": "zll@163.com", "USER_TELEPHONE": "15974192340", "CUSTOMER": "酒剑仙", "PROVINCE": "上海", "USER_NAME": "醉玲珑", "USER_GENDER": "女", "REGION": "广州东网络" }
        let TELEPHONE = JSON.parse(userstr).USER_TELEPHONE
        console.log(userstr)
        request
          .request('/atvtport/userinfo/loadUserInfo.do', 'POST', {
            TELEPHONE
          })
          .then(res => {
            // console.log(res.data.data)
            this.userInfo = Object.assign(res.data.data, {
              role: JSON.parse(userstr).ROLE
            })
            console.log(this.userInfo)
          })
        // console.log(this.userInfo)
      }
    } catch (e) {
      // Do something when catch error
    }
    // let telephone = wx.lo
  }
}
</script>

<style scoped>
.red {
  color: red;
  font-weight: bold;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: right;
  padding-left: 20px;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
}
.copyright {
  text-align: center;
  padding: 40rpx 0;
  font-size: 12px;
}
button {
  width: 80%;
  height: 68rpx;
  font-size: 32rpx;
  line-height: 68rpx;
  color: #fff;
  background-color: #06ad56;
  margin-top: 30px;
  font-weight: 300;
}
</style>
