import React, { useState } from "react"

import FormInput from "../FormInput/FormInput.component"
import Button from "../../Button/Button.component"

const defaultFormFields = {
  email: ""
}

const ForgotPasswordForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <form>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Button
          buttonType="secondary"
          type="submit"
        >
          Reset Password
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

export default ForgotPasswordForm
