import { Link } from "react-router-dom";
import axios from "../utils/Axios";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

function Details() {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="w-[70%] h-full flex justify-between items-center gap-10  m-auto p-[10%] ">
      <img
        className="w-[50%] h-[80%] object-contain"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />

      <div className="content ">
        <h1 className="text-5xl mb-2">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-400 text-xl mb-2">mens Clothing</h3>
        <h2 className="text-2xl text-red-400 mb-2">$ 109.95</h2>
        <p className="text-xl mb-10">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>

        <Link className="text-2xl border-blue-600 text-blue-600 px-3 py-2 border rounded-lg mr-2 ">
          Edit
        </Link>
        <Link className="text-2xl border-red-600 text-red-600 px-3 py-2 border rounded-lg">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
