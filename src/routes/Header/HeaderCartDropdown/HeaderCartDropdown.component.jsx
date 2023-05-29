import React from "react"

import Button from "../../../components/Button/Button.component"

import "./HeaderCartDropdown.styles.scss"

const HeaderCartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button
        buttonType="primary"
      >
        Go To Checkout
      </Button>
    </div>
  )
}

export default HeaderCartDropdown