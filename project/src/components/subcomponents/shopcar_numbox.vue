<template>
<div class=''>
     <div class="mui-numbox" data-numbox-min='1' style="height:25px">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" 
					type="number" :value="initCount"  @change="countChanged" ref="numbox" readonly/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</div>

</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
   props:["initCount","goodsid"],
components: {},
data() {
return {

};
},
computed: {},
//监控data中的数据变化
watch: {

},
//方法集合
methods: {
		countChanged(){
				// console.log(this.$refs.numbox.value);
				this.$store.commit("updateGoodsinfo",{
					id:this.goodsid,count:this.$refs.numbox.value
				})
		}
},

//生命周期 - 创建完成（可以访问当前this实例）
created() {
			
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //初始化数字选择组件
    mui(".mui-numbox").numbox()
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


</style>