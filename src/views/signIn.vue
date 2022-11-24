<template lang="">
    <div class="flex justify-center" style="font-family: 'Roboto Condensed', sans-serif;">
        <div class="text-center text-xl">
            <div class="pt-10">
                <p class="text-6xl pb-5">MY MEDIA</p>
                <div class="bg-slate-200 p-10 rounded-lg">
                    <form @submit.prevent="signin ">
                        <input v-model="email" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="email" name="email" id="login-email" placeholder="Email"><br>
                        <input v-model="password" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="password" name="password" id="login-password" placeholder="Password"><br>
                        <button class="bg-sky-500 w-[300px] h-[45px] rounded-lg mb-3">Sign in</button>
                    </form>
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
            email: "",
            password: "",
            name: "",
            age: 0,
        }
    },

    methods: {
        async signin() {
            await useUserStore().signIn(this.email, this.password)
            console.log(useUserStore().getUser.uid)
            this.$router.push({ name: 'homeuser' })
        },
    }
}
</script>
<style lang="">
    
</style>