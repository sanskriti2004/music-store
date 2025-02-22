import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";

const App = () => {
  return (
    <>
      <Navbar count={0} />
      {/* <Home /> */}
      <Shop />
    </>
  );
};

export default App;
