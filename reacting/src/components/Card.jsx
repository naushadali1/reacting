import React from "react";
import { Link } from "react-router-dom";

function Card({product}) {
  return (
    <Link to={`/products/${product.id}`}  className="w-[18%] h-[35vh] p-2 shadow bg-white flex flex-col gap-4 items-center m-2 rounded-lg">
      <div className="w-full h-[80%] overflow-hidden hover:scale-110">
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt=""
        />
      </div>

      <h3 className="text-lg font-semibold leading-none hover:text-blue-300 my-2">{product.title}</h3>
    </Link>
  );
}

export default Card;
