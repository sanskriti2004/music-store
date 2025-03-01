import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between shadow-lg text-blue-500 font-semibold h-[60px] p-4">
      <div className="flex space-x-4">
        <button onClick={() => navigate("/")} className="cursor-pointer">
          Home
        </button>
        <button onClick={() => navigate("/shop")} className="cursor-pointer">
          {" "}
          Shop
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/cart")} className="cursor-pointer">
          Cart({props.count})
        </button>
      </div>
    </header>
  );
};

export default Navbar;
