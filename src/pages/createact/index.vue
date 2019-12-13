<template>
  <div>
    <div class="title">
      新建活动
    </div>
    <div class="info">
      区域
      <!-- <picker @change="bindPickerChange"
              :value="index"
              :range="array"> -->
      <input type="text"
             v-model='act.region'
             disabled
             placeholder="">
      <!-- <view class="">
          {{act["region"]}}
        </view> -->
      <!-- </picker> -->
    </div>
    <div class="info">
      活动门店类型
      <picker @change="bindPickerChangeShopType"
              :value="shopindex"
              :range="shoptype">
        <view class="picker">
          {{shoptype[shopindex]}}
        </view>
      </picker>
    </div>
    <div class="info">
      活动门店名称
      <input type="text"
             v-model='act.store_name'
             placeholder="输入活动门店名称">
    </div>
    <div class="info">
      活动门店8码

      <input type="text"
             v-model='act.store_code'
             placeholder="输入活动门店8码">
    </div>
    <div class="info">
      老板姓名
      <input type="text"
             v-model='act.store_owner_name'
             placeholder="输入老板姓名" />
    </div>
    <div class="info">
      老板电话
      <input type="text"
             placeholder="输入老板电话"
             v-model='act.store_owner_telephone'>
    </div>
    <div class="info">
      上级理货商名称
      <input type="text"
             placeholder="输入上级理货商名称"
             v-model='act.tally_name'>
    </div>
    <div class="info">
      上级理货商8码
      <input type="text"
             placeholder="输入上级理货商8码"
             v-model='act.tally_code'>
    </div>
    <!-- <div class="info">
      理货商渠道
      <input type="text"
             placeholder="输入上级理货商渠道"
             v-model='act.tally_channel'>
    </div> -->
    <div class="info">
      理货商渠道
      <picker @change="bindPickerChangeTallyChannel"
              :value="tally_channel_index"
              :range="tally_channel">
        <view class="picker">
          {{tally_channel[tally_channel_index]}}
        </view>
      </picker>
    </div>
    <div class="info">
      活动主题
      <input type="text"
             placeholder="输入活动主题"
             v-model='act.activity_theme'>
    </div>
    <div class="info">
      活动类型
      <picker @change="bindPickerChangeActType"
              :value="actindex"
              :range="acttype">
        <view class="picker">
          {{acttype[actindex]}}
        </view>
      </picker>
      <!-- <input type="text"
             placeholder="输入活动类型"
             v-model='act.activity_type'> -->
    </div>
    <div class="info">
      活动爆破开始时间
      <!-- <input type="text"
             placeholder="输入活动爆破开始时间"
             v-model='act.blasting_start_time'> -->
      <picker mode="date"
              @change=bindTimeChange>
        <view class="picker">
          {{act.blasting_start_time}}
        </view>
      </picker>
    </div>
    <div class="info">
      活动爆破结束时间
      <picker mode="date"
              @change=bindendTimeChange>
        <view class="picker">
          {{act.blasting_end_time}}
        </view>
      </picker>
    </div>
    <div class="info">
      活动挂靠人姓名
      <input type="text"
             placeholder="输入活动挂靠人姓名"
             v-model='act.event_holder_name'>
    </div>
    <div class="info">
      活动挂靠人电话
      <input type="text"
             placeholder="输入活动挂靠人电话"
             v-model='act.event_holder_telephone'>
    </div>
    <div class="info">
      活动挂靠人产业
      <input type="text"
             placeholder="输入活动挂靠人产业"
             v-model='act.event_holder_industry'>
    </div>
    <div class="info">
      活动挂靠人工号
      <input type="text"
             placeholder="输入活动挂靠人工号"
             v-model='act.event_holder_number'>
    </div>
    <div class="info">
      活动整体目标
      <input type="text"
             placeholder="输入活动整体目标"
             v-model='act.activity_overall_target'>
    </div>
    <div class="info">
      卡萨帝整体目标
      <input type="text"
             placeholder="输入卡萨帝整体目标"
             v-model='act.casadi_overall_target'>
    </div>
    <div class="info">
      冰箱目标
      <input type="text"
             placeholder="输入冰箱目标"
             v-model='act.refrigerator_target'>
    </div>
    <div class="info">
      冷柜目标
      <input type="text"
             placeholder="输入冷柜目标"
             v-model='act.freezer_target'>
    </div>
    <div class="info">
      洗衣机目标
      <input type="text"
             placeholder="输入洗衣机目标"
             v-model='act.washing_machine_target'>
    </div>
    <div class="info">
      空调目标
      <input type="text"
             placeholder="输入空调目标"
             v-model='act.air_conditioning_target'>
    </div>
    <div class="info">
      热水器目标
      <input type="text"
             placeholder="输入热水器目标"
             v-model='act.water_heater_target'>
    </div>
    <div class="info">
      厨电目标
      <input type="text"
             placeholder="输入厨电目标"
             v-model='act.kitchen_appliance_target'>
    </div>
    <div class="info">
      彩电目标
      <input type="text"
             placeholder="输入彩电目标"
             v-model='act.color_TV_target'>
    </div>
    <div class="info">
      净水目标
      <input type="text"
             placeholder="输入净水目标"
             v-model='act.clean_water_target'>
    </div>
    <div class="info">
      商空目标
      <input type="text"
             placeholder="输入商空目标"
             v-model='act.commercial_space_target'>
    </div>
    <div class='save'>
      <button @click='saveact'>保存</button>
    </div>

  </div>
</template>

<script>
import vinput from '@/components/vinput'
import request from '../../utils/request'
import { getNowDate } from '../../utils/index'
export default {
  onLoad () {
    var userstr = JSON.parse(wx.getStorageSync('userinfo'))

    this.act.region = userstr.REGION
    this.act.USERINFO_ID = userstr.USERINFO_ID
    this.act.userinfo_id = userstr.USERINFO_ID
    this.act.user_name = userstr.USER_NAME
    // request
    //   .request("/atvtport/regioninfo/findAllRegion.do", "GET", null)
    //   .then(res => {
    //     this.array = res.data.data.map(e => {
    //       return e.REGION;
    //     });
    //   });
  },
  data () {
    return {
      USERINFO_ID: '',
      index: 0,
      array: [
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
      shopindex: 0,
      shoptype: ['直营', '乡镇'],
      actindex: 0,
      acttype: ['微信活动', '认筹活动', '广场活动'],
      tally_channel_index: 0,
      tally_channel: ['战略直营', '战略联盟'],
      act: {
        userinfo_id: '',
        USERINFO_ID: '',
        region: '潮汕网格',
        store_type: '直营',
        store_name: '',
        store_code: '',
        store_owner_name: '',
        store_owner_telephone: '',
        tally_name: '',
        tally_code: '',
        tally_channel: '战略直营',
        activity_theme: '',
        activity_type: '',
        blasting_start_time: getNowDate(),
        blasting_end_time: getNowDate(),
        event_holder_name: '',
        event_holder_telephone: '',
        event_holder_industry: '',
        event_holder_number: '',
        activity_overall_target: '',
        casadi_overall_target: '',
        refrigerator_target: '',
        freezer_target: '',
        washing_machine_target: '',
        air_conditioning_target: '',
        water_heater_target: '',
        kitchen_appliance_target: '',
        color_TV_target: '',
        clean_water_target: '',
        commercial_space_target: ''
      }
    }
  },
  methods: {
    saveact () {
      let act = this.act
      let canAction = true
      Object.keys(act).map(v => {
        if (!act[v]) {
          wx.showToast({
            title: '请输入必填信息',
            icon: 'none'
          })

          canAction = false
        }
      })
      if (!canAction) return
      let reg = /^\d+$/
      if (
        !reg.test(act.activity_overall_target) ||
        !reg.test(act.casadi_overall_target) ||
        !reg.test(act.refrigerator_target) ||
        !reg.test(act.freezer_target) ||
        !reg.test(act.washing_machine_target) ||
        !reg.test(act.air_conditioning_target) ||
        !reg.test(act.water_heater_target) ||
        !reg.test(act.kitchen_appliance_target) ||
        !reg.test(act.color_TV_target) ||
        !reg.test(act.clean_water_target) ||
        !reg.test(act.commercial_space_target)
      ) {
        wx.showToast({
          title: '各项目标需为数字',
          icon: 'none'
        })
        return
      }
      request
        .request('/atvtport/activityinfo/saveActivity.do', 'POST', act)
        .then(res => {
          if (res.data.status === 200) {
            wx.showModal({
              title: '成功',
              content: '活动创建完成',
              showCancel: false,
              success (r) {
                wx.switchTab({ url: '/pages/index/main' })
              }
            })
            this.clear()
          }
        })
    },
    clear () {
      this.act = {
        region: '潮汕网格',
        store_type: '直营',
        store_name: '',
        store_code: '',
        store_owner_name: '',
        store_owner_telephone: '',
        tally_name: '',
        tally_code: '',
        tally_channel: '战略直营',
        activity_theme: '',
        activity_type: '',
        blasting_start_time: getNowDate(),
        blasting_end_time: getNowDate(),
        event_holder_name: '',
        event_holder_telephone: '',
        event_holder_industry: '',
        event_holder_number: '',
        activity_overall_target: '',
        casadi_overall_target: '',
        refrigerator_target: '',
        freezer_target: '',
        washing_machine_target: '',
        air_conditioning_target: '',
        water_heater_target: '',
        kitchen_appliance_target: '',
        color_TV_target: '',
        clean_water_target: '',
        commercial_space_target: ''
      }
    },
    bindPickerChange (e) {
      this.index = e.target.value
      this.act.region = this.array[this.index]
    },
    bindPickerChangeTallyChannel (e) {
      this.tally_channel_index = e.target.value
      this.act.tally_channel = this.tally_channel[this.tally_channel_index]
    },
    bindPickerChangeActType (e) {
      this.actindex = e.target.value
      this.act.activity_type = this.acttype[this.actindex]
    },
    bindPickerChangeShopType (e) {
      this.shopindex = e.target.value
      this.act.store_type = this.array[this.shopindex]
    },
    bindTimeChange (e) {
      this.act.blasting_start_time = e.target.value
    },
    bindendTimeChange (e) {
      this.act.blasting_end_time = e.target.value
    }
  },
  componts: {
    vinput
  }
}
</script>

<style lang="scss" scoped>
.info {
  border-bottom: 1px solid #ececec;
  width: 96%;
  position: relative;
  margin-left: 4%;
  display: flex;
  height: 60rpx;
  line-height: 60rpx;
  justify-content: space-between;

  input {
    height: 60rpx;
    line-height: 60rpx;
    margin-left: 15px;
    flex: 1;
  }
  picker {
    flex: 1;
    padding-left: 15px;
  }
}
.save {
  height: 100rpx;
  position: relative;
  button {
    position: absolute;
    right: 0;
    width: 200rpx;
    height: 100rpx;
    border-radius: 0;
    line-height: 100rpx;
    color: #fff;
    background-color: rgba(255, 105, 26, 1);
  }
}
</style>
