import { useState} from 'react';
import "./ShowFlight.css"
import * as React from 'react';
import { Select, MenuItem, InputLabel, FormControl, Popover,OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import plane from "./../../assets/images/Vector (8).svg"
import car from "./../../assets/images/Vector (9).svg"
import btn from "./../../assets/images/Vector (3).svg"
import plus from "./../../assets/images/Vector (10).svg"
import arrowdown from "./../../assets/images/Vector (7).svg"
import twoArrow from "./../../assets/images/Vector (5).svg"
import date from"./../../assets/images/date.svg"
import building from"./../../assets/images/building.svg"
import user from"./../../assets/images/User.svg"
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
export default function ShowFlight() {
  const [value, setValue] = useState('Lahore - Karachi');

  const handleImageClick = () => {
    const parts = value.split(' - ');
    if (parts.length === 2) {
      setValue(`${parts[1]} - ${parts[0]}`);
    }
  };
  const [trip, setTrip] = React.useState('Return');
  const handleChange = (event) => {
    setTrip(event.target.value);
  };
  const CustomSelect = styled(Select)({
    '& .MuiSelect-icon': {
      display: 'none',
    },
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [passengerCount, setPassengerCount] = useState(1);
  const [classType, setClassType] = useState('Economy');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePassengerChange = (event) => {
    setPassengerCount(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassType(event.target.value);
    setAnchorEl(null);
  };
  return (
    <>
      <div className='MS-showFlight container'>
        <Tabs
          defaultActiveKey="Flights"
          id="uncontrolled-tab-example"
          className="mb-3 MS-tabs"
        >
          <Tab eventKey="Flights" title={<spsn className="MS-span MS-border"><img src={plane} alt="plane" className="MS_icon" />Flights</spsn>} className="Ms-tabhome">

            <div className="MS-textfields">
              <TextField
                label="From - To"
                id="outlined-size-small"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                size="large"
                className="MS-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={twoArrow} alt="icon" className="MS-field-icon" onClick={handleImageClick}
              style={{ cursor: 'pointer' }}/>
                    </InputAdornment>
                  ),
                }}
              />
                  <FormControl variant="outlined" size="large" className="MS-Returnfield">
      <InputLabel id="trip-label">Trip</InputLabel>
      <CustomSelect
        labelId="trip-label"
        id="outlined-size-small"
        value={trip}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <img src={arrowdown} alt="icon" className="MS-field-icon" />
          </InputAdornment>
        }
        label="Trip"
      >
        <MenuItem value="Return">Return</MenuItem>
        <MenuItem value="One-Way">One-Way</MenuItem>
        <MenuItem value="Multi-City">Multi-City</MenuItem>
      </CustomSelect>
    </FormControl>
              <TextField
                label="Depart- Return"
                id="outlined-size-small"
                defaultValue="07 Nov 22 - 13 Nov 22"
                size="large"
                className="MS-field"
              />
          <TextField
        label="Passenger - Class"
        id="outlined-size-small"
        value={`${passengerCount} Passenger, ${classType}`}
        size="large"
        className="MS-field"
        onClick={handleClick}
        variant="outlined"
      />

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: 20 }}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="passenger-label">Passenger</InputLabel>
            <OutlinedInput
              id="passenger-input"
              type="number"
              value={passengerCount}
              onChange={handlePassengerChange}
              inputProps={{min:0}}
              label="Passenger"
            />
          </FormControl>
          <FormControl variant="outlined" size="small" fullWidth style={{ marginTop: 10 }}>
            <InputLabel id="class-label">Class</InputLabel>
            <Select
              labelId="class-label"
              id="class-select"
              value={classType}
              onChange={handleClassChange}
              label="Class"
            >
              <MenuItem value="Economy">Economy</MenuItem>
              <MenuItem value="Business class">Business class</MenuItem>
              <MenuItem value="First class">First class</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Popover>
            </div>
            <div className="MS-right">
              <a><img src={plus} alt="plus" className="MS-plus" />Add Promo Code</a>
              <Link to="/flightflow/listing"> <button className="MS-btnFlight"><img src={btn} alt="arrow" />Show Filghts</button> </Link>
            </div>
          </Tab>
          <Tab eventKey="Stays" title={<spsn className="MS-span MS-Stays"><img src={car} alt="car" className="MS_icon" />Stays</spsn>}>
          <div className="MS-textfields">
              <TextField
               InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                     <img src={car} alt="icon" className="MS-field-icon" />
                  </InputAdornment>
                ),
              }}
                label="Enter Destination"
                id="outlined-size-small"
                defaultValue="Istanbul, Turkey"
                size="large"
                className="MS-firstfield"
              />
              <TextField
                label="Check In"
                id="outlined-size-small"
                defaultValue="Fri 12/2"
                size="large"
                 className="MS-field1"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                       <img src={date} alt="icon" className="MS-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Check Out"
                id="outlined-size-small"
                defaultValue="Sun 12/4"
                size="large"
                className="MS-field1"
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <img src={date} alt="icon" className="MS-field-icon" />
                      </InputAdornment>
                    ),
                  }}
              />
              <TextField
                label="Rooms & Guests"
                id="outlined-size-small"
                defaultValue="1 room, 2 guests"
                size="large"
                className="MS-field1"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                           <img src={user} alt="icon" className="MS-field-icon" />
                        </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                         <img src={arrowdown} alt="icon" className="MS-field-icon" />
                      </InputAdornment>
                    ),
                  }}
              />
            </div>
            <div className="MS-right">
            <a><img src={plus} alt="plus" className="MS-plus" />Add Promo Code</a>
            <Link to="/hotelflow/listing">
              <button className="MS-btnFlight"><img src={building} alt="arrow" />Show Places</button>
              </Link>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
 