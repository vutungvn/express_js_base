import prisma from "../config/db.js";

export const categoryModel = {
  findAll: async () => {
    return await prisma.category.findMany();
  },

  create: async (data) => {
    return await prisma.category.create({
      data,
    });
  },

  delete: async (id) => {
    return await prisma.category.delete({
      where: { id: +id },
    });
  },
};
