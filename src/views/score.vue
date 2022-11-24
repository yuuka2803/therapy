<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div class="flex justify-center">
            <h1 class="text-3xl pt-14 pb-10">ผลการประเมิน</h1>
        </div>
        <div class="flex justify-center">
            <div class="w-2/5 text-xl text-center bg-amber-100 p-8">
                <p class="pb-10">คะแนนของคุณอยู่ที่</p>
                <p class="text-3xl font-bold pb-5">{{sum}}/100</p> 
                <p v-show="sum>=50  && sum<=70" class="pt-5">เนื่องจากคะแนนของคุณอยู่ในช่วง 50-70 คะแนน</p>
                <p v-show="sum>=50  && sum<=70"  class="pt-2">ดังนั้นสามารถกายภาพบำบัดได้ตามโปรแกรมนี้</p>
                <p v-show="sum<50 " class="pt-5">เนื่องจากคะแนนของคุณอยู่ในช่วง 0-49 คะแนน</p>
                <p v-show="sum<50 " class="pt-5">คุณควรเข้ารับการรักษากับแพทย์เฉพาะทางโดยตรง</p>
                <p v-show="sum>70 " class="pt-5">เนื่องจากคะแนนของคุณอยู่ในช่วง 70-100 คะแนน</p>
                <p v-show="sum>70 " class="pt-5">คุณมีความสามารถในการปฎิบัติกิจวัตรประจำเองได้ </p>
                <p v-show="sum>70 " class="pt-5">ไม่จำเป็นต้องกายภาพบำบัด </p>
            
             </div>
        </div>
        <div class="flex justify-center space-x-16">
        <router-link v-show="sum>=50  "   to="/pose1">
            <div class="pt-16 flex justify-center">
                <button class="flex justify-center p-3 w-[220px] text-center delay-150 bg-sky-200 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300 rounded-full text-xl">เริ่มทำกายภาพบำบัด</button>
            </div>
        </router-link>
        <router-link v-show="sum<49"   to="/homeuser">
            <div class="pt-16 flex justify-center">
                <button class="flex justify-center p-3 w-[220px] text-center delay-150 bg-sky-200 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300 rounded-full text-xl">กลับหน้าหลัก</button>
            </div>
        </router-link>
        </div>
    </div>

</template>
<script>
import { useUserStore } from '../stores/user'
export default {
    data() {
        return {
            sum: 0
            
        };
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    async mounted() {
        await useUserStore().fetchData();
        this.sum = useUserStore().getTherapies.pop().score
    },
}

    
</script>
<style lang="">
    
</style>