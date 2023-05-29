import React from "react"

import HeaderCartDropdown from "../HeaderCartDropdown/HeaderCartDropdown.component"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./HeaderCart.styles.scss"

library.add(
  faBagShopping,
)

const HeaderCart = () => {
  return (
    <div className="col-6 col-lg-1 navbar--right">
      <div className="navbar-product--icons">
        <ul className="navbar-product--icons-list">
          <li className="navbar-product--icons-item">
            <div className="navbar-product--icons-link">
              <FontAwesomeIcon icon={["fas", "fa-bag-shopping"]} size="2x" />
              <span className="navbar-product--icons-value">
                3
              </span>
            </div>
            <HeaderCartDropdown />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderCart
