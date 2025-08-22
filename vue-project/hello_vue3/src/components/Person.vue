<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
        <button @click="modifyName">修改名字</button>
        <button @click="modifySex">修改性别</button>
        <button @click="showTel">查看联系方式</button>

        <ul>
            <li v-for="item in x.list" :key="item.id">
                {{item.name}} -- {{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
        // beforeCreate(){
        //     console.log("beforeCreate")
        // },
        // data(){
        //     console.log('data')
        //     return {
        //         name:'zs',
        //         sex:'m',
        //         phone:'1333'
        //     }
        // },
        // methods: {
        //     showTel(){
        //         alert(this.phone) 
        //     },
        //     modifyName(){
        //         this.name='ls'
        //     },
        //     modifySex(){
        //         this.sex='f'
        //     }
        // },
        // setup(){
        //     console.log('setup')
        //     // 数据
        //     let name = 'zs'
        //     let sex = 'm'
        //     let tel='133'

        //     // 方法
        //     function modifyName(){
        //         name='ls'
        //         console.log(name)
        //     }
        //     function modifySex(){
        //         sex='f'
        //     }
        //     function showTel(){
        //         alert(tel)
        //     }

        //     return {name,sex,modifyName,modifySex,showTel}
        // }
    }
</script>

<script lang="ts" setup>
    import type { Persons } from '@/types/Person';
import {ref} from 'vue'

    let name = ref('zs')
    let sex = ref('m')
    let tel='133'

    // 方法
    function modifyName(){
        name.value='ls'
        console.log(name)
    }
    function modifySex(){
        sex.value='f'
    }
    function showTel(){
        alert(tel)
    }

    // let x = defineProps(['a','list'])
    // console.log(x.a,x.list)

    let x = withDefaults(defineProps<{list?:Persons}>(), {
        list: ()=> [{id:'111','name':'zss',age:11}]
    })
</script>

<style>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px ;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 10px;
    }
</style>