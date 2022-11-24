<template>
  
    <component :is="layout">
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
                <div
                  class="flex-none hover:bg-blue-300/50 font-mediun w-[130px] h-[100px] flex justify-center items-center">
                  <button class="text-2xl">แบบประเมิน</button>
                </div>
              </router-link>
              <router-link to="/exone">
                <div
                  class="flex-none hover:bg-blue-300/50 font-mediun w-[170px] h-[100px] flex justify-center items-center">
                  <button class="text-2xl">เริ่มกายภาพบำบัด</button>
                </div>
              </router-link>
    
              <div
                class="flex-none hover:bg-blue-300/50 font-mediun w-[190px] h-[100px] flex justify-center items-center space-x-2">
                <font-awesome-icon @click="toggleVisibility" icon="fa-solid fa-user" class="text-4xl" />
                <button>{{ name }}</button>
              </div>
              <div v-show="isVisible" class="absolute w-48 mt-[70px] bg-white round-md">
                <router-link to="/history" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-red-500">
                  ประวัติการใช้งาน
                </router-link>
                <router-link to="/logout" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-red-500">Log Out
                </router-link>
              </div>
              <router-link to="/homeuser">
                <div class="flex-none font-mediun w-[50px] h-[100px] flex justify-center items-center mr-6">
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
  </component>
</template>

<script>
import Main from "@/layouts/main.vue";
import Default from "@/layouts/default.vue";
import { useUserStore } from '@/stores/user'
export default {
  components: {
    Main,
    Default
  },
  data() {
    return {
      isVisible: false,
      name: ""
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  },
  computed: {
    layout() {
      console.log(this.$route);
      return this.$route.meta.layout || Default;
    },
  },
  setup() {
    useUserStore().fetchCurrentUser()

  },
  async mounted() {
    await useUserStore().fetchData();
    this.name = useUserStore().getName
  },
};
</script>

