import React from 'react'
import Navbar from './Navbar'
import NavHeader from './NavHeader'
import Header from './Header'
import SettingsForm from './SettingsForm'
import {TicketIcon, LockOpenIcon, LockClosedIcon} from "@heroicons/react/solid"

export default function Settings() {
    return (
        <div>
            <Navbar title="Settings"/>
            <div class="relative md:ml-64 bg-gray-50">
                <NavHeader title="Profile Settings"/>
                <Header card_data={[]}/>
                <div className="flex flex-wrap">
                    <SettingsForm/>
                </div>
            </div>
        </div>

    )
}
