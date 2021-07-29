import React from 'react'

export default function AgentsEditModal(props) {
    const setShowModal = props.setShowModal
    return ( <> <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 max-w-6xl">
            {/*content*/}
            <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <p class="text-lg xl:text-xl text-gray-600">
                        Edit Agent
                    </p>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}></button>
                </div>

                {/*body*/}
                <div class="flex items-center flex-wrap my-12 md:px-10 md:mx-10">
                    <div class="w-full md:w-1/2 px-2 hidden md:block">
                        <img src="./agent.svg" alt="Delivery Solution for Businesses"/>
                    </div>
                    <div class="w-full md:w-1/2 px-10 mx-5 md:px-2 md:mx-0">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Name"/>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Email
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"/>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Location
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="contact">
                                    Contact
                                </label>
                                <input
                                    class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="contact"
                                    type="number"
                                    placeholder="Contact"/>

                            </div>
                            <div class="flex items-center justify-between">
                                <button
                                    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Save Changes
                                </button>
                                <button
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Delete Agent
                                </button>
                            </div>
                        </form>
                        <p class="text-center text-gray-500 text-xs">
                            &copy;2021 OSAAS Corp. All rights reserved.
                        </p>
                    </div>

                </div>
                {/*footer*/}
                <div
                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="bg-emerald-500 text-red-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div> < div className = "opacity-25 fixed inset-0 z-40 bg-black" style = {{ "margin-left": "auto" }} > </div> </>
    )
}