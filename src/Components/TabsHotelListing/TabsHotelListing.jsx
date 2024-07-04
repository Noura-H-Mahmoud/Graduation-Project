import React from 'react'
import Favoritesmain from '../Favorites-main/Favoritesmain'
import './TabsHotelListing.css'
import chevrondown from '../../assets/images/NMchevrondown.svg'
import { Tab, Tabs } from 'react-bootstrap'

export default function TabsHotelListing() {
    return (
        <section className='NM_HotelListing'>
            <div>box</div>
            <div className='NM_MainSection'>
                <div className='NM_filter'>filter</div>
                <div className='NM_Part2'>
                    <div className='NM_Tabs'>
                        <div className='NM_Head'>
                            <Tabs
                                defaultActiveKey="hotel"
                                id="uncontrolled-tab-example"
                                className="NM_tabs"
                            >
                                <Tab eventKey="hotel" title="Hotels" className='NM_Tap'>
                                    <div className="NM_LineInfo">
                                        <p>Showing 4 of <span> 257 places</span></p>
                                        <p className='NM_ParaN'>
                                            Sort by <b>Recommended</b>
                                            <img src={chevrondown} alt="chevronDown" />
                                        </p>
                                    </div>
                                    <Favoritesmain isListingPage={true} />
                                </Tab>
                                <Tab eventKey="motel" title="Motels" className='NM_Tap'>
                                    <div className="NM_LineInfo">
                                        <p>Showing 4 of <span> 51 places</span></p>
                                        <p className='NM_ParaN'>
                                            Sort by <b>Recommended</b>
                                            <img src={chevrondown} alt="chevronDown" />
                                        </p>
                                    </div>
                                    <Favoritesmain isListingPage={true} />
                                </Tab>
                                <Tab eventKey="resort" title="Resorts" className='NM_Tap'>
                                    <div className="NM_LineInfo">
                                        <p>Showing 4 of <span> 72 places</span></p>
                                        <p className='NM_ParaN'>
                                            Sort by <b>Recommended</b>
                                            <img src={chevrondown} alt="chevronDown" />
                                        </p>
                                    </div>
                                    <Favoritesmain isListingPage={true} />
                                </Tab>
                            </Tabs>

                        </div>
                        {/* <Favoritesmain isListingPage={true} /> */}
                    </div>
                    <input className='NM_btnListing' type="button" value="Show more results" />
                </div>
            </div>
        </section>
    )
}
