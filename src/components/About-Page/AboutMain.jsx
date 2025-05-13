import React from 'react'
import AboutBanner from './AboutBanner/AboutBanner'
import Landing from '../Contact-Page/Landing/Landing'
import Services from '../Home-Page/Services/Services'
import Solutions from './Solutions/Solutions'
import Technologies from './Technologies/Technologies'
// import WhyChoose from './WhyChoose/WhyChoose'
import VisionRoadmap from './VisionRoadmap/VisionRoadmap'
import Focus from './Focus/Focus'
// import CallToAction from '../Home-Page/CallToAction/CallToAction'
// import NewServices from '../Home-Page/Services/NewServices'
import Faq from './FAQs/Faq'
import NewCta from './New-CTA/NewCta'

const AboutMain = () => {
  return (
    <>
      <AboutBanner />
      <Solutions />
      <Technologies />
      {/* <Services /> */}
      {/* <NewServices /> */}
      {/* <WhyChoose /> */}
      <VisionRoadmap />
       <Focus />
     <Faq />
      <NewCta />
    </>
  )
}

export default AboutMain
