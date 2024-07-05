import React from 'react'
import FlightSearchBook from '../../../Components/FlightSearchBook/FlightSearchBook'
import FlightSearshMap from '../../../Components/FlightSearchMap/FlightSearshMap'
import HeroFlowSearch from '../../../Components/HeroFlowSearch/HeroFlowSearch'
import Newsletter from '../../../Components/Newsletter/Newsletter'
import Footer from '../../../Components/Footer/Footer'

import ShowFlyplaces from '../../../Components/ShowFlyPlaces/ShowFlyplaces'





export default function FlightsSearch() {
  return (
  <>
<HeroFlowSearch/>
<ShowFlyplaces/>
<FlightSearshMap/>
<FlightSearchBook/>
<Newsletter/>
<Footer/>
</>
  )
}

