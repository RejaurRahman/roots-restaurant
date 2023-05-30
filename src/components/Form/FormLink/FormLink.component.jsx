import React from "react"

import "./FormLink.styles.scss"

const FormLink = ({ label, url }) => {
  return (
    <a
      className="form-link"
      href={url}
    >
      {label}
    </a>
  )
}

export default FormLink
