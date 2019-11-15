<template>
    <div class="footer_guide">
        <mt-tabbar v-model="selected">
            <mt-tab-item id="tab1">
                <router-link to="/msite">
                    <span class="item_icon"><i class="fa fa-magnet" aria-hidden="true"></i></span>
                    <span>外卖</span>
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                 <router-link to="/search">
                    <span class="item_icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                    <span>搜索</span>
                  </router-link>  
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <router-link to="/order">
                    <span class="item_icon"><i class="fa fa-file-text-o" aria-hidden="true"></i></span>
                    <span>订单</span>
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <router-link to="/profile">
                    <span class="item_icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                    <span>我的</span>
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"tab1"
        }
    }
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
    .footer_guide
        top-border-1px(#e4e4e4)
        background-color #fff
        width 100%
        height 50px
        position fixed
        left 0
        right 0
        bottom 0
        .mint-tabbar
            height 50px
            .mint-tab-item
                display flex
                align-items center
                flex 1
                flex-direction column
                margin 5px
                color #999999
                padding 0
                &.is-selected
                    background-color transparent
                    a
                        color #02a774
                a
                    color #999999
                    span 
                        font-size 12px
                    i
                        display block
                        margin-bottom 3px
                        font-size 22px
</style>