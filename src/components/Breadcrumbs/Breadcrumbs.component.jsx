import React from "react"

import { Link } from "react-router-dom"

import "./Breadcrumbs.styles.scss"

const Breadcrumbs = ({ label, mediaParent, shopParent }) => {
  return (
    <div class="container breadcrumb-container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {mediaParent && (
                <>
                  <li
                    class="breadcrumb-item parent"
                    aria-current="page"
                  >
                    <Link to="/media">Media</Link>
                  </li>
                  <li
                    class="breadcrumb-item active"
                    aria-current="page"
                  >
                    {label}
                  </li>
                </>
              )}
              {shopParent && (
                <>
                  <li
                    class="breadcrumb-item parent"
                    aria-current="page"
                  >
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li
                    class="breadcrumb-item active"
                    aria-current="page"
                  >
                    {label}
                  </li>
                </>
              )}
              {(!mediaParent || !shopParent) && (
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                >
                  {label}
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
