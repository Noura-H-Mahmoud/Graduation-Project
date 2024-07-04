import React from 'react'
import Navigation from '../../../Components/Nav/Nav'

export default function FlightsSearch(navButtons, navButtonsForMobile) {
  return (
    <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} />
  )
}

