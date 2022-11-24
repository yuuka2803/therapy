<template lang="">
<div style="font-family: 'Noto Sans Thai', sans-serif;" class="animate-fade">
        <div class="flex justify-center h-[325px] m-28 ">
            <div class="flex-none flex items-center mt-16">
                <div class="flex-none justify-between">
                    <h1 class="text-5xl" style="color:#709892">ออกแบบโปรแกรมการทำกายภาพบำบัด</h1>
                    <h3 class="text-3xl pt-5">สำหรับผู้ป่วยที่มีภาวะกล้ามเนื้ออ่อนแรงจากโรคหลอดเลือดสมอง</h3>
                    <div class="text-xl pt-6">
                        <p class="p-1">โปรแกรมการทำกายภาพบำบัดนี้ออกแบบมาเพื่อให้ผู้ป่วยสามารถทำกายภาพบำบัดด้วยท่าทางที่ถูกต้องเหมาะสม</p>
                        <p class="p-1">เป็นการเพิ่มความเชื่อมั่นในการดูแลตนเอง อีกทั้้งยังลดภาระให้กับผู้ดูแล และเก็บสถิติข้อมูลเพื่อประเมินผลสุขภาพ</p>
                        <p class="p-1">ท่านสามารถทดสอบแบบประเมินเพื่อวัดความสามารถในการทำกิจวัตรประจำวัน</p>
                        <div class=" flex items-center pt-10">
                            <router-link to="/form">
                                <button class="p-3 w-[220px] drop-shadow-xl text-center text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl" style="background-color:#709892">ทำแบบประเมิน</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-none flex justify-start">
                <img src="https://i.postimg.cc/GpjHMD3s/undraw-pilates-gpdb-1.png" width="500" class="">
            </div>
        </div>
        <div class="flex justify-center">
            <div class="mt-10 p-5 w-[900px] text-center rounded-3xl" style="background:#F0F3F5">
            <h1 class="text-3xl p-1 font-medium" style="color:#709892">โรคหลอดเลือดสมอง (STROKE)</h1>
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
                    <div class="p-4 rounded-3xl" style="background:#EFEBEB">
                        <img src="https://i.postimg.cc/9MFJ2PyN/migraine.png" width="170">
                    </div>
                    <p class="text-xl pt-10">ชาหรืออ่อนแรงที่ใบหน้า</p>
                </div>
                <div class="text-center">
                    <div class="p-4 rounded-3xl" style="background:#EFEBEB">
                        <img src="https://i.postimg.cc/NfMFXKxq/bad-review.png" width="170">
                    </div>
                    <p class="text-xl pt-10">พูดไม่ชัด ปากเบี้ยว</p>
                </div>
                <div class="text-center">
                    <div class="p-4 rounded-3xl" style="background:#EFEBEB">
                        <img src="https://i.postimg.cc/SQZNmybZ/dizziness.png" width="170">
                    </div>
                    <p class="text-xl pt-10">ปวดศีรษะ ตาพร่า</p>
                </div>
                <div class="text-center">
                    <div class="p-4 rounded-3xl" style="background:#EFEBEB">
                        <img src="https://i.postimg.cc/vmLbkyvt/fainting.png" width="170">
                    </div>
                    <p class="text-xl pt-10">เดินเซ ทรงตัวลำบาก</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center space-x-[150px] items-center mt-32">
            <div class="flex-none">
                <div class=" space-y-4 text-xl ">
                    <div class="flex space-x-1">
                        <p class="">จากผลสำรวจ ปี</p>
                        <p class="">2562</p>
                    </div>
                    <div class="flex space-x-1">
                        <p class="">พบว่าในประเทศไทยมีผู้ป่วยจาก </p>
                        <p class="">STROKE</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="">จำนวน </p>
                        <p class=" text-red-500">355,671 </p>
                        <p class="">ราย</p>
                    </div>
                    <div class="pt-8">
                        <p class="">กรมควบคุมโรคประมาณความเสี่ยงของการเกิด stroke</p>
                        <div class="flex space-x-1 pt-4">
                            <p class="">พบว่าทุก</p>
                            <p class="">4 </p>
                            <p class="">คนจะป่วยด้วยโรคหลอดเลือดสมอง</p>
                            <p class=" ">1 </p>
                            <p class="">คน</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-none">
                <div class="flex text-[200px]">
                    <div style="color:#C0D5E6"><font-awesome-icon icon="fa-solid fa-person" /></div>
                    <div style="color:#C0D5E6"><font-awesome-icon icon="fa-solid fa-person" /></div>
                    <div style="color:#6E9199"><font-awesome-icon icon="fa-solid fa-person" /></div>
                    <div style="color:#C0D5E6"><font-awesome-icon icon="fa-solid fa-person" /></div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <div class="mt-32 flex justify-center items-center p-16 h-[400px] w-[1000px] rounded-3xl" style="background:#EFEBEB">
                <div class="flex justify-center items-center space-x-20">
                    <div class="flex-none space-y-5">
                        <p class="text-2xl">มาร่วมทำกายภาพบำบัดกับเรา</p>
                        <p class="text-2xl">เพื่อรักษาภาวะกล้ามเนื้ออ่อนแรง</p>
                        <p class="text-2xl">ของคุณให้ดียิ่งขึ้น</p>
                    </div>
                    <div class="flex-none">
                        <img src="https://i.postimg.cc/jdtCfzGN/undraw-medicine-b-1-ol-1.png" width="500">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex h-[150px] mt-32 justify-between" style="background-color: #709892">
            <div class="flex-none w-1/2 flex items-center justify-start pl-6">
                <router-link to="/home">
                    <div class="flex space-x-3">
                        <img src="https://i.postimg.cc/8P8mg680/logo.png" width="60" class="flex items-center">
                        <p class="text-3xl text-white flex items-center font-semibold pt-1">THERAPY FOR STROKE</p>
                    </div>
                </router-link>
            </div>
            <div class="flex-none flex items-center pr-32">
                <div class="text-white space-y-2">
                    <p class="text-2xl">ข้อมูลอ้างอิง</p>
                    <p class="text-xl">โรงพยาบาลตำรวจ</p>
                    <p class="text-xl">เวชบันทึกศิริราช</p>
                </div>
            </div>
        </div>
        
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
