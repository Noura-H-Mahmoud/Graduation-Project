import React from 'react'
import TabsHotelListing from '../../../Components/TabsHotelListing/TabsHotelListing'
import Navigation from '../../../Components/Nav/Nav'
import Newsletter from '../../../Components/Newsletter/Newsletter'
import Footer from '../../../Components/Footer/Footer'
// import HotelListingOne from '../../../Components/HotelListingOne/HotelListingOne'
// import HotelListingTow from '../../../Components/HotelListingTwo/HotelListingTow'
// import HotelListingThree from '../../../Components/HotelListingThree/HotelListingThree'

export default function HotelListing({ navButtons, navButtonsForMobile }) {
  return (
    <>
      {/* <HotelListingOne/>
 <HotelListingTow/>
 <HotelListingThree/> */}
      <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} />
      <TabsHotelListing />
      <Newsletter />
      <Footer />

    </>

  )
}
