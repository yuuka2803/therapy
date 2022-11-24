<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;" class="animate-fade">
        <div class="flex">
            <div class="flex-none w-1/2 flex justify-center">
                <div>
                    <p class="text-3xl text-center pb-10 mt-16">เริ่มทำกายภาพบำบัด</p>
                    <div class="">
                        <iframe src="http://127.0.0.1:5500/pose1.html" frameborder="0" width="400" height="480" allow="camera"></iframe>
                    </div>
                    <div class="flex justify-center">
                        <router-link to="/extwo">
                            <font-awesome-icon icon="fa-solid fa-circle-arrow-right" class="text-5xl drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="flex-none w-1/2 flex items-center justify-center">
                <div class="items-center">
                    <p class="text-3xl text-center pb-5 mt-16">ท่าที่ 1</p>
                    <div class="flex items-center justify-center"><img class="justify-self-center" src="https://i.postimg.cc/vH5fffwh/elbow.png" width="450px"></div>
                    <p class="text-2xl pt-10">1. ประสานมือโดยใช้มือด้านมีแรงจับมือด้านที่อ่อนแรงไว้</p>
                    <p class="text-2xl pt-5">2. งอข้อศอกด้านที่อ่อนแรงให้ชิดหัวไหล</p>
                    <p class="text-2xl pt-5">3. แล้วเหยียดให้สุดแขน</p>
                </div>
            </div>
        </div>
        <div class="flex justify-end mr-20 mt-4">
            <router-link to="/home">
                <button class="p-2 w-[180px] text-center text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl text-white drop-shadow-xl"  style="background-color:#709892">ออกจากหน้านี้</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        useUserStore().fetchCurrentUser()
    },

}
</script>
<style lang="">
    
</style>