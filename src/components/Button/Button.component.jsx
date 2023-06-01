import React from "react"

import "./Button.styles.scss"

const BUTTON_TYPE_CLASSES = {
  facebook: "fb-sign-in",
  inverted: "inverted",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  transparent: "transparent"
}

const Button = ({
  children,
  buttonType,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
