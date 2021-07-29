import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import '../styles/global.css'
import trooper from '../../static/404.png'

export default function Lost() {

    return (
        <div className="h-screen sticky top-0 flex flex-col">
            
            <Helmet>
                <title>Move along...</title>
            </Helmet>

            <img src={ trooper } alt="move along" className="m-auto max-h-96" />

            <div className="text-center mb-auto text-black font-bold ">
                <Link to="/" className="hover:text-blue-500">Click here to go about your buisness.</Link>
            </div>

        </div>
            
    )
}