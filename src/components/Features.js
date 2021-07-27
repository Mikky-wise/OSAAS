
import React from "react";

export default function Features() {
    return (
        <section class="container mx-auto px-12 mx-12 m-10 p-10 text-center">
            <h2 class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">What we offer?</h2>
            <p class="text-lg xl:text-xl text-gray-600">Get to know about our product.</p>

            <div class="flex items-center flex-wrap my-12 md:px-10 md:mx-10">
                <div class="w-full md:w-1/2 px-2">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">Delivery Solution for Businesses</h4>
                    <p class="text-gray-600 mb-8">Our Smart Logistic Solution is able to satisfy all your logistics need while you grow your businesses. You can create different category of deliveries and can track your packages on the go.</p>
                </div>
                <div class="w-full md:w-1/2 px-2">
                    <img src="./deliveries.svg" alt="Delivery Solution for Businesses" />
                </div>
            </div>

            <div class="flex items-center flex-wrap my-12 md:px-10 md:mx-10">
                <div class="w-full md:w-1/2 px-2">
                    <img src="./ecommerce.svg" alt="Delivery Solution for Ecommerce" />
                </div>
                <div class="w-full md:w-1/2 px-2">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">Delivery Solution for E-commerce</h4>
                    <p class="text-gray-600 mb-8">Our Smart Logistic Solution is able to supercharge your businesses with our logistics integration. With our all-in-one solutions right from the checkout to fullfillment of packages </p>
                </div>
            </div>



        </section>
    );
}