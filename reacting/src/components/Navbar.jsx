import React from "react";
import Styles from './style.module.css';
function Navbar({ data }) {
  return (
    <div className="w-full px-20 py-6 flex justify-between items-center">
      <h2 className={`font-semibold text-lg ${Styles.a}`}>Orange</h2>
      <div className="flex gap-2 bg-orange-600 rounded-md p-2 text-sm text-white">
        <h3 className="">Favourate</h3>
        <h3>{data.filter((elem) => elem.added).length}</h3>
      </div>
    </div>
  );
}

export default Navbar;
