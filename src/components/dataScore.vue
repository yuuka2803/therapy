<template lang="">
    <div>
        <div class="flex justify-center items-center bg-white w-[500px] mt-12 p-8 space-x-[180px] rounded-3xl drop-shadow-2xl">
            <div class="flex-none">
                <h1 class="text-2xl">Date</h1>
                <h1 class="text-xl">23/11/2546</h1>
            </div>
            <div class="flex-none">
                <h1 class="text-2xl">Score</h1>
                <h1 class="text-xl">{{score}}</h1>
            </div>
        
        </div>
    </div>
    <slot></slot>
</template>
<script>
export default {
    props: {
        score: {
            type:Number
        }
    },
    
}
</script>
<style lang="">
    
</style>