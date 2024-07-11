import React from 'react';
import Navigation from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './FlightListing.css';
import Newsletter from '../../../Components/Newsletter/Newsletter';
import TabsFlightListing from '../../../Components/TabsFlightListing/TabsFlightListing'

export default function FlightListing({ navButtons, navButtonsForMobile,navList }) {
  return (
    < >
        <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
        <TabsFlightListing/>
        <Newsletter/>
        <Footer/>
    </>
  );
}
  