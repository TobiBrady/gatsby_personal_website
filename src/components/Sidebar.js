import React from 'react'
import '../styles/global.css'
import background from "../../static/uganda.jpg"
import overlay from "../../static/overlay.png"
import me from "../../static/me.jpeg"

{/* style={{ backgroundImage: `url(${overlay}), url(${background})` }} */}
export default function Sidebar() {

  return (
    <div className="w-2/5 h-screen sticky top-0 flex flex-col bg-right bg-cover" style={{ backgroundImage: `url(${overlay}), url(${background})` }} >
        <header className="h-3/4 my-auto mx-16">
            <div>
                <div className="flex justify-end">
                    <img className="rounded-full w-32 h-32 object-cover object-right" src={me} alt="Tobi"></img>
                </div>
                <div className="pt-20 text-align-right">
                    <h1 className="text-right text-white w-72 text-2xl ml-auto">Hi my name is Tobi Brady</h1>
                    <h1 className="text-right text-white w-72 text-2xl ml-auto">welcome to my Project Portfolio</h1>
                </div>
            </div>
        </header>
        <footer>
            <p></p>
        </footer>
    </div>
  )
}