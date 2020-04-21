<template>
<div  class="app_container">

  <!-- 顶部区域 -->
  <myheader fixed title="黑马小帅哥Vue项目"></myheader>

  <!-- 中间路由区域 -->
  <transition>
  
<router-view></router-view>

  </transition>
  <!-- 底部tabbar区域 -->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
			
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
			
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">1</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
		
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			
		</router-link>

</nav>
</div>
</template>
<script>
export default {
components: {},
data() {
return {

};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
.app_container{
    padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;
}
.v-enter{
	opacity: 0;
transform: translateX(100%);

}
.v-leave-to{
	opacity: 0;
	translate: translateX(-100%);
	position: absolute;
}

.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
</style>