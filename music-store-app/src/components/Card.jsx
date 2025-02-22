import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        style={{ "box-shadow": "0 10px 20px #0000001a" }}
        className="w-60 h-110 border-0 rounded-lg  flex items-center flex-col justify-evenly  "
      >
        <span>
          <img
            className="w-50 h-50 border-0 rounded-lg"
            src={props.source}
          ></img>
        </span>
        <div className="flex flex-col items-center">
          <h1 className="text-lg text-center font-bold">{props.album}</h1>
          <span className="text-m">{props.artist}</span>
          <span className="text-sm italic">{props.genre}</span>
          <span className="text-lg font-bold text-gray-500">{props.price}</span>
        </div>
        <span className="flex flex-row space-x-2 items-center text-xl font-bold">
          <button
            onClick={props.increment}
            className="border-blue-100 flex items-center justify-center border-2 cursor-pointer w-8 h-8 rounded-full hover:border-blue-500 "
          >
            +
          </button>
          <p className="font-normal text-m">{props.count}</p>
          <button
            onClick={props.decrement}
            className="border-blue-100 flex items-center justify-center border-2 cursor-pointer w-8 h-8 rounded-full hover:border-blue-500"
          >
            –
          </button>
        </span>
        <button className="bg-blue-500 cursor-pointer text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
