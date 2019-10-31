<template>
      <div class="gamesBj">
          <scroller>
              <div class="gamesTitle">
                  <img class="gamesImg" :src="titleImgs" alt="">
                  <p>{{this.text}}</p>
              </div>
              <div class='gamesLists' v-if="this.dataList.length > 0">
                  <div class="gamesWrap">
                      <img class="gamesBox" v-for="(item,index) in dataList" :key="index" v-preview="item.img_url" :src="item.img_url" :alt="item.title"
                           preview-title-enable="true"
                           preview-nav-enable="true" :style="{width:img_w}">
                  </div>
              </div>
              <div class="gamesText" v-else>
                  请查看其他项目
              </div>
              <div class="gamesClose">
                  <img class="gamesCloseImg" :src="closeImgs" alt="" @click="goTo()">
              </div>
          </scroller>
      </div>
</template>

<script>
export default {
  name: 'games-detail',
  data () {
    return {
        id: 0,
        name: '',
        text:'',
        dataList:[],
        closeImgs:require('../../../static/images/back.png'),
        titleImgs:require('../../../static/images/title.png'),
        swiperOption: {
          notNextTick: true,
          //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //设定初始化时slide的索引
          initialSlide:0,
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          grabCursor : true,
          //左右点击
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
              el: '.swiper-pagination',
              clickable :true
          }
      },
        img_w:((((window.screen.width)/33.333)*0.94)*0.5)+'rem',

    }
  },
  created() {
    this.id = this.$route.params.id
    this.name = this.$route.params.name
  },
  computed: {
      swiper() {
          return this.$refs.mySwiper.swiper
      }
  },
    mounted(){
      switch (this.id) {
          case 1:
              this.text = "赛事总览";
              this.getDataAll()
              break;
          case 2:
              this.text = "足球赛程";
              this.getDataFoot()
              break;
          case 3:
              this.text = "篮球赛程";
              this.getDataBasket()
              break;
          case 4:
              this.text = "乒乓球赛程";
              this.getDataPing()
              break;
          case 5:
              this.text = "羽毛球赛程";
              this.getDataBadm()
              break;
          default:
              this.text = "";
      }
  },

  methods: {
      goTo(){
          this.$router.push('/tabs/Games/index')
      },
      getDataAll(){
          this.$axios.post(this.$http.baseUrl + "/picture/listAll").then(res=>{
              if(res.data.code == 200){
                  this.dataList = res.data.data.reverse()

              }
          });
      },
      getDataFoot(){ //this.$http.baseUrl
          this.$axios.post(this.$http.baseUrl + "/picture/listFoot").then(res=>{
              if(res.data.code == 200){
                  this.dataList = res.data.data.reverse()

              }
          });
      },
      getDataBasket(){ //this.$http.baseUrl
          this.$axios.post(this.$http.baseUrl + "/picture/listBasket").then(res=>{
              if(res.data.code == 200){
                  this.dataList = res.data.data.reverse()

              }
          });
      },
      getDataPing(){ //this.$http.baseUrl
          this.$axios.post(this.$http.baseUrl + "/picture/listPing").then(res=>{
              if(res.data.code == 200){
                  this.dataList = res.data.data.reverse()

              }
          });
      },
      getDataBadm(){ //this.$http.baseUrl
          this.$axios.post(this.$http.baseUrl + "/picture/listBadm").then(res=>{
              if(res.data.code == 200){
                  this.dataList = res.data.data.reverse()

              }
          });
      },
  }
}
</script>

<style lang="stylus">
    .gamesLists{
        margin-top: 15px;
    }
    .gamesWrap{
        margin:0 auto;
        display: flex;
        flex-wrap: wrap;
        padding:5%;
        justify-content: flex-start;
    }
    .gamesBox{
        width:30% !important;
        height:30% !important;
        margin:0 5% 5% 0;
    }
    img[lazy=loading] {
        width: 40px;
        height: 40px !important;
        margin: auto;
        /*background: url('../../../static/loading001.gif') no-repeat !* fixed *! center !important;*/
    }

    .gamesWrap img:nth-child(3n){
        margin-right: 0;
    }
    .gamesText{
        width:100%;
        text-align: center;
        padding:20px 0;
        color:#fff;
        font-size: 16px;
    }
    .lg-preview-wrapper .lg-preview-nav-arrow{
        border-top: 2px solid #ff0 !important;
        border-left: 2px solid #ff0 !important;
    }

@import '../../assets/css/mxin'
    .gamesBj
     .gamesClose
      width 100%
      height 50px
      text-align center
      padding-bottom 50px
      .gamesCloseImg
       width 40%
       margin-top 15px
     .gamesTitle
      width 100%
      p
       width 80px
       margin 0 auto
       text-align center
       line-height 35px
       border-top 1px solid #fff
       border-bottom 1px solid #fff
       color #fff
       font-weight 600
      .gamesImg
       width 100%
</style>
