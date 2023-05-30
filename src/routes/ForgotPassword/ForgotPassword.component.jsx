import React from "react"

import Form from "../../components/Form/Form.component"
import FormHeading from "../../components/Form/FormHeading/FormHeading.component"
import ForgotPasswordForm from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm.component"

const ForgotPassword = () => {
  return (
    <Form>
      <FormHeading>Reset Password</FormHeading>
      <ForgotPasswordForm />
    </Form>
  )
}

export default ForgotPassword
