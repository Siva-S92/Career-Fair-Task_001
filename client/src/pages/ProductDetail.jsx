import axios from "axios";
import React, { useEffect, useState } from "react";

import { BACKEND_API_URL } from "../constant";

function ProductDetail({ id }) {
  const [product, setProduct] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${BACKEND_API_URL}/product?id=${id}`);

      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (product) {
    return (
      <section>
        <div className="flex flex-col items-center md:flex-row w-full p-5">
          <div className="w-full flex justify-center md:w-1/2 md:justify-start">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          <div className="w-full md:w-1/2 content-center">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p>{product.description}</p>
            <p>brand: {product.brand}</p>
            <p>{product.category}</p>
            <p className="text-xl">
              {" "}
              Price: <span className="font-bold">{product.price}$</span>
            </p>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded-md my-2">
              ADD&nbsp;TO&nbsp;CART
            </button>
          </div>
        </div>
      </section>
    );
  }
  return;
}

export default ProductDetail;
