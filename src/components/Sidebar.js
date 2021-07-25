import React from 'react'
import '../styles/global.css'
import me from '../../static/me.jpeg'

export default function Sidebar() {

    return (
        <div className="lg:w-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col" >

            <header>
                <div className="pt-8 md:pb-2 w-full">
                    <h1 className="text-center text-gray-700 text-6xl md:text-8xl font-extralight tracking-wider"><span className="text-blue-800">Tobi</span> Brady</h1>
                </div>
            </header>
            
            <div className="bg-center bg-cover m-7 lg:h-screen h-auto desktop-image">
                <img src={ me } alt="Tobi with a lemur" className="lg:hidden" />
            </div>
            
        </div>
    )
}