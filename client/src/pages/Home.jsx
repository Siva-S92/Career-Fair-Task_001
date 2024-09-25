import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import { BACKEND_API_URL } from "../constant";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductCard from "../components/productCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const fetchAPI = async () => {
    try {
      let formData = {
        page,
        search,
      };
      const response = await axios.post(
        `${BACKEND_API_URL}/get-products`,
        formData
      );

      setProducts(response.data.products);
      setTotalPages(response.data.totalpages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [page, search]);

  return (
    <>
      <Header />
      <section>
        <div className="flex justify-center md:justify-end">
          <form className="flex justify-center items-center border border-gray-400 w-fit px-2 rounded-md">
            <FaSearch className="text-blue-500" />
            <input
              id="searchkey"
              className="px-2 py-1 outline-none"
              type="text"
              placeholder="Search...."
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(parseInt(1));
              }}
            />
            {/* <button type="submit" className="bg-blue-400 text-white px-2 h-full rounded-r-md">search</button> */}
          </form>
        </div>
        <h1 className="text-red-500 font-bold text-3xl text-center mb-5">
          The best Products in your country
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {products.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>

        <div className="flex justify-center my-10">
          <Stack spacing={2}>
            <Pagination
              page={page}
              count={totalPages}
              color="primary"
              onChange={(e, value) => {
                if (value !== null) {
                  setPage(value);
                }
              }}
            />
          </Stack>
        </div>
      </section>
    </>
  );
}

export default Home;
