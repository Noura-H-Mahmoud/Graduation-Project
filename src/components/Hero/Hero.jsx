import React from 'react';
import './Hero.css';


export default function Hero({ title, para }) {
  return (
    <section className='NM_Hero'>
        <h2 className='NM_cssanimation NM_sequence NM_leBlurInTop'>Helping Others</h2>
        <h1 className='NM_cssanimation NM_sequence NM_leBlurInRight'>
        {title.split("").map((char, index) => (
            <span key={index}>{char}</span> ))}
        </h1>
        <p className='NM_cssanimation NM_sequence NM_leBlurInBottom'>
          {para}
          </p>

    </section>
  );
}

import React from 'react'
import './Hero.css'
export default function Hero({head2,title,para,className}) {
  return (
    <section className={`${className}`}>
        <h2>{head2}</h2>
        <h1>{title}</h1>
        <p>{para}</p>
    </section>
  )
}
