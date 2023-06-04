import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./HeaderSocial.styles.scss"

library.add(
  fab,
)

const HeaderSocial = () => {
  return (
    <ul className="top-header-social-list">
      <li className="top-header-social-item">
        <a href="https://en-gb.facebook.com/" rel="noreferrer" target="_blank" className="top-header-social-link">
          <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />
        </a>
      </li>
      <li className="top-header-social-item">
        <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="top-header-social-link">
          <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
        </a>
      </li>
      <li className="top-header-social-item">
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="top-header-social-link">
          <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
        </a>
      </li>
    </ul>
  )
}

export default HeaderSocial
