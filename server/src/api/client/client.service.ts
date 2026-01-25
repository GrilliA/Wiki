import prisma from "../../helper/prisma";

export const getClientById = async (id: number) => {
  const client = await prisma.client.findUnique({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      comune: true,
      region: true,
      province: true,
      children: true,
      parent: true,
      facility: true,
      representative: true,
    },
  });
  return client;
};
export const getallClients = async () => {
  const client = await prisma.client.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      comune: true,
      region: true,
      province: true,
      children: true,
      parent: true,
      facility: true,
      representative: true,
    },
  });
  return client;
};
export const createClient = async (data: any) => {
  const client = await prisma.client.create({
    data,
  });
  return client;
};

export const updateClient = async (id: number, data: any) => {
  const client = await prisma.client.update({
    where: { id },
    data,
  });
  return client;
};

export const deleteClient = async (id: number) => {
  const client = await prisma.client.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return client;
};
