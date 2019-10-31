<template>
  <div>
      <keep-alive>
        <router-view id="tab-router-view"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
    name: 'tabCon',
    provide(){
        return{
            reload:this.reload
        }
    },
    data(){
        return {
            isRouterAlive:true,
        }
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

</style>
