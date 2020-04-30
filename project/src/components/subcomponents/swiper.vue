<template>
<div class=''>
    
 <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
    <img :src="item.img" alt="" :class="{withfull:isfull}">  
  </mt-swipe-item>
</mt-swipe>
</div>
</template>
<script>
export default {
    props:["lunbotulist","isfull"],
components: {},
data() {
return {
        // isfull:false   不要在data中定义，否则报错
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
.mint-swipe{
    height: 200px;
    width: 100%;
}
.mint-swipe-item{
    text-align: center;
 
  img{
    width: 100%;
    height: 100%;
  }
}
.withfull{
    width: 100%;
}
</style>