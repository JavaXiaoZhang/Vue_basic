<template>
    <span> {{ route.query.a }}</span><br>
    <span>{{ route.query.b }}</span>
</template>
<script lang="ts">
    export default {
        name: 'News1'
    }
</script>
<script lang="ts" setup>
    import {useRoute} from 'vue-router'

    let route = useRoute()
    console.log('@', route)
</script>