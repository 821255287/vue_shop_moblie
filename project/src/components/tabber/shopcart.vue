<template>
<div class='shopcar-container'>
    <div class="goods_list">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="(item, i) in goodslists" :key="item.id">
				<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                <img :src="item.thumb_path" alt="" width="80px" height="80px">
                <div class="info">
                    <h1>{{item.title}}</h1>
                    <p class="priceAll">
                        <span class="price">￥{{item.sell_price}} </span>
                        <numbox :initCount = "$store.getters.getGoodsCount[item.id]"  :goodsid="item.id"></numbox>
                        <a href="" @click.prevent="remove(item.id,i)">删除</a>
                    </p>
                </div>
					</div>
				</div>
			</div>
    </div>
   
<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
                            <div class="left">
                                    <p>总计(不含运费)</p>
                                    <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，
                                    总价：<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                            </div>
                            <div class="right">
                                    <mybtn type="danger" size="small">去结算</mybtn>
                            </div>
					</div>
				</div>
				
			</div>
            <p></p>

</div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox'
export default {
components: {numbox},
data() {
return {
        goodslists:[]   //购物车中所有商品的数据
};
},
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   async goodslist(){
    var idArr =[];
    this.$store.state.car.forEach(item=>{
      idArr.push(item.id)
    })
            if(idArr.length==0)  return    //如果购物车没有商品，直接返回
     const {data:res} = await this.$http.get('/goods/getshopcarlist/'+idArr.join(','))
     this.goodslists = res.message
            // console.log(this.goodslists);
            
        },
        remove(id,index){
            //点击删除,把商品从store中，根据传递的ID删除，同时到goodlist中
            //对应删除那个商品,使用index来删除
            this.goodslists.splice(index,1);
            this.$store.commit("removeForCar",id)
        },
        selectedChanged(id,value){
        // console.log(id +"-------"+value)
       
        this.$store.commit("updateGoodsSelected",{id:id,selected:value})

        }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.goodslist();
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
.shopcar-container{
    background-color: #eee;
    .mui-card-content-inner{
        display: flex;
     justify-content: space-between;
     align-items: center;
    
    }
}
.goods_list{
   overflow: hidden;
    img{
        width: 60px;
        height: 60px;
    }
    h1{
        font-size: 13px;
        text-align: center;
    }
    .info{
 .priceAll{
     display: flex;
     justify-content: space-between;

 }
        .price{
            color: red;
            font-weight: bold;
        }
    }
}
.right{
    margin: 5px,20px;
}
.red{
    color: red;
    font-weight: bold;
    font-size: 16px;
}

</style>