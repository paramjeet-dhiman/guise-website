import BG1 from '../../assets/images/13202.jpg'
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
                        <h1 className="text-4xl uppercase font-black text-white text-center">Digital <br />Signage</h1>
                    </div>
                </div>
            </Parallax>


            <div className="bg-black py-5 grid grid-cols-2 text-gray-300 px-20 h-96 items-center shadow-2xl  relative">
                <div>
                    <h1 className="text-4xl uppercase font-black text-dark-button">Digital Signage</h1>
                    <div className="space-y-3 mt-5 text-xl font-semibold ml-8">
                        <li className="">People Count</li>
                        <li className="">Customer Demographics (Age, Gender)</li>
                        <li className="">Dwell Time</li>
                        <li className="">Wait Time</li>
                        <li className="">Apparel Detection</li>
                        <li className="">Logo Detection</li>
                    </div>
                </div>
                <div>
                    <UndrawListeningSvg className="h-72 w-full" />
                </div>
            </div>

            <Parallax bgImage={BG2}
                strength={-200}
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
                        <h1 className="text-4xl uppercase font-black text-white text-center">Traffic <br /> Management</h1>

                    </div>
                </div>
            </Parallax>

            <div className="bg-black py-5 grid grid-cols-2 text-gray-300 px-20 h-96 items-center shadow-2xl">
                <div>
                    <UndrawVehicleSvg className="h-72 w-full" />
                </div>
                <div className="flex flex-col items-end justify-items-end ">
                    <h1 className="text-4xl uppercase font-black text-dark-button">Traffic Management</h1>
                    <div className="space-y-3 mt-5 text-xl font-semibold mr-32">
                        <li>Vehicle count</li>
                        <li>Make & model</li>
                        <li>Object Detection (Vehicles)</li>
                        <li>License Plate Recognition</li>
                    </div>
                </div>
            </div>
            <Parallax bgImage={BG3}
                strength={-150}
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
                        <h1 className="text-4xl uppercase font-black text-white text-center">Energy <br /> Management</h1>
                    </div>
                </div>
            </Parallax>
            <div className="bg-black py-5 grid grid-cols-2 text-gray-300 px-20 h-96 items-center shadow-2xl">
                <div>
                    <h1 className="text-4xl uppercase font-black text-dark-button">Energy Management</h1>
                    <div className="space-y-3 mt-5 text-xl font-semibold ml-8">
                        <li className="">Smart Grid</li>
                        <li className="">Upstream Drilling</li>
                        <li className="">Smart Meters</li>
                        <li className="">SCADA</li>
                        <li className="">Grid Optimization</li>
                        <li className="">Anomaly Detection</li>
                    </div>
                </div>
                <div>
                    <UndrawEnergySvg className="h-72 w-full" />
                </div>
            </div>
        </>
    )
}

