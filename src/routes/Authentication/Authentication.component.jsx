import SignInForm from "../../components/SignInForm/SignInForm.component"
import SignUpForm from "../../components/SignUpForm/SignUpForm.component"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

const Authentication = () => {
  return (
    <div>
      <h1>sign in page</h1>

      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
