import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"

import Logo from "../../assets/images/logo.png"
import "./Header.styles.scss"
import HeaderSocial from "./HeaderSocial/HeaderSocial.component"
import HeaderLinks from "./HeaderLinks/HeaderLinks.component"
import HeaderMenu from "./HeaderMenu/HeaderMenu.component"
import HeaderModal from "./HeaderModal/HeaderModal.component"
import HeaderCart from "./HeaderCart/HeaderCart.component"
import useScreenWidth from "../../hook/useScreenWidth"

const Header = () => {
  const isDesktop = useScreenWidth(992)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)

    if (!showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeModal = () => {
    setShowModal(false)

    document.body.style.overflow = "auto"
  }

  const handleScroll = () => {
    const currentPosition = window.pageYOffset
    setScrollPosition(currentPosition)
  }

  window.addEventListener("scroll", handleScroll)

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
              <button
                className={`navbar-toggler ${showModal ? "open" : "closed"}`.trim()}
                type="button"
                aria-label="Toggle navigation"
                onClick={toggleModal}
              >
                <span className="navbar-toggler-icon">
                  <div className="hamburger-icon" />
                </span>
              </button>
              {showModal && !isDesktop ? (
                <HeaderModal
                  showModal={showModal}
                  closeModal={closeModal}
                  scrollPosition={scrollPosition}
                />
              ) : (
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
