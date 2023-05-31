import React from "react"

import Form from "../../components/Form/Form.component"
import FormHeading from "../../components/Form/FormHeading/FormHeading.component"
import SignInForm from "../../components/Form/SignInForm/SignInForm.component"
import FormSocial from "../../components/Form/FormSocial/FormSocial.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"

const Login = () => {
  return (
    <>
      <Breadcrumbs label="Login" />
      <Form>
        <FormHeading>Log In To Roots</FormHeading>
        <FormSocial label="Sign In" />
        <SignInForm />
      </Form>
    </>
  )
}

export default Login
