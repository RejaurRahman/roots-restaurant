import React, { useContext, useState } from "react"

import { Link } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import "./HeaderLinks.styles.scss"

const HeaderLinks = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      {currentUser ? (
        <span
          className="top-header--user-link top-header--login"
          onClick={signOutHandler}
        >
          {" "}
          Sign Out{" "}
        </span>
      ) : (
        <Link
          className="top-header--user-link top-header--login"
          to="/auth"
        >
          Login
        </Link>
      )}
      <Link to="/auth" className="top-header--user-link top-header--register">
        <span>Register</span>
      </Link>
    </>
  )
}

export default HeaderLinks
