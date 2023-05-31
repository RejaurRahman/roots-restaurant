import React from "react"

import { Link } from "react-router-dom"

import "./FormLink.styles.scss"

const FormLink = ({ label, url }) => {
  return (
    <Link
      className="form-link"
      to={url}
    >
      {label}
    </Link>
  )
}

export default FormLink
