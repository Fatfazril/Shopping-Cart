const prisma = require("../../prisma/client");

exports.createProduct = (data) => {
  return prisma.product.create({ data });
};

exports.getProducts = () => {
  return prisma.product.findMany();
};

exports.getProductById = (id) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

exports.updateProduct = (id, data) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

exports.deleteProduct = (id) => {
  return prisma.product.delete({
    where: { id },
  });
};