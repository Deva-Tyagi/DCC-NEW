import React from 'react'
import Landing from './Landing/Landing'
import ContactForm from './ContactForm/ContactForm'
import ContactInfoCards from './ContactInfoCards/ContactInfoCards'
import OfficeLocation from './OfficeLocation/OfiiceLocation'
import ContactTeam from './ContactTeam/ContactTeam'
// import ContactStats from './ContactStats/ContactStats'

const ContactMain = () => {
  return (
    <>
      <Landing />
      <ContactInfoCards />
      <OfficeLocation />
      <ContactTeam />
      {/* <ContactStats /> */}
      <ContactForm />
    </>
  )
}

export default ContactMain
