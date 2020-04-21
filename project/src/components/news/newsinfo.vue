<template>
<div class='newsinfo-container'>
        <h3 class="title">{{this.newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{this.newsinfo.add_time|dateFormat}}</span>
            <span>点击：{{this.newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
            <!-- 评论子组件 -->
            <comment-box :id= this.id></comment-box>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/comment'
export default {
components: {
    'comment-box':comment
},
data() {
return {
        id:this.$route.params.id,
        newsinfo:{}
};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 async getnewsinfo(){
     const {data:res} = await this.$http.get('/getnew/'+this.id)
    //  if(res.message.status!==0) return  
    //  Toast("获取新闻数据失败")
    //  Toast("okok")  
   this.newsinfo = res.message[0]
    
 }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
        this.getnewsinfo()
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
.newsinfo-container{
    padding: 0 10px;
    .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
    }
    .subtitle{
            color:#226aff ;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
    }
    .content{
        
    }
}

</style>