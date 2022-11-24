<template lang="">
    <div style="font-family: 'Noto Sans Thai', sans-serif;">

        <div class="text-center">
            <h1 class="text-3xl pt-10">แบบประเมินกิจวัตรประจำวัน Barthel ADL Index</h1>
            <p class="text-xl pt-5"> แบบประเมินดัชนี Barthel ADL Index เป็นแบบประเมินความสามารถในการทำกิจวัตรประจำวันของผู้สูงอายุ</p>
            <p class="text-xl pt-2"> ซึ่งเป็นชุดข้อคำถามเกี่ยวกับความสามารถในการช่วยเหลือตนเองในการปฏิบัติกิจวัตรประจำวัน</p>
        </div>
        <div class="flex justify-center text-xl">
            <div class="w-3/5 bg-amber-100 p-16 drop-shadow-xl mt-5">
                <form @submit.prevent="updatadata">
                <div>
                    <p class="mb-4">1. การรับประทานอาหาร</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Eat" name="one" id="canteat" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canteat" class="ml-2 text-lg font-medium">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Eat" name="one" id="helpeat" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpeat" class="ml-2 text-lg font-medium">มีคนช่วยบางส่วน เช่น เตรียมให้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Eat" name="one" id="caneat" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="caneat" class="ml-2 text-lg font-medium">ทำเองได้</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">2. การขึ้นลงจากเตียง</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Bed" name="two" id="cantbed" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantbed" class="ml-2 text-lg font-medium">ลุกจากเตียงไม่ได้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Bed" name="two" id="helpbed" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpbed" class="ml-2 text-lg font-medium">ลุกนั่งได้แต่ต้องมีคนช่วยพยุง 1-2 คน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Bed" name="two" id="canbedlt" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canbedlt" class="ml-2 text-lg font-medium">ลุกนั่งได้ต้องการคนช่วยเหลือน้อย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Bed" name="two" id="canbed" type="radio" value=15 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canbed" class="ml-2 text-lg font-medium">ลุกนั่งได้เอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">3. ล้างหน้า แปรงฟัน หวีผม</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Do" name="three" id="helpdo" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpdo" class="ml-2 text-lg font-medium">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Do" name="three" id="cando" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cando" class="ml-2 text-lg font-medium">ทำได้เอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">4. การเข้าห้องน้ำ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Toilet" name="four" id="canttl" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canttl" class="ml-2 text-lg font-medium">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Toilet" name="four" id="helptl" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helptl" class="ml-2 text-lg font-medium">มีคนช่วยบางส่วน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Toilet" name="four" id="cantl" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantl" class="ml-2 text-lg font-medium">ทำเองได้</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">5. การอาบน้ำ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Bath" name="five" id="helpbath" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpbath" class="ml-2 text-lg font-medium">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Bath" name="five" id="canbath" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canbath" class="ml-2 text-lg font-medium">ทำได้เอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">6. การเคลื่อนไหว นั่ง ยืน เดิน</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Move" name="six" id="cantmove" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantmove" class="ml-2 text-lg font-medium">นั่งบนรถเข็น แต่ไปไหนเองไม่ได้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Move" name="six" id="helpmove" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpmove" class="ml-2 text-lg font-medium">นั่งบนรถเข็นและไปไกลได้ 5 เมตร</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Move" name="six" id="canmovelt" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canmovelt" class="ml-2 text-lg font-medium">เดินไปไกล 5 เมตร มีคนช่วย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Move" name="six" id="canmove" type="radio" value=15 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canmove" class="ml-2 text-lg font-medium">เดินได้เอง ใช้ไม้เท้า</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">7. การขึ้นบรรได</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model=Up name="seven" id="cantup" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantup" class="ml-2 text-lg font-medium">ขึ้นบันไดเองไม่ได้</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model=Up  name="seven" id="helpup" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpup" class="ml-2 text-lg font-medium">ขึ้นบันไดเองได้ต้องมีคนช่วยเล็กน้อย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Up"  name="seven" id="canup" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canup" class="ml-2 text-lg font-medium">ขึ้นบันไดเองได้ต้องเกาะราวช่วย</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">8. การแต่งตัว</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Dress" name="eight" id="cantdress" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantdress" class="ml-2 text-lg font-medium">ต้องมีคนช่วยเหลือ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Dress" name="eight" id="helpdress" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helpdress" class="ml-2 text-lg font-medium">มีคนช่วยบางส่วน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Dress" name="eight" id="candress" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="candress" class="ml-2 text-lg font-medium">ทำได้เอง ใส่กระดุม รูดซิบ</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">9. การถ่ายอุจจาระ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Poo" name="nine" id="cantpoo" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantpoo" class="ml-2 text-lg font-medium">ถ่ายอุจจาระเองไม่ได้ต้องมีคนช่วย</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Poo" name="nine" id="helppoo" type="radio" value=5 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helppoo" class="ml-2 text-lg font-medium">ถ่ายอุจจาระเองได้ ช่วยสวนน้อยกว่า 1 ครั้ง/สัปดาห์</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Poo" name="nine" id="canpoo" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canpoo" class="ml-2 text-lg font-medium">ถ่ายอุจจาระเองได้ สวน เหน็บยาเอง</label>
                    </div>
                </div>
                <div>
                    <p class="mb-4">10. การปัสสาวะ</p>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Pee" name="ten" id="cantpee" type="radio" value=0 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="cantpee" class="ml-2 text-lg font-medium">คาสายสวนปัสสาวะ</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Pee" name="ten" id="helppee" type="radio" value=10 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="helppee" class="ml-2 text-lg font-medium">สวนน้อยกว่า 1 ครั้ง/วัน</label>
                    </div>
                    <div class="flex items-center mb-4 ml-10">
                        <input v-model="Pee"  name="ten" id="canpee" type="radio" value=15 class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="canpee" class="ml-2 text-lg font-medium">ปัสสาวะเองได้</label>
                    </div>
                </div>
                <div class="pt-8 flex justify-center">
                    <button class="flex  text-white drop-shadow-xl justify-center p-3 w-[150px] text-center bg-blue-400 rounded-full" style="background-color:#709892">SUBMIT</button>
                </div>
                </form>
            </div>

        </div>
    </div>   
</template>
<script>
import { useUserStore } from '../stores/user'
export default {
    data() {
        return {
            Bath: 0,
            Bed: 0,
            Do: 0,
            Dress: 0,
            Eat: 0,
            Move: 0,
            Pee: 0,
            Poo: 0,
            Toilet: 0,
            Up: 0,
        }
    },
    setup() {
        useUserStore().fetchCurrentUser()
    },
    beforeMount() {
        console.log(useUserStore().getUser);
        this.Bath = 0;
        this.Bed = 0;
        this.Do = 0;
        this.Dress = 0;
        this.Eat = 0;
        this.Move = 0;
        this.Pee = 0;
        this.Poo = 0;
        this.Toilet = 0;
        this.Up = 0;
    },
    methods: {
        async updatadata() {
            await useUserStore().updataData(this.$data)
            this.$router.push({ name: 'score' });
        },
    }
}  


</script>
<style lang="">
    
</style>