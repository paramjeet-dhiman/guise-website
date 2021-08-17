import BG1 from "../../assets/images/21770.jpg";
import BG2 from "../../assets/images/15152.jpg";
import BG3 from "../../assets/images/3400343.jpg";
import BG4 from "../../assets/images/19366.jpg";
import BG5 from "../../assets/images/432894.jpg";
import { RiTimerFlashFill } from "react-icons/ri";
import { FaCog, FaCrosshairs, FaDiceD20, FaLink, FaWrench } from 'react-icons/fa';
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='text-dark-text pt-16'>
            <div>
                <div className="h-screen"
                    style={{
                        background: `url(${BG3}) no-repeat center center`,
                        backgroundSize: 'cover',
                        height: "48rem",
                        boxShadow: 'inset 0 0 0 2000px rgba(8, 8, 8, 0.267)',
                    }}>
                    <div className="flex flex-col items-center justify-center pt-72">
                        <h1 className="text-lg md:text-4xl md:tracking-wider tracking-normal leading-4  md:leading-9 mx-20 md:mx-80 text-center  text-gray-100 font-black   uppercase  shadow-2xl">
                            The premier provider of Continuous Learning AI solutions on the Edge for computer vision and streaming data
                        </h1>
                    </div>
                </div>

                <div className="py-20 bg-white text-dark-primary-400"
                    style={{
                        background: `url(${BG4}) no-repeat center center `,
                        backgroundSize: 'cover',
                        height: '100%'
                    }}
                >
                    <div className="flex items-center justify-center mx-20 py-5 text-white">
                        <h1 className="text-lg md:text-3xl  font-black uppercase text-center text-gray-500">Guise AI is powered by the most adaptive, accurate and <br /> efficient machine learning models in the industry</h1>
                    </div>

                    <div className="flex items-center justify-center text-dark-primary-400">

                        <div className="space-y-20 relative">
                            <h3 className="uppercase text-3xl bg-gray-800  shadow-xl text-white w-72 text-center px-5 py-2  font-black absolute top-28 right-32 hidden md:block">Accurate</h3>
                            <div className="w-32 h-32   shadow-2xl relative left-16 bg-blue-700  flex justify-center items-center">
                                <FaCrosshairs className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="uppercase text-3xl bg-gray-800  shadow-xl text-white w-72 text-center px-5 py-2  font-black absolute top-64 right-32 hidden md:block">Fast</h3>
                            <div className="w-32 h-32   shadow-2xl relative left-16 bg-blue-700  flex justify-center items-center">
                                <RiTimerFlashFill className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="uppercase text-3xl bg-gray-800  shadow-xl text-white w-72 text-center px-5 py-2  font-black absolute top-3/4 right-32 hidden md:block">Scalable</h3>
                            <div className="w-32 h-32   shadow-2xl relative left-16 bg-blue-700  flex justify-center items-center">
                                <FaDiceD20 className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <div className="w-96 h-96 border-4 border-gray-200 shadow-2xl mt-20"
                            style={{
                                background: `url(${BG5}) no-repeat center center `,
                                backgroundSize: 'cover',
                            }}>
                        </div>
                        <div className="space-y-20 relative">
                            <h3 className="uppercase text-3xl bg-gray-800  shadow-xl text-white w-72 text-center px-5 py-2  font-black absolute top-28 left-32 hidden md:block">Secure</h3>
                            <div className="w-32 h-32   shadow-2xl relative right-16 bg-blue-700 flex justify-center items-center">
                                <FaWrench className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="uppercase text-3xl bg-gray-800  shadow-xl text-white w-72 text-center px-5 py-2  font-black absolute top-64 left-32 hidden md:block">Robust</h3>

                            <div className="w-32 h-32   shadow-2xl relative right-16 bg-blue-700 flex justify-center items-center">
                                <FaLink className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="uppercase text-3xl bg-gray-800  shadow-xl text-white w-72 text-center px-5 py-2  font-black absolute top-3/4 left-32 hidden md:block">Customizable</h3>

                            <div className="w-32 h-32   shadow-2xl relative right-16 bg-blue-700 flex justify-center items-center">
                                <FaCog className="w-16 h-16 text-white" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid place-content-center">
                    <div className="p-16 hidden md:block">
                        <img src={BG1} alt="gGlUMYGEIvjDOOw.jpg" className="rounded-full h-96" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-5 md:px-32">
                        <h1 className="text-sm md:text-2xl  text-center uppercase font-black">
                            {/* Realtime decisions require realtime information at a price that's affordable */}
                        </h1>
                    </div>
                </div>

                <div className="flex  space-x-3 py-5 bg-white text-dark-primary-800 "
                    style={{
                        background: `url(${BG4}) no-repeat center center `,
                        backgroundSize: 'cover',
                        height: '100%'
                    }}
                >

                    <div className=" flex flex-col justify-center items-center font-medium md:mx-40 text-sm md:text-2xl space-y-4 my-5">
                        <h1>We combine the best of Artificial Intelligence and Edge Computing to deliver actionable video and image insights to solve real world problems</h1>
                        <h1>Our innovative video analytics platform serves Smart Cities, Retail Automation, Security and Surveillance for both Government and private enterprises. We are based in United States with a research and development center in Hyderabad India</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="flex flex-col  justify-center space-y-5 md:px-36 text-center">
                        <h1 className="text-sm md:text-2xl text-center uppercase font-black">
                            Deliver the most impactful customer experience with Guise AI's  realtime solutions on the edge
                        </h1>
                    </div>
                    <div className="p-48 hidden md:block">
                        <img src={BG2} alt="gGlUMYGEIvjDOOw.jpg" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
