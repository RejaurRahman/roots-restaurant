import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

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
      </div>
    </>
  )
}

export default Login