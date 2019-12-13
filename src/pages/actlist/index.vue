<template>
    <div>
        <div class="btitle">
            <img src="/static/images/point.png"> 区域 : {{sss.REGION}}
            <span v-if="sss.serName">服务商 : {{sss.serName}}</span>
        </div>
        <div class="title">活动列表</div>

        <actitem v-for='(target,index) in targets' :key=index :target=target />
    </div>
</template>

<script>
import actitem from "@/components/actitem";
import request from "../../utils/request";
export default {
  data() {
    return {
      sss: [],
      targets: []
    };
  },
  components: {
    actitem
  },
  onLoad(option) {
    this.sss = option;
    // this.targets = []
    let url = "/atvtport/activitydetailsinfo/findDetail.do";
    if (option.serID) {
      option.SERVICE_PROVIDER_ID = option.serID;
      url = "/atvtport/activityinfo/findAtvtByRSID.do";
    }
    if (option.repID) {
      option.REPRESENTATIVE_ID = option.repID;
      url = "/atvtport/activityinfo/findAtvtByRRID.do";
    }
    option.detailID = option.repID || option.serID;
    request.request(url, "POST", option).then(res => {
      this.targets = res.data.data;
      //   this.sss = this.targets[0];
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
