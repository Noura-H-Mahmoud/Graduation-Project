import { useLocation } from 'react-router-dom';
import ShowPlacesMain from '../ShowPlacesMain/ShowPlacesMain';
import ShowFlightsMain from '../ShowFlightsMain/ShowFlightsMain';

export default function ShowPlaces() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='MS-showFlight MS-ShowPlaces container'>
      <p>Where are you flying?</p>
      {path.includes('/flightflow') ? <ShowFlightsMain /> : null}
      {path.includes('/hotelflow') ? <ShowPlacesMain /> : null}
    </div>
  );
}





