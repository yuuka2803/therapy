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
                    <div v-for="s in therapies" :key="s">
                       <scoreCard
                            :score = s.score 
                            :date = s.date >
                       </scoreCard>
                    </div>
                    <!-- {{ therapies}} -->
                        
                        </div>
                    </div>
                    <div class="justify-center">
                        <h1 class="pt-14 text-3xl text-center">การทำกายภาพบำบัด</h1>
                        <div class="flex justify-center items-center">
                            <div class="flex justify-center items-center bg-white w-[500px] mt-12 p-8 space-x-[180px] rounded-3xl drop-shadow-2xl">
                            <div class="flex-none">
                                <h1 class="text-2xl">Date</h1>
                                <h1 class="text-xl">25/11/2565</h1>
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
import scoreCard from '../components/dataScore.vue'
export default {
    data() {
        return {
            name: "",
            age: 0,
            email: "",
            therapies:[]
        }
    },
    components: {
        scoreCard,
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    async mounted() {
        await useUserStore().fetchData();
        this.name = useUserStore().getName
        this.age = useUserStore().getAge
        this.email = useUserStore().getEmail
        this.therapies = useUserStore().getTherapies
        
    },



}
</script>
<style lang="">
    
</style>