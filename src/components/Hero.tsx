import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div>
            <Navbar />
            <div
                className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url(/images/bg.jpg)",
                }}
            >
                <div className="header-title text-center px-4">
                    <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">
                        Let's GO on a Vacation
                    </h1>
                    <h2 className="text-3xl">Explore the World with Us</h2>
                    <p className="text-gray-800 max-w-2xl mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum harum dicta suscipit in excepturi reiciendis similique assumenda facere ratione? Ab cum doloremque, excepturi maxime culpa eligendi error amet dignissimos.
                    </p>
                </div>
                <div className="header-form mt-8">
                    <h2 className="text-lg font-medium text-gray-900">Choose Your Destination</h2>
                    <form className="flex mt-4">
                        <input
                            type="text"
                            placeholder="Enter Your Destination"
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
