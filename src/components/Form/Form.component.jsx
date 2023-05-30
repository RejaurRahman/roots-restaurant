import React from "react"

import "./Form.styles.scss"

const Form = ({ children }) => {
  return (
    <div className="container form">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-5 mx-auto">
          { children }
        </div>
      </div>
    </div>
  )
}

export default Form
