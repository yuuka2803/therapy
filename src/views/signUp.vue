<template>
        <div class="flex-coll mt-[80px]" style="font-family: 'Noto Sans Thai', sans-serif;">
            <div class="flex justify-center items-center" style="font-family: 'Noto Sans Thai', sans-serif;">
                <div class="flex-none flex justify-center items-center mr-10">
                    <img src="https://i.postimg.cc/63RVWXRN/undraw-Mindfulness-re-gth4.png" width="400">
                </div>
                <div class="flex-none text-center text-xl">
                    <div class="">
                        <p class="text-5xl pb-10">ลงทะเบียนเข้าสู่ระบบ</p>
                        <div class="bg-slate-200 p-10 rounded-lg text-lg">
                            <form @submit.prevent="signup">
                                <p class="text-left mb-1">Name</p>
                                <input v-model="name" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="text" name="name"
                                    id="signup-name" placeholder="Name" required /><br>
                                <p class="text-left mb-1">Age</p>
                                <input v-model="age" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="text" name="age"
                                    id="signup-age" placeholder="Age" required><br>
                                <p class="text-left mb-1">Email</p>
                                <input v-model="email" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="email"
                                    name="email" id="signup-email" placeholder="Email" required><br>
                                <p class="text-left mb-1">Password</p>
                                <input v-model="password" class="border-2 mb-10 w-[300px] h-[45px] p-2" type="password"
                                    name="password" id="signup-password" placeholder="Password" required><br>
                                <button type="submit"
                                    class="w-[300px] h-[45px] rounded-lg mb-3 text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
                                    style="background-color:#6E9199">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="flex-none justify-center">
                    <img src="https://i.postimg.cc/fRp0JPMW/undraw-Appreciation-re-q28r.png" width="500">
                </div>
            </div>
        </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');
</style>

<script>
import { useUserStore } from '../stores/user'
import form from './form.vue'
export default {
  components: { form },
    data() {
        return {
            email: "",
            password: "",
            name: "",
            age: ""
        }
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    mounted() {
        console.log(useUserStore().getUser)
    },
    methods: {
        async signup() {
            await useUserStore().signUp(this.email, this.password);
            await useUserStore().addData(this.name, this.age, this.email);
            console.log(useUserStore().getUser.uid);
            this.$router.push({ name: 'homeuser' });
        }
    },
}
</script>