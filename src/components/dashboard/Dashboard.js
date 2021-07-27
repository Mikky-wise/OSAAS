import React from "react";
import DashboardData from "./DashboardData";
import Header from "./Header";
import Navbar from "./Navbar";
import NavHeader from "./NavHeader";
import {ShoppingBagIcon,PresentationChartBarIcon,ClockIcon, ChartPieIcon} from "@heroicons/react/solid"

export default function Dashboard() {
    const card_data = [
        {
            title : "Total Orders",
            number : "350,897",
            change : 3.48,
            icon : <ShoppingBagIcon/>
        },
        {
            title : "Transactions",
            number : "$2,356 USD",
            change : -3.48,
            icon : <PresentationChartBarIcon/>
        },
        {
            title : "Pending Orders",
            number : "10",
            change : -1.10,
            icon : <ClockIcon/>
        },
        {
            title : "Performance",
            number : "49.65%",
            change : 9.65,
            icon : <ChartPieIcon/>
        }
    ]
    return (
        <div>
            <Navbar title="Dashboard"/>
            <div class="relative md:ml-64 bg-gray-50">
                <NavHeader title="Dashboard"/>
                <Header
                    card_data = {card_data}
                />
                <DashboardData />
            </div>

        </div>
    )
}