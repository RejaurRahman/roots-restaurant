import React, { useState } from "react"

import Button from "../../Button/Button.component"
import FormInput from "../FormInput/FormInput.component"

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils"
import FormLink from "../FormLink/FormLink.component"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      )

      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
    } catch(error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use")
      } else {
        console.log("user creation encountered an error", error)
      }
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
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <FormLink
          url="/privacy-policy"
          label="View Privacy Policy"
        />

        <Button
          buttonType="secondary"
          type="submit"
        >
          Sign Up
        </Button>

        <Button
          buttonType="inverted"
          linkType
          href="/login"
          type="button"
        >
          Have an account? Log In
        </Button>
      </form>
    </>
  )
}

export default SignUpForm
