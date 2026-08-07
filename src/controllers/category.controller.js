import { categoryModel } from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.findAll();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { title, status } = req.body;
    const newCategory = await categoryModel.create({ title, status });
    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryModel.delete(id);
    res.status(200).json({
      success: true,
      data: deletedCategory,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
