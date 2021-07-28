import React, {useState} from 'react'
import {StatusOnlineIcon, StatusOfflineIcon, BriefcaseIcon,PencilIcon} from '@heroicons/react/solid'

import AgentsAddModal from './AgentsAddModal';
import AgentsEditModal from './AgentsEditModal';

export default function AgentsList() {
    const [showModal,
        setShowModal] = useState(false);
    const handleSubmit = () => {
        setShowModal(true)

    }

    const [showEditModal,
        setShowEditModal] = useState(false);
    const handleEditSubmit = () => {
        setShowEditModal(true)

    }


    return (
        <div>
            <div className="w-full mb-12 xl:mb-0 px-4">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                    <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full md:w-1/2 flex-grow flex-1">
                                <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                    Overview
                                </h6>
                                <h2 className="text-gray-700 text-xl font-semibold">
                                    Agents Status
                                </h2>
                                
                            </div>
                            <div className="">
                                <a href="#" onClick={handleSubmit} class="content-end bg-gradient-to-br from-indigo-700 to-indigo-900 hover:from-indigo-700 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5 text-white">Add Agent</a>
                            </div>
                        </div>
                    </div>
                    {showModal
                        ? <AgentsAddModal showModal={showModal} setShowModal={setShowModal}/>
                        : null}
                    
                    {showEditModal
                        ? <AgentsEditModal showModal={showEditModal} setShowModal={setShowEditModal}/>
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
                                            Agent Name
                                        </th>
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Current Location
                                        </th>
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Contact
                                        </th>
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Total Order
                                        </th>
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Total Amount
                                        </th>
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                        <th
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(10)].map((x, i) => <tr key={i}>

                                        <th
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Agent Name - {i}
                                        </th>
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            Street, Area, City, 123456
                                        </td>
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            +1 - XXXXXXXXXX
                                        </td>
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {i} orders
                                        </td>
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            ${i*100} USD
                                        </td>
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full p-1">
                                                <StatusOnlineIcon className="text-white h-5 w-5"/>
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-full p-1 ml-2">
                                                <StatusOfflineIcon className="text-white h-5 w-5"/>
                                            </button>
                                            <button
                                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-full p-1 ml-2">
                                                <BriefcaseIcon className="text-white h-5 w-5"/>
                                            </button>
                                            </td>
                                        </td>
                                        <td
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button
                                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-full p-1 ml-2" onClick={handleEditSubmit}>
                                                <PencilIcon className="text-white h-5 w-5"/>
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
