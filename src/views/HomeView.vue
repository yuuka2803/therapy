<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div  class="flex bg-slate-200 h-[100px] ">
            <div class="flex-none w-1/2">
                <img src="https://i.postimg.cc/90P1DKCM/logo-stroke.png" width="125" class="m-2">
            </div>
            <div class="flex-none w-1/2 text-xl">
                <div class="flex items-stretch justify-end">
                    <router-link to="/form">
                        <div class="flex-none text-blue-800 font-semibold w-[150px] h-[100px] flex justify-center items-center">
                            <buttom class="">แบบประเมิน</buttom>
                        </div>
                    </router-link>
                    <div class="flex-none text-blue-800 font-semibold w-[150px] h-[100px] flex justify-center items-center ">
                        <buttom>บันทึกข้อมูล</buttom>
                    </div>
                    <router-link to="/signin">
                        <div class="flex-none mr-5 w-[150px] h-[100px] flex justify-center items-center ">
                            <buttom class="p-1 w-[105px] text-center border-2 border-black rounded-full">LOG IN</buttom>
                        </div>
                    </router-link>              
                </div>
            </div>
        </div>
        <div class="text-center pt-10">
            <h1 class="text-5xl">โปรแกรมกายภาพบำบัด</h1>
            <h3 class="text-3xl pt-5">สำหรับผู้ป่วยที่มีภาวะกล้ามเนื้ออ่อนแรงจากโรคหลอดเลือดสมอง</h3>
        </div>
        <div class="container mx-auto">
            <div>
            <p>โปรแกรมการทำกายภาพบำบัดนี้เราออกแบบมาเพื่อให้ผู้ป่วยสามารถทำกายภาพบำบัดด้วยท่าทางที่ถูกต้องเหมาะสม
                 เป็นการเพิ่มความเชื่อมั่นในการดูแลตนเอง อีกทั้้งยังลดภาระให้กับผู้ดูแล และเก็บสถิติข้อมูลเพื่อประเมินผลสุขภาพ</p>
        </div>
        <div class="text-xl">
            <h4>โรคหลอดเลือดสมองตีบเกิดจากลิ่มเลือดอุดตันที่หลอดเลือดสมอง ซึ่งมีสาเหตุมาจากการสะสมของไขมันในหลอดเลือด ทำให้หลอดเลือดตีบแคบ มีประสิทธิภาพในการลำเลียงเลือดน้อยลง</h4>
            <h5>สัญญาณเตือนการมีภาวะโรคหลอดเลือดสมองตีบ</h5>
            <p>F [face] หน้าเบี้ยวมุมปากตก</p>
            <p>A [arm] แขนหรือขาอ่อนแรงเริ่มยกแขนขาไม่ขึ้น</p>
            <p>S [speech] พูดลำบาก พูดไม่ชัด มึนงงสับสน และมีปัญหาในการพูด</p>
            <p>T [time] ต้องรีบไปโรงพยาบาลทันทีภายใน 4 ชั่วโมงหรือโทรสายด่วน 1669</p>
            <p>อ้างอิงจากกรมควบคุมโรค</p>
        </div>
        </div>
        
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap');
</style>