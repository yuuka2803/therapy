<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div class="flex justify-center">
            <h1 class="text-3xl pt-14 pb-10">ผลการประเมิน</h1>
        </div>
        <div class="flex justify-center">
            <div class="w-2/5 text-xl text-center bg-amber-100 p-8">
                <p class="pb-10">คะแนนของคุณอยู่ที่</p>
                <p class="text-3xl font-bold pb-5">{{sum}}/100</p> 
                <p :v-show="sum>=50  && sum<=70" class="pt-5">เนื่องจากคะแนนของคุณอยู่ในช่วง 50-70 คะแนน</p>
                <p class="pt-2">ดังนั้นสามารถกายภาพบำบัดได้ตามโปรแกรมนี้</p>
            </div>
        </div>
        <router-link to="/showscore">
            <div class="pt-16 flex justify-center">
                <button class="flex justify-center p-3 w-[220px] text-center delay-150 bg-sky-200 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300 rounded-full text-xl">เริ่มทำกายภาพบำบัด</button>
            </div>
        </router-link>
    </div>
</template>
<script>
import { useUserStore } from '../stores/user'
export default {
    data() {
        return {
            score: [],
            
        };
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    async mounted() {
        await useUserStore().fetchScore();
        this.score = useUserStore().getScore
        this.sum = 0;
        const s = this.score.pop()
        console.log(s);
        for (let i in s) {
            this.sum += parseInt(s[i])
        }
        
    },
    
    
}
    
</script>
<style lang="">
    
</style>