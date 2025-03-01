import Home from "./components/Home";
// import Shop from "./components/Shop";
// import Cart from "./components/Cart";
// import NotFound from "./components/NotFound"; // Optional 404 Page
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar count={0} />
      <Home />
    </>
  );
}

export default App;
