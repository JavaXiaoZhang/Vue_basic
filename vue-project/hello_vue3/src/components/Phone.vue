<template>
    <div class="phone">
        品牌：<input type="text" v-bind:value="brand">
        价格：<input type="text" :value="price">
        型号：<input type="text" v-model="size">
        全称：<span>{{ fullName }}</span>
        全称：<button @click="fullName2">改变全称</button>
        <br>
        <span>3:00起床 3:30出发 4:30到停车场 5:00到机场 提前40分钟5:50截止值机 6:30起飞</span>
        <span>物品：三套衣服，身份证，充电器，充电宝，雨伞，遮阳衣，墨镜，帽子，外套，保暖内裤，两双鞋，牙刷，剃须刀，驱蚊水</span>
        <!-- <span>机场登机：</span> -->
        <br>
        品牌：<input type="text" v-bind:value="obj.name">
        价格：<input type="text" :value="obj.price">
        型号：<input type="text" v-model="obj.size">
        全称：<button @click="fullName3">改变全称</button>
        <br>
        品牌：<input type="text" v-bind:value="obj2.name">
        价格：<input type="text" :value="obj2.price">
        型号：<input type="text" v-model="obj2.size">
        全称：<button @click="fullName4">改变全称</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'phone'
    }
</script>

<script lang="ts" setup>
    import { computed, reactive, ref, watch } from 'vue';

    let brand = ref('xiaomi')
    let price = ref(2000)
    let size = ref('su7')
    let obj = ref({
        name: 'huawei',
        price: 5000,
        size: 'Mate70'
    })
    let obj2 = reactive({
        name: 'huawei',
        price: 5000,
        size: '70'
    })

    // let fullName = computed(()=>{
    //     console.log('11')
    //     return brand.value + price.value + size.value
    // })
    let fullName = computed({
        get(){
            return brand.value + price.value + size.value
        },
        set(val){
            console.log('11',val)
            const [str1,str2] = val.split('-')
            brand.value = str1
            size.value = str2
        }
    })

    function fullName2(){
        fullName.value = 'xiao-mi YU7'
    }
    function fullName3(){
        obj.value = {name:'rongyao',price:2000,size:'30'}
    }
    function fullName4(){
        Object.assign(obj2, {name:'rongyao',price:2000,size:'30'})
    }
    const stopWatch1 = watch(fullName,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
        if(size.value=='YU7'){
            stopWatch1()
        }
    })

    watch(obj,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
    },{deep:true,immediate:true})
    watch(obj2,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
    })
    watch(()=> obj2.size,(newValue,oldValue)=>{
        console.log('getter ',newValue,oldValue)
    })
    watch ([obj,obj2],(newValue,oldValue)=>{

    })
</script>

<style scoped>
    .phone {
        /* height: 40px; */
        background-color: skyblue;
        margin-top: 10px;
        padding: 20px;
        border-radius: 10px;
        box-shadow:  0 0 10px;
    }
</style>