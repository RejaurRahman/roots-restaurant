import React from "react"

import "./FormInput.styles.scss"

const FormInput = ({
  label,
  selectDropdown,
  textarea,
  ...otherProps
}) => {
  return (
    <div className="group">
      {!textarea && !selectDropdown && (
        <input
          className="form-input"
          {...otherProps}
        />
      )}

      {textarea && (
        <textarea
          className="form-input"
          rows="3"
          {...otherProps}
        />
      )}

      {
        label && (
          <label
            className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
          >
            {label}
          </label>
        )
      }
    </div>
  )
}

export default FormInput
