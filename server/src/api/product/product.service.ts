import prisma from "../../helper/prisma";

export const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
  return product;
};
export const getallProducts = async () => {
  const product = await prisma.product.findMany({
    where: {
      deletedAt: null,
    },
  });
  return product;
};
export const createProduct = async (data: any) => {
  const product = await prisma.product.create({
    data,
  });
  return product;
};

export const updateProduct = async (id: number, data: any) => {
  const product = await prisma.product.update({
    where: { id },
    data,
  });
  return product;
};

export const deleteProduct = async (id: number) => {
  const product = await prisma.product.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return product;
};
