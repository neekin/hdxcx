<template>
  <div>
    <div class="btitle">
      <img src="/static/images/point.png">
      月活动共计（场）:{{count}}</div>
    <div class="btitle clearfix"><img src="/static/images/point.png">
      目标（万）: {{rate}} <span class='f-right'
            style='padding-right:20px;'>实际（万）: {{real}}</span></div>
    <div class="title clearfix">产品维度
      <!-- <a class="more f-right"
         href='/pages/more/main'>更多</a> -->
    </div>
    <canvas class='column'
            canvas-id="columnCanvas"
            style="text-align:center;"></canvas>
    <div class="title">区域维度</div>

    <listitem v-for='(target,index) in targets'
              :target=target
              :key=index
              @childClick='gotoInfo($event)'></listitem>

  </div>
</template>

<script>
import card from '@/components/card'
import listitem from '@/components/listitem'
import Charts from '../../utils/wxcharts'
import request from '../../utils/request'
export default {
  data () {
    return {
      targets: [],
      col: null,
      chartTitle: '总成交量',
      isMainChartDisplay: true,
      count: 0,
      rate: 0,
      real: 0,
      chartData: {
        main: {
          title: '活动完成量',
          targetdata: [],
          volumedata: [],
          categories: []
        }
      }
    }
  },

  components: {
    card,
    listitem
  },

  methods: {
    chat () {
      this.col = new Charts({
        canvasId: 'columnCanvas',
        type: 'column',
        animation: true,
        categories: this.chartData.main.categories,
        series: [
          {
            name: '目标',
            data: this.chartData.main.targetdata
          },
          {
            name: '实际',
            data: this.chartData.main.volumedata
          }
        ],
        yAxis: {
          format: function (val) {
            return val
          },
          title: '活动完成量',
          min: 0
        },
        xAxis: {
          disableGrid: true,
          type: 'calibration'
        },
        extra: {
          column: {
            width: 15
          }
        },
        width: 375,
        height: 200
      })
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
    },
    gotoInfo (id) {
      wx.navigateTo({ url: '/pages/info/main?id=' + id })
    }
  },

  created () {
    // let app = getApp()
  },
  onShow () {
    // this.chat()

    request
      .request('/atvtport/dimensiondatainfo/loadIndex.do', 'GET', {})
      .then(res => {
        // console.log(res)
        if (res.data.status === 200) {
          let chatd = res.data.data.REGION_DATA
          let data = res.data.data
          // console.log(chatd)
          //   this.chartData.main.categories = chatd.map(e => {
          //     return e.region;
          //   });

          this.chartData.main.categories = [
            '制冷',
            '洗衣机',
            '空调',
            '热水器',
            '彩电',
            '厨电'
          ]
          this.chartData.main.targetdata = [
            data.INDUSTRY_DATA.TOTAL_REFRIGERATOR_TARGET,
            data.INDUSTRY_DATA.TOTAL_WASHING_MACHINE_TARGET,
            data.INDUSTRY_DATA.TOTAL_AIR_CONDITIONING_TARGET,
            data.INDUSTRY_DATA.TOTAL_WATER_HEATER_TARGET,
            data.INDUSTRY_DATA.TOTAL_COLOR_TV_TARGET,
            data.INDUSTRY_DATA.TOTAL_KITCHEN_APPLIANCE_TARGET
          ]
          this.chartData.main.volumedata = [
            data.INDUSTRY_DATA.TOTAL_REFRIGERATOR_ACTUAL,
            data.INDUSTRY_DATA.TOTAL_WASHING_MACHINE_ACTUAL,
            data.INDUSTRY_DATA.TOTAL_AIR_CONDITIONING_ACTUAL,
            data.INDUSTRY_DATA.TOTAL_WATER_HEATER_ACTUAL,
            data.INDUSTRY_DATA.TOTAL_COLOR_TV_ACTUAL,
            data.INDUSTRY_DATA.TOTAL_KITCHEN_APPLIANCE_ACTUAL
          ]
          //   this.chartData.main.targetdata = chatd.map(e => {
          //     return e.activity_target;
          //   });
          //   this.chartData.main.volumedata = chatd.map(e => {
          //     return e.activity_volume;
          //   });
          this.targets = chatd.filter(e => {
            if (e['region']) {
              e.name = e.region
              return e
            }
          })

          //   chatd.map(e => {
          //     this.count += parseInt(e.lock_session);
          //     this.rate += parseInt(e.activity_target);
          //     this.real += parseInt(e.activity_volume);
          //   });
          this.count = res.data.data.ACTIVITY_TOTAL_COUNT
          this.rate = res.data.data.ACTIVITY_TARGET
          this.real = res.data.data.ACTIVITY_ACTUAL
          //  chatd.map(e => {
          //     return e.industry
          //   })

          console.log(chatd)
          console.log(this.chartData)
          this.chat()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang='scss'>
.column {
  height: 420rpx;
  width: 100%;
}
</style>
