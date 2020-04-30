<template>
<div class='goodsinfo_container'>
    <transition @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
     <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
   
    <!-- 商品轮播区域 -->
<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<lunbotulist :lunbotulist="lunbotu" :isfull="false"></lunbotulist>
					</div>
				</div>
			</div>
            <!-- 商品购买区域 -->
                <div class="mui-card">
				<div class="mui-card-header">{{this.goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p class="price">
                        <span>市场价:&nbsp;&nbsp;<del>￥{{goodsinfo.market_price}}</del>&nbsp;</span>
                        销售价:&nbsp;<span class="nowprice">￥{{goodsinfo.sell_price}} </span>
                    </p>
                    <div class="boxnum">
                            <p>购买数量：</p>
                   <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity">
                   
                   </numbox>
                    </div>
                  
                    <p  class="sellGood">
                        <mybtn type="primary" size="small" >立即购买</mybtn>
                        <mybtn type="danger" size="small" class="cellonce" @click="addToShopCart">加入购物车</mybtn>
                    </p>
					</div>
				</div>
			</div>
			

            <!-- 商品参数区域 -->
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
				  <p>商品货号：{{goodsinfo.goods_no}}</p>
				  <p>库存情况：{{goodsinfo.stock_quantity}}</p>
				  <p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mybtn type="primary" size="large" plain @click="goDesc(id)">图文介绍</mybtn>
                
                    <mybtn type="danger" size="large" plain @click="goComment(id)">商品评论</mybtn>
                </div>
			</div>
			
</div>
</template>
<script>
import lunbotulist from '../subcomponents/swiper'  //
import numbox from '../subcomponents/goodsinfo_number'
export default {
components: {
    lunbotulist,
    numbox
},
data() {
return {
        id:this.$route.params.id,
        lunbotu:[], //轮播图的数据
        goodsinfo:{},
        ballflag:false,
        selectedCount:1, //保存用户选中的商品数量
};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        async getlunbotu(){
          const {data:res} = await  this.$http.get('/getthumimages/'+this.id)
          this.lunbotu = res.message
        //   console.log(this.lunbotu);
        // this.lunbotu.img = this.lunbotu.src
       this.lunbotu.forEach(item=>{
           item.img = item.src    //item.img  我弄错了
       })
    //    console.log(this.lunbotu.img);       
        },
     async getinfo(){
          const {data:res} = await this.$http.get('/goods/getinfo/'+this.id)
          this.goodsinfo = res.message[0]
        //   console.log(this.goodsinfo);
        // console.log(res);
           
        },
        goDesc(id){ //点击跳转到图文介绍
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){  //点击跳转到评论页面
              this.$router.push({name:'goodscomment',params:{id}})
        },
        addToShopCart(){
            this.ballflag=!this.ballflag;
          var goodsinfo = {
              id:this.id,count:this.selectedCount,
          price:this.goodsinfo.sell_price,selected:true}  
        //   this.$store.state.car("goodsinfo")
                this.$store.commit("addToCar",goodsinfo)
        },
        //小球动画
        beforeEnter(el){
                el.style.transform="translate(0,0)"
        },
       enter(el,done){
           //获取小球在页面中的位置
           const ballPosition = this.$refs.ball.getBoundingClientRect()
        //获取徽标在页面中的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect()

            const xDist = badgePosition.left - ballPosition.left
            const yDist =  badgePosition.top - ballPosition.top
               
                
            el.offsetWidth;
          
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition="all 1s ease"
            
            done()
            },
       afterEnter(el){
                this.ballflag=!this.ballflag
            },

            getSelectedCount(count){
                //当子组件选中的数量传递给父组件时
                this.selectedCount = count 
                //父组件拿到的数量值为
                console.log("父组件拿到的数量值为"+this.selectedCount);
                console.log(this.goodsinfo.stock_quantity);
                
                

            }
        
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.getlunbotu();
  this.getinfo()  //获取商品信息
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
.goodsinfo_container{
    background-color: #eee;
  overflow: hidden;
  .nowprice{
      color: red;
      font-size: 16px;
      font-weight: bolder;

  }
}
.mui-card-footer{
//  flex-wrap: wrap;
display: block;
button{
    margin: 15px 0;
}
}
.cellonce{
    margin: 0 6px;
}
.sellGood{
    margin-top: 10px;
}
.ball{
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top:302px;
    left:59px;
    // transform: translate(143px,317px);
}
.boxnum{
    p{
        margin-top: 6px;
    }
    display: flex;
}
</style>