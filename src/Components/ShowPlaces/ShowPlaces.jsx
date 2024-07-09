import React, { useState } from 'react'
import "./ShowPlaces.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import car from "./../../assets/images/Vector (9).svg"
import plus from "./../../assets/images/Vector (10).svg"
import arrowdown from "./../../assets/images/Vector (7).svg"
import date from"./../../assets/images/date.svg"
import building from"./../../assets/images/building.svg"
import user from"./../../assets/images/User.svg"
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function ShowPlaces() {

const[roomCount,SetRoomCount]=useState(1)
{/* USE State for Show Destination*/ }
 const [destination,setDestination]=useState(false)
 const toggleHandler = () => {
    setDestination(!destination)
  };
{/* USE State for Count ADULTS AND SHELDREN*/ }
  const [count,setcount]=useState(0)
  const [count1,setcount1]=useState(0)
  let Count=count+count1
{/* USE State for Btton Minus*/ }
const handlerMinus=(index)=>{
  if(item.id==1){
    if(count<=0) 
      {setcount(count)}else{setcount(count-1)}}
  else{
    if(count1<=0) 
      {setcount1(count1)}
    else{setcount1(count1-1)}} 
  Count=count+count1
}

{/* USE State for Show Room*/ }
  const [room,setRoom]=useState(false)
  const RoomHandler = () => {
     setRoom(!room)
   };
{/* USE State for ADD Room*/ }
  const[roomList ,setRoomList]=useState([{room:''}])
 
  const handleRoomAdd=()=>{setRoomList([...roomList, {room:''}])
  SetRoomCount(roomCount+1)};
  
  const handleRoomremove=(index)=>{
    const list=[...roomList];
    list.splice(index,1);
    setRoomList(list);
    SetRoomCount(roomCount-1)
   
  
  }
  {/* USE State for Change Value */ }
const[dataCity,setSelectedCity]=useState([ 
  {id:1,des1:'Makkah, Saudi Arabia',des2:'Dubai, United Arab Emirates',des3:'Al Madinah, Saudi Arabia',des4:'Cairo, Egypt'},
  {id:2,des1:'Hurghada, Egypt',des2:'Sharm El Sheikh, Egypt',des3:'Alexandria, Egypt',des4:'Istanbul, Turkey'},
  {id:3,des1:'Abu Dhabi, United Arab Emirates',des2:'Sharjah, United Arab Emirates',des3:'Riyadh, Saudi Arabia',des4:'Jeddah, Saudi Arabia'},
  {d:4,des1:'Ain Sokhna, Egypt',des2:'Beirut, Lebanon',des3:'Dahab, Egypt',des4:'Doha, Qatar'},
  {id:5,des1:'Aswan, Egypt',des2:'Kuwait',des3:'Ajman, United Arab Emirates',des4:'Amman, Jordan'},
])
const click=(id,value)=>{
 alert("1")
alert(dataCity.id)
alert(id)
alert(value)

 

}




  const OSdataDes=[
    {des1:'Makkah, Saudi Arabia',des2:'Dubai, United Arab Emirates',des3:'Al Madinah, Saudi Arabia',des4:'Cairo, Egypt'},
    {des1:'Hurghada, Egypt',des2:'Sharm El Sheikh, Egypt',des3:'Alexandria, Egypt',des4:'Istanbul, Turkey'},
    {des1:'Abu Dhabi, United Arab Emirates',des2:'Sharjah, United Arab Emirates',des3:'Riyadh, Saudi Arabia',des4:'Jeddah, Saudi Arabia'},
    {des1:'Ain Sokhna, Egypt',des2:'Beirut, Lebanon',des3:'Dahab, Egypt',des4:'Doha, Qatar'},
    {des1:'Aswan, Egypt',des2:'Kuwait',des3:'Ajman, United Arab Emirates',des4:'Amman, Jordan'},
  ] 
  const OSdataRoom=[
    {
      Title:"Adults",
      year:">17years",
      btn1contact:"-",
      btn2contact:"+",
      class:"OS-Ti-Flex",
      id:"1"
    }, {
      Title:"Children",
      year:"<17years",
      btn1contact:"-",
      btn2contact:"+",  
      class:"OS-Ti-Flex OS-Ti-Padding1",
      id:"2"
    },
] 

 
  return (
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
                defaultValue="Istanbul, Turkey"
                size="large"
                className="MS-firstfield OS-firstfiled"
                onClick={toggleHandler}
             
               
              />
              
           
             <div className={destination?"OS-Destination":"OS-DestinationDisplay"}>
               <h1 className='OS-Destination-h1'>popular cities</h1>
              <div>
              {dataCity.map((item,index)=>{
              return <>
                <div className='OS-DestinationFlex'  >
                <p className='OS-Destination-Par'key={index} onClick={(e)=>click(dataCity.id ,e.target.value)}>{item.des1}</p>
                <p className='OS-Destination-Par' key={index}>{item.des2}</p>
                <p className='OS-Destination-Par' key={index}>{item.des3}</p>
                <p className='OS-Destination-Par' key={index}>{item.des4}</p>
                </div>
                </>})}
              </div>
             </div>
<LocalizationProvider dateAdapter={AdapterDayjs} className='OS-Date-co'>
      <DemoContainer components={['DatePicker', 'DatePicker']} className='OS-Date-co'>
        <DatePicker  
         id="outlined-size-small"
        label="Check In"
         defaultValue={dayjs('2022-02-12')}
         className="MS-field1"  size="large"
       format=' ddd/MM/YY'
         /> <DatePicker  
         id="outlined-size-small"
        label="Check Out"
         defaultValue={dayjs('2022-02-12')}
         className="MS-field1"  size="large"
         format=' ddd/MM/YY'
         />
    </DemoContainer>
    </LocalizationProvider>
{/*}  <TextField
                label="Check In"
                id="outlined-size-small"
                size="large"
                 className="MS-field1"
                defaultValue="Fri 12/2"
                
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                       <img  src={date} alt="icon" className="MS-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />*/}
             {/*} <TextField
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
              />*/}
              <TextField
                label="Rooms & Guests"
                id="outlined-size-small"
                defaultValue="1 room, 2 guests"
                value={`${roomCount} Room, ${Count} guests`}
                size="large"
                className="MS-field1 OS-firstfiled1"
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
              <div className={room?"OS-Room":"OS-DestinationDisplay"}>
               {roomList.map((SingleRoom,index)=>{return<>
               <div className='OS-flex-remove'>
               <h1 className='OS-Destination-h1 OS-Room-h1' key={index}>Room{index+1}</h1>
               {roomList.length>1 &&(<h6  key={index} className='OS-removeRoom-Style' onClick={()=>handleRoomremove(index)} >remove</h6>)}
               </div>
              <div className='OS-Ti-Flex OS-All-Padding' key={index}>
              {OSdataRoom.map((item ,index)=>{
              return <>
              <div className={item.class}>
               <img src={user} alt="icon" className="MS-field-icon" />
             <div  className='OS-DivT-Room'>
              <h6 className='OS-h6-Room'>{item.Title}</h6>
              <p  className='OS-p-Room'> {item.year} </p>
              </div>
              <div className='OS-Ti-Flex'>
              <button className='OS-btn-Room'id={item.id} onClick={()=> {if(item.id==1){if(count<=0) {setcount(count)}else{setcount(count-1)}}
              else{if(count1<=0) {setcount1(count1)}else{setcount1(count1-1)}} Count=count+count1}}>{item.btn1contact}</button>
              <p className='OS-pp-Room'  key={index} id={item.id} >{count}</p>
              <p className='OS-pp-Room' key={index} id={item.id}>{count1}</p>
              <button className='OS-btn-Room' id={item.id}onClick={()=>{if(item.id==1){ setcount(count+1)}else{setcount1(count1+1)}}}>{item.btn2contact}</button>
              </div>
              </div>
               </>})}
                </div>
               
                <div className='OS-Ti-FlexStyle'>
                  {roomList.length-1 === index &&(
                  <>
                  <div className='OS-Ti-Flex OS-Ti-Style' onClick={handleRoomAdd}>
                  <div className='OS-Plus-Style'>+</div>
                  <h6  className='OS-AddRoom-Style'>add room</h6>
                  </div>
                  <div className='OS-applyDiv-Style' onClick={RoomHandler}><p className='OS-apply-Style'>Apply</p></div>
                  </>
                )}
              </div>
              </>})}
            </div>
            </div>
            <div className="MS-right">
            <a><img src={plus} alt="plus" className="MS-plus" />Add Promo Code</a>
              <Link to="/Graduation-Project/hotelflow/listing"> <button className="MS-btnFlight"><img src={building} alt="arrow" />Show Places  </button></Link>
            </div>
      </div>
    </>
  )
}