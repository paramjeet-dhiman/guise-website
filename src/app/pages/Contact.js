import BG1 from "../../assets/images/19366.jpg";

export const Contact = () => {

    const handleInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="text-dark-text  h-full"
            style={{
                background: `url(${BG1}) no-repeat center center`,
                backgroundSize: 'cover',
            }}>
            <div className="flex justify-center items-center flex-col p-16 space-y-10">
                <div className="pt-14 text-center">
                    <h1 className="text-5xl text-center text-blue-600 font-black">How can we help?</h1>
                </div>
                <div className="px-28 py-14 bg-black" style={{
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                }}>
                    <div className="">
                        <h1 className="text-5xl text-center text-gray-500   dark:text-white font-extrabold tracking-tight">Get in Touch</h1>
                        <p className=" text-lg  text-center font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form below, and we'll get back to you within 24 hours
                        </p>
                        <form className="mt-6 text-center space-y-5 ">
                            <div className="flex space-x-2">
                                <input id="fname" type="fname" name="fname" onChange={handleInput} placeholder="First Name" className="block text-lg  w-full p-5 mt-2 text-gray-300 bg-gray-900 appearance-none focus:outline-none focus:bg-gray-800 focus:shadow-inner" required />
                                <input id="lname" type="lname" name="lname" onChange={handleInput} placeholder="Last Name" className="block text-lg w-full p-5 mt-2  text-gray-300 bg-gray-900 appearance-none focus:outline-none focus:bg-gray-800 focus:shadow-inner" required />
                            </div>
                            <input id="email" type="email" name="email" onChange={handleInput} placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-5 mt-2 text-lg text-gray-300 bg-gray-900 appearance-none focus:outline-none focus:bg-gray-800 focus:shadow-inner" required />
                            <textarea name="message" id="message" onChange={handleInput} cols="10" rows="5" placeholder="Message" className="block p-5 bg-gray-900 mt-3 w-full focus:outline-none  text-lg text-gray-300 focus:bg-gray-800"></textarea>
                            <button type="submit" className="px-8 py-3 mt-3 font-medium tracking-widest  uppercase border-2  border-indigo-600  shadow-lg focus:outline-none hover:bg-indigo-600 hover:shadow-none">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
