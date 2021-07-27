import React, {useState} from 'react'
import {CheckIcon, XIcon} from '@heroicons/react/solid'
import DashboardActionModal from './DashboardActionModal';
export default function PendingOrder() {
    const [showModal,
        setShowModal] = useState(false);
    const handleSubmit = () => {
        setShowModal(true)

    }

    return (
        <div>
            <div className="w-full mb-12 xl:mb-0 px-4">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                    <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                    Overview
                                </h6>
                                <h2 className="text-gray-700 text-xl font-semibold">
                                    Pending Orders
                                </h2>
                            </div>
                        </div>
                    </div>
                    {showModal
                        ? <DashboardActionModal showModal={showModal} setShowModal={setShowModal}/>
                        : null}
                    <div className="p-4 flex-auto">
                        {/* <!-- Chart --> */}
                        <div className="block w-full overflow-x-auto ">
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
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
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
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full p-1"
                                                onClick={handleSubmit}>
                                                <CheckIcon className="text-white h-5 w-5"/>
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-full p-1 ml-2">
                                                <XIcon className="text-white h-5 w-5"/>
                                            </button>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
