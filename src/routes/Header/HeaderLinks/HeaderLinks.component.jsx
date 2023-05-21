import React from "react"
import { Link } from "react-router-dom"

import "./HeaderLinks.styles.scss"

const HeaderLinks = () => {
  return (
    <>
      <Link to="/login" className="top-header--user-link top-header--login">
        <span>Login</span>
      </Link>
      <Link to="/register" className="top-header--user-link top-header--register">
        <span>Register</span>
      </Link>
    </>
  )
}

export default HeaderLinks
