<template>
    <main>
        <div class="flex justify-center" style="font-family: 'Roboto Condensed', sans-serif;">
            <div class="text-center text-xl">
                <div class="pt-10">
                    <p class="text-6xl pb-5">MY MEDIA</p>
                    <div class="bg-slate-200 p-10 rounded-lg">
<<<<<<< HEAD
                        <form @submit.prevent="signup" >
                            <input v-model="name" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="text" name="name"
                                id="signup-name" placeholder="name"><br>
                            <input v-model="age" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="text" name="age"
                                id="signup-age" placeholder="age"><br>
=======
                        <form @submit.prevent="signup">
                            <input v-model="name" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="text"
                                name="name" id="signup-name" placeholder="name"><br>
                            <input v-model="age" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="text"
                                name="age" id="signup-age" placeholder="age"><br>
>>>>>>> a765e65baac65f720ed9a27f1fae2ed585a2ce8f
                            <input v-model="email" class="border-2 mb-2 w-[300px] h-[45px] p-2" type="email"
                                name="email" id="signup-email" placeholder="email"><br>
                            <input v-model="password" class="border-2 mb-5 w-[300px] h-[45px] p-2" type="password"
                                name="password" id="signup-password" placeholder="password"><br>
<<<<<<< HEAD
                                <button class="bg-sky-500 w-[300px] h-[45px] rounded-lg mb-3">Sign Up</button>
=======
                            <button class="bg-sky-500 w-[300px] h-[45px] rounded-lg mb-3">Sign Up</button>
>>>>>>> a765e65baac65f720ed9a27f1fae2ed585a2ce8f
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
            name: "",
            age: ""
        }
    },
    async mounted() {
    
    },
    methods: {
        async signup() {
            await useUserStore().signUp(this.email, this.password);
            await useUserStore().addData(this.name, this.age);
            console.log(useUserStore().getUser.uid);
            this.$router.push({ name: 'form' });
        }
    },
}
</script>