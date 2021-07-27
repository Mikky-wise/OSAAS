import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import NavHeader from './NavHeader'
import {UserGroupIcon,StatusOnlineIcon,BriefcaseIcon,StatusOfflineIcon} from "@heroicons/react/solid"
import AgentsData from './AgentsData'

export default function Agents() {
    const card_data = [
        {
            title : "Total Agents",
            number : "50",
            change : +3,
            icon : <UserGroupIcon/>
        },
        {
            title : "Agents Available",
            number : "10",
            change : -3,
            icon : <StatusOnlineIcon/>
        },
        {
            title : "Agents Working",
            number : "25",
            change : -1,
            icon : <BriefcaseIcon/>
        },
        {
            title : "Agents Unavailable",
            number : "15",
            change : 9,
            icon : <StatusOfflineIcon/>
        }
    ]

    return (
        <div>
            <Navbar title="Agents"/>
            <div class="relative md:ml-64 bg-gray-50">
                <NavHeader title="Agents"/>
                <Header card_data={card_data}/>
                <AgentsData />
            </div>
        </div>
    )
}
