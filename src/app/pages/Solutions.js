import BG1 from '../../assets/images/13202.jpg'
import BG2 from '../../assets/images/8261.jpg'
import BG3 from '../../assets/images/10477.jpg'
import { ReactComponent as UndrawListeningSvg } from "../../assets/svg/undraw_Listening.svg";
import { ReactComponent as UndrawVehicleSvg } from "../../assets/svg/undraw_vehicle.svg";
import { ReactComponent as UndrawEnergySvg } from "../../assets/svg/undraw_wind_turbine.svg";

export const Solutions = () => {
    return (
        <div className="text-dark-text pt-16">
            <div>
                <div className=" bg-gray-300 " style={{
                    background: `url(${BG1}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                    height: "100vh",
                }}>
                </div>
                <div className="bg-black py-5 grid grid-cols-2 text-gray-300 px-20 h-96 items-center shadow-2xl">
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

                <div className="h-screen  relative bg-gray-300"
                    style={{
                        background: `url(${BG2}) no-repeat center center fixed`,
                        backgroundSize: 'cover',
                        height: "100vh",
                    }}>
                </div>

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
                <div className=" relative h-screen bg-gray-300" style={{
                    background: `url(${BG3}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                    height: "100vh",
                }}>
                </div>

                <div className="bg-black py-5 grid grid-cols-2 text-gray-300 px-20 h-96 items-center shadow-2xl">
                    <div>
                        <h1 className="text-4xl uppercase font-black text-dark-button">Energy</h1>
                        <div className="space-y-3 mt-5 text-xl font-semibold ml-8">
                            <li className="">Smart Grid</li>
                            <li className="">Upstream Drilling</li>
                            <li className="">Smart Meters</li>
                            <li className="">SCADA</li>
                            <li className="">Anomaly Detection</li>
                        </div>
                    </div>
                    <div>
                        <UndrawEnergySvg className="h-72 w-full" />
                    </div>
                </div>
            </div>
        </div >
    )
}
