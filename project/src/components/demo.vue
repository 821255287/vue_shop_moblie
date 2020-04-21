<template>
<div class=''>
    <el-card>
        <el-button @click="run" type="primary">跑起来</el-button>
        <el-button  @click="stop" type="primary">停下来</el-button>
        <hr>
        <el-tag>{{this.mes}}</el-tag>
  <hr>
        <!-- <my_btn @click.native="handleClick"  plain size="large">按钮</my_btn> -->
        <hr>
      <!-- <mt-button type="default"  icon="back">default</mt-button> -->
<!-- <mt-button type="primary" icon = "more" @click.native="primaryBtn">primary</mt-button> -->
<!-- <mt-button type="danger">danger</mt-button> -->
<mybtn>123213</mybtn>
<button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
    </el-card>
</div>
</template>
<script>


import { Toast } from 'mint-ui';
export default {
components: {},
data() {
return {
  mes:"欢迎光临我的小店",
  messtart:"",
  mesend:"",
  runInterval:"",
  metoast:""

};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
run(){
    if(this.runInterval!=="") return ;
  this.runInterval = setInterval(()=>{
 this.messtart = this.mes.substr(0,1);
    this.mesend = this.mes.substr(1);
    this.mes = this.mesend + this.messtart
    console.log(this.mes);
  },20)
       
},
stop(){
    clearInterval(this.runInterval)
    this.runInterval = "";
   
},
handleClick(){
    Toast('提示信息');
},
primaryBtn(){
  this.metoast = Toast({
  message: '提示1111',
  position: 'top',
  duration: -1,
  iconClass: 'fa fa-asterisk',
  className: "shows"
});
  setTimeout(()=>{
        this.metoast.close();

  },5000)

}
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
<style >
.shows{
    background-color: orange!important;
    /* color: pink!important; */
}
.mint-toast is-placetop .shows{
    background-color: red!important;

}
.mint-toast i{
    background-color: pink!important;
}

</style>