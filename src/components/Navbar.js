
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Singup";

export default function Navbar() {

    const [showLoginModal,
        setshowLoginModal] = useState(false);
    const [showSignupModal,
        setshowSignupModal] = useState(false);

    const handleModal = (type) => {
        (type === "login")
            ? setshowLoginModal(true)
            : setshowSignupModal(true)

    }

    return (
        <header
            class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 py-4 lg:py-6 flex justify-between">
            <a href="#">
                <span class="sr-only">OSaaS landing page</span>
                <svg
                    class="h-8"
                    viewBox="0 0 184 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M29.3143 0C32.35 0 34.8108 2.47421 34.8108 5.52632V29.4737C34.8108 32.5258 32.35 35 29.3143 35H5.49642C2.46083 35 -2.28882e-05 32.5258 -2.28882e-05 29.4737V5.52632C-2.28882e-05 2.47421 2.46083 0 5.49642 0H29.3143ZM29.0261 23.741H28.2235C27.6313 23.741 27.1511 23.1893 27.1511 22.5088V12.6429C27.1511 11.8788 27.6904 11.259 28.3555 11.259H29.0261C29.6911 11.259 30.2304 11.8788 30.2304 12.6429V22.3572C30.2304 23.1213 29.6911 23.741 29.0261 23.741ZM11.3085 28.5526H12.111C12.776 28.5526 13.3153 27.9329 13.3153 27.1687V7.83123C13.3153 7.06707 12.776 6.44737 12.111 6.44737H11.4404C10.7753 6.44737 10.236 7.06707 10.236 7.83123V27.3204C10.236 28.0008 10.7162 28.5526 11.3085 28.5526ZM23.3877 28.5526H22.5851C21.9929 28.5526 21.5128 28.0008 21.5128 27.3204V7.83123C21.5128 7.06707 22.0521 6.44737 22.7171 6.44737H23.3877C24.0528 6.44737 24.5921 7.06707 24.5921 7.83123V27.1687C24.5921 27.9329 24.0528 28.5526 23.3877 28.5526ZM5.67002 23.741H6.47259C7.13766 23.741 7.67695 23.1213 7.67695 22.3572V12.6429C7.67695 11.8788 7.13766 11.259 6.47259 11.259H5.80193C5.13695 11.259 4.59766 11.8788 4.59766 12.6429V22.5088C4.59766 23.1893 5.07787 23.741 5.67002 23.741ZM17.7494 24.1324H16.9468C16.3546 24.1324 15.8744 23.5807 15.8744 22.9001V13.31C15.8744 12.5456 16.4136 11.9262 17.0787 11.9262H17.7494C18.4143 11.9262 18.9536 12.5456 18.9536 13.31V22.7485C18.9536 23.5127 18.4143 24.1324 17.7494 24.1324Z"
                        fill="#4f46e5" />
                </svg>
            </a>
            <nav class="flex items-center space-x-4">
                <a
                    href="#"
                    onClick={() => handleModal("login")}
                    class="flex space-x-1 items-center hover:text-gray-500">
                    <svg
                        class="hidden sm:inline w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>Sign in</span>
                </a>
                {showLoginModal
                    ? <Login
                        setshowLoginModal={setshowLoginModal}
                        setshowSignupModal={setshowSignupModal} />
                    : null}
                <a
                    href="#"
                    onClick={() => handleModal("signup")}
                    class="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5 text-white ">Sign up</a>
                {showSignupModal
                    ? <Signup
                        setshowLoginModal={setshowLoginModal}
                        setshowSignupModal={setshowSignupModal} />
                    : null}
            </nav>
        </header>
    );
}