import React from "react";
import { ReactComponent as NotFoundSvg } from "../../assets/404.svg";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center bg-white space-y-5 p-5 rounded-md shadow-lg">
                <NotFoundSvg className="px-52" />
                <p>
                    Oops! The page you are looking for does not exist. It might have been
                    moved or deleted.
                </p>
                <Link to="/">
                    <button className="px-5 py-2  hover:shadow-inner hover:bg-indigo-500 transition-all duration-300 outline-none border-2 border-indigo-500 rounded-lg   cursor-pointer  hover:text-white focus:outline-none">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};