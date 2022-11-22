<template lang="">
<body>
    <div class="wrapper">
        <section class="s-wrapper flex-class">
            <div class="content flex-class">
                <div class="container flex-class">
                    <p class="name">MY MEDIA</p>
                    <form @submit.prevent="login ">
                        <input v-model="email" type="email" name="email" id="login-email"><br>
                        <input v-model="password" type="password" name="password" id="login-password" required>
                        <button type="submit">Log In</button>
                    </form>
                   
                    <p class="divier flex-class"><spam></spam> OR <spam></spam></p>
                    <div class="fb flex-class">
                        <!-- <img src="..." alt="facebook icon"> -->
                        <div class="fb-p">Log in with Facebook</div>
                    </div>
                    <div class="forget-password">Forgot Password?</div>
                </div>
            </div>

        </section>
    </div>
    
</body>
</template>
<script>
import {useUserStore } from '../stores/user'
export default {
    data() {
        return {
            email:"",
            password:"",
        }
    },
    methods: {
        async login() {
            await useUserStore().signIn(this.email, this.password)
            console.log(useUserStore().getUser)
        },
        
    }

}
</script>
<style lang="">
    
</style>