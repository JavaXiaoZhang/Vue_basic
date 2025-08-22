<template>
    <div class="content">
        <div>
            <h1>当前求和为：{{ sum }}</h1>
            <button @click="addSum">点我+1</button>
        </div>
        <div>
            <img v-for="(dog,index) in dogList" :src="dog" :key="index">
            <button @click="getDog">再来一只小狗</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'dog'
    }
</script>
<script lang="ts"setup>
    // import { reactive, ref } from 'vue';
    // import axios from 'axios'

    // let sum=ref(0);
    // function addSum(){
    //     sum.value += 1;
    // }

    // let dogList = reactive(['https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_4082.jpg'])
    // async function getDog(){
    //     try{
    //         console.log('获取狗狗中...')
    //         let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    //         dogList.push(result.data.message)
    //     }catch(error){
    //         alert('获取狗狗异常:' + error)
    //     }
    // }

    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';
    
    const {dogList,getDog} = useDog()
    const {sum,addSum} = useSum()
</script>

<style>
    .content{
        height: 200px;
        background-color: orange;
    }
    img{
        height: 100px;
    }
</style>
