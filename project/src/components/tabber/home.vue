<template>
<div class=''>
 <!-- 轮播图 -->
  <luntubo :lunbotulist="lunbo" :isfull='true'></luntubo>
<!-- 轮播图结束 -->
<!-- 九宫格到六宫格 -->
 <ul class="mui-table-view mui-grid-view mui-grid-9 " >
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="/home/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
                        
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
                        
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		         
		        </ul> 
</div>
</template>
<script>
import {Toast} from 'mint-ui'
import luntubo from '../subcomponents/swiper'
export default {
components: { luntubo},
data() {
return {
lunbo:[]
};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  async getLunbo(){
  const {data:res} = await  this.$http.get('getlunbo')
  // console.log(res);
  if(res.status!==0) return  Toast("获取轮播图数据失败")
  // this.$message.error("获取轮播图数据失败")
  // Toast("获取轮播图数据成功")
  this.lunbo = res.message
  console.log(this.lunbo);
  
  
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.getLunbo()

  

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
<style  scoped  lang="scss">

.mui-table-view{
  background-color: #fff!important;
  border: none!important;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
border: none!important;

}
</style>