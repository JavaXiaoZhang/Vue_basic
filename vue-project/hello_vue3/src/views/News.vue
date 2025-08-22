<template>
    <div class="nav">
        <li v-for="(i,index) in newsList" :key="index">
            <!-- 第一种写法 -->
            <!-- <RouterLink :to="`/news${i.path}?a=${index}&b=${i.title}`" active-class="active">
                {{ i.title }}
            </RouterLink> -->

            <!-- 第二种写法 -->
            <RouterLink :to="{
                path: '/news/news1',
                query: {
                    'a': index,
                    'b': i.title
                }
            }" active-class="active">
                {{ i.title }}
            </RouterLink>
        </li>
    </div>
    <div class="content">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'News'
    }
</script>
<script lang="ts" setup>
    import { onMounted,onUnmounted } from 'vue';
    import useNews from '@/hooks/useNews'
    import {RouterView,RouterLink} from 'vue-router'

    const {newsList} = useNews()

    onMounted(()=>{
        console.log('挂载了')
    })
    onUnmounted(()=>{
        console.log('卸载了')
    })
</script>

<style>
    .news {
        height: 200px;
        background-color: green;
    }
    .nav {
        width: 150px;
        height: 100%;
        float: left;
        overflow: hidden;
        margin: 150px 30px;
    }
    .nav li {
        vertical-align: middle;
        margin-top: 30px;
    }
    .content {
        float: right;
        width: 1000px;
        height: 100%;
        border: 1px solid;
    }
    .active {
        color: red;
    }
    
</style>