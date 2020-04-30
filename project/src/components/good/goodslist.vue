<template>
<div class='goodlist'>

   <router-link  class="content" v-for="item in goodlist" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
       <img :src="item.img_url" alt="">
       <h1>{{item.title}}</h1>
   
   <div class="priceAll">
       <p class="price">
           <span class="new">￥{{item.sell_price}}</span>
           <span class="old">￥{{item.market_price}}</span>
       </p>
       <p class="sell">
           <span>热卖中</span>
           <span>剩{{item.stock_quantity}}件</span>
       </p>
   </div>
  </router-link>

   <mybtn type="danger" size="large" @click="getmore">加载更多</mybtn>
  
 
   
     
 
 
</div>
</template>
<script>
export default {
components: {},
data() {
return {
    pageIndex:1,
    goodlist:[]
};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  async getgoodslist(){
       const {data:res} = await this.$http.get('/getgoods?pageindex='+this.pageIndex)
    //    console.log(res);
    // this.goodlist = res.message
    this.goodlist = this.goodlist.concat(res.message)  

    //    console.log(this.goodlist);
       
  },
  getmore(){
      this.pageIndex++;
      this.getgoodslist()
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 this.getgoodslist()
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

.goodlist{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
     justify-content: space-between;
    .content{
        min-height: 220px;
    //    position: relative;
        margin-top: 5px;  
        width: 49%;
        border:  1px solid #ccc;
        box-shadow: 0 0 6px #ccc;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 100%;
          
        }
        h1{
            font-size: 12px;
        }
    }
}
.priceAll{
    // position: absolute;
    bottom: 2px;
    height: 50px;
    width: 100%; 
    bottom: 0;
    background-color: #ccc;
    line-height: 25px;
   
    .old{
        text-decoration: line-through;
    }
    .new{
        color: red;
        font-weight: bold;
    }
}
p{
    margin: 0;
}
.price>.old{
        margin-left: 8px;
        font-size: 12px;
}
.sell{
    display: flex;
    justify-content: space-between;
     margin: 0;
     font-size: 12px;
}
</style>