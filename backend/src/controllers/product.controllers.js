const productService = require("../services/product.service");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    const product = await productService.createProduct({
      name,
      price,
      stock,
    });

    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json({
      status: "success",
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      message: "Product retrieved successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(
      req.params.id,
      req.body
    );

    res.json({
      status: "success",
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);

    res.json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};