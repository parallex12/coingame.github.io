import React from "react";
import { ProductCardProps } from "../../Interfaces";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  itemPathTo,
}) => {
  return (
    <Link
      to={`/${itemPathTo}/${id}`}
      className="flex items-center justify-center"
    >
      <div className="flex flex-col w-[250px] h-[250px] p-3 cursor-pointer gap-4 bg-skin shadow-md rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-yellow hover:shadow-lg">
        {/* Image Section (60-70% of the card) */}
        <div className="h-[75%] w-full">
          <img
            src={imageUrl}
            alt="Product"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-full gap-5 flex items-end justify-between px-2">
          <p className="text-black hover:text-white font-bold">{name}</p>
          <div className="text-right">
            <p className="text-gray-500 font-normal text-sm">DE</p>
            <p className="text-black font-bold">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
