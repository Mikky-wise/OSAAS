import React from 'react'
import {TicketIcon, LockOpenIcon, LockClosedIcon} from "@heroicons/react/solid"
import Navbar from './Navbar'
import NavHeader from './NavHeader'
import Header from './Header'
import FeedbackData from './FeedbackData'

export default function Feedback() {
    const card_data = [
        {
            title: "Total Tickets",
            number: "350",
            change: + 59,
            icon: <TicketIcon/>
        }, {
            title: "Open Ticket",
            number: "56",
            change: -34,
            icon: <LockOpenIcon/>
        }, {
            title: "Closed Tickets",
            number: "10",
            change: -1,
            icon: <LockClosedIcon/>
        }
    ]

    return (
        <div>
            <Navbar title="Feedback"/>
            <div class="relative md:ml-64 bg-gray-50">
                <NavHeader title="Feedback Tickets"/>
                <Header card_data={card_data}/>
                <FeedbackData/>
            </div>
        </div>
    )

}
