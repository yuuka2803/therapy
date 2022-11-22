<template lang="">
    <div>
        {{name}}
    </div>
</template>
<script>
import { useUserStore } from '../stores/user'
export default {
    data() {
        return {
            name: "",
        };
    },
    mounted() {
        console.log(this.$data);
    },
    methods: {
    async fetch() {
        await useUserStore().fetchData(this.$data);
        this.user = useUserStore().getUser;

    },
}
}
</script>
<style lang="">
    
</style>