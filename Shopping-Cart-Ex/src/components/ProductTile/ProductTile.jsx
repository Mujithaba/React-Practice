import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductTile({ singleProductTile }) {
  const navigate = useNavigate();

  function handleNavigateProductDetailsPage(getcurrentProductId) {
    navigate(`/product-detail/${getcurrentProductId}`);
  }

  return (
    <div className="relative group border vorder-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-l aspect-h-1">
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.thumbnail}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
        <div className="flex items-start justify-between mt-4 space-x-4">
          <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
            <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              {singleProductTile?.title}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
              ${singleProductTile?.price}
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            handleNavigateProductDetailsPage(singleProductTile?.id)
          }
          className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
        >
          View Details
        </button>
        
      </div>
    </div>
  );
}
