import React from 'react'
import {BriefcaseIcon, ShoppingBagIcon,} from '@heroicons/react/solid'
export default function SettingsForm() {
    return (
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <div class="flex flex-wrap">
                <div class="w-full lg:w-8/12 px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
                                <h6 class="text-blueGray-700 text-xl font-bold">
                                    My account
                                </h6>
                                <button
                                    class="bg-indigo-700 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button">
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
                            <form>
                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="lucky.jesse"/>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="jesse@example.com"/>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="Lucky"/>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="Jesse"/>
                                        </div>
                                    </div>
                                </div>

                                <hr class="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Contact Information
                                </h6>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-12/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-4/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                City
                                            </label>
                                            <input
                                                type="email"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="New York"/>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-4/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="United States"/>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-4/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Postal Code
                                            </label>
                                            <input
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value="Postal Code"/>
                                        </div>
                                    </div>
                                </div>

                                <hr class="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About Me
                                </h6>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-12/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                About me
                                            </label>
                                            <textarea
                                                type="text"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                rows="4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </textarea >
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4 flex justify-center">
                                    <div class="relative mt-2">
                                        <img
                                            alt="..."
                                            src="./pp.png"
                                            class="shadow-xl rounded-full h-48 align-middle border-none"/>
                                    </div>
                                </div>
                                <div class="w-full px-4 text-center ">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                22
                                            </span>
                                            <span class="text-sm text-blueGray-400">Agents</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                1000
                                            </span>
                                            <span class="text-sm text-blueGray-400">Orders</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                89
                                            </span>
                                            <span class="text-sm text-blueGray-400">Feedback</span >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    Jenna Stones
                                </h3>
                                <div
                                    class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    
                                    Los Angeles, California
                                </div>
                                <div class="mb-2 text-blueGray-600 mt-10">
                                    
                                    Solution Manager
                                </div>
                                <div class="mb-2 text-blueGray-600">
                                    
                                    Courier Services
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>)}