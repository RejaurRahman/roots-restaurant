import React from "react"

import PageBanner from "../../components/PageBanner/PageBanner.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import TextMedia from "../../components/TextMedia/TextMedia.component"

const About = () => {
  return (
    <>
      <PageBanner label="About" />
      <Breadcrumbs label="About" />
      <TextMedia />
    </>
  )
}

export default About
