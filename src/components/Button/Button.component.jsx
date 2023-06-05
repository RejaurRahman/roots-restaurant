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
  linkType,
  externalLink,
  ...otherProps
}) => {
  const Element = linkType ? "a" : "button"

  return (
    <Element
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      target={externalLink ? "_blank" : null}
      rel={externalLink ? "noreferrer" : null}
      {...otherProps}
    >
      {children}
    </Element>
  )
}

export default Button
