<template>
  <div>
      <!-- 二级路由出口 -->
      <router-view></router-view>
      <!-- 底部栏 -->
      <van-tabbar v-model="active" active-color="#ff00cc">
      <van-tabbar-item icon="wap-home" to='/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="coupon" to='/cate'>分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to='cart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to='mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>

<style>

</style>