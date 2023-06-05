import React, { useState } from "react"

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../../utils/firebase/firebase.utils"

import FormInput from "../FormInput/FormInput.component"
import Button from "../../Button/Button.component"
import FormLink from "../FormLink/FormLink.component"

const defaultFormFields = {
  email: "",
  password: ""
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      console.log("User sign in failed", error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormLink
          url="/forgot-password"
          label="Forgot Password"
        />

        <Button
          buttonType="secondary"
          type="submit"
        >
          Sign In
        </Button>

        <Button
          buttonType="inverted"
          linkType
          href="/register"
          type="button"
        >
          Register An Account
        </Button>
      </form>
    </>
  )
}

export default SignInForm
