<template>
    <div class='gameslist'>
        <scroller>
          <div class='list'>
            <div class='detail' v-for="(item,index) in gamesList" :key="index" @click='goDetail(item.id,`games`)'>
                <img class="img" :src="item.imgUrl" alt="">
            </div>
              <div class="homeImg">
                  <img class="img" :src="defaultHome" alt="" @click="goTo()">
              </div>
          </div>
        </scroller>
    </div>
</template>
<script>
export default {
  inject: ['reload'],
  name: 'games',
  data () {
    let defaultImg1 = require('../../../static/images/games/H5_01.png')
    let defaultImg2 = require('../../../static/images/games/H5_02.png')
    let defaultImg3 = require('../../../static/images/games/H5_03.png')
    let defaultImg4 = require('../../../static/images/games/H5_04.png')
    let defaultImg5 = require('../../../static/images/games/H5_05.png')
    return {
        show:false,
        gamesList:[
            {imgUrl:defaultImg1,id:1},
            {imgUrl:defaultImg2,id:2},
            {imgUrl:defaultImg3,id:3},
            {imgUrl:defaultImg4,id:4},
            {imgUrl:defaultImg5,id:5},
        ],
        defaultHome:require('../../../static/images/other/home.png')
    }
  },
  created () {
    this.reload()
  },
  mounted(){
    this.show = true
  },
  methods: {
      goDetail (index, name) {
          this.$vueAppEffect.next({
              path:`/pages/GamesDetail/index/${index}`,
              params:{ id: index, name: name }
          })
      },
      goTo(){
          setTimeout(()=>{
              this.$router.push('/tabs/Home/index')
          },1000)
      },
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/mxin'
  .gameslist
    color:rgba(255,255,255,0.5)
    display flex
    padding 5px
    flex-wrap wrap
    .homeImg
      width 100%
      text-align center
      img
       width 50%
    .list
      flex 100% 0 0
      .detail
        padding 5px
        position relative
        .img
          width: 100%;
</style>
