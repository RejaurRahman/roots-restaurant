import React from "react"

import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils"

import Button from "../../Button/Button.component"

import "./FormSocial.styles.scss"

const FormSocial = ({ label }) => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  return (
    <div className="social-login">
      <Button
        buttonType="inverted"
        onClick={signInWithGoogle}
        type="button"
      >
        {label} With Google
      </Button>

      <Button
        buttonType="facebook"
        type="button"
      >
        {label} With FaceBook
      </Button>

      <span class="social-login-text">or {label} with your email:</span>
    </div>
  )
}

export default FormSocial
