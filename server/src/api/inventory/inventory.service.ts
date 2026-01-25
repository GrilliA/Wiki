import prisma from "../../helper/prisma";

export const getInventoryById = async (id: number) => {
  const inventory = await prisma.inventory.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
  return inventory;
};
export const getallInventorys = async () => {
  const inventory = await prisma.inventory.findMany({
    where: {
      deletedAt: null,
    },
  });
  return inventory;
};
export const createInventory = async (data: any) => {
  const inventory = await prisma.inventory.create({
    data,
  });
  return inventory;
};

export const updateInventory = async (id: number, data: any) => {
  const inventory = await prisma.inventory.update({
    where: { id },
    data,
  });
  return inventory;
};

export const deleteInventory = async (id: number) => {
  const inventory = await prisma.inventory.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return inventory;
};
