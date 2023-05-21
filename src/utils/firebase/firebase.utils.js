import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhYhEP3e-_yJsqNDUhMJ-jKlZK3z_K3ok",
  authDomain: "roots-restaurant-db.firebaseapp.com",
  projectId: "roots-restaurant-db",
  storageBucket: "roots-restaurant-db.appspot.com",
  messagingSenderId: "121764942320",
  appId: "1:121764942320:web:8f3726e1f73d68ff014d35"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
