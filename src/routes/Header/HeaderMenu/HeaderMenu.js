import React from "react"
import { Link } from "react-router-dom"

import "./HeaderMenu.styles.scss"

const HeaderMenu = () => {
  return (
    <>
      <div className="collapse navbar-collapse offset-lg-1" id="headerNav">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link navbar--link active mx-lg-3" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar--link mx-lg-3" to="/">
              About
            </Link>
          </li>
          <li className="nav-item dropdown mx-lg-2">
            <div className="btn-group">
              <a className="btn" href="/">
                Shop
              </a>
              <a href="/" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">
                  Toggle Dropdown
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Soup
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Desert
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Italian
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Indian
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Oriental
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Fast Food
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Drinks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Salad
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    View All
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar--link mx-lg-3" to="/">
              Media
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar--link mx-lg-3" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderMenu
