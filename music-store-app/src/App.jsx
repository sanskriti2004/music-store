import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Shop from "./components/Shop";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar count={0} />
      {/* <Home />
      <Shop /> */}
      <Cart />
    </>
  );
};

export default App;
