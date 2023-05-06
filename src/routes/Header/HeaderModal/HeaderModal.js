import React from "react"
import { createPortal } from "react-dom"

import "./HeaderModal.styles.scss"

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
            test
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    )
  )
}

export default HeaderModal
