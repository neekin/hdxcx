<template>
  <div class='register'>
    <div class='info'>
      <span>姓名</span> <input type="text"
             placeholder="请输入姓名"
             v-model='user.username'>
    </div>
    <div class='info'>
      <span>手机</span> <input type="tel"
             placeholder="请输入号码(11位)"
             v-model='user.telephone'>
    </div>
    <div class='info'>
      <span>区域</span>
      <picker @change="bindPickerChange3"
              :value="index3"
              :range="regionArray">
        <view class="picker"
              style="margin-left:4px">
          {{regionArray[index3]}}
        </view>
      </picker>
    </div>
    <div class='info'>
      <span>角色</span>
      <picker @change="bindPickerChange"
              :value="index"
              :range="roleArray">
        <view class="picker"
              style="margin-left:4px">
          {{roleArray[index]}}
        </view>
      </picker>
    </div>
    <div class='info'
         v-if="index==1">
      <span>产业</span>
      <picker @change="bindPickerChange2"
              :value="index2"
              :range="productArray">
        <view class="picker"
              style="margin-left:4px">
          {{productArray[index2]}}
        </view>
      </picker>
    </div>
    <!-- <div class='info'>
      <span>负责客户</span> <input type="text"
             placeholder="请输入客户名称"
             v-model='user.customer'>
    </div> -->
    <div class='info'>
      <span>输入密码</span> <input type="password"
             placeholder="请输入密码"
             v-model='user.password'>
    </div>
    <div class='info'>
      <span>确认密码</span> <input type="password"
             placeholder="请再次输入密码"
             v-model='user.repassword'>
    </div>
    <div class="btns">
      <button @click='register'>注册</button>
      <a href="/pages/signin/main">使用已有账户登录</a>
    </div>

  </div>
</template>


<script>
import request from '../../utils/request'
export default {
  //
  data () {
    return {
      index: 0,
      index2: 0,
      index3: 0,
      regionArray: [
        '潮汕网格',
        '东莞网格',
        '佛山网格',
        '广州北网格',
        '广州东网格',
        '广州南网格',
        '广州西网格',
        '河源北网格',
        '河源南网格',
        '惠州北网格',
        '惠州南网格',
        '江门网格',
        '揭阳网格',
        '梅州网格',
        '普宁网格',
        '清远东网格',
        '清远西网格',
        '汕尾网格',
        '韶关网格',
        '五华网格',
        '兴宁网格',
        '云浮网格',
        '肇庆北网格',
        '肇庆南网格',
        '中山网格',
        '珠海网格'
      ],
      roleArray: ['平台', '产业代表', '网络专员', '门店老板'],
      productArray: ['制冷', '洗衣机', '空调', '热水器', '彩电', '厨电'],
      user: {
        username: '',
        telephone: '',
        role: '平台',
        region: '潮汕网格',
        industry: '制冷',
        customer: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    bindPickerChange (e) {
      console.log(e)
      this.index = e.target.value
      this.user.role = this.roleArray[this.index]
    },
    bindPickerChange2 (e) {
      this.index2 = e.target.value
      this.user.industry = this.productArray[this.index2]
    },
    bindPickerChange3 (e) {
      this.index3 = e.target.value
      this.user.region = this.regionArray[this.index3]
    },
    register () {
      if (
        !this.user.username ||
        !this.user.telephone ||
        !this.user.industry ||
        !this.user.role ||
        !this.user.region ||
        // !this.user.customer ||
        !this.user.password ||
        !this.user.repassword
      ) {
        wx.showToast({
          title: '请填写信息',
          icon: 'none',
          duration: 1500
        })
        return
      }
      if (!/^1[34578]\d{9}$/.test(this.user.telephone)) {
        wx.showToast({
          title: '手机号格式错误',
          icon: 'none',
          duration: 1500
        })
        return
      }
      if (this.user.password !== this.user.repassword) {
        wx.showToast({
          title: '两次密码不一致',
          icon: 'none',
          duration: 1500
        })
        return
      }
      request
        .request('/atvtport/userinfo/regist.do', 'POST', this.user)
        .then(res => {
          console.log(res)
          wx.navigateTo({ url: '/pages/signin/main' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  padding-top: 20px;
  .info:nth-of-type(1) {
    border-top: 1px solid #ececec;
  }
  .info {
    border-bottom: 1px solid #ececec;
    height: 100rpx;
    line-height: 100rpx;
    display: flex;
    span {
      display: inline-block;
      height: 100rpx;
      line-height: 100rpx;
      border-right: 1px solid #ececec;
      width: 180rpx;
      padding-left: 20rpx;
      position: relative;
      &::after {
        content: ">";
        position: absolute;
        right: 20rpx;
        font-weight: 900;
        color: #ececec;
        top: -4rpx;
      }
    }
    input {
      height: 100rpx;
      line-height: 100rpx;
      padding-left: 10rpx;
    }
  }
  .btns {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    button {
      width: 50%;
      margin: 0 0 0 10px;
      height: 70rpx;
      line-height: 70rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: #0094ff;
      vertical-align: bottom;
    }
    a {
      color: #0094ff;
      font-size: 30rpx;
      vertical-align: bottom;
      margin: 10px 10px 0 0;
    }
  }
}
</style>
