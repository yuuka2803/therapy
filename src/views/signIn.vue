<template lang="">
 <div class="flex-coll" style="font-family: 'Noto Sans Thai', sans-serif;">
        <div class="flex justify-end">
            <router-link to="/">
                <div class="w-[50px] h-[100px] m-10">
                    <buttom><font-awesome-icon icon="fa-solid fa-house-chimney" class="text-4xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"/></buttom>
                </div>
            </router-link>
        </div>
        <div class="flex justify-center items-center" style="font-family: 'Noto Sans Thai', sans-serif;">
            <div class="flex-none flex justify-center items-center mr-10">
                <img src="https://i.postimg.cc/63RVWXRN/undraw-Mindfulness-re-gth4.png" width="400">
            </div>
            <div class="flex-none text-center text-xl">
                <div class="">
                    <p class="text-5xl pb-10">เข้าสู่ระบบ</p>
                    <div class="bg-slate-200 p-10 rounded-lg">
                        <form @submit.prevent="signin ">
                        <p class="text-left mb-1">Email</p>
                        <input v-model="email" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="email" name="email" id="login-email" placeholder="Email"><br>
                        <p class="text-left mb-1">Password</p>
                        <input v-model="password" class="border-2 mb-10 w-[300px] h-[45px] p-2" type="password" name="password" id="login-password" placeholder="Password"><br>
                        <button class="w-[300px] h-[45px] rounded-lg mb-3 text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" style="background-color:#6E9199">Sign in</button>
                        </form>
                    </div>  
                </div>
            </div>
            <div class="flex-none justify-center">
                <img src="https://i.postimg.cc/fRp0JPMW/undraw-Appreciation-re-q28r.png" width="500">
            </div>
        </div>
        <div class="text-center mt-10 mr-12">
            <p>หากคุณยังไม่ได้สมัครเข้าสู่ระบบกรุณาลงทะเบียนเพื่อเข้าสู่ระบบ
                <router-link to="/signup">
                    <buttom class="text-blue-400"> Sign Up</buttom>
                 </router-link>
            </p>
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