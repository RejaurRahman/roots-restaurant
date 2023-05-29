import React from "react"

import Button from "../Button/Button.component"

import { LazyLoadImage } from "react-lazy-load-image-component"

import "./CategoryItem.styles.scss"

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category

  return (
    <div className="category-container">
      <LazyLoadImage
        src={imageUrl}
        alt={title}
        className="background-image"
        width={351}
        height={296}
      />
      <div className="category-body-container">
        <h2>
          {title}
        </h2>
        <Button
          buttonType="transparent"
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default CategoryItem
