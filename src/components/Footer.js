import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <footer class="bg-white text-gray-600 py-12 xl:pb-24">
            <div class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 mb-12 lg:mb-16">
                <svg
                    class="h-8"
                    viewBox="0 0 184 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M29.3143 0C32.35 0 34.8108 2.47421 34.8108 5.52632V29.4737C34.8108 32.5258 32.35 35 29.3143 35H5.49642C2.46083 35 -2.28882e-05 32.5258 -2.28882e-05 29.4737V5.52632C-2.28882e-05 2.47421 2.46083 0 5.49642 0H29.3143ZM29.0261 23.741H28.2235C27.6313 23.741 27.1511 23.1893 27.1511 22.5088V12.6429C27.1511 11.8788 27.6904 11.259 28.3555 11.259H29.0261C29.6911 11.259 30.2304 11.8788 30.2304 12.6429V22.3572C30.2304 23.1213 29.6911 23.741 29.0261 23.741ZM11.3085 28.5526H12.111C12.776 28.5526 13.3153 27.9329 13.3153 27.1687V7.83123C13.3153 7.06707 12.776 6.44737 12.111 6.44737H11.4404C10.7753 6.44737 10.236 7.06707 10.236 7.83123V27.3204C10.236 28.0008 10.7162 28.5526 11.3085 28.5526ZM23.3877 28.5526H22.5851C21.9929 28.5526 21.5128 28.0008 21.5128 27.3204V7.83123C21.5128 7.06707 22.0521 6.44737 22.7171 6.44737H23.3877C24.0528 6.44737 24.5921 7.06707 24.5921 7.83123V27.1687C24.5921 27.9329 24.0528 28.5526 23.3877 28.5526ZM5.67002 23.741H6.47259C7.13766 23.741 7.67695 23.1213 7.67695 22.3572V12.6429C7.67695 11.8788 7.13766 11.259 6.47259 11.259H5.80193C5.13695 11.259 4.59766 11.8788 4.59766 12.6429V22.5088C4.59766 23.1893 5.07787 23.741 5.67002 23.741ZM17.7494 24.1324H16.9468C16.3546 24.1324 15.8744 23.5807 15.8744 22.9001V13.31C15.8744 12.5456 16.4136 11.9262 17.0787 11.9262H17.7494C18.4143 11.9262 18.9536 12.5456 18.9536 13.31V22.7485C18.9536 23.5127 18.4143 24.1324 17.7494 24.1324Z"
                        fill="#4f46e5"/>
                </svg>
            </div>
            <div
                class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8">
                <div>
                    <h5 class="text-xl font-bold text-gray-700">Product</h5>
                    <nav class="mt-4">
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Landingpages</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Features</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Showcase</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h5 class="text-xl font-bold text-gray-700">Industries</h5>
                    <nav class="mt-4">
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Employment</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Childcare</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Dealerships</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h5 class="text-xl font-bold text-gray-700">About us</h5>
                    <nav class="mt-4">
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Company</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Download brochure</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Resources</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h5 class="text-xl font-bold text-gray-700">Legal</h5>
                    <nav class="mt-4">
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Terms and conditions</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Security</a>
                            </li>
                            <li>
                                <a href="#" class="text-base hover:text-gray-500">Privacy</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div
                class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20">
                <div class="text-sm space-y-4 md:space-y-1 text-center md:text-left">
                    <p>&copy;2020 Company. All rights reserved. | All rights reserved</p>
                    <p>Wisdom is easily acquired when hiding under the bed with a saucepan on your
                        head.</p>
                </div>
                <Link
                    to="/dashboard"
                    class="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-4 px-5 lg:px-8 text-white md:transform md:-translate-y-2">Start working with us</Link>
            </div>
            <div
                class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12">
                <nav class="flex flex-wrap justify-center space-x-6">
                    <a href="#" class=" text-sm hover:text-gray-700 mb-2">Privacy</a>
                    <a href="#" class=" text-sm hover:text-gray-700 mb-2">Content Terms Notice</a>
                    <a href="#" class=" text-sm hover:text-gray-700 mb-2">Legal</a>
                    <a href="#" class=" text-sm hover:text-gray-700 mb-2">Features</a>
                    <a href="#" class=" text-sm hover:text-gray-700 mb-2">Landing Pages</a>
                </nav>
                <nav class="flex items-center space-x-2">
                    <a href="#" class="text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                fill-rule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Instagram</span>
                        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Twitter</span>
                        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                    </a>
                </nav>
            </div>
        </footer>
    );
}