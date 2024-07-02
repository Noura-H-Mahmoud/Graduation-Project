import React from 'react'
import HeroAccount from '../../../Components/HeroAccount/HeroAccount'
import Newsletter from '../../../Components/Newsletter/Newsletter'
import Footer from '../../../Components/Footer/Footer'
import TabsAccount from '../../../Components/TabsAccount/TabsAccount'
import Navigation from '../../../Components/Nav/Nav';
export default function MyAccount({ navButtons, navButtonsForMobile }) {
  return (
    <>
        <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} />
    <main className='MS-main'>
      <HeroAccount />
      <TabsAccount />
      <Newsletter />
    </main>
    <Footer />
    </>
  )
}
