import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(props) {
    const [navbarOpen,
        setNavbarOpen] = React.useState(false);
    const title = props.title
    return (
        <nav
            className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div
                className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">

                <a
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="../../index.html">
                    OSAAS
                </a>

                <button
                    className="mobile-menu-button p-4 focus:outline-none md:hidden"
                    onClick={() => {
                    setNavbarOpen(!navbarOpen)
                }}>
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <div
                    className={navbarOpen
                    ? "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shado" +
                        "w-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidd" +
                            "en h-auto items-center flex-1 rounded bg-white m-2 py-3 px-6"
                    : "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shado" +
                        "w-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidd" +
                            "en h-auto items-center flex-1 rounded hidden"}
                    id="example-collapse-sidebar">

                    <div
                        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                        <div class="flex flex-wrap">
                            <div class="w-6/12">
                                <a
                                    class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                    href="../../index.html">
                                    OSAAS
                                </a>
                            </div>
                            <div class="w-6/12 flex justify-end">
                                <button
                                    className="mobile-menu-button p-4 focus:outline-none md:hidden"
                                    onClick={() => {
                                    setNavbarOpen(!navbarOpen)
                                }}>
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Heading --> */}
                    <h6
                        className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Admin Layout Pages
                    </h6>
                    {/* <!-- Navigation --> */}

                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        <li className="items-center">
                            <Link
                                to="/dashboard"
                                className={title === "Dashboard"
                                ? "text-xs uppercase py-3 font-bold block text-indigo-700 hover:text-indigo-600"
                                : "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"}>
                                <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                                Dashboard
                            </Link>
                        </li>

                        <li className="items-center">
                            <Link
                                to="/agents"
                                className={title === "Agents"
                                ? "text-xs uppercase py-3 font-bold block text-indigo-700 hover:text-indigo-600"
                                : "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"}>
                                <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                                Agents
                            </Link>
                        </li>

                        <li className="items-center">
                            <Link
                                to="/orders"
                                className={title === "Orders"
                                ? "text-xs uppercase py-3 font-bold block text-indigo-700 hover:text-indigo-600"
                                : "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"}>
                                <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                                Orders
                            </Link>
                        </li>

                        <li className="items-center">
                            <a
                                href="./maps.html"
                                className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">
                                <i className="fas fa-map-marked mr-2 text-sm text-blueGray-300"></i>
                                Maps
                            </a>
                        </li>
                    </ul>

                    {/* <!-- Divider --> */}
                    <hr className="my-4 md:min-w-full"/>

                </div>
            </div>
        </nav>
    );
}