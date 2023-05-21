import React from "react"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/SignUpForm/SignUpForm.component"

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <>
      <div>Login page</div>
      <div>
        sign in page

        <button onClick={logGoogleUser}>
          sign in with Google
        </button>

        <SignUpForm />
      </div>
    </>
  )
}

export default Login