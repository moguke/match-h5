<template>
    <div class="homeBg">
        <div class="bgImg" @click="goTo()">
            <img :src="homeImgs" alt="">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                homeImgs:require('../../../static/images/other/bgImg.jpg'),
                homeButtonImgs:require('../../../static/images/other/home-button.png'),
            }
        },
        methods:{
            goTo(){
                setTimeout(()=>{
                    this.$router.push('/tabs/Games/index')
                },1000)
            }
        }
    }
</script>
<style>
    .homeBg{
        width:100%;
        position: relative;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:99;
    }
    .bgImg{

    }
    .bgImg img{
        width:100%;
    }
    .homeButton img{
        width:100%;
    }
    .homeButton{
        width:35%;
        position:absolute;
        top:70%;
        left:50%;
        margin-left:-17.5%;
    }
</style>
