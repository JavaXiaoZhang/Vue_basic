<template>
    <!-- html -->
    <div id="app">
        <h1>hello!</h1>
        <Person a="111" :list="personList"/>
        <Car v-if="isShow"/>
        <Phone/>
        <Dogs/>
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue';
    import Car from './components/Car.vue';
    import Phone from './components/Phone.vue'
    import Dogs from './components/Dogs.vue'
    import type { PersonInter, Persons } from './types/Person';
    import { ref } from 'vue';

    export default {
        name: 'App'
        // components: {Person,Car,Phone}
    }
</script>

<script lang="ts" setup>
    let person:PersonInter = {id:'111'}

    let personList:Persons = [
        {id:'111',name:'zxs',age:11},
        {id:'222',name:'lss',age:22},
        {id:'333',name:'wuu',age:33}
    ]

    let isShow = ref(true)
</script>

<style>
    #app {
        background-color: gray;
        box-shadow: 0 0 10px ;
        border-radius: 10px;
        padding: 20px;
    }
</style>