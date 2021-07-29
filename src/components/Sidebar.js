import React from 'react'
import '../styles/global.css'

export default function Sidebar() {

    return (
        <div className="lg:w-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col" >
            
            <header>
                <div className="pt-8 md:pb-2 lg:ml-7 objects-center">
                    <h1 className="text-center text-6xl md:text-7xl 2xl:text-8xl font-extralight tracking-wider mx-auto"><span className="text-blue-500 font-extralight" >Tobi</span> <span className="text-gray-700">Brady</span></h1>
                </div>
            </header>
            
            <div className="bg-center bg-cover m-10 md:mx-20 my-5 lg:mb-7 lg:ml-7 lg:mr-0 lg:h-screen h-96 desktop-image"></div>
            
        </div>
    )
}