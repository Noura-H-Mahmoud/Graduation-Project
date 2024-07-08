import React, { useState } from 'react';
import "./TabsAccount.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import change from "./../../assets/images/change.svg"
import plus from "./../../assets/images/plus.svg"
import TicketsFlights from '../../Components/TicketsFlights/TicketsFlights'
import PaymentMethods from '../PaymentMethods/PaymentMethods';

export default function TabsAccount() {
    const [dataAccount, setDataAccount] = useState([
        {
            id: 1,
            accountSpan: "Name",
            accountParg: "John Doe",
            showButton: false,
            isEditing: false,
        },
        {
            id: 2,
            accountSpan: "Email",
            accountParg: "john.doe@gmail.com",
            showButton: true,
            isEditing: false,
        },
        {
            id: 3,
            accountSpan: "Password",
            accountParg: "************",
            showButton: false,
            isEditing: false,
        },
        {
            id: 4,
            accountSpan: "Phone number",
            accountParg: "+1 000-000-0000",
            showButton: false,
            isEditing: false,
        },
        {
            id: 5,
            accountSpan: "Address",
            accountParg: "St 32 main downtown, Los Angeles, California, USA",
            showButton: false,
            isEditing: false,
        },
        {
            id: 6,
            accountSpan: "Date of birth",
            accountParg: "01-01-1992",
            showButton: false,
            isEditing: false,
        },
    ]);
    const handleEditClick = (id) => {
        setDataAccount(dataAccount.map(item =>
            item.id === id ? { ...item, isEditing: !item.isEditing } : item
        ));
    };
    const handleInputChange = (id, value) => {
        setDataAccount(dataAccount.map(item =>
            item.id === id ? { ...item, accountParg: value } : item
        ));
    };
    return (
        <>
            <div className='MS-TabContainer'>
                <Tabs
                    defaultActiveKey="Account"
                    id="uncontrolled-tab-example"
                    className="mb-3 MS-tabs MS-TabAccount"
                >
                    <Tab eventKey="Account" title={<spsn className="MS-span MS-border2">Account</spsn>} className="Ms-tabhome">
                        <h6 className='MS-HeaderAccount'>Account</h6>
                        <div className='MS-infoAcount' data-aos="zoom-in">

                            {dataAccount.map((accountCard) => (
                                <>
                                    <div className='MS-accountCard' key={accountCard.id}>
                                        <div className='MS-infoDescription'>
                                            <span>{accountCard.accountSpan}</span>
                                            {accountCard.isEditing ? (
                                                <input
                                                    type="text"
                                                    value={accountCard.accountParg}
                                                    onChange={(e) => handleInputChange(accountCard.id, e.target.value)}
                                                    className='MS-input-filed'
                                                />
                                            ) : (
                                                <p>{accountCard.accountParg}</p>
                                            )}
                                        </div>
                                        <div>
                                            {accountCard.showButton && <button className='MS-accountbtn  MS-accountbtn1'><img src={plus} alt="plus" />Add another email</button>}
                                            <button
                                                className='MS-accountbtn'
                                                onClick={() => handleEditClick(accountCard.id)}
                                            >
                                                <img src={change} alt="change" />{accountCard.isEditing ? 'Save' : 'Change'}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )
                            )}
                        </div>
                    </Tab>
                    <Tab eventKey="History" title={<spsn className="MS-span MS-border2">History</spsn>}>
                        <TicketsFlights />
                    </Tab>
                    <Tab eventKey="Payment methods" title={<spsn className="MS-span">Payment methods</spsn>}>
                   <PaymentMethods />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
