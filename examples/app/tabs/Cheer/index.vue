<template>
    <div class='cheerList'>
        <scroller :on-refresh = "refresh" :on-infinite="infinite" ref="myscroller">
            <div class='cheerWrap'>
                <div class='cheerDetail' v-for="(item,index) in cheerList" :key="index" @click='goDetail(item.id,`cheer`)'>
                    <!--内容区-->
                    <img class="cheerImg" :src="item.img_url" alt="">
                    <!--页眉，放置标题-->
                    <div class="cheerTitles">{{ item.title }}</div>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    export default {
        inject: ['reload'],
        name: 'cheer',
        data () {
            return {
                show:false,
                cheerList:[],
                dataFilter:{
                    page:1,
                    pageSize:5,
                },
                current:null,
                isLastPage:null,
                total:null,
                message: ''

            }
        },
        created () {

        },
        mounted(){
            this.reload()
            this.show = true
            this.getData()
        },
        methods: {
            //下拉刷新 
            refresh(){
                this.message = '已经为你呈现最新数据了'
                this.$indicator.open({
                    text: '正在刷新中...',
                    spinnerType: 'double-bounce'

                });
                this.dataFilter.page = 1;//重置页数刷新每次页数都是第一页
                setTimeout(function(){
                    this.getData();
                    this.$refs.myscroller.finishPullToRefresh();//刷新完毕关闭刷新的转圈圈
                    this.$toast({
                        message: this.message,
                        position: 'top',
                        duration: 2500
                    });
                }.bind(this),1500)
            },
            // 上拉加载
            infinite(done){
                this.message = '已为你成功加载更多数据'
                this.$indicator.open({
                    text: '正在加载中...',
                    spinnerType: 'double-bounce'

                });
                if(this.current === this.isLastPage){
                    this.$refs.myscroller.finishInfinite(true);//这个方法是不让它加载了，显示“没有更多数据”，要不然会一直转圈圈
                }else{
                    setTimeout(() => {
                        this.dataFilter.page++;//下拉一次页数+1
                        this.getData();
                        done();//进行下一次加载操作
                    }, 1500);
                }
            },

            goDetail (index, name) {
                this.$vueAppEffect.next({
                    path:`/pages/CheerDetail/index/${index}`,
                    params:{ id: index, name: name }
                })
            },

            getData(){
                this.$axios.post(this.$http.baseUrl + "/news/list",{
                    page:this.dataFilter.page,
                    pageSize:this.dataFilter.pageSize
                }).then(res=>{
                    if(res.data.code == 200){
                        this.$indicator.close()
                        this.total = res.data.total;
                        this.isLastPage = res.data.isLastPage;
                        this.current = res.data.current;
                        //this.cheerList = res.data.data.reverse()
                        if(this.dataFilter.page === 1){
                            this.cheerList = res.data.data;
                        }else{
                            this.cheerList= this.cheerList.concat(res.data.data)
                            this.$toast({
                                message: this.message,
                                position: 'top',
                                duration: 3000
                            });
                        }
                    }else{
                        this.$indicator.close()
                    }
                }).catch(err=>{
                    this.$indicator.close()
                    this.$toast({
                        message: '网络不给力啊，稍后再试一次吧',
                        position: 'top',
                        duration: 2500
                    });
                });
            },
        }
    }
</script>

<style lang="stylus">
    @import '../../assets/css/mxin'
    .cheerList
      overflow auto
      color:rgba(255,255,255,0.5)
      display flex
      padding 15px
      flex-wrap wrap
      .cheerWrap
        flex 100% 0 0
        overflow hidden
        .cheerDetail
          height 130px
          border-radius 10px
          background #000
          margin 15px
          position relative
          overflow hidden
          .cheerImg
            width 100%
            height auto
          .cheerTitles
            position absolute
            bottom 0
            left 0
            right 0
            width 100%
            height 30px
            line-height 30px
            color #fff
            padding-left 15px
            background #000
            opacity 0.6
            text-overflow ellipsis
            white-space nowrap
</style>
