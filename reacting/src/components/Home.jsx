import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products]= useContext(ProductContext);
  console.log(products);
  return products ? (
    <>
      <Navbar />
      <div className="w-[85%] h-full  p-10 pt-10 flex flex-wrap overflow-x-hidden">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
