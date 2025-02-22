import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[80vh] center justify-center ">
        <div>
          <img className="w-120" src="./src/assets/ipod.png" alt="ipod"></img>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Welcome to THE Music Store!</h1>
          <span className="text-2xl pt-3">
            Discover the best albums at unbeatable prices.
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl  mt-4">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
