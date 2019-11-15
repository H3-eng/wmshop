<template>
    <div class="msite">
        <mt-header title="红璞公寓">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            <span slot="right">登录 | 注册</span>
        </mt-header>
        <nav class="msite_nav">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <div class="swipe-wrapper clearfix">
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(1).png" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(2).png" alt="">
                            </div>
                            <span>商超便利</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(3).png" alt="">
                            </div>
                            <span>美食</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(4).png" alt="">
                            </div>
                            <span>菜肴</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(5).png" alt="">
                            </div>
                            <span>新店特惠</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(6).png" alt="">
                            </div>
                            <span>准时达</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(7).png" alt="">
                            </div>
                            <span>预订单餐</span>
                        </router-link>
                        <router-link to="">
                            <div class="food-container">
                                <img src="./images/nav/icon(8).png" alt="">
                            </div>
                            <span>土豪推荐</span>
                        </router-link>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </nav>
        <div class="msite_shop_list">

        </div>
    </div>
</template>
<script>
import {reqFoodTypes} from '../../api'
export default {
    async mounted(){
        const result=await reqFoodTypes()
        console.log(result)
    },
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
    .msite
        .mint-header
            background-color #02a774
        .msite_nav
            width 100%
            .mint-swipe-items-wrap
                height 170px
                background #fff
                .mint-swipe-item
                    .swipe-wrapper
                        padding 20px 0px 10px
                        a
                            width 25%
                            float left
                            text-align center
                            margin-bottom 10px
                            .food-container
                                align-items center
                                img
                                    width 35%
                            span
                                font-size 12px
                                color #000
            .mint-swipe-indicators 
                .mint-swipe-indicator
                    opacity 1
                    background #999
                    &.is-active
                        background #02a774
        //.msite_shop_list
</style>