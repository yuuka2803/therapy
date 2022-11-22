import { defineStore } from 'pinia'
import { auth } from "@/firebase"
import { db } from "@/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,  Timestamp ,updateDoc, collection, query, where, getDocs , arrayUnion, arrayRemove } from "firebase/firestore"; 
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
    async addData(name, age) {
      const docData = {
        name: name,
        age: age,
        scores: []
      }
      await setDoc(doc(db, "user", this.user.uid), docData);
    },
    async updataData(resultData) {
      const userRef = doc(db, "user",'bX7lK5qnA8f4LdCVVxrOUAZEggU2');
      await updateDoc(userRef, {
        scores:arrayUnion(resultData)
  
      });
    },
    async fetchData() {
    const q = query(collection(db, "user"), where(this.user.uid, "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
          console.log(doc.data());
      });
    }
  },
})

