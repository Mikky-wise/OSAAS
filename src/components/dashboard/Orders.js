import React from 'react'
import {ShoppingBagIcon, PresentationChartBarIcon, ClockIcon, ChartPieIcon} from "@heroicons/react/solid"
import Navbar from './Navbar'
import NavHeader from './NavHeader'
import Header from './Header'
import OrdersData from './OrdersData'

export default function Orders() {
    const card_data = [
        {
            title: "Total Orders",
            number: "350,897",
            change: + 597,
            icon: <ShoppingBagIcon/>
        }, {
            title: "Total Income",
            number: "$2,356 USD",
            change: -348,
            icon: <PresentationChartBarIcon/>
        }, {
            title: "Current Orders",
            number: "10",
            change: -1,
            icon: <ChartPieIcon/>
        }, {
            title: "Past Orders",
            number: "49",
            change: 9,
            icon: <ClockIcon/>
        }
    ]

    return (
        <div>
            <Navbar title="Orders"/>
            <div class="relative md:ml-64 bg-gray-50">
                <NavHeader title="Current/Past Orders"/>
                <Header card_data={card_data}/>
                <OrdersData/>
            </div>
        </div>
    )
}
