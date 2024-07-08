import React, { useEffect } from 'react'
import './HotelListingThree.css'
import OSLine from './../../assets/images/line.svg'
import'aos/dist/aos.css'
import Aos from 'aos'
export default function HotelListingThree  ()  {
    const OSArrayRoom=[
        {
        paragraf:'Superior room - 1 double bed or 2 twin beds',
        img:'../src/assets/images/Room-3.png',
        line:'../src/assets/images/line.svg',
        paragraff:'$240',
        span:'/night',
        btn:'Book now',
       
        },
        {
         paragraf:'Superior room - City view - 1 double bed or 2 twin beds',
         img:'../src/assets/images/Room-4.png',
         line:'../src/assets/images/line.svg',  
         paragraff:'$280',
         span:'/night',
         btn:'Book now', 
    
        },
        {
        paragraf:'Superior room - City view - 1 double bed or 2 twin beds',
        img:"../src/assets/images/Room-2.png",
        line:'../src/assets/images/line.svg', 
        paragraff:'$320',
        span:'/night',
        btn:'Book now', 
      
        }, 
        {
        paragraf:'Superior room - City view - 1 double bed or 2 twin beds',
        img:"../src/assets/images/Room-2.png", 
        line:'../src/assets/images/line.svg', 
        paragraff:'$350',
        span:'/night',
        btn:'Book now',
        class:'line1'
          
        } 
        ]
        useEffect(()=>{Aos.init();},[])
  return (
    <section className='OS-Section-three'data-aos="fade-up"data-aos-easing="linear"data-aos-duration="1500">
      <div className='OS-Line_Img'><img className='line' src={OSLine} alt="Line" />
      </div>
      <div>
        <h2 className='OS-Title-Available'>Available Rooms</h2>
        <div className='OS-Room-Div'>
           {OSArrayRoom.map((item)=>{
             return<div>
              <div className='OS-Room-Big'>
             <div className='OS-Room-av'>
             <img className='' src={item.img} alt="reviews" />
             <p className='OS-ROOM-par'>{item.paragraf}</p>
             </div>
             <div>
            <div className='OS-Room-av OS-Room-avv'> 
           <p className='OS-Text-style OS-Text-Color'>{item.paragraff} <span className='OS-TextSpan-style'>{item.span}</span></p>
           <button className='OS-Btn-Room'>{item.btn}</button>
             </div>
             </div>
             </div>
            <div className={item.class}><img className='line' src={item.line} alt="reviews" /></div> 
            </div>})}
            
            
            </div>
      </div>
    </section>
  )
}


