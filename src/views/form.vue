<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">
        <div  class="flex bg-slate-200 h-[100px] ">
            <div class="flex-none w-1/2">
                <router-link to="/">
                    <img src="https://i.postimg.cc/SNcM8YC8/logo-depositphotos-bgremover-1.png" width="170" class="m-3">
                </router-link>
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
        <div class="text-center">
            <h1 class="text-3xl pt-10 text-blue-800">แบบประเมินกิจวัตรประจำวัน Barthel ADL Index</h1>
            <p class="text-xl pt-5"> แบบประเมินดัชนี Barthel ADL Index เป็นแบบประเมินความสามารถในการทำกิจวัตรประจำวันของผู้สูงอายุ</p>
            <p class="text-xl pt-2"> ซึ่งเป็นชุดข้อคำถามเกี่ยวกับความสามารถในการช่วยเหลือตนเองในการปฏิบัติกิจวัตรประจำวัน</p>
        </div>
        <div class="flex justify-center text-xl">
            <div class="w-3/5 bg-amber-100 p-16 drop-shadow-xl mt-5">
                <div>
                    <p class="mb-4">1. การรับประทานอาหาร</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="one" id="canteat" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canteat" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="one" id="helpeat" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpeat" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">มีคนช่วยบางส่วน เช่น เตรียมให้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="one" id="caneat" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="caneat" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ทำเองได้</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">2. การขึ้นลงจากเตียง</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="two" id="cantbed" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantbed" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ลุกจากเตียงไม่ได้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="two" id="helpbed" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpbed" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ลุกนั่งได้แต่ต้องมีคนช่วยพยุง 1-2 คน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="two" id="canbedlt" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canbedlt" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ลุกนั่งได้ต้องการคนช่วยเหลือน้อย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="two" id="canbed" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canbed" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ลุกนั่งได้เอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">3. ล้างหน้า แปรงฟัน หวีผม</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="three" id="helpdo" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpdo" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="three" id="cando" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cando" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ทำได้เอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">4. การเข้าห้องน้ำ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="four" id="canttl" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canttl" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="four" id="helptl" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helptl" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">มีคนช่วยบางส่วน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="four" id="cantl" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantl" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ทำเองได้</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">5. การอาบน้ำ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="five" id="helpbath" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpbath" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="five" id="canbath" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canbath" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ทำได้เอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">6. การเคลื่อนไหว นั่ง ยืน เดิน</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="six" id="cantmove" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantmove" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">นั่งบนรถเข็น แต่ไปไหนเองไม่ได้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="six" id="helpmove" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpmove" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">นั่งบนรถเข็นและไปไกลได้ 5 เมตร</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="six" id="canmovelt" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canmovelt" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">เดินไปไกล 5 เมตร มีคนช่วย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="six" id="canmove" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canmove" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">เดินได้เอง ใช้ไม้เท้า</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">7. การขึ้นบรรได</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="seven" id="cantup" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantup" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ขึ้นบันไดเองไม่ได้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="seven" id="helpup" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpup" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ขึ้นบันไดเองได้ต้องมีคนช่วยเล็กน้อย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="seven" id="canup" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canup" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ขึ้นบันไดเองได้ต้องเกาะราวช่วย</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">8. การแต่งตัว</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="eight" id="cantdress" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantdress" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="eight" id="helpdress" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpdress" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">มีคนช่วยบางส่วน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="eight" id="candress" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="candress" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ทำได้เอง ใส่กระดุม รูดซิบ</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">9. การถ่ายอุจจาระ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="nine" id="cantpoo" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantpoo" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ถ่ายอุจจาระเองไม่ได้ต้องมีคนช่วย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="nine" id="helppoo" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helppoo" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ถ่ายอุจจาระเองได้ ช่วยสวนน้อยกว่า 1 ครั้ง/สัปดาห์</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="nine" id="canpoo" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canpoo" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ถ่ายอุจจาระเองได้ สวน เหน็บยาเอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">10. การปัสสาวะ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="ten" id="cantpee" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantpee" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">คาสายสวนปัสสาวะ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="ten" id="helppee" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helppee" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">สวนน้อยกว่า 1 ครั้ง/วัน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input name="ten" id="canpee" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canpee" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ปัสสาวะเองได้</label>
                    </div>
                </div>
                <div class="pt-8 flex justify-center">
                    <buttom class="flex justify-center p-3 w-[105px] text-center bg-blue-400 rounded-full">SUBMIT</buttom>
                </div>
            </div>

        </div>
    </div>   
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>