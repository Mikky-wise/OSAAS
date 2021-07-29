import React, {useState} from 'react'
import {StatusOnlineIcon, StatusOfflineIcon, BriefcaseIcon} from '@heroicons/react/solid'

import AgentsAddModal from './AgentsAddModal';

export default function OrdersData() {

    const [showModal,
        setShowModal] = useState(false);
    const handleSubmit = () => {
        setShowModal(true)

    }

    return (
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <div class="flex flex-wrap mt-4">
                <div class="w-full mb-12 px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-lg text-indigo-700">
                                        Current/Past Orders
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <table
                            className="items-center w-full bg-transparent border-collapse table-auto">
                            <thead>
                                <tr>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Order Vendor
                                    </th>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        From Location
                                    </th>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        To Location
                                    </th>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Budget
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(10)].map((x, i) => <tr key={i}>

                                    <th
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        Vendor Name
                                    </th>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Street, Area, City, 123456
                                    </td>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Street, Area, City, 123456
                                    </td>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        $200 USD
                                    </td>

                                </tr>)}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}