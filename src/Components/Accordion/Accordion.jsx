import React from 'react'
import { useState } from 'react';
import './Accordion.css'
import arrowTop from './../../assets/images/arrowtop.svg'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function Accordion() {
  const [openItems, setOpenItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const toggleOpen = (item) => {
    setOpenItems(prevState => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };
  const [valueprice, setValuePrice] = useState([50, 1200]);

  const handleChangeprice = (event, newValue) => {
    setValuePrice(newValue);
  };
  return (
    <>
         <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleOpen('item1')}>
          <div className='MS-headAcord'>
          <p>Price</p>
          <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.item1 ? 'open' : ''}`} />
          </div>
        </div>
        {openItems.item1 && <div className="accordion-content">
          <Box  sx={{width: {xs: 200,sm: 250,md: 300,}}}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <Slider
        value={valueprice}
        onChange={handleChangeprice}
        valueLabelDisplay="auto"
        min={50}
        max={1200}
        sx={{
          '& .MuiSlider-thumb': {
            color: '#FF8500',
          },
          '& .MuiSlider-track': {
            color: '#112211',
          },
          '& .MuiSlider-rail': {
            color: 'grey.400',
          },
        }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography>
          50$
        </Typography>
        <Typography>
          1200$
        </Typography>
      </Box>
    </Box>
          </div>}
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleOpen('item2')}>
          <div className='MS-headAcord'>
          <p>Rating</p>
          <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.item2 ? 'open' : ''}`} />
          </div>
        </div>
        {openItems.item2 && <div className="accordion-content">
          <div className='MS-rating'>
          <p>0+</p>
          <p>1+</p>
          <p>2+</p>
          <p>3+</p>
          <p>4+</p>
          </div>
          </div>}
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleOpen('item3')}>
          <div className='MS-headAcord'>
          <p>Freebies</p>
          <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.item3 ? 'open' : ''}`} />
          </div>
        </div>
        {openItems.item3 && <div className="accordion-content">
          <form className='MS-form'>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1" id='input1' />
            <label for="input1" className='MS-lable'>Free breakfast</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1"  id='input2'/>
            <label for="input2" className='MS-lable'>Free parking</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1" id='input3' />
            <label for="input3" className='MS-lable'>Free internet</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1"  id='input4'/>
            <label for="input4"  className='MS-lable'>Free airport shuttle</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1"  id='input5'/>
            <label for="input5"  className='MS-lable'>Free cancellation</label>
            </div>
          </form>
          </div>}
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleOpen('item4')}>
          <div className='MS-headAcord'>
          <p>Amenities</p>
          <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.item4 ? 'open' : ''}`} />
          </div>
        </div>
        {openItems.item4 && <div className="accordion-content">
          <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1" id='check1' />
            <label for="check1"  className='MS-lable'>24hr front desk</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1" id='check2'/>
            <label for="check2"  className='MS-lable'>Air-conditioned</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1" id='check3'/>
            <label for="check3" className='MS-lable'>Fitness</label>
            </div>
            <div className='MS-check-box'>
            <input type="checkbox" name="option1" value="Option1" id='check4' />
            <label for="check4" className='MS-lable'>Pool</label>
            </div>
            <p className='MS-RedPargraph'>+24 more</p>
          </div>}
      </div>
    </>
  )
}
