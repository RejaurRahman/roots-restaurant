import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from "../../assets/images/logo.png"
import "./Header.styles.scss"
import HeaderSocial from "./HeaderSocial/HeaderSocial"
import HeaderLinks from "./HeaderLinks/HeaderLinks"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderModal from "./HeaderModal/HeaderModal"
import HeaderCart from "./HeaderCart/HeaderCart"
import useScreenWidth from "../../hook/useScreenWidth"

library.add(
  fab,
  faBagShopping,
  faBars,
)

const Header = () => {
  const isDesktop = useScreenWidth(992)

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="top-header">
        <div className="container top-header--container">
          <div className="row">
            <div className="col-6 top-header--shipping">
              <span>
                Free Shipping on all orders
              </span>
            </div>
            <div className="col-6 top-header--right-column">
              {isDesktop && (
                <HeaderSocial />
              )}
              <HeaderLinks />
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container navbar--container">
          <div className="row navbar--row">
            <div className="col-6 col-lg-11 navbar--left">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Roots Restaurant" className="navbar-logo" />
              </Link>
              <button className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleModal}>
                <span className="navbar-toggler-icon">
                  <FontAwesomeIcon icon={["fas", "fa-bars"]} size="2x" />
                </span>
              </button>
              <HeaderModal showModal={showModal} closeModal={closeModal} />
              {isDesktop && (
                <HeaderMenu />
              )}
            </div>
            <HeaderCart />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
