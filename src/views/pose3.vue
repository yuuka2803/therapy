<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;" >
        <div class="flex">
            <div class="flex-none w-1/2 flex justify-center">
                <div>
                    <p class="text-3xl text-center pb-10 mt-16">เริ่มทำกายภาพบำบัด</p>
                    <div class="">
                        <iframe src="http://127.0.0.1:5501/pose3.html" frameborder="0" width="400" height="480" allow="camera"></iframe>
                    </div>
                    <div class="flex justify-center">
                        <div class="flex-none pt-12">
                            <router-link to="/pose4">
                                <font-awesome-icon icon="fa-solid fa-circle-arrow-right" class="text-5xl drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"/>
                            </router-link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="flex-none w-1/2 flex items-center justify-center">
                <div class="items-center">
                    <p class="text-3xl text-center pb-5 mt-16">ท่าที่ 3</p>
                    <div class="flex items-center justify-center"><img class="justify-self-center" src="https://i.postimg.cc/zXWKKMR4/shoulder.png" width="550px"></div>
                    <p class="text-2xl pt-10">1. ให้แขนด้านอ่อนแรงวางอยู่บนกองอยู่บนผ้าหรือกองหนังสือโต๊ะ</p>
                    <p class="text-2xl pt-5">2. ใช้มือด้านมีแรงจับมือด้านอ่อนแรงแล้วยกขึ้น</p>
                    <p class="text-2xl pt-5">3. จากนั้นยกลง</p>
                    <p class="text-2xl pt-5">( ทำจนครบ 5 ครั้ง )</p>
                </div>
            </div>
        </div>
        <div class="flex justify-end mr-20 mt-4">
            <router-link to="/">
                <button class="p-2 w-[180px] text-center text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl drop-shadow-xl text-white" style="background-color:#709892">ออกจากหน้านี้</button>
            </router-link>
        </div>
    </div>
</template>
<script>

</script>
<style lang="">
    
</style>