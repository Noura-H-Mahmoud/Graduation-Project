import { useLocation } from 'react-router-dom';
import ShowPlacesMain from '../ShowPlacesMain/ShowPlacesMain';
import ShowFlightsMain from '../ShowFlightsMain/ShowFlightsMain';

export default function ShowPlaces() {
  const location = useLocation();
  const path = location.pathname;

  return (
<<<<<<< HEAD
    <>
      <div className='MS-showFlight MS-ShowPlaces container'>
        <p>Where are you flying? </p>
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
            value={selectedCity}
            size="large"
            className="MS-firstfield OS-firstfiled"
            onClick={toggleHandler}
          />
          <div className={destination ? "OS-Destination" : "OS-DestinationDisplay"}>
            <h1 className='OS-Destination-h1'>popular cities</h1>
            <div>
              {OSdataDes.map((item) => {
                return (
                  <div className='OS-DestinationFlex'>
                    <div className='OS-Destination-Par' onClick={() => click(item.des1)}>{item.des1}</div>
                    <p className='OS-Destination-Par' onClick={() => click(item.des2)}>{item.des2}</p>
                    <p className='OS-Destination-Par' onClick={() => click(item.des3)}>{item.des3}</p>
                    <p className='OS-Destination-Par' onClick={() => click(item.des4)}>{item.des4}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs} className='OS-Date-co'>
            <DemoContainer components={['DatePicker', 'DatePicker']} className='OS-Date-co'>
              <DatePicker
                id="outlined-size-small"
                label="Check In"
                defaultValue={dayjs('2022-02-12')}
                className="MS-field1"
                size="large"
                format='ddd/MM/YY'
              />
              <DatePicker
                id="outlined-size-small"
                label="Check Out"
                defaultValue={dayjs('2022-02-12')}
                className="MS-field1"
                size="large"
                format='ddd/MM/YY'
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            label="Rooms & Guests"
            id="outlined-size-small"
            defaultValue="1 room, 2 guests"
            value={`${Room} Room, ${Count} guests`}
            size="large"
            className="MS-field1 OS-firstfiled"
            onClick={RoomHandler}
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
          <div className={room ? "OS-Room" : "OS-DestinationDisplay"}>
            {OSRoom.map((item) => {
              return (
                <>
                  <h1 className='OS-Destination-h1 OS-Room-h1'>{item.Title}</h1>
                  <div className='OS-Ti-Flex OS-All-Padding'>
                    {OSdataRoom.map((item) => {
                      return (
                        <div className={item.class}>
                          <img src={user} alt="icon" className="MS-field-icon" />
                          <div className='OS-DivT-Room'>
                            <h6 className='OS-h6-Room'>{item.Title}</h6>
                            <p className='OS-p-Room'> {item.year} </p>
                          </div>
                          <div className='OS-Ti-Flex'>
                            <button className='OS-btn-Room' id={item.id} onClick={() => { if (item.id == 1) { if (count <= 0) { setCount(count) } else { setCount(count - 1) } } else { if (count1 <= 0) { setCount1(count1) } else { setCount1(count1 - 1) } } Count = count + count1 }}>{item.btn1contact}</button>
                            <p className='OS-pp-Room' id={item.id}>{count}</p>
                            <p className='OS-pp-Room' id={item.id}>{count1}</p>
                            <button className='OS-btn-Room' id={item.id} onClick={() => { if (item.id == 1) { setCount(count + 1) } else { setCount1(count1 + 1) } }}>{item.btn2contact}</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
            <div className='OS-Ti-FlexStyle'>
              <div className='OS-Ti-Flex OS-Ti-Style' onClick={changeRoom}>
                <div className='OS-Plus-Style'>+</div>
                <h6 className='OS-AddRoom-Style'> add room</h6>
              </div>
              <div className='OS-applyDiv-Style' onClick={RoomHandler}><p className='OS-apply-Style'>Apply</p></div>
            </div>
          </div>
        </div>
        <div className="MS-right">
          <a><img src={plus} alt="plus" className="MS-plus" />Add Promo Code</a>
          <Link to="/Graduation-Project/hotelflow/listing"> <button className="MS-btnFlight"><img src={building} alt="arrow" />Show Places</button></Link>
        </div>
      </div>
    </>
  )
}

    <div className='MS-showFlight MS-ShowPlaces container'>
      <p>Where are you flying?</p>
      {path.includes('/flightflow') ? <ShowFlightsMain /> : null}
      {path.includes('/hotelflow') ? <ShowPlacesMain /> : null}
    </div>
  );
}





>>>>>>> 60b37eeeb5feaa4aaed9090c36c1f28ff94a4c6e
