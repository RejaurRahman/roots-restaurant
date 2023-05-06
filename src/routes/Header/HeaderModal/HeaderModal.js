import React from "react"
import { createPortal } from "react-dom"

import "./HeaderModal.styles.scss"
import HeaderMenu from "../HeaderMenu/HeaderMenu"

const HeaderModal = ({ showModal, closeModal, scrollPosition }) => {
  return (
    showModal && createPortal(
      <div
        className={`modal fade ${showModal ? "show" : ""}`.trim()}
        tabIndex="-1"
        aria-labelledby="navigationModalLabel"
        aria-hidden={!showModal}
        onClick={closeModal}
      >
        <div className={`modal-dialog ${scrollPosition > 46 ? "scrolled" : ""}`.trim()}>
          <div className="modal-content">
            <HeaderMenu showModal={showModal} />
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    )
  )
}

export default HeaderModal
