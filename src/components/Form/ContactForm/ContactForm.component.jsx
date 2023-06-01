import React, { useState } from "react"

import Form from "../Form.component"
import FormHeading from "../FormHeading/FormHeading.component"
import FormInput from "../FormInput/FormInput.component"
import Button from "../../Button/Button.component"

import "./ContactForm.styles.scss"

const defaultFormFields = {
  name: "",
  email: "",
  textMessage: ""
}

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, textMessage } = formFields
  const [message, setMessage] = useState(null)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const input = event.target.elements.email
    const email = input.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      setMessage({ type: "success", content: "Thank you for contacting us. Someone will get in touch soon!" })
      input.value = ""
    } else {
      setMessage({ type: "error", content: "Please enter a valid email address." })
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      {message && (
        <div className={`contact--message ${message.type}`}>
          {message.content}
        </div>
      )}
      {message?.type !== "success" && (
        <Form onSubmit={handleFormSubmit}>
          <FormHeading>Leave Message</FormHeading>

          <form onSubmit={handleFormSubmit}>
            <FormInput
              label="Name"
              type="name"
              required
              onChange={handleChange}
              name="name"
              value={name}
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
              label="Message"
              required
              textarea
              onChange={handleChange}
              name="textMessage"
              value={textMessage}
            />

            <Button
              buttonType="secondary"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Form>
      )}
    </>
  )
}

export default ContactForm
