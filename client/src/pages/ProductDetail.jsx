import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../constant";

function ProductDetail() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  console.log(id)

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
        <div className="flex-col md:flex-row w-full">
          <div className="w-1/2">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          <div className="w-1/2 content-center">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p>{product.description}</p>
            <p>brand: {product.brand}</p>
            <p>{product.category}</p>
            <p className="text-xl"> Price: <span className="font-bold">{product.price}$</span></p>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded-md my-2">ADD&nbsp;TO&nbsp;CART</button>
          </div>
        </div>
      </section>
    );
  }
  return;
}

export default ProductDetail;
