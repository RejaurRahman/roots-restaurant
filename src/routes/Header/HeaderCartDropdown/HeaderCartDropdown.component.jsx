import React from "react"

import "./HeaderCartDropdown.styles.scss"

const HeaderCartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <button>
        Go To Checkout
      </button>
    </div>
  )
}

export default HeaderCartDropdown