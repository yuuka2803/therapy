// add ,fetch
import { defineStore } from "pinia";
import {collection,getDocs} from "firebase/firestore"
import {db} from "@/firebase"
export const useUserStore = defineStore('user', {
  state: () => ({
    user : []
  }),
  getters: {
    getUser: (state) => {
      return state.user
    },
   
  },
    actions: {
    // fetch
      async fetchData() {
       const queryuser = await getDocs(collection(db, "user"))
       this.user = queryuser.docs.map((doc)=> doc.user())
        queryuser.forEach((doc) => {
          console.log(doc.user());
        });
      }
    }
})