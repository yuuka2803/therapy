<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div>
            <div class="flex justify-center pt-24">
                <div class="flex bg-amber-100 w-[700px] p-16 space-x-[100px] rounded-3xl border-4 border-slate-500 drop-shadow-2xl">
                    <div class="flex-none flex items-center">
                        <font-awesome-icon icon="fa-solid fa-user" class="text-[200px]"/>
                    </div>
                    <div class="flex-none text-xl grid items-center text-center">
                        <p class="pb-5 text-3xl font-semibold">Information</p>
                        <p class="pb-2">name : {{name}}</p>
                        <p class="pb-2">Age : {{age}}</p>
                        <p>Email : {{email}}</p>
                    </div>
                </div>
            </div>
            <div class="bg-blue-100 mt-20 min-h-screen">
                <h1 class="pt-14 text-4xl font-semibold text-center">History</h1>
                <div class="flex justify-center space-x-[300px]">
                    <div>
                        <h1 class="pt-14 text-3xl text-center">คะแนนการประเมิน</h1>
                        <div class="flex justify-center items-center bg-white w-[500px] mt-12 p-8 space-x-[180px] rounded-3xl drop-shadow-2xl">
                            <div class="flex-none">
                                <h1 class="text-2xl">Date</h1>
                                <h1 class="text-xl">23/11/2546</h1>
                            </div>
                            <div class="flex-none">
                                <h1 class="text-2xl">Score</h1>
                                <h1 class="text-xl">60/100</h1>
                            </div>
                        
                        </div>
                    </div>
                    <div>
                        <h1 class="pt-14 text-3xl text-center">การทำกายภาพบำบัด</h1>
                        <div class="flex justify-center items-center bg-white w-[500px] mt-12 p-8 space-x-[180px] rounded-3xl drop-shadow-2xl">
                            <div class="flex-none">
                                <h1 class="text-2xl">Date</h1>
                                <h1 class="text-xl">23/11/2546</h1>
                            </div>
                            <div class="flex-none">
                                <h1 class="text-2xl">COMPLETE!!</h1>
                            </div>
                        
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { useUserStore } from '../stores/user'
export default {
    data() {
        return {
            name: "",
            age: 0,
            email:""
        }
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    async mounted() {
        await useUserStore().fetchName();
        this.name = useUserStore().getName
  
        await useUserStore().fetchAge();
        this.age = useUserStore().getAge

        await useUserStore().fetchEmail();
        this.email = useUserStore().getEmail
    }

    

}
</script>
<style lang="">
    
</style>