import prisma from "../../helper/prisma";

export const getThreadById = async (id: number) => {
  const thread = await prisma.thread.findUnique({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      comments: {
        where: {
          deletedAt: null,
        },
      },
      likes: {
        where: {
          deletedAt: null,
        },
        include: {
          user: true,
        },
      },
    },
  });
  return thread;
};
export const getallThreads = async () => {
  const thread = await prisma.thread.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      comments: true,
    },
  });
  return thread;
};
export const createThread = async (data: any) => {
  const thread = await prisma.thread.create({
    data,
  });
  return thread;
};

export const updateThread = async (id: number, data: any) => {
  const thread = await prisma.thread.update({
    where: { id },
    data,
  });
  return thread;
};

export const deleteThread = async (id: number) => {
  const thread = await prisma.thread.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return thread;
};
