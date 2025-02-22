import React from "react";

const Shop = () => {
  const checkedButtonStyle =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold box-border py-2 px-4 rounded-4xl";
  const uncheckedButtonStyle =
    "border-blue-100 border-2 px-4 py-2 rounded-4xl box-border hover:border-blue-500";
  return (
    <>
      <div className="flex items-center justify-center  p-5 m-5 space-x-5">
        <button className={checkedButtonStyle}>All</button>
        <button className={uncheckedButtonStyle}>Pop</button>
        <button className={uncheckedButtonStyle}>Hip-Hop</button>
        <button className={uncheckedButtonStyle}>Jazz</button>
        <button className={uncheckedButtonStyle}>Classical</button>
        <button className={uncheckedButtonStyle}>R&B</button>
      </div>
    </>
  );
};

export default Shop;
