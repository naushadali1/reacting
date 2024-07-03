import React from "react";

function Card({data, index , handleClick}) {
  const {image, name, added, artist} = data;
  return (
    <div className="w-60 p-4 bg-zinc-100 flex gap-4 relative pb-8 mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden ">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-lg font-semibold leading-none mb-1">{name}</h3>
        <h5 className="text-xs font-semibold "> {artist}</h5>
      </div>
      <button onClick={()=>handleClick(index)} className={`text-white text-sm rounded-full px-3 py-1 ${added === false? "bg-orange-600": "bg-teal-600"} whitespace-nowrap absolute bottom-0 left-1/2  translate-y-[50%] -translate-x-[50%]`}>{added === false ? "Add to Favorite": "Added"}</button>

    </div>
  );
}

export default Card;
