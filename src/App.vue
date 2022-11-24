<template>
	<div style="font-family: 'Noto Sans Thai', sans-serif;">
		<div class="flex h-[100px] drop-shadow-xl text-white" style="background-color:#709892">
			<div class="flex-none w-1/2 flex items-center justify-start pl-6">
			<router-link to="/">
				<div class="flex space-x-3">
					<img src="https://i.postimg.cc/8P8mg680/logo.png" width="60" class="flex items-center">
					<p class="text-3xl flex items-center font-semibold pt-1">THERAPY FOR STROKE</p>
				</div>
			</router-link>
			</div>
			<div class="flex-none w-1/2 text-xl">
				<div class="flex items-stretch justify-end space-x-6">
					<router-link to="/form">
						<div class="flex-none hover:bg-blue-300/50 text-md w-[130px] h-[100px] flex justify-center items-center">
							<button class="text-2xl">แบบประเมิน</button>
						</div>
					</router-link>
					<router-link to="/pose1">
						<div
							class="flex-none hover:bg-blue-300/50 text-md w-[170px] h-[100px] flex justify-center items-center">
							<button class="text-2xl">เริ่มกายภาพบำบัด</button>
						</div>
					</router-link>

					<div class="flex-none hover:bg-blue-300/50 text-md w-[190px] h-[100px] flex justify-center items-center space-x-2" v-show="isLogin" >
						<font-awesome-icon @click="toggleVisibility" icon="fa-solid fa-user" class="text-4xl" />
						<button>{{ name }}</button>
					</div>
					<div v-show="isVisible" class="absolute w-48 mt-[70px] bg-white round-md">
						<router-link to="/history" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-red-500">
							ประวัติการใช้งาน
						</router-link>
						<router-link to="/logout" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-red-500">
							Logout
						</router-link>
					</div>
					<div class="flex-none w-[120px] h-[100px] flex justify-center items-center" v-show="!isLogin">
						<router-link to="/signin" class="p-1 w-[105px] text-center text-white border-2 border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl">
							Login
						</router-link>
					</div>
					<div class="flex-none mr-5 w-[120px] h-[100px] flex justify-center items-center" v-show="!isLogin">
						<router-link to="/signup"
							class="p-1 w-[105px] text-center text-white border-2 border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl">
							Register
						</router-link>
					</div>
					<router-link to="/homeuser">
						<div class="flex-none text-md w-[50px] h-[100px] flex justify-center items-center mr-6">
							<button>
							<font-awesome-icon icon="fa-solid fa-house-chimney"
								class="text-4xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl" />
							</button>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
	<div>
	<slot></slot>
	</div>

	<RouterView />
</template>

<script>

import { useUserStore } from '@/stores/user'
export default {
components: {
	
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