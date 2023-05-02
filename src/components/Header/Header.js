import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBars, faBagShopping, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from "../../assets/images/logo.png"
import "./Header.styles.scss"

library.add(
  fab,
  faBagShopping,
  faBars,
  faCartShopping,
  faUser,
)

const Header = () => {
  return (
    <>
      <div className="top-header">
        <div className="container top-header--container">
          <div className="row">
            <div className="col-12 col-md-6">
              <span className="top-header--shipping">
                Free Shipping on all orders
              </span>
            </div>
            <div className="col-12 col-md-6 top-header--right-column">
              <div className="top-header--social">
                <ul className="top-header--social-list">
                  <li className="top-header--social-item">
                    <a href="https://en-gb.facebook.com/" rel="noreferrer" target="_blank" className="top-header--social-link">
                      <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />
                    </a>
                  </li>
                  <li className="top-header--social-item">
                    <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="top-header--social-link">
                      <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
                    </a>
                  </li>
                  <li className="top-header--social-item">
                    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="top-header--social-link">
                      <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="top-header--user">
                <span className="top-header--user-icon">
                <FontAwesomeIcon icon={["fas", "fa-user"]} />
                </span>
                <a href="/" className="top-header--user-link">
                  Login
                </a>
                <span className="top-header--user-divider">
                  /
                </span>
                <a href="/" className="top-header--user-link">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container navbar--container">
          <div className="row navbar--row">
            <div className="col-12 col-lg-7 navbar--left">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="Roots Restaurant" className="navbar-logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNav" aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <FontAwesomeIcon icon={["fas", "fa-bars"]} size="2x" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="headerNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="btn-group">
                      <a href="/" className="btn">
                        Shop
                      </a>
                      <a href="/" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">
                          Toggle Dropdown
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            Soup
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Desert
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Italian
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Indian
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Oriental
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Fast Food
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Drinks
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Salad
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            View All
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Media
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-5 navbar--right">
              <div className="navbar-product--icons">
                <ul className="navbar-product--icons-list">
                  <li className="navbar-product--icons-item">
                    <a href="/" className="navbar-product--icons-link">
                      <FontAwesomeIcon icon={["fas", "fa-bag-shopping"]} />
                      <span className="navbar-product--icons-value">
                        3
                      </span>
                    </a>
                  </li>
                  <li className="navbar-product--icons-item">
                    <FontAwesomeIcon icon={["fas", "fa-cart-shopping"]} />
                    <span className="navbar-product--icons-amount">
                      £25.00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
