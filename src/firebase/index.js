import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAiavyY50N2MiF9Zwl4R6em6dp_ZOeWn7M",
    authDomain: "ceranapos.firebaseapp.com",
    projectId: "ceranapos",
    storageBucket: "ceranapos.appspot.com",
    messagingSenderId: "984305269440",
    appId: "1:984305269440:web:6137e4b57445f532318b25",
    measurementId: "G-GT8K4X6R7T",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export default {
    app,
    analytics,
    auth,
}

export const _signIn = async () => {
    try {
        const userCredential = await signInWithPopup(auth, new GoogleAuthProvider())
        console.log(userCredential.user, " logged in!")
    } catch (error) {
        console.log(error)
    }
}

export const getIdTokenPromise = () => {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe()
            if (user) {
                getIdToken(user).then(
                    (idToken) => {
                        resolve(idToken)
                    },
                    (error) => {
                        resolve(error)
                    }
                )
            } else {
                resolve(null)
            }
        })
    })
}

export const _signOut = async () => {
    // add _ to avoid conflict with signOut function
    try {
        await signOut(auth)
        console.log("signed out")
    } catch (error) {
        console.log(error)
    }
}
