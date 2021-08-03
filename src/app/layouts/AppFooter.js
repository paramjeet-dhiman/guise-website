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
        <div className="bg-gray-900 text-gray-300">
            <div className="flex justify-between items-center mx-20 py-3">

                <div className="flex space-x-5">
                    <button className=" hover:text-blue-500">Privacy Policy</button>
                    {/* <button className=" hover:text-blue-500">Term & Conditions</button> */}
                </div>

                <div>
                    <span className="font-medium">
                        Copyright &copy; 2021, <span className="font-black">Guise Ai</span> All Rights Reserved.
                    </span>
                </div>

                <div className="">
                    <ul className="flex space-x-4">
                        {SocialShare.map((val, i) => (
                            <li key={i} className=" p-1 hover:bg-blue-600  rounded-full transition-all	"><a href={`${val.link}`} target="_blank" rel="noreferrer" >{val.Social}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
