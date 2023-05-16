import React from "react"

import "./CategoryItem.styles.scss"

import { LazyLoadImage } from "react-lazy-load-image-component"

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
        <p>Shop Now</p>
      </div>
  </div>
  )
}

export default CategoryItem
