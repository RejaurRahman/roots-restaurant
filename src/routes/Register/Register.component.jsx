import React from "react"

import Form from "../../components/Form/Form.component"
import FormHeading from "../../components/Form/FormHeading/FormHeading.component"
import SignUpForm from "../../components/Form/SignUpForm/SignUpForm.component"
import FormSocial from "../../components/Form/FormSocial/FormSocial.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"

const Register = () => {
  return (
    <>
      <Breadcrumbs label="Register" />
      <Form>
        <FormHeading>Sign Up With Roots</FormHeading>
        <FormSocial label="Sign Up" />
        <SignUpForm />
      </Form>
    </>
  )
}

export default Register
