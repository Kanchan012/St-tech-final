import React from "react";
import Cartbag from "../assets/Homeimage/Cartbag.png";

function Cart() {
  return (
    <div className="bg-[#e9e9e9] p-4 ">
      <div>
        <h3 className="text-2xl font-bold">Cart</h3>
        <p className="text-[15px] mt-2">0 Courses in cart</p>
      </div>
      <div className="bg-white p-15 m-5 mb-0 flex flex-col items-center text-center leading-1.5 rounded-md">
        <img 
          src={Cartbag} 
          alt="cart" 
          className="w-95 object-cover mb-4" 
        />
        <h4 className="text-xl font-semibold mb-2">Your Cart is Empty!</h4>
       <p className=" text-gray-600 mb-6">
          It looks like you haven't added any courses yet. Explore our wide range 
          of exciting courses and start building your learning journey today!
        </p>
        <button className="bg-[#003372] text-white w-40 h-10 rounded-[5px] border-none hover:bg-[#002654]">
          Return to shop
        </button>
      </div>
    </div>
  );
}

export default Cart;