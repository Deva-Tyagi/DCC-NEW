import React from 'react'
import AboutBanner from './AboutBanner/AboutBanner'
import Landing from '../Contact-Page/Landing/Landing'
import Services from '../Home-Page/Services/Services'
import Solutions from '../Home-Page/Solutions/Solutions'
import Technologies from '../Home-Page/Technologies/Technologies'
import WhyChoose from './WhyChoose/WhyChoose'
import VisionRoadmap from './VisionRoadmap/VisionRoadmap'
import Focus from './Focus/Focus'
import CallToAction from '../Home-Page/CallToAction/CallToAction'

const AboutMain = () => {
  return (
    <>
      <AboutBanner />
      <Solutions />
      <Services />
      <WhyChoose />
      <VisionRoadmap />
      <Focus />
      <Technologies />
      <CallToAction />
    </>
  )
}

export default AboutMain
