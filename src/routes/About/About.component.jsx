import React from "react"

import PageBanner from "../../components/PageBanner/PageBanner.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import TextMedia from "../../components/TextMedia/TextMedia.component"
import FoundersList from "../../components/FoundersList/FoundersList.component"
import TextVideo from "../../components/TextVideo/TextVideo.component"

const About = () => {
  return (
    <>
      <PageBanner label="About" />
      <Breadcrumbs label="About" />
      <TextVideo />
      <FoundersList />
      <TextMedia />
    </>
  )
}

export default About
