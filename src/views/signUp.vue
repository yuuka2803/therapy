
<template>
    <main>
        <div class="flex justify-center" style="font-family: 'Roboto Condensed', sans-serif;">
            <div class="text-center text-xl">
                <div class="pt-10">
                    <p class="text-6xl pb-5">MY MEDIA</p>
                    <div class="bg-slate-200 p-10 rounded-lg">
                        <form @submit.prevent="signup">
                            <input v-model="email" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="email"
                                name="email" id="signup-email" placeholder="Email"><br>
                            <input v-model="password" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="password"
                                name="password" id="signup-password" placeholder="Password"><br>
                            <button class="bg-sky-500 w-[300px] h-[45px] rounded-lg mb-3">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');
</style>

<script>
import { useUserStore } from '../stores/user'
export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async signup() {
            await useUserStore().signUp(this.email, this.password)
        }
    }

}


</script>