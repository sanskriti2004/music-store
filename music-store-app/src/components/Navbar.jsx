const Navbar = (props) => {
  return (
    <header className="flex items-center justify-between shadow-lg text-blue-500 font-semibold h-[60px] p-4">
      <div className="flex space-x-4">
        <button onClick={props.handleHome} className="cursor-pointer">
          Home
        </button>
        <button onClick={props.handleShop} className="cursor-pointer">
          {" "}
          Shop
        </button>
      </div>
      <div>
        <button onClick={props.handleCart} className="cursor-pointer">
          Cart({props.count})
        </button>
      </div>
    </header>
  );
};

export default Navbar;
