// import './Favouritesmain.css'
// import img1 from './../../assets/images/Hotel-listing-1.png'
// import img2 from './../../assets/images/Location-f.svg'
// import img3 from './../../assets/images/star-f.svg'
// import img4 from './../../assets/images/cafe-f.svg'
// import img5 from './../../assets/images/Place-2-f.png'
// import img6 from './../../assets/images/Place-3-f.png'
// import img7 from './../../assets/images/NMLastInfo.jpeg'
// import whiteHeart from '../.././assets/images/NMwhiteheart.svg'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// <<<<<<< HEAD
// import { useLocation } from 'react-router-dom';


// export default function Favoritesmain() {
//     const location = useLocation();
//     const isListingPage = location.pathname === '/hotelflow/listing';
//     let info = [
// =======
// import React, { useState,useEffect  } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";


// export default function Favoritesmain () {
//     useEffect(() => {
//         AOS.init();
//         AOS.refresh();
//       }, []);
//     const info = [
// >>>>>>> origin/MOHAMMAD_B_HELL
//         {
//             id: 1,
//             title: "CVK Park Bosphorus Hotel Istanbul",
//             location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
//             reviews: "371 reviews",
//             price: "240 $",
//             image: img1
//         },
//         {
//             id: 2,
//             title: "Eresin Hotels Sultanahmet - Boutique Class",
//             location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
//             reviews: "54 reviews",
//             price: "104 $",
//             image: img5
//         },
//         {
//             id: 3,
//             title: "Eresin Hotels Sultanahmet - Boutique Class",
//             location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
//             reviews: "54 reviews",
//             price: "104 $",
//             image: img6
//         }
// <<<<<<< HEAD
//     ];

//     // Check if it's the listing page and modify info array accordingly
//     if (isListingPage) {
//         info = [
//             ...info,
//             {
//                 id: 4,
//                 title: "Eresin Hotels Sultanahmet - Boutique Class",
//                 location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
//                 reviews: "54 reviews",
//                 price: "104 $",
//                 image: img7
//             }
//         ];
//     }

//     return (
//         <section className={isListingPage ? 'MH-favorites-main NM' : 'MH-favorites-main'}>
//             {info.map((item, index) => (
//                 <div key={item.id} className={isListingPage ? 'MH-favorites-box NM' : 'MH-favorites-box'}>
//                     <div className={isListingPage ? 'MH-image NM' : 'MH-image'}>
//                         <img src={item.image} alt="not-found" />
//                     </div>
//                     <div className={isListingPage ? 'MH-favorites-info NM' : 'MH-favorites-info'}>
//                         <div className={isListingPage ? 'MH-infos NM' : 'MH-infos'}>
//                             <div className={isListingPage ? 'MH-info1 NM' : 'MH-info1'}>
//                                 <h2>{item.title}</h2>
//                                 <div className={isListingPage ? 'MH-location NM' : 'MH-location'}>
//                                     <img src={img2} alt="not-found" />
//                                     <span>{item.location}</span>
//                                 </div>
//                                 <div className={isListingPage ? 'MH-star NM' : 'MH-star'}>
//                                     <div className={isListingPage ? 'MH-star1 NM' : 'MH-star1'}>
//                                         <img src={img3} alt="not-found" />
//                                         <img src={img3} alt="not-found" />
//                                         <img src={img3} alt="not-found" />
//                                         <img src={img3} alt="not-found" />
//                                         <img src={img3} alt="not-found" />
//                                         <span>5 Star Hotel</span>
//                                     </div>
//                                     <div className={isListingPage ? 'MH-star2 NM' : 'MH-star2'}>
//                                         <img src={img4} alt="" />
//                                         <p>  <span>20+ </span>Aminities</p>
// =======
//     ]
//     const [heartStates, setHeartStates] = useState(info.map(() => false));
//     const toggleHeartState = (index) => {
//         const newHeartStates = heartStates.map((state, i) => i === index?!state : state);
//         setHeartStates(newHeartStates);
//     };

//     return (
//         <section className='MH-favorites-main'>
//             {
//                             info.map((item , index) => {
//                                 return (
//                                     <div key={item.id} className="MH-favorites-box" data-aos="fade-up"
//                                     data-aos-duration="2000">
//                                     <div className="MH-image">
//                                         <div className="MH-number-img">
//                                             <p>9 images</p>
//                                         </div>
//                                         <img src={item.image} alt="not-found" />
//                                     </div>
//                                     <div className="MH-favorites-info">
//                                         <div className="MH-infos">
//                                         <div className="MH-info1">
//                                             <h2>{item.title}</h2>
//                                             <div className="MH-location">
//                                                 <img src={img2} alt="not-found" />
//                                                 <span>{item.location}</span>
//                                             </div>
//                                             <div className="MH-star">
//                                                 <div className="MH-star1">
//                                                 <img src={img3} alt="not-found" />
//                                                 <img src={img3} alt="not-found" />
//                                                 <img src={img3} alt="not-found" />
//                                                 <img src={img3} alt="not-found" />
//                                                 <img src={img3} alt="not-found" />
//                                                 <span>5 Star Hotel</span>
//                                                 </div>
//                                                 <div className="MH-star2">
//                                                     <img src={img4} alt="" />
//                                                   <p>  <span>20+ </span>Aminities</p>
//                                                 </div>
//                                             </div>
//                                             <div className="MH-evaluation">
//                                                 <div className="MH-number"><span>4.2</span></div>
//                                                 <p><span>Very Good </span>{item.reviews}</p>
//                                             </div>
//                                         </div>
//                                         <div className="MH-info2">
//                                             <span>starting from</span>
//                                             <p>{item.price}<span>/night</span></p>
//                                             <p className='MH-excl'>excl.tax</p>
//                                         </div>
//                                         </div>
//                                         <div className="MH-box-button">
//                                             <div className="MH-box-button1">
//                                             <FontAwesomeIcon 
//                                         icon={faHeart} 
//                                         color={heartStates[index]? "#FF8500" : "black"} 
//                                         onClick={() => toggleHeartState(index)} 
//                                     />

//                                             </div>
//                                             <div className="MH-box-button2">
//                                                 <button>View Place</button>
//                                             </div>
//                                         </div>
// >>>>>>> origin/MOHAMMAD_B_HELL
//                                     </div>
//                                 </div>
//                                 <div className={isListingPage ? 'MH-evaluation NM' : 'MH-evaluation'}>
//                                     <div className={isListingPage ? 'MH-number NM' : 'MH-number'}>
//                                         <span>4.2</span>
//                                     </div>
//                                     <p><span>Very Good </span>{item.reviews}</p>
//                                 </div>
//                             </div>
//                             <div className={isListingPage ? 'MH-info2 NM' : 'MH-info2'}>
//                                 <span>starting from</span>
//                                 <p>{item.price}<span>/night</span></p>
//                                 <p className={isListingPage ? 'MH-excl NM' : 'MH-excl'}>excl.tax</p>
//                             </div>
//                         </div>
//                         <div className={isListingPage ? 'MH-box-button NM' : 'MH-box-button'}>
//                             <div className={isListingPage ? 'MH-box-button1 NM' : 'MH-box-button1'}>
//                                 {isListingPage && index >= 1 ? (
//                                     <img src={whiteHeart} alt="white-heart" />
//                                 ) : (
//                                     <FontAwesomeIcon icon={faHeart} />
//                                 )}
//                             </div>

//                             <div className={isListingPage ? 'MH-box-button2 NM' : 'MH-box-button2'}>
//                                 <button>View Place</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </section>
//     )
// }
import './Favouritesmain.css'
import img1 from './../../assets/images/Hotel-listing-1.png'
import img2 from './../../assets/images/Location-f.svg'
import img3 from './../../assets/images/star-f.svg'
import img4 from './../../assets/images/cafe-f.svg'
import img5 from './../../assets/images/Place-2-f.png'
import img6 from './../../assets/images/Place-3-f.png'
import img7 from './../../assets/images/NMLastInfo.jpeg'
import whiteHeart from '../.././assets/images/NMwhiteheart.svg'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'

export default function Favoritesmain() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
        AOS.refresh();
    }, []);

    const location = useLocation();
    const isListingPage = location.pathname === '/Graduation-Project/hotelflow/listing';

    const initialInfo = [
        {
            id: 1,
            title: "CVK Park Bosphorus Hotel Istanbul",
            location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
            reviews: "371 reviews",
            price: "240 $",
            image: img1,
            isFavorite: false
        },
        {
            id: 2,
            title: "Eresin Hotels Sultanahmet - Boutique Class",
            location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
            reviews: "54 reviews",
            price: "104 $",
            image: img5,
            isFavorite: isListingPage ? true :false
        },
        {
            id: 3,
            title: "Eresin Hotels Sultanahmet - Boutique Class",
            location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
            reviews: "54 reviews",
            price: "104 $",
            image: img6,
            isFavorite: isListingPage ? true :false
        }
    ];

    const [info, setInfo] = useState(isListingPage ? initialInfo.concat({
        id: 4,
        title: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
        reviews: "54 reviews",
        price: "104 $",
        image: img7,
        isFavorite: isListingPage ? true :false
    }) : initialInfo);

    const toggleFavorite = (index) => {
        const updatedInfo = [...info];
        updatedInfo[index].isFavorite = !updatedInfo[index].isFavorite;
        setInfo(updatedInfo);
    };

    return (
        <section className={isListingPage ? 'MH-favorites-main NM' : 'MH-favorites-main'}>
            {info.map((item, index) => (
                <div key={item.id} className={isListingPage ? 'MH-favorites-box NM' : 'MH-favorites-box'}>
                    <div className={isListingPage ? 'MH-image NM' : 'MH-image'} data-aos='flip-right'>
                        <div className={isListingPage ? 'MH-number-img NM' : 'MH-number-img'}>
                            <p>9 images</p>
                        </div>
                        <img src={item.image} alt="not-found" />
                    </div>
                    <div className={isListingPage ? 'MH-favorites-info NM' : 'MH-favorites-info'} data-aos='fade-right'>
                        <div className={isListingPage ? 'MH-infos NM' : 'MH-infos'}>
                            <div className={isListingPage ? 'MH-info1 NM' : 'MH-info1'}>
                                <h2>{item.title}</h2>
                                <div className={isListingPage ? 'MH-location NM' : 'MH-location'}>
                                    <img src={img2} alt="not-found" />
                                    <span>{item.location}</span>
                                </div>
                                <div className={isListingPage ? 'MH-star NM' : 'MH-star'}>
                                    <div className={isListingPage ? 'MH-star1 NM' : 'MH-star1'}>
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <img src={img3} alt="not-found" />
                                        <span>5 Star Hotel</span>
                                    </div>
                                    <div className={isListingPage ? 'MH-star2 NM' : 'MH-star2'}>
                                        <img src={img4} alt="" />

                                        <p> <span>20+ </span>Aminities</p>
                                    </div>
                                </div>
                                <div className={isListingPage ? 'MH-evaluation NM' : 'MH-evaluation'}>
                                    <div className={isListingPage ? 'MH-number NM' : 'MH-number'}>
                                        <span>4.2</span>
                                    </div>
                                    <p><span>Very Good </span>{item.reviews}</p>
                                </div>
                            </div>
                            <div className={isListingPage ? 'MH-info2 NM' : 'MH-info2'}>
                                <span>starting from</span>
                                <p>{item.price}<span>/night</span></p>
                                <p className={isListingPage ? 'MH-excl NM' : 'MH-excl'}>excl.tax</p>
                            </div>
                        </div>
                        <div className={isListingPage ? 'MH-box-button NM' : 'MH-box-button'}>
                            <div className={isListingPage ? 'MH-box-button1 NM' : 'MH-box-button1'} onClick={() => toggleFavorite(index)}>
                                {item.isFavorite ? (
                                    <img src={whiteHeart} alt="white-heart" />
                                ) : (
                                    <FontAwesomeIcon icon={faHeart} />
                                )}
                            </div>

                            <div className={isListingPage ? 'MH-box-button2 NM' : 'MH-box-button2'} data-aos='flip-up'>
                                {isListingPage ? (
                                    <Link className='NM_ViewPlaceBtn' to="/Graduation-Project/hotelflow/detail" rel="noopener noreferrer">
                                        <button>
                                            View Place
                                        </button>
                                    </Link>
                                ) : (
                                    <button>View Place</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}