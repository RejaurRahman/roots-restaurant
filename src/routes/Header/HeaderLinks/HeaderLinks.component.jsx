import React, { useContext } from "react"

import { Link } from "react-router-dom"

import { UserContext } from "../../../contexts/user.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"

import "./HeaderLinks.styles.scss"

const HeaderLinks = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {currentUser ? (
        <span
          className="top-header--user-link top-header--login"
          onClick={signOutUser}
        >
          {" "}
          Sign Out{" "}
        </span>
      ) : (
        <Link
          className="top-header--user-link top-header--login"
          to="/auth"
        >
          <span>Login</span>
        </Link>
      )}
      {!currentUser && (
        <Link
          to="/auth"
          className="top-header--user-link top-header--register"
        >
          <span>Register</span>
        </Link>
      )}
    </>
  )
}

export default HeaderLinks
