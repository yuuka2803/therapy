import { defineStore } from 'pinia'
import {auth} from "@/firebase"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
export const useUserStore = defineStore('user', {
  state: () => {
    return { user: null }
  },
  getters: {
    getUser: (state) => state.user ,
  },
  actions: {
    async signIn(email, password) {
      await signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
          // Signed in 
           this.user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })
    },
    async signUp(email, password) {
      await createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
        // Signed in 
        this.user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // ..
      });
    },
  },
})

