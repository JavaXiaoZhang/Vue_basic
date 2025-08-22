<template>
    <div id="app">
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <RouterLink replace to="/home" active-class="active">首页</RouterLink>
            <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
            <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
        </div>
        <!-- 展示区 -->
         <div class="main-content">
            <RouterView></RouterView>
         </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'App'
    }
</script>
<script lang="ts" setup>
    import {RouterView, RouterLink} from 'vue-router'

</script>
<style>
    /* #app {
        height: 200px;
        background-color: orange;
    } */

    .title {
        text-align: center;
        word-spacing: 5px;
        height: 70px;
        line-height: 70px;
        margin: 30px 0;
        background-image: linear-gradient(45deg,gray,white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
    }
    .navigate{
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
    .navigate a{
        color: white;
        background-color: gray;
        text-decoration: none;
        font-size: 18px;
        padding: 5px 20px ;
        border-radius: 10px;
    }
    .navigate a.active {
        color: red;
        background-color: orange;
        font-weight: 900;
    }
    .main-content{
        margin: 0 auto;
        margin-top: 30px;
        height: 400px;
        width: 90%;
        border: 1px solid;
    }
</style>