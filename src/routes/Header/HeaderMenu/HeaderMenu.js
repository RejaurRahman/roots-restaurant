import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./HeaderMenu.styles.scss"
import data from "../../../data/content.json"
import useScreenWidth from "../../../hook/useScreenWidth"
import HeaderSocial from "../HeaderSocial/HeaderSocial"

const HeaderMenu = () => {
  const location = useLocation()

  const isActive = (to) => {
    return to === location.pathname
  }

  const isDesktop = useScreenWidth(992)

  return (
    <>
      <div
        className={`navbar-collapse offset-lg-1 ${isDesktop ? "collapse" : ""}`.trim()}
      >
        <ul
          className={`navbar-nav mx-auto mb-lg-0 ${isDesktop ? "mb-2" : ""}`.trim()}
        >
          {data.header_links.map((link) => (
            <li className="nav-item" key={link.text}>
              {link.dropdown ? (
                <div className="btn-group">
                  <a className="btn" href={link.href}>
                    {link.text}
                  </a>
                  <a
                    href="/"
                    className="btn dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      Toggle Dropdown
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    {link.dropdown_items.map((item) =>
                      item.divider ? (
                        <li key={item.order} className="dropdown-divider" />
                      ) : (
                        <li key={item.text}>
                          <Link className="dropdown-item" to={item.href}>
                            {item.text}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ) : (
                <Link
                  className={`nav-link navbar--link ${
                    isActive(link.href) ? "active" : ""
                  } mx-lg-3`}
                  aria-current="page"
                  to={link.href}
                >
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {isDesktop && (
          <HeaderSocial />
        )}
      </div>
    </>
  )
}

export default HeaderMenu
