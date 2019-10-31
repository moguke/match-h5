<template>
      <div>
          <scroller>
              <div class='broadcastlist'>
                  <div class='list' v-for="(item,index) in broadcastList" :key="index" >
                      <div class='detail'@click='goDetail(item.id)'>
                          <img class='img' :src="item.imgUrl">
                      </div>
                  </div>
                  <div class="broadcastImg">
                      <img class="img" :src="defaultImg6" alt="" @click="goBefore()">
                  </div>
              </div>
          </scroller>
      </div>
</template>
<script>
export default {
    inject: ['reload'],
  name: 'broadcast',
  data () {
    let defaultImg2 = require('../../../static/images/broadcast/H5_02.png')
    let defaultImg3 = require('../../../static/images/broadcast/H5_03.png')
    let defaultImg4 = require('../../../static/images/broadcast/H5_04.png')
    let defaultImg5 = require('../../../static/images/broadcast/H5_05.png')
    return {
      show:false,
      broadcastList:[
          {imgUrl:defaultImg2,id:1},
          {imgUrl:defaultImg3,id:2},
          {imgUrl:defaultImg4,id:3},
          {imgUrl:defaultImg5,id:4},
      ],
      defaultImg6 : require('../../../static/images/broadcast/H5_06.png')
    }
  },
  created () {

  },
  mounted(){
    this.reload()
    this.show = true
  },
  methods: {
      goDetail (index) {
        switch (index) {
            case 1:
                window.location.href = 'http://t.cn/AiRWZE3r'
                break;
            case 2:
                window.location.href = 'http://t.cn/AiRWAIKN'
                break;
            case 3:
                window.location.href = 'http://t.cn/AiRWAkSz'
                break;
            case 4:
                window.location.href = 'http://t.cn/AiRW2BWQ'
                break;
            default:
                this.text = "";
        }
    },
      goBefore(){
          window.location.href = 'https://h.eqxiu.com/s/zJH6Yl57'
      }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/mxin'
  .broadcastlist
    color:rgba(255,255,255,0.5)
    display flex
    flex-wrap wrap
    padding 10px 0
    margin 0 10px
    .broadcastImg
     width 100%
     text-align center
     margin-top 20px
     .img
      width 50%
    .list
      flex 50% 0 0
      .detail
        padding 10px
        position relative
        .img
          width: 100%;
</style>
