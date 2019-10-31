<template>
  <div id="app">
    <transition :name="Direction.transitionName">
      <vnode-cache>
        <router-view id="page-view" v-if="isRouterAlive"></router-view>
      </vnode-cache>
    </transition>
    <lg-preview></lg-preview>
    <TabBar></TabBar>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
      return{
          reload:this.reload
      }
  },
  data () {
    return {
      Direction:{
        type: '',
        isTabBar: true,
        transitionName: '',
      },
      isRouterAlive:true,
    }
  },
  created () {
    this.$vueAppEffect.on('forward', (direction) => {
      this.Direction = direction
    })
    this.$vueAppEffect.on('reverse', (direction) => {
      this.Direction = direction
    })
  },
  methods:{
      reload(){
          this.isRouterAlive = false;
          this.$nextTick(function () {
              this.isRouterAlive = true
          });
      },
  },
}
</script>

<style lang="stylus">
#app
  width: 100%;
  height:100%;
  background-image:url('../static/images/bg.png')
  background-size cover
  #page-view
    width: 100%;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:70px;
    #tab-router-view
      width 100%
      height 100%
      .bd-view
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        overflow hidden
        &.bd-view-full
          top 0
        .container
          position relative
    #sub-router-view
      position: relative;
      width: 100%;
      height: calc(100% + 50px);
      background: #fff;
      z-index: 9;
      .bd-view
        position absolute
        top 40px
        left 0
        right 0
        bottom 0
        overflow hidden
        &.bd-view-full
          top 0
        .container
          position relative
</style>
