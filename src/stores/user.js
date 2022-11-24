import { defineStore } from 'pinia'
import { auth, db } from "@/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp, updateDoc,  getDoc, arrayUnion, Timestamp, } from "firebase/firestore";

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			user: null,
			name: "",
			age: 0,
			email: "",
			therapies: [],
		}
	},
	getters: {
		getUser: (state) => state.user,
		getTherapies: (state) => state.therapies,
		getName: (state) => state.name,
		getAge: (state) => state.age,
		getEmail: (state) => state.email,
	},
	actions: {
		async signIn(email, password) {
			await signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					this.user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				})
		},
		async signUp(email, password) {
			await createUserWithEmailAndPassword(auth, email, password)
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
		async addData(name, age, email) {
			const docData = {
				name: name,
				age: age,
				email: email,
				therapies: []
			}
			await setDoc(doc(db, "user", this.user.uid), docData);
		},
		async updataData(resultData) {
			let sum = 0;
			for (let i in resultData) {
				sum += parseInt(resultData[i])
			}
			const data = {
				result: resultData,
				score: sum,
				date: Date.now()
			}
			console.log(data)
			const userRef = doc(db, "user", this.user.uid);
			await updateDoc(userRef, {
				therapies: arrayUnion(data)
			});
		},
		async fetchData() {
			// console.log(this.user);
			const docRef = doc(db, "user", this.user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				this.therapies = docSnap.data().therapies
				this.name = docSnap.data().name
				this.age = docSnap.data().age
				this.email = docSnap.data().email
			} else {
				console.log("No such document!");
			}
		},
		fetchCurrentUser() {
			auth.onAuthStateChanged((user) => {
				this.user = user;
			});
		},
		async fetchName() {
			// console.log(this.user);
			const docRef = doc(db, "user", this.user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				this.name = docSnap.data().name
			} else {
				console.log("No such document!");
			}
		},
		async fetchAge() {
			// console.log(this.user);
			const docRef = doc(db, "user", this.user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				this.age = docSnap.data().age
			} else {
				console.log("No such document!");
			}
		},
		async fetchEmail() {
			const docRef = doc(db, "user", this.user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				this.email = docSnap.data().email
			} else {
				console.log("No such document!");
			}
		},
		async updataSum(resultData) {
            const userRef = doc(db, "user", this.user.uid);
            await updateDoc(userRef, {
                sum: arrayUnion(resultData)
            });
		},
		async fetchSum() {
			const docRef = doc(db, "user", this.user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				this.sum = docSnap.data().sum
			} else {
				console.log("No such document!");
			}
		},
		
		
		
	}
})

