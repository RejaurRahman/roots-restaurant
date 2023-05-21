import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const Login = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
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