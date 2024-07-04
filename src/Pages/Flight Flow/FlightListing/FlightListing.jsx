import React from 'react';
import Navigation from '../../../Components/Nav/Nav';
import FormWithOutTab from '../../../Components/FormWithOutTab/FormWithOutTab';
import Footer from '../../../Components/Footer/Footer';
import FilterFlight from '../../../Components/FilterFlight/FilterFLight';
import './FlightListing.css';

export default function FlightListing({ navButtons, navButtonsForMobile,navList }) {
  return (
    <div className='AM_flightListing'>
      <header className='header'>
        <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
        <FormWithOutTab />
      </header>
      {/* <main>
        <FilterFlight />
      </main>
      <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
  