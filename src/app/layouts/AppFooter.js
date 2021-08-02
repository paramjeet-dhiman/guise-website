import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

export const AppFooter = () => {
    return (
        <div className="bg-gray-900 text-gray-300">
            <div className="flex justify-between items-center mx-20 py-5">

                <div className="flex space-x-5">
                    <button className=" hover:text-green-400">Privacy Policy</button>
                    <button className=" hover:text-green-400">Term & Conditions</button>
                </div>

                <div>
                    <span className="font-medium">
                        Copyright &copy; 2021, All Rights Reserved.
                    </span>
                </div>

                <div className="flex space-x-5 ">
                    <FaLinkedin className="w-6 h-6 text-gray-200 font-semibold" />
                    <FaFacebook className="w-6 h-6 text-gray-200 font-semibold" />
                    <FaTwitterSquare className="w-6 h-6 text-gray-200 font-semibold" />
                </div>
            </div>
        </div>
    )
}
