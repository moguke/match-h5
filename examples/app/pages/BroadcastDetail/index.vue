<template>
  <page>
      <div class="broadcastBj">
          <div class="broadcastClose">
              <img :src="closeImgs" alt="" @click="goTo()">
          </div>
          <div class='broadcastLists'>
              <div class="broadcastTontent">当前是{{name}}详情页{{id}}</div>

          </div>
      </div>
  </page>
</template>
<script>
export default {
  name: 'broadcast-detail',
  data () {
    return {
      id: 0,
      name: '',
      items:[],
      closeImgs:require('../../../static/images/close.png'),
    }
  },
  created() {
    this.id = this.$route.params.id
    this.name = this.$route.params.name
  },
  mounted () {

  },
  methods: {
      goTo(){
          this.$router.push('/tabs/Broadcast/index')
      },
  }
}
</script>

<style lang="stylus">
@import '~app/assets/css/mxin'
    .broadcastBj
     background #fff
     .broadcastClose
      width 100%
      height 40px
      img
       float right
       width 30px
       margin-right 20px
       margin-top 15px
    .broadcastLists
      margin 0px 10px 20px 10px
      padding-top 20px
      .broadcastTontent
        font-size $fontXL
        background #444444
        height 500px
        text-align center
        border-radius 5px
        line-height 500px
        margin-bottom 20px;
        margin 0px 10px 20px 10px
</style>
