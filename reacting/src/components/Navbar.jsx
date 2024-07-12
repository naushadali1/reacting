import React from "react";
function Navbar() {
  return (
    <div className="w-[15%] h-full bg-zinc-200 p-2 flex flex-col items-center ">
      <h1 className="text-2xl font-semibold border rounded-lg border-blue-300 text-blue-300 p-1 w-[60%] mb-5 ">
        Add Product
      </h1>
      <h3 className="text-2xl font-semibold w-[80%] mb-3 ">Category</h3>
      <h2 className="w-[80%] bg-red-200 flex items-center gap-3 p-1 rounded-lg mb-2">
      <span className="w-[1.5vw] h-[1.5vw] rounded-full bg-green-500 "></span>
        Cat 1</h2>
      <h2 className="w-[80%] bg-red-200 flex items-center gap-3 p-1 rounded-lg mb-2">
      <span className="w-[1.5vw] h-[1.5vw] rounded-full bg-blue-500 "></span>
        Cat 2</h2>
      <h2 className="w-[80%] bg-red-200 flex items-center gap-3 p-1 rounded-lg mb-2">
      <span className="w-[1.5vw] h-[1.5vw] rounded-full bg-yellow-500 "></span>
        Cat3</h2>
    
    </div>
  );
}

export default Navbar;
