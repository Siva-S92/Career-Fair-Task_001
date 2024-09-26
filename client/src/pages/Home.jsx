import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import { BACKEND_API_URL } from "../constant";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [isloading, setIsloading] = useState(false)

  const fetchAPI = async () => {
    try {
      setIsloading(true)
      let formData = {
        page,
        search,
        category,
      };
      const response = await axios.post(
        `${BACKEND_API_URL}/get-products`,
        formData
      );

      setProducts(response.data.products);
      setIsloading(false)
      setTotalPages(response.data.totalpages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false)
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [page, search, category]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BACKEND_API_URL}/all-categories`);
      console.log(response.data.categories);
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  

  return (
    <>
      <Header />
      <Hero />
      <section>
        <div className="flex flex-col md:flex-row  justify-center md:justify-between items-center border">
          <div className="m-2">
            <label htmlFor="category">Category: </label>
            <select
              name="category"
              id="category_select"
              className="py-1 outline-none border border-gray-400 px-2 rounded-md"
              onChange={(e) => {
                setSearch("");
                setCategory(e.target.value)
                console.log(e.target.value)
                
              }}
            >
              <option>-- select an option --</option>
              
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <form className="flex justify-center items-center border border-gray-400 w-fit px-2 rounded-md m-2">
            <FaSearch className="text-blue-500" />
            <input
              id="searchkey"
              className="px-2 py-1 outline-none"
              type="text"
              placeholder="Search...."
              value={search}
              // onClick={() => {
              //   window.location.reload()
                
              // }}
              onChange={(e) => {
                var selectElement = document.getElementById('category_select');
                selectElement.options[0].selected = true;
                setCategory("");
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

        {  isloading ? (
          <div className="w-full h-[200px] grid place-items-center">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-3">
          {products.map((item) => (
            <div key={item._id}>
              <Card item={item} />
            </div>
          ))}
        </div>
        )}

        

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

      <Footer />
    </>
  );
}

export default Home;
