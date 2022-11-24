<template lang="">
<!-- <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div  class="flex h-[100px] drop-shadow-xl" style="background-color: #709892">
            <div class="flex-none w-1/2 flex items-center justify-start pl-6 text-white">
                <router-link to="/home">
                    <div class="flex space-x-3">
                        <img src="https://i.postimg.cc/8P8mg680/logo.png" width="60" class="flex items-center">
                        <p class="text-3xl flex items-center font-semibold pt-1">THERAPY FOR STROKE</p>
                    </div>
                </router-link>
            </div>
            <div class="flex-none w-1/2 text-xl text-white">
                <div class="flex items-stretch justify-end space-x-6">
                    <router-link to="/signin">
                        <div class="flex-none hover:bg-blue-300/50 font-medium w-[130px] h-[100px] flex justify-center items-center">
                            <button class="text-2xl">แบบประเมิน</button>
                        </div>
                    </router-link>
                    <router-link to="/signin">
                        <div class="flex-none hover:bg-blue-300/50 font-medium w-[170px] h-[100px] flex justify-center items-center">
                            <button class="text-2xl">เริ่มกายภาพบำบัด</button>
                        </div>
                    </router-link>
                    <router-link to="/signin">
                        <div class="flex-none mr-5 w-[120px] h-[100px] flex justify-center items-center ">
                            <button class="p-1 w-[105px] text-center text-white border-2 border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl">LOG IN</button>
                        </div>
                    </router-link> 
                    <router-link to="/">
                        <div class="flex-none font-semibold w-[50px] h-[100px] flex justify-center items-center mr-6">
                            <button><font-awesome-icon icon="fa-solid fa-house-chimney" class="text-4xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl"/></button>
                        </div>
                    </router-link>           
                </div>
            </div>
        </div>
        </div> -->
        
        <div class="flex justify-center h-[325px] m-28 ">
            <div class="flex-none flex items-center mt-16">
                <div class="flex-none justify-start">
                    <h1 class="text-5xl">ออกแบบโปรแกรมการทำกายภาพบำบัด</h1>
                    <h3 class="text-3xl pt-5">สำหรับผู้ป่วยที่มีภาวะกล้ามเนื้ออ่อนแรงจากโรคหลอดเลือดสมอง</h3>
                    <div class="text-xl pt-6">
                        <p class="p-1">โปรแกรมการทำกายภาพบำบัดนี้ออกแบบมาเพื่อให้ผู้ป่วยสามารถทำกายภาพบำบัดด้วยท่าทางที่ถูกต้องเหมาะสม</p>
                        <p class="p-1">เป็นการเพิ่มความเชื่อมั่นในการดูแลตนเอง อีกทั้้งยังลดภาระให้กับผู้ดูแล และเก็บสถิติข้อมูลเพื่อประเมินผลสุขภาพ</p>
                        <p class="p-1">ท่านสามารถทดสอบแบบประเมินเพื่อวัดความสามารถในการทำกิจวัตรประจำวัน</p>
                        <div class=" flex items-center pt-10">
                            <router-link to="/signin">
                                <button class="p-3 w-[220px] text-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl" style="background-color: #EFE4C6">ทำแบบประเมิน</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-none flex items-start">
                <img src="https://i.postimg.cc/GpjHMD3s/undraw-pilates-gpdb-1.png" width="500" class="">
            </div>
        </div>
        <div class="flex justify-center">
            <div class="mt-10 p-5 w-[900px] text-center bg-gray-100 rounded-3xl">
            <h1 class="text-3xl text-red-600 p-1">โรคหลอดเลือดสมอง (STROKE)</h1>
            <div class="text-xl text-center">
                <p class="p-1">โรคหลอดเลือดสมองเกิดจากการสะสมของไขมันอุดตันในเส้นเลือดซึ่งเป็นสาเหตุให้เกิดการเสียชีวิต</p>
                <p>และพิการร้อยละ 60% ทำให้มีอาการอ่อนแรงครึ่งซีกและมีความสามารถในการทำกิจวัตรประจำวันลดลง</p>
            </div>
        </div>
        </div>
        <div class="mt-32">
            <h1 class="ml-20 text-2xl font-semibold">สัญญาณเตือนโรคหลอดเลือดสมอง</h1>
            <div class="flex justify-center mt-20 space-x-[100px]">
                <div class="text-center">
                    <div class="bg-gray-200 p-4 rounded-3xl">
                        <img src="https://i.postimg.cc/9MFJ2PyN/migraine.png" width="170">
                    </div>
                    <p class="text-xl pt-10">ชาหรืออ่อนแรงที่ใบหน้า</p>
                </div>
                <div class="text-center">
                    <div class="bg-gray-200 p-4 rounded-3xl">
                        <img src="https://i.postimg.cc/NfMFXKxq/bad-review.png" width="170">
                    </div>
                    <p class="text-xl pt-10">พูดไม่ชัด ปากเบี้ยว</p>
                </div>
                <div class="text-center">
                    <div class="bg-gray-200 p-4 rounded-3xl">
                        <img src="https://i.postimg.cc/SQZNmybZ/dizziness.png" width="170">
                    </div>
                    <p class="text-xl pt-10">ปวดศีรษะ ตาพร่า</p>
                </div>
                <div class="text-center">
                    <div class="bg-gray-200 p-4 rounded-3xl">
                        <img src="https://i.postimg.cc/vmLbkyvt/fainting.png" width="170">
                    </div>
                    <p class="text-xl pt-10">เดินเซ ทรงตัวลำบาก</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center space-x-[250px] items-center mt-32">
            <div class="flex-none">
                <div class=" space-y-2">
                    <div class="flex space-x-1">
                        <p class="text-xl">จากผลสำรวจ ปี</p>
                        <p class="text-xl font-semibold">2562</p>
                    </div>
                    <div class="flex space-x-1">
                        <p class="text-xl">พบว่าในประเทศไทยมีผู้ป่วยจาก </p>
                        <p class="text-xl font-semibold">STROKE</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-xl">จำนวน </p>
                        <p class="text-2xl text-red-500">355,671 </p>
                        <p class="text-xl">ราย</p>
                    </div>
                    <p class="text-xl ">กรมควบคุมโรคประมาณความเสี่ยงของการเกิด stroke</p>
                    <div class="flex space-x-1">
                        <p class="text-xl">พบว่าทุก</p>
                        <p class="text-2xl">4 </p>
                        <p class="text-xl">คนจะป่วยด้วยโรคหลอดเลือดสมอง</p>
                        <p class="text-2xl ">1 </p>
                        <p class="text-xl">คน</p>
                    </div>
                </div>
            </div>
            <div class="flex-none">
                <font-awesome-icon icon="fa-solid fa-people-group" class="text-[250px] "/>
            </div>
        </div>
        <div class="h-[50px] mt-16" style="background-color: #d7dbdd">
        
        
    </div>
    
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap');
</style>
<script>
import { useUserStore } from '../stores/user'
export default {
    setup() {
        useUserStore().fetchCurrentUser()
    },
}
</script>
