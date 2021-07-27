
import React, { useState } from "react";
import PriceEstimator from "./PriceEstimator";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [email, setemail] = useState('')

  const handleChange = (event) => {
    setemail(event.target.value)
  }

  const handleSubmit = (event) => {
    setShowModal(true)
    event.preventDefault();
  }

  return (
    <div class="py-12 md:py-24 bg-gray-100">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
        <div class="order-2 md:order-1 col-span-2 self-center mt-12 md:mt-0">
          <h1 class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8">The best way to deliver food</h1>
          <p class="text-gray-500 text-sm">Experience deliveries in the most convenient way.</p>
          <p class="text-lg xl:text-xl text-gray-600 mb-6 lg:mb-8 xl:mb-10">We provide convenient, superior quality delivery service for your parcels.</p>
          <form class="flex space-x-4 mb-6" onSubmit={handleSubmit}>
            <input type="email" placeholder="enter your email..." onChange={handleChange} class="flex-1 py-4 px-4 border border-gray-200 rounded-lg leading-none focus:outline-none" required />
            <button type="submit" class="focus:outline-none inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5  text-white ">Get started</button>
            {showModal ? <PriceEstimator showModal={showModal} setShowModal={setShowModal} /> : null}
          </form>
          <p class="text-gray-500 text-sm">Get started by estimating your cost of delivery.</p>
        </div>
        <div class="order-1 md:order-2 col-span-2 xl:col-span-3">
          <img src="./dashboard.svg" class="rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
}