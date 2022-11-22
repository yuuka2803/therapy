
<template>
    <main>
        <div class="flex justify-center" style="font-family: 'Roboto Condensed', sans-serif;">
            <div class="text-center text-xl">
                <div class="pt-10">
                    <p class="text-6xl pb-5">Data</p>
                    <div class="bg-slate-200 p-10 rounded-lg">
                        <form @submit.prevent="">
                            <input class="border-2 mb-2 w-[300px] h-[45px] p-2" type="text" name="firstname" id=""
                                placeholder="firstname"><br>
                            <input class="border-2 mb-2 w-[300px] h-[45px] p-2" type="text" name="lastname" id=""
                                placeholder="lastname"><br>
                            <input class="border-2 mb-5 w-[300px] h-[45px] p-2" type="text" name="lastname" id=""
                                placeholder="age"><br>
                            <button class="bg-sky-500 w-[300px] h-[45px] rounded-lg mb-3">Submit</button>
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