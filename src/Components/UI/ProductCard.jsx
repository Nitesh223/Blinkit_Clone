import React from "react";

function ProductCard(props) {
  return (
    <div className="border border-gray-200 rounded-xl p-3 cursor-pointer shadow-md transition-all max-w-[170px] hover:shadow-lg hover:border-gray-00">
      
      <div className="w-full h-36 flex items-center justify-center mb-2">
        <img src={props.image} alt={props.name} className="max-h-full object-contain" />
      </div>

      <h3 className="text-sm font-semibold leading-tight pb-1">{props.name}</h3>
      <p className="text-xs text-gray-500 mb-3">{props.quantity}</p>

      <div className="flex items-center justify-between">
        <p className="font-semibold text-sm">₹{props.price}</p>

        <button className="px-4 py-1 border border-green-600 text-green-600 rounded-md text-sm font-semibold hover:bg-green-600 hover:text-white transition">
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;