<template>
<div class='goodsdesc_container'>
  <h3>{{this.info.title}}</h3>
  <hr>
  <div class="content" v-html="info.content"></div>
</div>
</template>
<script>
export default {
components: {},
data() {
return {
    info:{},  //图文你介绍

};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  async   getGoodsDesc(){
       const {data:res} = await this.$http.get('goods/getdesc/'+this.$route.params.id)
       this.info = res.message[0]
       console.log(this.info);
       

    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
        this.getGoodsDesc()
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
.goodsdesc_container{
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
}
.content{
    img{
        width: 100%;
    }
}

</style>