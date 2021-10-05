import { useState } from "react";
import BG1 from "../../assets/images/19366.jpg";

export const Contact = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    })

    const { fname, lname, email, message } = data;
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://v1.nocodeapi.com/paramjeet/google_sheets/JthcluwWFqQIVlYb?tabId=Sheet1",
                {
                    method: "POST", headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify([[fname, lname, email, message, new Date().toLocaleString()]])
                });
            await response.json()
            setData({
                ...data,
                fname: '',
                lname: '',
                email: '',
                message: ''
            })

        } catch (err) {
            // console.log(err)
        }

    }

    return (
        <div className="text-dark-text"
            style={{
                background: `url(${BG1}) no-repeat center center`,
                backgroundSize: 'cover',
            }}>
            <div className="flex flex-col justify-center h-screen items-center  space-y-5">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl text-center text-blue-600 font-black">How can we help?</h1>
                </div>
                <div className="mx-5 px-8 py-3 sm:mx-0 sm:px-28 sm:py-12 bg-black rounded"
                    style={{
                        boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                    }}>
                    <div className="w-full">
                        <h1 className="text-2xl sm:text-4xl text-center text-gray-500 dark:text-white font-extrabold tracking-tight">Get in Touch</h1>
                        <p className=" text-base sm:text-lg  text-center font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form below, and we'll get back to you within 24 hours
                        </p>
                        <form className="mt-8 text-center space-y-5" onSubmit={handleSubmit}>
                            <div className="flex space-x-2">
                                <input id="fname" type="text" value={fname} name="fname" onChange={handleInput} placeholder="First Name" className="block  text-sm sm:text-lg w-1/2  sm:w-full md:w-full p-3  text-gray-300 bg-gray-900 hover:bg-gray-800 appearance-none focus:outline-none focus:bg-gray-800 focus:shadow-inner" required />
                                <input id="lname" type="text" value={lname} name="lname" onChange={handleInput} placeholder="Last Name" className="block text-sm sm:text-lg w-1/2  sm:w-full  md:w-full p-3  text-gray-300 bg-gray-900 hover:bg-gray-800 appearance-none focus:outline-none focus:bg-gray-800 focus:shadow-inner" required />
                            </div>
                            <input id="email" type="email" value={email} name="email" onChange={handleInput} placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 text-sm  sm:text-lg text-gray-300 bg-gray-900 hover:bg-gray-800 appearance-none focus:outline-none focus:bg-gray-800 focus:shadow-inner" required />
                            <textarea name="message" value={message} id="message" onChange={handleInput} cols="10" rows="5" placeholder="Message" className="block p-3 bg-gray-900 hover:bg-gray-800 w-full focus:outline-none  text-sm sm:text-lg text-gray-300 focus:bg-gray-800"></textarea>
                            <button type="submit" className="px-5 sm:px-8 py-3 font-medium tracking-widest text-sm sm:text-lg   uppercase border-2 rounded border-indigo-600  shadow-lg focus:outline-none hover:bg-indigo-600 hover:shadow-none">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
