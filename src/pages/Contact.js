import React from 'react'
import ContactComponent from '../components/ContactComponent'
import NavContact from '../components/NavContact'
import MapComponent from '../components/MapComponent'

function Contact() {
  return (
    <div>
        <NavContact />
        <ContactComponent />
        <MapComponent />
    </div>
  )
}

export default Contact