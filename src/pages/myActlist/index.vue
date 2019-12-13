<template>
  <div>
    <div class="btitle">
      <img src="/static/images/point.png">
      区域 : {{region}} </div>
    <div class="title">活动列表</div>

    <actitem v-for='(target,index) in targets'
             :key=index
             :target=target />
  </div>
</template>

<script>
import actitem from '@/components/actitem'
import request from '../../utils/request'
export default {
  data () {
    return {
      targets: []
    }
  },
  components: {
    actitem
  },
  onLoad (option) {
    let url = '/atvtport/activityinfo/myActivity.do'

    let userstr = JSON.parse(wx.getStorageSync('userinfo'))
    let USER_ID = userstr.USERINFO_ID
    request.request(url, 'POST', { USER_ID }).then(res => {
      this.targets = res.data.data
      // this.sss = this.targets[0]
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
