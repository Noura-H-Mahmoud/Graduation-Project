// import React from 'react'
// import './Favorites.css'
// import Navigation from '../../../Components/Nav/Nav'
// import Favoriteshead from '../../../Components/Favorites-head/Favoriteshead'
// import Favoritesmain from '../../../Components/Favorites-main/Favoritesmain'
// import Footer from '../../../Components/Footer/Footer'
// import Newsletter from '../../../Components/Newsletter/Newsletter'
// export default function Favorites({navButtons,navButtonsForMobile}) {
//   return (
//     <section className='MH-favorites'>
// {/* <<<<<<< HEAD
//       <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} />
//       <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} />
//       <Favoriteshead/>
//       <Favoritesmain isListingPage={false}/>
//       <Newsletter/>
// ======= */}
//       <Navigation/>
//       <div className="MH-favorites-content">
//       <Favoriteshead/>
//       <Favoritesmain/>
//       </div>
//       {/* <Newsletter/> */}
// {/* >>>>>>> origin/MOHAMMAD_B_HELL */}
//       <Footer/>
//     </section>
//   )
// }




import React from 'react'
import './Favorites.css'
import Navigation from '../../../Components/Nav/Nav'
import Favoriteshead from '../../../Components/Favorites-head/Favoriteshead'
import Favoritesmain from '../../../Components/Favorites-main/Favoritesmain'
import Footer from '../../../Components/Footer/Footer'
import Newsletter from '../../../Components/Newsletter/Newsletter'
export default function Favorites() {
  return (
    <section className='MH-favorites'>
      <Navigation/>
      <Favoriteshead/>
      <Favoritesmain isListingPage={false}/>
      <Newsletter/>
      <Footer/>
    </section>
  )
}