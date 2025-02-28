import { useState } from "react";

const Home = () => {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      {visibility && (
        <div className="flex flex-col items-center h-[80vh] center justify-center ">
          <div className="relative w-120 mx-auto">
            {/* iPod Image */}
            <img
              className="w-full relative z-2"
              src="./src/assets/ipod.png"
              alt="ipod"
            />

            {/* Album Cover Inside iPod */}
            <div className="absolute top-[30.3%] left-[6.5%] w-[48%] h-[40%] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded"
                src="./src/assets/take-care-drake-drake.webp"
                alt="album cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">Welcome to THE Music Store!</h1>
            <span className="text-2xl pt-3">
              Discover the best albums at unbeatable prices.
            </span>
            <button
              onClick={() => setVisibility(false)}
              className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl  mt-4"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
