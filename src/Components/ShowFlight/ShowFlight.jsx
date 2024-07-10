import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import plane from "./../../assets/images/Vector (8).svg";
import car from "./../../assets/images/Vector (9).svg";
import ShowPlacesMain from '../ShowPlacesMain/ShowPlacesMain';
import "../ShowFlight/ShowFlight.css"
import ShowFlightsMain from '../ShowFlightsMain/ShowFlightsMain';

export default function ShowFlight() {
  return (
    <>
      <div className='MS-showFlight container'>
        <Tabs
          defaultActiveKey="Flights"
          id="uncontrolled-tab-example"
          className="mb-3 MS-tabs "
        >
          <Tab eventKey="Flights" title={<span className="MS-span MS-border"><img src={plane} alt="plane" className="MS_icon" />Flights</span>} className="Ms-tabhome">
            <ShowFlightsMain/>
          </Tab>
          <Tab eventKey="Stays" title={<span className="MS-span MS-Stays"><img src={car} alt="car" className="MS_icon" />Stays</span>}>
            <ShowPlacesMain />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
