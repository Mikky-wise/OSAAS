import React from "react"


export default function Header(props) {
    const card_data = props.card_data
    return (
        <div class="relative bg-indigo-900 md:pt-32 pb-32 pt-12">
            <div class="px-4 md:px-10 mx-auto w-full">
                <div>
                    {/* <!-- Card stats --> */}
                    <div class="flex flex-wrap">
                        {card_data
                            .map( (data) => < div class = "w-full lg:w-6/12 xl:w-3/12 px-4" key = {
                                    data.number
                                } > <div
                                    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                                                    {data.title}
                                                </h5>
                                                <span class="font-semibold text-xl text-blueGray-700">
                                                    {data.number}
                                                </span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div
                                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-indigo-900">
                                                    {data.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-sm text-blueGray-400 mt-4">
                                            
                                            <span class={data.change>=0?"text-green-500 mr-2":"text-red-500 mr-2"}>
                                                {data.change}
                                            </span>
                                            <span class="whitespace-nowrap">
                                                Since last month
                                            </span>
                                        </p>
                                    </div>
                                </div> </div>
                                    
                                )}

                    </div>
                </div>
            </div>
        </div>
    )
}