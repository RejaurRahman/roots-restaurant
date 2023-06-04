import React from "react"

import data from "../../data/content.json"

import { LazyLoadImage } from "react-lazy-load-image-component"

import "./FoundersList.styles.scss"

const imagePaths = [
  require("../../assets/images/about/danielle-sanchez.png"),
  require("../../assets/images/about/nicole-gabbiadini.png")
]

const FoundersList = () => {
  return (
    <div class="founders container">
      <h2 class="founders-main-heading">
        {data.founders.foundersMainHeading}
      </h2>
      <div class="row">
        {data.founders.list.map((founder, index) => {
          const imagePath = imagePaths[index % imagePaths.length]

          return (
            <div class="col-12 col-lg-6 founders-item">
              <LazyLoadImage
                src={imagePath}
                className="founders-image mx-auto"
                alt={`${founder.heading} founder image`}
                width={350}
                height={407}
              />
              <h3 class="founders-name">{founder.heading}</h3>
              <p class="founders-copy">{founder.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FoundersList
