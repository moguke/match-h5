<template>
      <div class="cheerBj">
          <div class="cheerClose">
              <p style="margin:0; padding:0;" class="cheerIcon" @click="goTo()"></p>
              <p style="margin:0; padding:0;" class="cheerText" @click="goTo()">返回</p>
          </div>
          <scroller>
              <div class='cheerLists'>
                  <div>
                      <p class="cheerTitle">{{title}}</p>
                  </div>
                  <div v-html="content" class="cheerContent">{{content}}</div>
              </div>
          </scroller>
      </div>
</template>
<script>
export default {
  name: 'cheer-detail',
  data () {
    return {
        id: this.$route.params.id,
        name: this.$route.params.name,
        items:[],
        title:"",
        content:"",
    }
  },
  created() {
    this.getDate()
  },
  mounted () {
  },
  methods: {
      goTo(){
          this.$router.push('/tabs/Cheer/index')
      },
      getDate(){
          this.$axios.post(this.$http.baseUrl + "/news/get",{id:this.id}).then(res=>{
              if(res.data.code == 200){
                  let data = res.data.data
                  this.title = data.title
                  this.content = data.content
              }
          });
      },
  }
}
</script>

<style lang="stylus">
@import '~app/assets/css/mxin'
    .cheerBj
     background #fff
    .cheerClose
     width 100%
     height 50px
     position fixed
     top 0
     left 0
     z-index 9
     background #ddd
     .cheerText
      position absolute
      top 16px
      left 40px
      font-size 18px
      color #333
     .cheerIcon
      position relative
      color #333
      font-size 16px
     .cheerIcon:after
      position absolute
      left 20px
      top 18px
      width 12px
      height 12px
      content ""
      border-width 2px 0 0 2px
      border-style solid
      border-color #333
      -webkit-transform rotate(-45deg)
      -moz-transform rotate(-45deg)
      -ms-transform rotate(-45deg)
      -o-transform rotate(-45deg)
      transform rotate(-45deg)
    .cheerLists
      margin 20px
      padding 50px 0
     .cheerTitle
      color #000
      font-size 30px
      margin-top 0
     .cheerContent
      font-size 16px
      color #000
      line-height 30px
      img
       width 100%
</style>
