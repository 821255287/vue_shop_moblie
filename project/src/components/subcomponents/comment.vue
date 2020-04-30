<template>
<div class='cmt_container'>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120" ></textarea>
    <mybtn type="primary" size="large">发表评论</mybtn>
    
    <div class="cont_list">
        <div class="cont_item">
            <div class="cont_title">
               第一楼&nbsp;用户：匿名用户：&nbsp;&nbsp;发表时间:2012-12-12
            </div>
             <div class="cont_body">
                    eegg
                </div>
        </div>
    </div>
     <mybtn type="danger" size="large" plain @click="getmore">加载更多</mybtn>
</div>
</template>
<script>
export default {
components: {},
data() {
return {
        pageIndex:1,    //默认展示第一页数据
        comments:{}
};
},
props:['id'],
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  async getComments(){
      const  {data:res} = await this.$http.get("getcomments/"+this.mama+"?pageindex="+this.pageIndex)
        // console.log(res);
        this.comments = res
        
  },
  getmore(){
      this.pageIndex++;
      this.getComments()
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 this.getComments()
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
textarea{
    height: 100px;
    font-size: 14px;
    margin-bottom: 0;
}
.cmt_container{
    h3{
        font-size: 18px;


    }

}
.cont_list{
    margin: 5px 0;
    .cont_item{
        font-size: 13px;
    }
        .cont_title{
            line-height: 30px;
                background-color: #ccc;
        }
        .cont_body{
 line-height: 35px;
 text-indent: 2em;
        }
}
</style>