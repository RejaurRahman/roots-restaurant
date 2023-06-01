import React from "react"

import "./FormInput.styles.scss"

const FormInput = ({
  emailForm,
  label,
  textarea,
  ...otherProps
}) => {
  return (
    <div className={`group ${emailForm ? "emailGroup" : ""}`.trim()}>
      {!textarea && (
        <input
          className="form-input"
          aria-label={label}
          {...otherProps}
        />
      )}

      {textarea && (
        <textarea
          className="form-input"
          aria-label={label}
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
