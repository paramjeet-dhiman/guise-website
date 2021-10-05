import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/GuiseAI-105851470855726/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/guise-ai/about/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
]

export const AppFooter = () => {
    return (
        <div className="bg-dark-primary text-gray-300  w-full sm:text-sm">
            <div className="flex justify-center  md:justify-between items-center mx-20 py-3 text-lg">

                {/* <div className=" space-x-5 hidden md:block "> */}
                {/* <button className=" hover:text-blue-500 font-medium">Privacy Policy</button> */}
                {/* <button className=" hover:text-blue-500">Term & Conditions</button> */}
                {/* </div> */}

                <div className="font-medium text-sm sm:text-base flex">
                    Copyright &copy; 2021 <span className="hidden sm:block">, Guise AI All Rights Reserved</span>
                </div>

                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        {SocialShare.map((val, i) => (
                            <li key={i} className=" p-2 hover:bg-blue-600  rounded-full transition-all	"><a href={`${val.link}`} target="_blank" rel="noreferrer" >{val.Social}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
