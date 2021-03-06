import BG1 from "../../assets/images/25332.jpg";
import BG2 from "../../assets/images/1111.jpg";
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
                    <h1 className="text-2xl    sm:text-3xl   md:text-2xl lg:text-5xl lg:tracking-normal  lg:leading-snug font-black uppercase text-left md:text-center mx-10 lg:mx-36 md:mx-50 sm:mx-20">
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

                <div className=" flex flex-col justify-center  items-center lg:leading-snug lg:tracking-normal  font-black text-2xl    sm:text-3xl   md:text-2xl lg:text-4xl  lg:font-black mx-10 md:mx-36 lg:mx-40  space-y-10  md:space-y-20 text-left  ">
                    <h1>Guise AI solves the cost and efficiency problems endemic in AI today. Our AI solutions on the edge allow machines to continuously learn and adapt to dynamically changing data in the real world without having to constantly retrain models.</h1>
                    <h1> Clients and OEMs who require an accurate, cost-efficient and secure solution turn to Guise AI to continuously extract patterns and predict from real-time and dynamically changing data to create the greatest impact on end-users.</h1>
                </div>

            </div>

            <div className="h-screen flex justify-end items-center realtive"
                style={{
                    background: `url(${BG2}) no-repeat center center`,
                    backgroundSize: 'cover',
                    boxShadow: 'inset 0 0 0 2000px rgba(8, 8, 8, 0.4)',
                }}>

                <div className="">
                    <h1 className="uppercase lg:leading-snug lg:tracking-normal lg:mx-20 text-left font-black text-2xl  sm:text-3xl  md:text-2xl lg:text-4xl  lg:font-black mx-10 md:mx-36 ">
                        Deliver the most dynamic and <br /> effective  CUSTOMER EXPERIENCE<br />
                        WITH GUISE AI'S REALTIME SOLUTIONS <br /> ON THE EDGE
                    </h1>
                </div>
            </div>
        </>

    )
}
