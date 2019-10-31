<template>
  <div id="tab-bar">
    <div class="nav border-half-top">
        <router-link class="bar" :to="'/tabs/Games/index'" replace>
            <div class="button">
                <div class="icon">
                    <img :src="defaultImg01" alt="">
                </div>
                <div class="text">实时赛程</div>
            </div>
        </router-link>
        <router-link class="bar" :to="'/tabs/Broadcast/index'" replace>
            <div class="button">
                <div class="icon">
                    <img :src="defaultImg02" alt="">
                </div>
                <div class="text">精彩赛场</div>
            </div>
        </router-link>
        <router-link class="bar" :to="'/tabs/Cheer/index'" replace>
            <div class="button">
                <div class="icon">
                    <img :src="defaultImg03" alt="">
                </div>
                <div class="text">赛事快讯</div>
            </div>
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            defaultImg01: require('../../../examples/static/images/other/icon01.png'),
            defaultImg02: require('../../../examples/static/images/other/icon02.png'),
            defaultImg03: require('../../../examples/static/images/other/icon03.png'),
        }
    },
    method:{

    },
    created(){

    },
    mounted(){

    },
    watch:{

    }
}
</script>
<style lang="stylus">
  #tab-bar
    height 70px
    background #f8f8f8
    position fixed
    bottom 0
    left 0
    right 0
    z-index 4
    border-top-left-radius 10px
    border-top-right-radius 10px
    .nav
      display flex
      width 100%
      height 100%
      .bar
        flex 1
        display flex
        justify-content center
        align-items center
        color #919191
        text-align center
        img
         width 40px
        &.router-link-active
          color #000
        .icon
          font-size 23px
        .text
          font-size 12px
</style>
