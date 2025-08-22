// 创建一个路由器并暴露出去

// 1.引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import News1 from '@/views/News1.vue'

// 2.创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:'zhuye',
            path: '/home',
            component: Home
        },
        {
            name:'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name:'news-1',
                    path: 'news1',
                    component: News1
                }
            ]
        },
        {
            name:'guanyu',
            path: '/about',
            component: About
        }
    ]
})

export default router