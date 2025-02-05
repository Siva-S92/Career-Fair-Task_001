import React, { useState } from "react";
import {Modal} from 'antd'
import ProductDetail from "../pages/ProductDetail";

function Card({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      
        <div className="w-[20rem] h-[22rem] flex flex-col border border-gray-400 rounded-lg p-4" onClick={showModal}>
          <div className="w-full h-[50%]">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="w-full h-[50%] content-center">
            <h1 className="font-bold">{item.title}</h1>
            <p>{item.description.slice(0, 60)}....</p>
            <p>{item.rating}✡✡✡✡</p>
            <p>
              <span>price: </span>{" "}
              <span className="font-bold">{item.price}$</span>
            </p>
          </div>
        </div>
      

      <Modal title={item.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
        <ProductDetail id={item._id}/>
      </Modal>

    </>
  );
}

export default Card;
