import React, {useState} from 'react'
import FeedbackModal from './FeedbackModal';

export default function FeedbackData() {

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
                                        Feedback Tickets
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {showModal
                            ? <FeedbackModal setShowModal={setShowModal}/>
                            : null}
                        <table
                            className="items-center w-full bg-transparent border-collapse table-auto">
                            <thead>
                                <tr>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Name
                                    </th>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Order Id
                                    </th>
                                    <th
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Agent Name
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
                                        Customer Name
                                    </th>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {i}
                                    </td>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Agent Name
                                    </td>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        $200 USD
                                    </td>
                                    <td
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <a
                                            href="#"
                                            onClick={handleSubmit}
                                            class="content-end bg-gradient-to-br from-indigo-700 to-indigo-900 hover:from-indigo-700 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5 text-white">Reply</a>
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