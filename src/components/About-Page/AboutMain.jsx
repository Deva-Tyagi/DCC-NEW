import React from 'react'
import AboutBanner from './AboutBanner/AboutBanner'
import Solutions from './Solutions/Solutions'
import Technologies from './Technologies/Technologies'
import VisionRoadmap from './VisionRoadmap/VisionRoadmap'
import Focus from './Focus/Focus'
import Faq from './FAQs/Faq'
import Process from './Process/Process'
// import NewCta from './New-CTA/NewCta'

const AboutMain = () => {
  return (
    <>
      <AboutBanner />
      <Solutions />
      <Technologies />
      <VisionRoadmap />
       <Focus />
       <Faq />
       <Process />
      {/* <NewCta /> */}
    </>
  )
}

export default AboutMain
