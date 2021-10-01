import BG1 from "../../assets/images/25332.jpg";
import BG2 from "../../assets/images/15152.png";
import BG3 from "../../assets/images/rm378-08.jpg";
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <>
            <div className="h-screen flex flex-wrap content-center text-gray-200"
                style={{
                    background: `url(${BG3}) no-repeat center center`,
                    backgroundSize: 'cover',
                    // boxShadow: 'inset 0 0 0 2000px rgba(8, 8, 8, 0.1)',
                }}>
                <div className="flex items-center justify-center">
                    <h1 className="text-base md:text-2xl sm:text-lg lg:text-5xl lg:tracking-normal  lg:leading-snug font-black uppercase text-center mx-20 lg:mx-36 md:mx-50 sm:mx-20">
                        Our AI solutions on the edge deliver accurate insights helping you to make impactful business decisions
                    </h1>
                </div>
            </div>


            <div className="h-screen flex flex-wrap content-center text-gray-800 "
                style={{
                    background: `url(${BG1}) no-repeat center center `,
                    backgroundSize: 'cover',
                    // boxShadow: 'inset 0 0 0 2000px #0808081f',   

                }}>

                <div className=" flex flex-col justify-center  items-center lg:leading-snug lg:tracking-normal  font-black sm:text-base md:text-2xl   lg:font-black md:mx-36 lg:mx-40 text-sm lg:text-4xl space-y-20  text-left  ">
                    <h1>Guise AI solves the cost and efficiency problems endemic in AI today. Our lifelong learning AI solutions on the edge allow machines to continuously learn and adapt to dynamically changing data in the real world without having to constantly retrain models</h1>
                    <h1> Clients and OEMs who require an accurate, cost-efficient and secure solution turn to Guise AI to continuously extract patterns and predict from real-time and dynamically changing data to create the greatest impact on end-users</h1>
                </div>

            </div>

            <div className="h-screen flex justify-end items-center "
                style={{
                    background: `url(${BG2}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}>
            </div>
        </>

    )
}
