import prisma from "../../helper/prisma";

export const getGroupById = async (id: number) => {
  const group = await prisma.group.findUnique({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      options: true,
    },
  });
  return group;
};
export const getallGroups = async () => {
  const group = await prisma.group.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      options: true,
    },
  });
  return group;
};
export const createGroup = async (data: any) => {
  const group = await prisma.group.create({
    data,
  });
  return group;
};

export const updateGroup = async (id: number, data: any) => {
  const group = await prisma.group.update({
    where: { id },
    data,
  });
  return group;
};

export const deleteGroup = async (id: number) => {
  const group = await prisma.group.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return group;
};
