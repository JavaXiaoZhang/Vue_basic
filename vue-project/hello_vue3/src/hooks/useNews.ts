import { reactive } from "vue";

export default function(){
    let newsList = reactive([
        {'title':'11111','path':'/news1'},
        {'title':'22222','path':'/news1'},
        {'title':'33333','path':'/news1'}
    ])

    return {newsList}
}