import React from "react"

import PageBanner from "../../components/PageBanner/PageBanner.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import ContactForm from "../../components/Form/ContactForm/ContactForm.component"
import Boxout from "../../components/Boxout/Boxout.component"

const Contact = () => {
  return (
    <>
      <PageBanner label="Contact" />
      <Breadcrumbs label="Contact" />
      <Boxout />
      <ContactForm />
    </>
  )
}

export default Contact
