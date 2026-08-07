import prisma from "../config/db.js";

export const productModel = {
  findAll: async () => {
    return await prisma.product.findMany();
  },
};
