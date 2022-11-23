<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div  class="flex h-[100px] drop-shadow-xl" style="background-color: #d7dbdd">
            <div class="flex-none w-1/2">
                <router-link to="/home">
                    <img src="https://i.postimg.cc/SNcM8YC8/logo-depositphotos-bgremover-1.png" width="170" class="m-3">
                </router-link>
            </div>
            <div class="flex-none w-1/2 text-xl">
                <div class="flex items-stretch justify-end space-x-2">
                    <router-link to="/form">
                        <div class="flex-none text-blue-800 font-semibold w-[130px] h-[100px] flex justify-center items-center">
                            <buttom class="">แบบประเมิน</buttom>
                        </div>
                    </router-link>
                    <router-link to="/home">
                        <div class="flex-none text-blue-800 font-semibold w-[170px] h-[100px] flex justify-center items-center">
                            <buttom class="">เริ่มกายภาพบำบัด</buttom>
                        </div>
                    </router-link>
                    <router-link to="/history">
                        <div class="flex-none text-blue-800 font-semibold w-[150px] h-[100px] flex justify-center items-center ">
                            <buttom>ประวัติการใช้งาน</buttom>
                        </div>
                    </router-link>
                    <router-link to="/home">
                        <div class="flex-none text-blue-800 font-semibold w-[190px] h-[100px] flex justify-center items-center space-x-2">
                            <font-awesome-icon icon="fa-solid fa-user" class="text-4xl"/>
                            <buttom>{{name}}</buttom>
                        </div>
                    </router-link>
                    <router-link to="/home">
                        <div class="flex-none font-semibold w-[50px] h-[100px] flex justify-center items-center mr-6">
                            <buttom><font-awesome-icon icon="fa-solid fa-house-chimney" class="text-4xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl"/></buttom>
                        </div>
                    </router-link>           
                </div>
            </div>
        </div>
    </div>
    <div><slot></slot></div>
</template>
<script>
import { useUserStore } from '../stores/user';
export default {
    data() {
        return {
            name: "",
        }
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    async mounted() {
        await useUserStore().fetchName();
        this.name = useUserStore().getName
    }
}
</script>
<style lang="">
    
</style>