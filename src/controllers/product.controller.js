import { productModel } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.findAll();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
