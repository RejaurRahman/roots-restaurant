import React from "react"
import { Outlet, Link } from "react-router-dom"

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
                <Link to="/" className="top-header--user-link">
                  Login
                </Link>
                <span className="top-header--user-divider">
                  /
                </span>
                <Link to="/" className="top-header--user-link">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container navbar--container">
          <div className="row navbar--row">
            <div className="col-12 col-lg-7 navbar--left">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Roots Restaurant" className="navbar-logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNav" aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <FontAwesomeIcon icon={["fas", "fa-bars"]} size="2x" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="headerNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
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
                    <Link className="nav-link" to="/">
                      Media
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-5 navbar--right">
              <div className="navbar-product--icons">
                <ul className="navbar-product--icons-list">
                  <li className="navbar-product--icons-item">
                    <Link className="navbar-product--icons-link" to="/">
                      <FontAwesomeIcon icon={["fas", "fa-bag-shopping"]} />
                      <span className="navbar-product--icons-value">
                        3
                      </span>
                    </Link>
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
      <Outlet />
    </>
  )
}

export default Header