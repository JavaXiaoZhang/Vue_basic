import { reactive,onMounted } from 'vue';
import axios from 'axios'

export default function (){
    let dogList = reactive([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_4082.jpg'
    ])

    async function getDog(){
        try{
            console.log('获取狗狗中...')
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }catch(error){
            alert('获取狗狗异常:' + error)
        }
    }

    onMounted(()=>{
        getDog()
    })

    return {dogList, getDog}
}