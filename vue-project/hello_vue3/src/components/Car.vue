<template>
    <div class="car">
        <h2>一辆{{ car.name }}车，价值{{car.price}}万</h2>
        <button @click="priceUp">调整价格</button>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="gamebtn">修改第一个游戏的名字</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'car'
    }
</script>

<script lang="ts" setup>
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive } from 'vue';

    let car = reactive({
        name : 'benz',
        price : 50
    })
    function priceUp(){
        car.price += 10;
    }

    let games = reactive([
        {id:'1',name:'aaa'},
        {id:'2',name:'bbb'},
        {id:'3',name:'cc'}
    ])
    function gamebtn(){
        games[0].name = 'ddd'
    }

    onBeforeMount(()=>{
        console.log('挂载前')
    })
    onMounted(()=>{
        console.log('挂载后')
    })
    onBeforeUpdate(()=>{
        console.log('更新前')
    })
    onUpdated(()=>{
        console.log('更新后')
    })
    onBeforeUnmount(()=>{
        console.log('卸载前')
    })
    onUnmounted(()=>{
        console.log('卸载后')
    })
</script>

<style>
    .car {
        margin-top: 10px;
        background-color: orange;
        /* height: 200px; */
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 20px;
    }
    ul li {
        font-size: 20px;
    }
</style>