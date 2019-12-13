<template>
  <div style="width:100vw">
    <div class="title">
      区域代表活动详情
    </div>
    <div class="info">
      <span>区域</span>
      <input v-model="target.REGION"
             disabled
             type="text" />
    </div>
    <div class="info">
      <span>活动门店名称</span>
      <input v-model="target.STORE_NAME"
             type="text"
             disabled />
    </div>
    <div class="info">
      <span>活动门店类型</span>
      <input v-model="target.STORE_TYPE"
             type="text" />
    </div>
    <div class="info">
      <span>活动门店名称</span>
      <input v-model="target.STORE_NAME"
             type="text" />
    </div>
    <div class="info">
      <span>活动门店8码</span>
      <input v-model="target.STORE_CODE"
             type="text" />
    </div>
    <div class="info">
      <span>老板姓名</span>
      <input v-model="target.STORE_OWNER_NAME"
             type="text" />
    </div>
    <div class="info">
      <span>老板电话</span>
      <input v-model="target.STORE_OWNER_TELEPHONE"
             type="text" />
    </div>
    <div class="info">
      <span>上级理货商名称</span>
      <input v-model="target.TALLY_NAME"
             type="text" />
    </div>
    <div class="info">
      <span>上级理货商8码</span>
      <input v-model="target.TALLY_CODE"
             type="text" />
    </div>
    <div class="info">
      <span>理货商渠道</span>
      <input v-model="target.TALLY_CHANNEL"
             type="text" />
    </div>
    <div class="info">
      <span>活动主题</span>
      <input v-model="target.ACTIVITY_THEME"
             type="text" />
    </div>
    <div class="info">
      <span>活动类型</span>
      <input v-model="target.ACTIVITY_TYPE"
             type="text" />
    </div>
    <div class="info">
      <span>活动爆破开始时间</span>
      <input v-model="target.BLASTING_START_TIME"
             type="text" />
    </div>
    <div class="info">
      <span>活动爆破结束时间</span>
      <input v-model="target.BLASTING_END_TIME"
             type="text" />
    </div>
    <div class="info">
      <span>活动挂靠人姓名</span>
      <input v-model="target.EVENT_HOLDER_NAME"
             type="text" />
    </div>
    <div class="info">
      <span>活动挂靠人电话</span>
      <input v-model="target.EVENT_HOLDER_TELEPHONE"
             type="text" />
    </div>
    <div class="info">
      <span>活动挂靠人产业</span>
      <input v-model="target.EVENT_HOLDER_INDUSTRY"
             type="text" />
    </div>
    <div class="info">
      <span>活动挂靠人工号</span>
      <input v-model="target.EVENT_HOLDER_NUMBER"
             type="text" />
    </div>
    <!-- <div class="info">
      <span>活动整体目标</span>
      <input v-model="target.ACTIVITY_OVERALL_TARGET" type="text" />
    </div>
    <div class="info">
      <span>卡萨帝整体目标</span>
      <input v-model="target.CASADI_OVERALL_TARGET" type="text" />
    </div>
    <div class="info">
      <span>冰箱目标</span>
      <input v-model="target.REFRIGERATOR_TARGET" type="text" />
    </div>
    <div class="info">
      <span>冷柜目标</span>
      <input v-model="target.FREEZER_TARGET" type="text" />
    </div>
    <div class="info">
      <span>洗衣机目标</span>
      <input v-model="target.WASHING_MACHINE_TARGET" type="text" />
    </div>
    <div class="info">
      <span>空调目标</span>
      <input v-model="target.AIR_CONDITIONING_TARGET" type="text" />
    </div>
    <div class="info">
      <span>热水器目标</span>
      <input v-model="target.WATER_HEATER_TARGET" type="text" />
    </div>
    <div class="info">
      <span>厨电目标</span>
      <input v-model="target.KITCHEN_APPLIANCE_TARGET" type="text" />
    </div>
    <div class="info">
      <span>彩电目标</span>
      <input v-model="target.COLOR_TV_TARGET" type="text" />
    </div>
    <div class="info">
      <span>净水目标</span>
      <input v-model="target.CLEAN_WATER_TARGET" type="text" />
    </div>
    <div class="info">
      <span>商空目标</span>
      <input v-model="target.COMMERCIAL_SPACE_TARGET" type="text" />
    </div> -->
    <div class="title">活动落地时间</div>
    <div class="info">
      <span>启动会召开</span>
    </div>
    <div class="info"
         @click="chooseImg('LD_MEETING')">
      <img src="../../assets/camera.png"
           alt=""
           v-if="!target.LD_MEETING">
      <!-- <div v-else>已上传</div> -->
      <img :src="target.LD_MEETING"
           alt="">
    </div>
    <div class="info">
      <span>战报输出</span>

      <input v-model="target.LD_BATTLE_OUTPUT"
             type="text" />
    </div>
    <div class="info">
      <span>会议朋友圈转发</span>
    </div>
    <div class="info"
         @click="chooseImg('LD_MEETING_FRIEND_SEND')">
      <img src="../../assets/camera.png"
           alt=""
           v-if="!target.LD_MEETING_FRIEND_SEND">
      <!-- <div v-else>已上传</div> -->
      <img :src="target.LD_MEETING_FRIEND_SEND"
           alt="">
    </div>
    <div class="info">
      <span>朋友圈转发</span>
      <input v-model="target.LD_FRIEND_SEND"
             type="text" />
    </div>
    <div class="info">
      <span>累计数认筹实际</span>
      <input v-model="target.LD_CUMULATIVE_RECOGNITION_ACTUAL"
             type="text" />
    </div>
    <div class="info">
      <span>累计数拆旧实际</span>
      <input v-model="target.LD_CUMULATIVE_DEMOLITION_ACTUAL"
             type="text" />
    </div>
    <div class="info">
      <span>累计数进村数量</span>
      <input v-model="target.LD_CUMULATIVE_NUMBER_VILLAGES"
             type="text" />
    </div>
    <div class="info">
      <span>认筹实际</span><input v-model="target.LD_RECRUIT_ACTUAL"
             type="text" />
    </div>
    <div class="info">
      <span>拆旧实际</span><input v-model="target.LD_DEMOLITION_ACTUAL"
             type="text" /></div>
    <div class="info">
      <span>进村数量</span>
      <input v-model="target.LD_NUMBER_VILLAGES"
             type="text" />
    </div>
    <div class="info">
      <span>临促实到人数</span>
      <input v-model="target.LD_PROMPT_NUMBER"
             type="text" />
    </div>
    <div class="info">
      <span>临促早会照片</span>
    </div>
    <div class="info"
         @click="chooseImg('LD_PROMPT_MORNING_PICTURE')">
      <img src="../../assets/camera.png"
           alt=""
           v-if="!target.LD_PROMPT_MORNING_PICTURE">
      <!-- <div v-else>已上传</div> -->
      <img :src="target.LD_PROMPT_MORNING_PICTURE"
           alt="">
    </div>
    <div class="info">
      <span>临促晚会照片</span>
    </div>
    <div class="info"
         @click="chooseImg('LD_PROMPT_NIGHT_PICTURE')">
      <img src="../../assets/camera.png"
           alt=""
           v-if="!target.LD_PROMPT_NIGHT_PICTURE">
      <img :src="target.LD_PROMPT_NIGHT_PICTURE"
           alt="">
    </div>
    <div class="info">
      <span>产业挂靠人是否到位</span>
      <!-- <input v-model="target.RECRUITMENT_NUMBER_ACTUAL" type="text" /> -->
      <picker @change="bindPickerChange('LD_INDUSTRY_CALLER_IN',arguments)"
              :value="0"
              :range="isOrNo">
        <view class="picker">
          {{target['LD_INDUSTRY_CALLER_IN']||'请选择'}}
        </view>
      </picker>
    </div>
    <div class="info">
      <span>服务商挂靠人到位几人</span>
      <input v-model="target.LD_SERVICE_PROVIDER_CALLER_NUMBER"
             type="text" />
    </div>
    <!-- <div class="info">
      <span>日清是否输出</span>
       <input v-model="target.LD_IF_OUTPUT_NISSIN_BASE64" type="text" />
      <span>{{target.IF_OUTPUT_NISSIN}}</span>
    </div>
    <div class="info">
      <span>朋友圈转发</span>
      <span>{{target.MEETING_FRIEND_SEND}}</span>
    </div>
     <div class="info">
      <span>朋友圈转发</span>
      <span>{{target.MEETING_FRIEND_SEND}}</span>
    </div> -->
    <div class="title">活动爆破阶段</div>
    <div class="info">
      <span>产业挂靠人是否到位</span>
      <!-- <input type="text" placeholder="请输入" v-model='target.BP_INDUSTRY_CALLER_IN'> -->
      <picker @change="bindPickerChange('BP_INDUSTRY_CALLER_IN',arguments)"
              :value="0"
              :range="isOrNo">
        <view class="picker">
          {{target['BP_INDUSTRY_CALLER_IN']||'请选择'}}
        </view>
      </picker>
    </div>
    <div class="info">
      <span>服务商挂靠人到位人数</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_SERVICE_PROVIDER_CALLER_NUMBER'>
    </div>
    <div class="info">
      <span>活动销量合计（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_ACTIVITY_SALES_VOLUME'>
    </div>
    <div class="info">
      <span>制冷（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_REFRIGERATOR'>
    </div>
    <div class="info">
      <span>洗衣机（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_WASHING_MACHINE'>
    </div>
    <div class="info">
      <span>空调（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_AIR_CONDITIONING'>
    </div>
    <div class="info">
      <span>热水器（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_WATER_HEATER'>
    </div>

    <div class="info">
      <span>厨电（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_KITCHEN_APPLIANCE'>
    </div>
    <div class="info">
      <span>彩电（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_COLOR_TV'>
    </div>
    <div class="info">
      <span>其中卡萨帝（万）</span>
      <input type="text"
             placeholder="请输入"
             v-model='target.BP_T_CASADI'>
    </div>

    <div class="save"
         @click="save">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
import vinput from '@/components/vinput';
import request from '../../utils/request';
export default {
  //   props: ["target"],
  data () {
    return {
      target: {},
      isOrNo: ['是', '否'],
      url: 'https://www.gz-wnkj.com:8806'
    }
  },
  componts: {
    vinput
  },
  onLoad (option) {
    // let url = '/atvtport/activityinfo/findByRSAtvtID.do'
    console.log(option)
    let url = '/atvtport/activityinfo/findAtvtDetail.do';
    if (option.ACTIVITY_ID) {
      this.target.ACTIVITY_ID = option.ACTIVITY_ID
    }
    request.request(url, 'POST', option).then(res => {
      //   this.target = res.data.data[0];
      this.target = Object.assign(
        res.data.data.BASIC_DATA,
        res.data.data.BLASTING_DATA,
        res.data.data.LANDING_DATA,
        res.data.data.READY_DATA
      )
    })
  },
  methods: {
    bindPickerChange (e, params) {
      this.target[e] = this.isOrNo[params[0].mp.detail.value]
      console.log(this.target[e])
    },
    chooseImg (name) {
      let self = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          console.log(res)
          wx.getFileSystemManager().readFile({
            filePath: res.tempFilePaths[0], // 选择图片返回的相对路径
            encoding: 'base64', // 编码格式
            success: res => {
              let baseImg = 'data:image/png;base64,' + res.data
              request
                .request(
                  '/atvtport/activityinfo/base64getimageurl.do',
                  'POST',
                  { imagebase64: baseImg }
                )
                .then(res => {
                  if (res.data.status == 200) {
                    // this.$set(this.tableData[id], "red", true);
                    self.target[name] = res.data.data
                    self.$forceUpdate()
                  }
                })
            }
          })
        }
      })
    },
    isNumByList (list) {
      var regPos = /^\d+$/
      for (let i = 0; i < list.length; i++) {
        if (!regPos.test(this.target[list[i]]) && this.target[list[i]] != '') {
          console.log(list[i])
          console.log(this.target[list[i]])
          wx.showModal({
            title: '提示',
            content: '存在非法参数',
            showCancel: false
          })
          return false
        }
      }
      return true
    },
    save () {
      let paramsList = [
        'LD_CUMULATIVE_RECOGNITION_ACTUAL',
        'LD_CUMULATIVE_DEMOLITION_ACTUAL',
        'LD_CUMULATIVE_NUMBER_VILLAGES',
        'LD_RECRUIT_ACTUAL',
        'LD_DEMOLITION_ACTUAL',
        'LD_NUMBER_VILLAGES',
        'LD_PROMPT_NUMBER',
        'BP_SERVICE_PROVIDER_CALLER_NUMBER',
        'BP_T_ACTIVITY_SALES_VOLUME',
        'BP_T_REFRIGERATOR',
        'BP_T_WASHING_MACHINE',
        'BP_T_AIR_CONDITIONING',
        'BP_T_WATER_HEATER',
        'BP_T_KITCHEN_APPLIANCE',
        'BP_T_COLOR_TV',
        'BP_T_CASADI'
      ]
      if (!this.isNumByList(paramsList)) return
      request
        .request(
          '/atvtport/activityinfo/saveStageInformation.do',
          'POST',
          this.target
        )
        .then(res => {
          if (res.data.status === 200) {
            wx.showModal({
              title: '成功',
              content: '保存成功',
              showCancel: false,
              success (r) {
                wx.navigateBack({
                  delta: 1
                })
                // wx.redirectTo({ url: "/pages/myActlist/main" });
              }
            })
          }
        })
    }
  },
  computed: {
    targetText () {
      const defaultText = {
        REGION_ID: '',
        EVENT_HOLDER_NUMBER: '',
        COLOR_TV_TARGET: '',
        TALLY_OWNER_TELEPHONE: '',
        BLASTING_START_TIME: '',
        CASADI_OVERALL_TARGET: '',
        SERVICE_PROVIDER_ID: '',
        AIR_CONDITIONING_TARGET: '',
        TALLY_CHANNEL: '',
        SERVICE_PROVIDER_NAME: '',
        EVENT_HOLDER_INDUSTRY: '',
        STORE_NAME: '',
        ACTIVITY_TYPE: '',
        BLASTING_END_TIME: '',
        WASHING_MACHINE_TARGET: '',
        REFRIGERATOR_TARGET: '',
        STORE_TYPE: '',
        TALLY_OWNER_NAME: '',
        EVENT_HOLDER_NAME: '',
        EVENT_HOLDER_TELEPHONE: '',
        CLEAN_WATER_TARGET: '',
        ACTIVITY_OVERALL_TARGET: '',
        STORE_OWNER_NAME: '',
        REPRESENTATIVE_ID: '',
        TALLY_CODE: '',
        WATER_HEATER_TARGET: '',
        KITCHEN_APPLIANCE_TARGET: '',
        STORE_OWNER_TELEPHONE: '',
        ACTIVITY_ID: '',
        REPRESENTATIVE_NAME: '',
        REGION: '',
        ACTIVITY_THEME: '',
        STORE_CODE: '',
        TALLY_NAME: '',
        ACTIVITYINFO_ID: '',
        FREEZER_TARGET: '',
        COMMERCIAL_SPACE_TARGET: '',
        ACTIVITY_ID: '',
        ZB_CREATE_ACTIVITY_GROUP_BASE64: '',
        ZB_ACTIVITY_GROUP_PULL_PEOPLE: '',
        ZB_ACTIVITY_PROMPT_START: '',
        ZB_MATERIALS_FINAL_DRAFT_BASE64: '',
        ZB_MATERIALS_TO_SHOP: '',
        LD_MEETING_BASE64: '',
        LD_RECRUITMENT_NUMBER_ACTUAL_BASE64: '',
        LD_BATTLE_OUTPUT: '',
        LD_MEETING_FRIEND_SEND_BASE64: '',
        LD_CUMULATIVE_RECOGNITION_ACTUAL: '',
        LD_CUMULATIVE_DEMOLITION_ACTUAL: '',
        LD_CUMULATIVE_NUMBER_VILLAGES: '',
        LD_RECRUIT_ACTUAL: '',
        LD_DEMOLITION_ACTUAL: '',
        LD_NUMBER_VILLAGES: '',
        LD_PROMPT_NUMBER: '',
        LD_PROMPT_MORNING_PICTURE_BASE64: '',
        LD_PROMPT_NIGHT_PICTURE_BASE64: '',
        LD_INDUSTRY_CALLER_IN: '',
        LD_SERVICE_PROVIDER_CALLER_NUMBER: '',
        LD_IF_OUTPUT_NISSIN_BASE64: '',
        LD_T8_FRIEND_SEND_BASE64: '',
        LD_T7_FRIEND_SEND_BASE64: '',
        LD_T6_FRIEND_SEND_BASE64: '',
        LD_T5_FRIEND_SEND_BASE64: '',
        LD_T4_FRIEND_SEND_BASE64: '',
        LD_T3_FRIEND_SEND_BASE64: '',
        LD_T2_FRIEND_SEND_BASE64: '',
        LD_T1_FRIEND_SEND_BASE64: '',
        BP_BATTLE_OUTPUT_BASE64: '',
        BP_INDUSTRY_CALLER_IN: '',
        BP_SERVICE_PROVIDER_CALLER_NUMBER: '',
        BP_T_ACTIVITY_SALES_VOLUME: '',
        BP_T_REFRIGERATOR: '',
        BP_T_WASHING_MACHINE: '',
        BP_T_AIR_CONDITIONING: '',
        BP_T_WATER_HEATER: '',
        BP_T_KITCHEN_APPLIANCE: '',
        BP_T_COLOR_TV: '',
        BP_T_CASADI: ''
      }
      return Object.assign(defaultText, this.target || {})
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
}
.info {
  border-bottom: 1px solid #ececec;
  width: 96%;
  position: relative;
  margin-left: 4%;
  display: flex;
  //   height: 60rpx;
  line-height: 60rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span:nth-of-type(2) {
    padding-right: 20rpx;
  }
}
picker {
  flex: 1;
  padding-left: 15px;
}
img {
  width: 50px;
  height: 50px;
  //   height: auto;
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
