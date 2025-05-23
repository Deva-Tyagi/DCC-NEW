import React from 'react'
import PortfolioBanner from '../PortfolioBanner/PortfolioBanner'
import Statistics from '../Statistics/Statistics'
import ServicesSection from '../ServiceSection/ServicesSection'
// import Team from '../Team/Team'
// import Blog from '../Blog/Blog'
// import CallToAction from '../../Home-Page/CallToAction/CallToAction'
import NewCta from '../../About-Page/New-CTA/NewCta'

const PortfolioMain = () => {
  return (
    <>
      <PortfolioBanner />
      <ServicesSection />
      <Statistics />
      {/* <Team /> */}
  
      {/* <Blog /> */}
        
      {/* <CallToAction /> */}
      <NewCta />
    </>
  )
}

export default PortfolioMain
