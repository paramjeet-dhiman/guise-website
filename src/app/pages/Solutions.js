import BG1 from '../../assets/svg/signage.jpg'
import BG2 from '../../assets/images/8261.jpg'
import BG3 from '../../assets/images/10477.jpg'
import { ReactComponent as UndrawListeningSvg } from "../../assets/svg/undraw_Listening.svg";
import { ReactComponent as UndrawVehicleSvg } from "../../assets/svg/undraw_vehicle.svg";
import { ReactComponent as UndrawEnergySvg } from "../../assets/svg/undraw_wind_turbine.svg";
import { Parallax } from "react-parallax";
import { useEffect } from 'react';


const insideStyles = {
    background: "transparent",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
};

export const Solutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (

        <>
            <Parallax bgImage={BG1}
                strength={-150}
                className='hidden md:block '
                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `#119aa1`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 250,
                                height: percentage * 250,
                                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                            }}
                        />
                    </div>
                )}>
                <div style={{ height: '100vh' }}>
                    <div style={insideStyles}>
                        <h1 className=" uppercase font-black text-white text-center text-base sm:text-4xl">Digital <br />Signage</h1>
                    </div>
                </div>
            </Parallax>


            <div className="bg-black py-5 grid grid-cols-2 text-gray-300 px-10 md:px-20 w-full  h-96 items-center shadow-2xl  relative">
                <div className="mt-20  sm:mt-0">
                    <h1 className=" uppercase font-black text-dark-button text-xl w-60 sm:w-full sm:text-4xl">Digital Signage</h1>
                    <div className="space-y-3 mt-5 font-semibold sm:ml-8 text-base sm:text-xl w-full">
                        <li className="">People Count</li>
                        <li className="">Object Detection</li>
                        <li className="">Demographics</li>
                        <li className="">Dwell Time</li>
                        <li className="">Wait Time</li>
                        <li className="">Apparel Detection</li>
                        <li className="">Logo Detection</li>
                    </div>
                </div>
                <div className="">
                    <UndrawListeningSvg className="p-5 sm:p-0 h-72 w-full" />
                </div>
            </div>

            <Parallax bgImage={BG2}
                strength={-200}
                className='hidden md:block'
                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `#119DA4`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 250,
                                height: percentage * 250,
                                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                            }}
                        />
                    </div>
                )}>
                <div style={{ height: '100vh' }}>
                    <div style={insideStyles}>
                        <h1 className="text-base sm:text-4xl uppercase font-black text-white text-center">Traffic <br /> Management</h1>
                    </div>
                </div>
            </Parallax>

            <div className="bg-black sm:py-5 grid grid-cols-2  text-gray-300 px-10 space-x-10 pt-20 sm:pt-0 sm:space-x-0 sm:w-full sm:px-20 sm:h-96 items-center shadow-2xl">
                <div className="">
                    <UndrawVehicleSvg className="pt-5 sm:pt-0 h-72 w-full" />
                </div>
                <div className="flex flex-col sm:items-end w-full">
                    <h1 className=" uppercase font-black   text-dark-button text-xl sm:text-4xl">Traffic Management</h1>
                    <div className="space-y-3 mt-5 sm:ml-8   sm:mr-24 font-semibold  text-base sm:text-xl ">
                        <li>Vehicle count</li>
                        <li>Make & model</li>
                        <li>Object Detection (Vehicles)</li>
                        <li>License Plate Recognition</li>
                    </div>
                </div>
            </div>
            <Parallax bgImage={BG3}
                strength={-150}
                className='hidden md:block'

                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `#119DA4`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 250,
                                height: percentage * 250,
                                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
                            }}
                        />
                    </div>
                )}>
                <div style={{ height: '100vh' }}>
                    <div style={insideStyles}>
                        <h1 className="text-base sm:text-4xl uppercase font-black text-white text-center">Energy <br /> Management</h1>
                    </div>
                </div>
            </Parallax>
            <div className="bg-black py-5 space-x-10  sm:space-x-0 grid grid-cols-2 text-gray-300 px-10  w-full sm:px-20 sm:h-96 items-center shadow-2xl">
                <div className="">
                    <h1 className=" uppercase font-black   text-dark-button text-xl w-60 sm:w-full  sm:text-4xl">Energy Management</h1>
                    <div className="space-y-3 mt-5 sm:ml-8  font-semibold  text-base sm:text-xl w-60">
                        <li className="">Smart Meters</li>
                        <li className="">SCADA</li>
                        <li className="">Anomaly Detection</li>
                    </div>
                </div>
                <div className="">
                    <UndrawEnergySvg className="pt-5 sm:pt-0 h-72 w-full" />
                </div>
            </div>
        </>
    )
}

