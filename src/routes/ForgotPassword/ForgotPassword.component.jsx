import React from "react"

import Form from "../../components/Form/Form.component"
import FormHeading from "../../components/Form/FormHeading/FormHeading.component"
import ForgotPasswordForm from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"

const ForgotPassword = () => {
  return (
    <>
      <Breadcrumbs label="Forgot Password" />
      <Form>
        <FormHeading>Reset Password</FormHeading>
        <ForgotPasswordForm />
      </Form>
    </>
  )
}

export default ForgotPassword
