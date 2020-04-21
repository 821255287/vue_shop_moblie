<template>
<div class=''>
  <ul class="mui-table-view" v-for="item in newlist" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link  :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time|dateFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			
  </ul>
			
		
</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
components: {},
data() {
return {
newlist:[]
};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 async getNewlist(){
     const {data:res} = await this.$http.get('/getnewslist')
    //  console.log(res)
    if(res.status!==0) return  Toast("获取新闻列表失败")
    this.newlist = res.message
    console.log(this.newlist);
    
 }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 this.getNewlist()
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
.mui-table-view{
 li{
     h1{
         font-size: 14px;
     }
     .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;

     }
 }
}

</style>