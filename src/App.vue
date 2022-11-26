<template>
	<Navbar/>
	<RouterView />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { useUserStore } from '@/stores/user'
export default {
	components: {
		Navbar
	
},
data() {
	return {
	isVisible: false,
	name: "",
	isLogin: false
	}
},
methods: {
	toggleVisibility() {
	this.isVisible = !this.isVisible
	}
},
setup() {
	useUserStore().fetchCurrentUser()
},
async mounted() {
	await useUserStore().fetchData();
	this.name = useUserStore().getName
	if (this.name) { 
	this.isLogin = true;
	} else {
	this.isLogin = false;
	}
},
};
</script>