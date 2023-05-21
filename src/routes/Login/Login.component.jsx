import React from "react"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/SignUpForm/SignUpForm.component"
import Button from "../Button/Button.component"

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

        <Button onClick={logGoogleUser}>
          sign in with Google
        </Button>

        <SignUpForm />
      </div>
    </>
  )
}

export default Login