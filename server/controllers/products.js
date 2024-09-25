import { productModel } from "../lib/models/productModel.js";

export const addProducts = async (req, res) => {
  try {
    const payload = req.body;

    const products = await productModel.create(payload);

    if (products) {
      return res.status(201).json({
        success: true,
        data: products,
        message: "Products Added/created Sucessfullly",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error, ${error}`,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.body.page);
    const limit = 6;
    let query = {};
    if (req.body.search) {
      const search = req.body.search;
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { brand: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ],
      };
    }
    const totalProductItems = await productModel.countDocuments(query);
    const totalpages = Math.ceil(totalProductItems / limit);
    const products = await productModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit);
    return res.status(200).json({
      success: true,
      products,
      totalpages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
