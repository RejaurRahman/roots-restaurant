import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./HeaderMenu.styles.scss"
import data from "../../../data/content.json"
import useScreenWidth from "../../../hook/useScreenWidth"
import HeaderSocial from "../HeaderSocial/HeaderSocial"
import Accordion from "../../../components/Accordion/Accordion"
import AccordionItem from "../../../components/Accordion/AccordionItem/AccordionItem"

const HeaderMenu = ({ showModal }) => {
  const location = useLocation()

  const isActive = (to) => {
    return to === location.pathname
  }

  const isDesktop = useScreenWidth(992)

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownClicked, setDropdownClicked] = useState(false)

  const handleDropdownHover = () => {
    if (isDesktop) {
      setDropdownVisible(true)
    }
  }

  const handleDropdownLeave = () => {
    if (isDesktop) {
      setDropdownVisible(false)
    }
  }

  const handleDropdownClick = (e) => {
    if (!isDesktop) {
      e.stopPropagation()
      setDropdownClicked(!dropdownClicked)
    }
  }

  return (
    <>
      <div
        className={`navbar-collapse offset-lg-2 ${!showModal ? "collapse" : ""}`.trim()}>
        <ul
          className={`navbar-nav mx-auto mb-lg-0 ${isDesktop ? "mb-2" : ""}`.trim()}
        >
          {data.header_links.map((link) => (
            <li className="nav-item" key={link.text}>
              {link.dropdown ? (
                <div
                  className={`btn-group ${dropdownVisible ? "show" : ""}`.trim()}
                  onMouseOver={isDesktop ? handleDropdownHover : null}
                  onMouseLeave={isDesktop ? handleDropdownLeave : null}
                >
                  <a className="btn" href={link.href}>
                    {link.text}
                  </a>
                  <button
                    className="btn dropdown-toggle dropdown-toggle-split"
                    onClick={!isDesktop ? handleDropdownClick : null}
                  >
                    <span className="visually-hidden">
                      Toggle Dropdown
                    </span>
                  </button>
                  <ul
                    className={`dropdown-menu ${isDesktop ? "container" : ""} ${dropdownVisible || dropdownClicked ? "show" : ""}`.trim()}
                  >
                    <Accordion className={`${isDesktop ? "accordion-container" : ""}`.trim()}>
                      {link.dropdown_items.map((item) => (
                        <li className="dropdown-parent-list" key={item.text}>
                          <AccordionItem
                            accordionMobile
                            buttonClassName="dropdown-category"
                            contentClassName="dropdown-list"
                            isList
                            index
                            title={item.text}
                          >
                            {item.items.map((nestedItem) => (
                              <li className="dropdown-item" key={nestedItem.text}>
                                <Link className="dropdown-link" to={nestedItem.href}>
                                  {nestedItem.text}
                                </Link>
                              </li>
                            ))}
                          </AccordionItem>
                        </li>
                      ))}
                    </Accordion>
                  </ul>
                </div>
              ) : (
                <Link
                  className={`nav-link navbar--link ${
                    isActive(link.href) ? "active" : ""
                  } mx-lg-3`.trim()}
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
