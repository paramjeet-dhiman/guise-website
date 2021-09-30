import BG1 from "../../assets/images/21770.jpg";
import BG2 from "../../assets/images/15152.jpg";
import BG3 from "../../assets/images/3400343.jpg";
import BG4 from "../../assets/images/19366.jpg";
import BG5 from "../../assets/images/432894.jpg";
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='pt-16'>
            <div>
                <div className="flex justify-center items-center h-screen"
                    style={{
                        background: `url(${BG3}) no-repeat center center`,
                        backgroundSize: 'cover',
                        boxShadow: 'inset 0 0 0 2000px rgba(8, 8, 8, 0.2)',
                    }}>
                    <div className="flex">
                        <h1 className="text-lg md:text-4xl flex items-center justify-center font-black uppercase  text-center mx-20 md:mx-80">
                            Our AI solutions on the edge deliver accurate insights helping you to make impactful business decisions
                        </h1>
                    </div>
                </div>


                <div className="h-screen flex flex-wrap content-center text-gray-200 ">
                    <div className=" flex flex-col justify-center items-center font-bold md:mx-36 text-sm md:text-3xl space-y-20 uppercase text-left  ">
                        <h1>Guise AI solves the cost and efficiency problems endemic in AI today. Our continuous learning AI solutions on the edge allow machines to continuously learn and adapt to dynamically changing data in the real world without having to constantly retrain models</h1>
                        <h1> Clients and OEMs who require a fast, cost-efficient and secure solution turn to Guise AI to continuously extract patterns and predict from real-time and dynamically changing data to create the greatest impact on end-users</h1>
                    </div>
                </div>


                <div className="h-screen flex justify-end items-center "
                    style={{
                        background: `url(${BG2}) no-repeat center center`,
                        backgroundSize: 'cover',
                        // boxShadow: 'inset 0 0 0 2000px rgba(8, 8, 8, 0.2)',
                    }}>


                </div>
            </div>
        </div>
    )
}
